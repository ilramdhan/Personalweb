import React, { createContext } from 'react';

import usePersistentState from './../hooks/PersistentState';
import { dark } from '../themes/Theme';

export const AppContext = createContext({
  isDark: Boolean,
  setIsDark: () => {},
});

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = usePersistentState('theme', true); // default: dark mode
  const theme = dark; // Fireworks are better in the dark

  const isMobile = window.matchMedia(
    '(max-device-width: 820px) and (-webkit-min-device-pixel-ratio: 2)'
  )?.matches;

  return (
    <AppContext.Provider value={{ isDark, setIsDark, theme, isMobile }}>
      {children}
    </AppContext.Provider>
  );
};
