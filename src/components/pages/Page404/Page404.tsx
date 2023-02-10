import * as React from "react";
import { m } from "framer-motion";
import { Link as RouterLink } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { Button, Typography, Container } from "@mui/material";

import Page from "../../parts/Page";

const ContentStyle = styled("div")(({ theme }) => ({
  maxWidth: 480,
  margin: "auto",
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  padding: theme.spacing(12, 0),
}));

// type Page404Props = {
//   //
// };

const Page404: React.FC<any> = () => {
  return (
    <Page title="404 Page Not Found">
      <Container>
        <ContentStyle>
          <Typography variant="h3" paragraph>
            ขออภัย, ไม่พบหน้าที่ต้องการ
          </Typography>

          <Typography sx={{ color: "text.secondary" }}>ไม่สามารถพบหน้าที่คุณค้นหา กรุณาตรวจสอบอีกครั้ง</Typography>

          <Button to="/" size="large" variant="contained" component={RouterLink}>
            กลับสู่หน้าหลัก
          </Button>
        </ContentStyle>
      </Container>
    </Page>
  );
};

export default Page404;
