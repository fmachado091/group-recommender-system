import { createMuiTheme } from 'material-ui/styles';
import purple from 'material-ui/colors/purple';
import green from 'material-ui/colors/green';
import red from 'material-ui/colors/red';

export default createMuiTheme({
  palette: {
    primary: green, 
    secondary: purple,
    error: red,
  },
});