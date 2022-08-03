import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import theme from "styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
    </ThemeProvider>
  );
}

export default App;
