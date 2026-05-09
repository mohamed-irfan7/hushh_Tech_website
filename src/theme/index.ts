import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  fonts: {
    heading: `"DM Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`,
    body: `"DM Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`,
  },
});

export default theme;
