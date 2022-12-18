import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
//mport CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
//import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";

export default function SummaryCard() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                จำนวนจังหวัดผ่านเกณฑ์
              </Typography>
              <Typography variant="h5" component="div">
                25 / 77
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">ดูรายละเอียด</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                จำนวนอำเภอผ่านเกณฑ์
              </Typography>
              <Typography variant="h5" component="div">
                200 / 878
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">ดูรายละเอียด</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                จำนวนร้านชำคุณภาพผ่านเกณฑ์
              </Typography>
              <Typography variant="h5" component="div">
                2500 / 82500
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">ดูรายละเอียด</Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

//export default SummaryCard;
