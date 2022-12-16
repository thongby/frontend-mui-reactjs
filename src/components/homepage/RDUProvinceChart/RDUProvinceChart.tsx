/* import * as React from "react";

type RDUProvinceChartProps = {
  //
};

const RDUProvinceChart: React.FC<any> = () => {
  return <div>RDUProvinceChart</div>;
};

export default RDUProvinceChart; */

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
//mport CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
//import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import RDUAmphoePassChart from "../../charts/RDUAmphoePassChart";
import RDUProvincePassChart from "../../charts/RDUProvincePassChart";
import RDUGroceriesPassChart from "../../charts/RDUGroceriesPassChart";

export default function RDUProvinceChart() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                กราฟแสดงจำนวนจังหวัดผ่านเกณฑ์
              </Typography>
              <RDUProvincePassChart />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                กราฟแสดงจำนวนอำเภอผ่านเกณฑ์
              </Typography>
              <RDUAmphoePassChart />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                กราฟแสดงจำนวนร้านชำคุณภาพผ่านเกณฑ์
              </Typography>
              <RDUGroceriesPassChart />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

//export default SummaryCard;
