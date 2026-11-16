import React, { createContext, useContext, useState, useEffect } from "react";

const ViewModeContext = createContext({
	viewMode: "executive",
	setViewMode: () => {},
	isArchitectureLab: false,
});

export function ViewModeProvider({ children }) {
	const [viewMode, setViewMode] = useState(() => {
		try {
			const saved = localStorage.getItem("prakhar_view_mode");
			return saved === "architecture" ? "architecture" : "executive";
		} catch {
			return "executive";
		}
	});

	useEffect(() => {
		try {
			localStorage.setItem("prakhar_view_mode", viewMode);
		} catch {}
	}, [viewMode]);

	const isArchitectureLab = viewMode === "architecture";

	return (
		<ViewModeContext.Provider value={{ viewMode, setViewMode, isArchitectureLab }}>
			{children}
		</ViewModeContext.Provider>
	);
}

export function useViewMode() {
	return useContext(ViewModeContext);
}
