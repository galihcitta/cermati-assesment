import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App';
import { ThemeProvider } from 'styled-components'
import { theme } from './utils/theme'
import StylesTheme from './utils/stylesTheme'

ReactDOM.render(
    <ThemeProvider theme={theme}>
      <StylesTheme />
      <App />
    </ThemeProvider>,
  document.getElementById('root')
);
