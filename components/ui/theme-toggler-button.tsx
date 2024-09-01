import React from 'react';

interface ThemeToggleButtonProps {
  onClick: () => void;
  ariaLabel: string;
  isDarkMode: boolean;
}

const ThemeToggleButton: React.FC<ThemeToggleButtonProps> = ({ onClick, ariaLabel, isDarkMode }) => {
  return (
    <button
      className="theme-toggle"
      id="theme-toggle"
      title="Toggles light & dark"
      aria-label={ariaLabel}
      aria-live="polite"
      onClick={onClick}
    >
      <svg className="theme-toggle__icon" aria-hidden="true" width="24" height="24" viewBox="0 0 24 24">
        <mask className="theme-toggle__icon-moon" id="moon-mask">
          <rect x="0" y="0" width="100%" height="100%" fill="white" />
          <circle cx="24" cy="10" r="6" fill="black" />
        </mask>
        <circle
          className="theme-toggle__icon-sun"
          cx="12"
          cy="12"
          r="6"
          mask="url(#moon-mask)"
          fill="currentColor"
        />
        <g className="theme-toggle__icon-beams" stroke="currentColor">
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </g>
      </svg>
    </button>
  );
};

export default ThemeToggleButton;