import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import HomeIcon from "@mui/icons-material/Home";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import routes, { paths } from "routes/routes";
import find from "lodash/find";
import get from "lodash/get";
import { useNavigate } from "react-router-dom";

const TopNavBar = () => {
  const navigate = useNavigate();
  const homePage: string = get(find(routes, {path: paths.HOME}), "path", "");

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          onClick={() => {
            navigate(homePage);
          }}
        >
          <HomeIcon />
        </IconButton>
        <Typography variant="h6">Frontend Interview Questions</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default TopNavBar;
