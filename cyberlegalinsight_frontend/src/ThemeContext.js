import React, { createContext, useContext, useState, useMemo, useEffect } from "react";

// PUBLIC_INTERFACE
const ThemeContext = createContext({
  theme: "dark",
  toggleTheme: () => {},
});

/**
 * ThemeProvider: Context provider for managing light/dark mode and exposing a toggle function.
 * Applies theme class to document.body.
 */
// PUBLIC_INTERFACE
export function ThemeProvider({ children, defaultTheme = "dark" }) {
  const [theme, setTheme] = useState(() =>
    localStorage.getItem("theme") || defaultTheme
  );

  // Persist theme and apply class to body
  useEffect(() => {
    document.body.classList.remove("theme-light", "theme-dark");
    document.body.classList.add(`theme-${theme}`);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // PUBLIC_INTERFACE
  const toggleTheme = () =>
    setTheme(theme === "light" ? "dark" : "light");

  const value = useMemo(
    () => ({ theme, toggleTheme }),
    [theme, toggleTheme]
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

// PUBLIC_INTERFACE
export function useTheme() {
  return useContext(ThemeContext);
}
