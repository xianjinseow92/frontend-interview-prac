import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const NotFound = () => {
  return (
    <Container sx={{ height: "100%" }}>
      <Typography variant="h5">
        Bruh I don't think what you're looking for exists. You should probably
        head back to the home page.
      </Typography>
      <Typography variant="h6" sx={{mt:5}}>
        Just click on the Home Icon in the navbar above.
      </Typography>
    </Container>
  );
};

export default NotFound;
