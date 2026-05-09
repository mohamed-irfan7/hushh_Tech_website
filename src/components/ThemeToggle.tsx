import React, { useState, useEffect } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';

const STORAGE_KEY = 'hushh-color-mode';

const ThemeToggle: React.FC = () => {
  const [isDark, setIsDark] = useState(() => {
    try {
      return localStorage.getItem(STORAGE_KEY) === 'dark';
    } catch {
      return false;
    }
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.setAttribute('data-theme', 'dark');
      root.classList.add('chakra-ui-dark');
      root.classList.remove('chakra-ui-light');
      localStorage.setItem(STORAGE_KEY, 'dark');
    } else {
      root.setAttribute('data-theme', 'light');
      root.classList.add('chakra-ui-light');
      root.classList.remove('chakra-ui-dark');
      localStorage.setItem(STORAGE_KEY, 'light');
    }
  }, [isDark]);

  const toggle = () => setIsDark((prev) => !prev);

  return (
    <button
      id="theme-toggle-btn"
      onClick={toggle}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '40px',
        height: '40px',
        minWidth: '40px',
        borderRadius: '50%',
        border: '1px solid #CBD5E0',
        background: 'white',
        cursor: 'pointer',
        color: isDark ? '#F6E05E' : '#4A5568',
        flexShrink: 0,
        transition: 'background 0.2s, color 0.2s',
        zIndex: 10,
      }}
    >
      {isDark ? <FiSun size={18} /> : <FiMoon size={18} />}
    </button>
  );
};

export default ThemeToggle;
