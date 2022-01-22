import { createMuiTheme } from "@material-ui/core/styles";
import { pink, cyan } from "@material-ui/core/colors";

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: pink,
    secondary: cyan,
  },
});

export default theme;
