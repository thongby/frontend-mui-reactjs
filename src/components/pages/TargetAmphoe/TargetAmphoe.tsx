/* import * as React from "react";

type TargetAmphoeProps = {
  //
};

const TargetAmphoe: React.FC<any> = () => {
  return <div>TargetAmphoe</div>;
};

export default TargetAmphoe; */

import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import RDUProvinceMap from '../../homepage/RDUProvinceMap';

function createData(
  name: string,
  calories: string,
  fat: string,
  carbs: string,
  protein: string,
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('A', 'ผ่าน', 'ผ่าน', 'ผ่าน', 'ผ่าน'),
  createData('B', 'ผ่าน', 'ผ่าน', 'ผ่าน', 'ผ่าน'),
  createData('C', 'ผ่าน', 'ผ่าน', 'ผ่าน', 'ผ่าน'),
  createData('D', 'ผ่าน', 'ผ่าน', 'ผ่าน', 'ผ่าน'),
  createData('E', 'ผ่าน', 'ผ่าน', 'ผ่าน', 'ผ่าน'),
];

export default function TargetAmphoe() {
  return (
    <>
    <RDUProvinceMap/>
    <br/>
    <h2>อำเภอเป้าหมาย</h2>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>อำเภอ</TableCell>
            <TableCell align="right">ตัวชี้วัดโรงพยาบาล</TableCell>
            <TableCell align="right">ตัวชี้วัดรพ.สต.</TableCell>
            <TableCell align="right">ตัวชี้วัดร้านชำ</TableCell>
            <TableCell align="right">อำเภอRDU</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}

