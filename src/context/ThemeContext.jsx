import React, { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const COLOR_THEMES = [
	{
		id: "apple",
		name: "Apple Editorial",
		color: "#0071e3",
		desc: "Apple Blue & Minimal Monochrome",
	},
];

function safeReadStorage(key) {
	try {
		return localStorage.getItem(key);
	} catch {
		return null;
	}
}

function safeWriteStorage(key, value) {
	try {
		localStorage.setItem(key, value);
	} catch {
		// Ignore storage quota or restricted privacy mode errors
	}
}

function safeRemoveStorage(key) {
	try {
		localStorage.removeItem(key);
	} catch {
		// Ignore errors
	}
}

export function ThemeProvider({ children }) {
	// If not already set in localStorage, detect and use the system UI preference
	const [isExplicit, setIsExplicit] = useState(
		() => safeReadStorage("prakhar_portfolio_theme") !== null,
	);

	const [isDark, setIsDark] = useState(() => {
		const saved = safeReadStorage("prakhar_portfolio_theme");
		if (saved !== null) {
			return saved === "dark";
		}
		// Default to system UI preference (prefers-color-scheme)
		return (
			typeof window !== "undefined" &&
			window.matchMedia &&
			window.matchMedia("(prefers-color-scheme: dark)").matches
		);
	});

	const [colorTheme, setColorTheme] = useState(() => {
		safeWriteStorage("prakhar_portfolio_color", "apple");
		return "apple";
	});

	// Listen for live system theme changes if no manual preference is set
	useEffect(() => {
		if (!window.matchMedia) return;
		const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

		const handleSystemChange = (e) => {
			// Only auto-update if the user has not explicitly set a manual preference
			if (safeReadStorage("prakhar_portfolio_theme") === null) {
				setIsDark(e.matches);
			}
		};

		if (mediaQuery.addEventListener) {
			mediaQuery.addEventListener("change", handleSystemChange);
			return () =>
				mediaQuery.removeEventListener("change", handleSystemChange);
		} else if (mediaQuery.addListener) {
			mediaQuery.addListener(handleSystemChange);
			return () => mediaQuery.removeListener(handleSystemChange);
		}
	}, []);

	// Synchronize DOM root class and meta theme-color
	useEffect(() => {
		const root = document.documentElement;
		if (isDark) {
			root.classList.add("dark");
			root.classList.remove("light");
		} else {
			root.classList.remove("dark");
			root.classList.add("light");
		}

		COLOR_THEMES.forEach((t) => root.classList.remove(`theme-${t.id}`));
		root.classList.add(`theme-${colorTheme}`);
		safeWriteStorage("prakhar_portfolio_color", colorTheme);

		const metaTheme = document.querySelector('meta[name="theme-color"]');
		if (metaTheme) {
			metaTheme.setAttribute("content", isDark ? "#000000" : "#ffffff");
		}
	}, [isDark, colorTheme]);

	// Toggle button action: switches between Light and Dark and stores choice
	const toggleTheme = () => {
		setIsDark((prev) => {
			const next = !prev;
			safeWriteStorage(
				"prakhar_portfolio_theme",
				next ? "dark" : "light",
			);
			setIsExplicit(true);
			return next;
		});
	};

	// Option to reset back to automatic system preference
	const resetToSystem = () => {
		safeRemoveStorage("prakhar_portfolio_theme");
		setIsExplicit(false);
		if (typeof window !== "undefined" && window.matchMedia) {
			setIsDark(
				window.matchMedia("(prefers-color-scheme: dark)").matches,
			);
		}
	};

	return (
		<ThemeContext.Provider
			value={{
				isDark,
				toggleTheme,
				isExplicit,
				resetToSystem,
				colorTheme,
				changeColorTheme: setColorTheme,
				COLOR_THEMES,
			}}
		>
			{children}
		</ThemeContext.Provider>
	);
}

export function useTheme() {
	const context = useContext(ThemeContext);
	if (!context) {
		throw new Error("useTheme must be used within a ThemeProvider");
	}
	return context;
}
