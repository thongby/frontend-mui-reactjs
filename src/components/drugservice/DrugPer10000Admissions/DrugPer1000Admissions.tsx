import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import HPVCDrugPer10000AdmissionsByKhetChart from "../../charts/HPVCDrugPer10000AdmissionsByKhetChart";

type DrugPer1000AdmissionsProps = {
  //
};

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const DrugPer10000Admissions: React.FC<any> = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Item>จำนวนผู้ป่วยที่นอนโรงพยาบาลที่สัมพันธ์กับการใช้ยาต่อ 10000 admissions เฉลี่ยรายเขต</Item>
          <HPVCDrugPer10000AdmissionsByKhetChart />
        </Grid>
      </Grid>
    </Box>
  );
};

export default DrugPer10000Admissions;
