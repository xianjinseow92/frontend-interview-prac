import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import theme from "styles/theme";
import routes, { fallBackRoutes } from "routes/routes";
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
          {/* No match route. Routes to this page when no routes match at all */}
          <Route path="*" element={fallBackRoutes[0].component}/>
        </Routes>
      </AppLayout>
    </ThemeProvider>
  );
}

export default App;
