import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import theme from "styles/theme";
import routes from "routes/routes";
import AppLayout from "layout/AppLayout"; // contains header that does navigation back to main page
import { Routes, Route } from "react-router-dom";
import map from "lodash/map";
import { IRoute } from "types/types";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />

      <AppLayout>
        <Routes>
          {map(routes, (route: IRoute) => {
            return <Route path={route.path} element={route.component} key={route.path}/>;
          })}
        </Routes>
      </AppLayout>
    </ThemeProvider>
  );
}

export default App;
