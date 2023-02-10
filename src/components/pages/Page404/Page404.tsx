import * as React from "react";
import { m } from "framer-motion";
import { Link as RouterLink } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { Button, Typography, Container } from "@mui/material";

import Page from "../../parts/Page";
import { MotionContainer, varBounce } from "../../animate";
import { PageNotFoundIllustration } from "../../../assets";

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
      <Container component={MotionContainer}>
        <ContentStyle sx={{ textAlign: "center", alignItems: "center" }}>
          <m.div variants={varBounce().in}>
            <Typography variant="h3" paragraph>
              ไม่พบหน้าที่ต้องการ
            </Typography>
          </m.div>

          <m.div variants={varBounce().in}>
            <Typography sx={{ color: "text.secondary" }}>กรุณาตรวจสอบอีกครั้ง</Typography>
          </m.div>

          <m.div variants={varBounce().in}>
            <PageNotFoundIllustration sx={{ height: 260, my: { xs: 5, sm: 10 } }} />
          </m.div>

          <Button to="/" size="large" variant="contained" component={RouterLink}>
            กลับสู่หน้าหลัก
          </Button>
        </ContentStyle>
      </Container>
    </Page>
  );
};

export default Page404;
