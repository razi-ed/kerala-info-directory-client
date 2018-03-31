import { DefaultTheme } from 'react-native-paper';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    primary: '#2DBD60',
    accent: '#f5f5f5',
    text: '#888',
    background: '#cccccc',
    paper: '#f5f5f5',
    disabled: '#477658',
    placeholder: '#477658',
  },
  fonts: {
    ...DefaultTheme.fonts,
  },
};

export default theme;
