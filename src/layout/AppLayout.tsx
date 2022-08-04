import Container from "@mui/material/Container";
import TopNavBar from "./Header";
import Box from "@mui/material/Box";

const PageLayout = ({ children }: { children: any }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%"
      }}
    >
      <TopNavBar />
      <Container sx={{ padding: "16px", height: "100%" }}>{children}</Container>
    </Box>
  );
};

export default PageLayout;
