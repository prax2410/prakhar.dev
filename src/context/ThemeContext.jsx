import React, { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export const COLOR_THEMES = [
  { id: 'slate', name: 'Minimalist Slate', color: '#3f3f46', desc: 'Monochrome & Clean' },
  { id: 'navy', name: 'Midnight Navy', color: '#0891b2', desc: 'IoT Telemetry & Automation' },
  { id: 'emerald', name: 'Obsidian Emerald', color: '#10b981', desc: 'System Architecture & Growth' },
  { id: 'violet', name: 'Royal Violet', color: '#8b5cf6', desc: 'UI/UX & Design-Dev Handoff' },
  { id: 'amber', name: 'Industrial Amber', color: '#f59e0b', desc: 'Industrial Engineering' }
];

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('prakhar_portfolio_theme');
    if (saved !== null) {
      return saved === 'dark';
    }
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  const [colorTheme, setColorTheme] = useState(() => {
    const savedColor = localStorage.getItem('prakhar_portfolio_color');
    if (savedColor === 'navy') {
      localStorage.setItem('prakhar_portfolio_color', 'slate');
      return 'slate';
    }
    return savedColor || 'slate';
  });

  // Listen for live OS dark/light mode switches if the user hasn't explicitly set a preference
  useEffect(() => {
    if (!window.matchMedia) return;
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleSystemChange = (e) => {
      const saved = localStorage.getItem('prakhar_portfolio_theme');
      if (saved === null) {
        setIsDark(e.matches);
      }
    };

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleSystemChange);
      return () => mediaQuery.removeEventListener('change', handleSystemChange);
    } else if (mediaQuery.addListener) {
      mediaQuery.addListener(handleSystemChange);
      return () => mediaQuery.removeListener(handleSystemChange);
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    
    // Manage dark class
    if (isDark) {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
    }

    // Manage color theme class
    COLOR_THEMES.forEach(t => root.classList.remove(`theme-${t.id}`));
    root.classList.add(`theme-${colorTheme}`);
    localStorage.setItem('prakhar_portfolio_color', colorTheme);

  }, [isDark, colorTheme]);

  const toggleTheme = () => {
    setIsDark(prev => {
      const next = !prev;
      localStorage.setItem('prakhar_portfolio_theme', next ? 'dark' : 'light');
      return next;
    });
  };

  const changeColorTheme = (themeId) => {
    setColorTheme(themeId);
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme, colorTheme, changeColorTheme, COLOR_THEMES }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
