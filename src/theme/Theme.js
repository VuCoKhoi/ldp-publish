import React from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import text from './text.theme';
import button from './button.theme';
import icon from './icon.theme';
import color from './color.theme';

const defaultTheme = createMuiTheme();

const theme = {
  ...defaultTheme,
  text,
  button,
  icon,
  color,
};

const Theming = props => <ThemeProvider theme={theme} {...props} />;

export default Theming;
