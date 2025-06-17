import React from "react";
import { useTheme } from "../ThemeContext";
import UIIcons from "./UIIcons";

// PUBLIC_INTERFACE
/**
 * ThemeToggle
 * A round icon button to switch between light/dark theme.
 */
function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      className="theme-toggle"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
      title={"Toggle theme"}
      onClick={toggleTheme}
    >
      {theme === "dark" ? <UIIcons.Moon /> : <UIIcons.Sun />}
    </button>
  );
}

export default ThemeToggle;
