import React from "react";

// PUBLIC_INTERFACE
/**
 * RadarChart (placeholder)
 * Radar/spider chart stub for visualizing analytics.
 */
function RadarChart({ data = [] }) {
  return (
    <div
      style={{
        width: 280,
        height: 220,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "var(--surface)",
        borderRadius: "16px",
        boxShadow: "0 0 24px -12px var(--primary)",
        border: "1.5px dashed var(--accent)",
      }}
    >
      <span style={{ color: "var(--text-secondary)", fontStyle: "italic", fontSize: 18 }}>
        Radar Chart will appear here
      </span>
    </div>
  );
}

export default RadarChart;
