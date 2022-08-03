import Container from "@mui/material/Container";
import TopNavBar from "./Header";
import Box from "@mui/material/Box";

const PageLayout = ({ children }: { children: any }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        backgroundColor: "green",
      }}
    >
      <TopNavBar />
      <Container sx={{ padding: "16px" }}>{children}</Container>
    </Box>
  );
};

export default PageLayout;
