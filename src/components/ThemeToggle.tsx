import React from 'react';
import { useColorMode } from '@chakra-ui/react';
import { FiSun, FiMoon } from 'react-icons/fi';

const ThemeToggle: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  return (
    <button
      onClick={toggleColorMode}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        border: '1px solid #E2E8F0',
        background: 'transparent',
        cursor: 'pointer',
        color: isDark ? '#F6E05E' : '#4A5568',
        flexShrink: 0,
        transition: 'background 0.2s, color 0.2s',
      }}
      onMouseEnter={(e) => (e.currentTarget.style.background = '#EDF2F7')}
      onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
    >
      {isDark ? <FiSun size={18} /> : <FiMoon size={18} />}
    </button>
  );
};

export default ThemeToggle;
