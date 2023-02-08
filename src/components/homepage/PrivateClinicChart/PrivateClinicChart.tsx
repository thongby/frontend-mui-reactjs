import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import RDUPrivateHosPassChart from '../../charts/RDUPrivateHosPassChart';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

type PrivateClinicChartProps = {
  //
};

const PrivateClinicChart: React.FC<any> = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Item>ข้อมูลคลินิกเอกชน</Item>
          <RDUPrivateHosPassChart/>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PrivateClinicChart;