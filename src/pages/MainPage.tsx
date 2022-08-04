/**
 * Contains all buttons to navigate to Interview Questions that have been done
 */
import { interviewQuestionRoutes } from "routes/routes";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import map from "lodash/map";
import { IRoute } from "types/types";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const navigate = useNavigate();

  const renderInterviewQuestionContainer = (route: IRoute) => {
    return (
      <Grid
        item
        xs={6}
        md={4}
        key={route.path}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Button variant="outlined" onClick={() => navigate(route.path)}>
          {route.path}
        </Button>
      </Grid>
    );
  };
  return (
    <Grid container sx={{ backgroundColor: "green" }} spacing={2}>
      {map(interviewQuestionRoutes, renderInterviewQuestionContainer)}
    </Grid>
  );
};

export default MainPage;
