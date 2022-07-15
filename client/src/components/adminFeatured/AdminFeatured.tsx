import { Bottom, Container, H1, Top } from "./AdminFeatured.styles";

import MoreVertIcon from "@mui/icons-material/MoreVert";

const AdminFeatured = () => {
  return (
    <Container>
      <Top>
        <H1>Total Revenue</H1>
        <MoreVertIcon fontSize="medium" />
      </Top>
      <Bottom></Bottom>
    </Container>
  );
};

export default AdminFeatured;
