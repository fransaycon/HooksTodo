import React from 'react';

export const themes = {
  dark: {
    container: 'DarkTheme-container',
    button: 'DarkTheme-button',
  },
  light: {
    container: 'LightTheme-container',
    button: 'LightTheme-button',
  },
};

export const ThemeContext = React.createContext(
  themes.light
);
