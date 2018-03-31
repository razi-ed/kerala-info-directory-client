import React from 'react';
import { Provider as ThemeProvider } from 'react-native-paper';

import Application from './app/index';
import Theme from './app/config/theme';

export default function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Application />
    </ThemeProvider>
  );
}
