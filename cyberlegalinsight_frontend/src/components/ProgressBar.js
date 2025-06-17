import React from "react";
import "./ProgressBar.css";

// PUBLIC_INTERFACE
/**
 * ProgressBar
 * Shows a horizontal progress indicator.
 * @param {number} percent - Completion percent (0-100)
 */
function ProgressBar({ percent = 0 }) {
  return (
    <div className="progress-bar-outer" aria-label={`Progress: ${percent}%`}>
      <div className="progress-bar-inner" style={{ width: percent + "%" }} />
    </div>
  );
}

export default ProgressBar;
