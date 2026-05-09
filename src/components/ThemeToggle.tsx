import React from 'react';
import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { FiSun, FiMoon } from 'react-icons/fi';

const ThemeToggle: React.FC = () => {
  const { toggleColorMode } = useColorMode();
  // We use useColorModeValue to dynamically switch the icon
  // In light mode, it shows the Moon (to switch to dark)
  // In dark mode, it shows the Sun (to switch to light)
  const Icon = useColorModeValue(FiMoon, FiSun);
  const ariaLabel = useColorModeValue('Switch to dark mode', 'Switch to light mode');

  return (
    <IconButton
      aria-label={ariaLabel}
      icon={<Icon size={20} />}
      onClick={toggleColorMode}
      variant="ghost"
      colorScheme="gray"
      borderRadius="full"
      size="md"
    />
  );
};

export default ThemeToggle;
