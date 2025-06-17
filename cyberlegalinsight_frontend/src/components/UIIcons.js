import React from "react";

// PUBLIC_INTERFACE
/**
 * UIIcons - Set of SVG React icons for navigation and UI elements.
 */
const UIIcons = {
  // PUBLIC_INTERFACE
  LogoSymbol: (props) => (
    <svg
      width={22}
      height={22}
      fill="none"
      viewBox="0 0 22 22"
      {...props}
      aria-hidden="true"
    >
      <circle cx="11" cy="11" r="10" fill="var(--accent)" />
      <rect
        x="7"
        y="7"
        width="8"
        height="8"
        rx="2"
        fill="var(--primary)"
        stroke="#FFF"
        strokeWidth="1.2"
      />
    </svg>
  ),
  // PUBLIC_INTERFACE
  Sun: (props) => (
    <svg
      width={20}
      height={20}
      fill="none"
      viewBox="0 0 20 20"
      {...props}
      aria-hidden="true"
    >
      <circle cx="10" cy="10" r="4.5" stroke="currentColor" strokeWidth="2"/>
      <g stroke="currentColor" strokeWidth="1.5">
        <line x1="10" y1="1.5" x2="10" y2="4"/>
        <line x1="10" y1="16" x2="10" y2="18.5"/>
        <line x1="1.5" y1="10" x2="4" y2="10"/>
        <line x1="16" y1="10" x2="18.5" y2="10"/>
        <line x1="4.5" y1="4.5" x2="6" y2="6"/>
        <line x1="16" y1="16" x2="14" y2="14"/>
        <line x1="4.5" y1="15.5" x2="6" y2="14"/>
        <line x1="14" y1="6" x2="15.5" y2="4.5"/>
      </g>
    </svg>
  ),
  // PUBLIC_INTERFACE
  Moon: (props) => (
    <svg width={20} height={20} fill="none" viewBox="0 0 20 20" {...props} aria-hidden="true">
      <path
        d="M16.45 13.64c-1.69.5-3.59.13-4.94-1.23-1.35-1.36-1.73-3.25-1.23-4.94a.5.5 0 0 0-.61-.61A7 7 0 1020 10.5a.5.5 0 0 0-.61-.61c-1.52.46-3.17.24-4.31-.63-1.1-.84-1.98-2.12-2.23-3.55a.5.5 0 0 0-.61-.61C5.65 3.53 2.5 6.4 2.5 10A7.5 7.5 0 0010 17.5c3.6 0 6.47-3.15 5.2-6.37a.5.5 0 0 0-.75-.33z"
        fill="currentColor"
      />
    </svg>
  ),
  // PUBLIC_INTERFACE
  ChatBubble: (props) => (
    <svg
      width={22}
      height={22}
      viewBox="0 0 22 22"
      fill="none"
      {...props}
      aria-hidden="true"
    >
      <rect x="2" y="4" width="18" height="12" rx="4" stroke="currentColor" strokeWidth="2"/>
      <path d="M6 18v-2a2 2 0 012-2h6a2 2 0 012 2v2" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  ),
  // PUBLIC_INTERFACE
  Close: (props) => (
    <svg width={20} height={20} viewBox="0 0 20 20" {...props} aria-hidden="true">
      <line x1="4" y1="4" x2="16" y2="16" stroke="currentColor" strokeWidth="2"/>
      <line x1="16" y1="4" x2="4" y2="16" stroke="currentColor" strokeWidth="2"/>
    </svg>
  ),
  // PUBLIC_INTERFACE
  AssistantAvatar: (props) => (
    <svg width={22} height={22} fill="none" viewBox="0 0 22 22" {...props} aria-hidden="true">
      <circle cx="11" cy="10" r="5" fill="var(--primary)" />
      <ellipse cx="11" cy="18" rx="5" ry="1.5" fill="var(--secondary)" opacity="0.5"/>
    </svg>
  ),
  // PUBLIC_INTERFACE
  Send: (props) => (
    <svg width={18} height={18} fill="none" viewBox="0 0 18 18" {...props} aria-hidden="true">
      <path d="M2 16l14-7-14-7v6l10 1-10 1v6z" fill="var(--primary)" stroke="var(--primary)" strokeWidth="1"/>
    </svg>
  ),
};

export default UIIcons;
