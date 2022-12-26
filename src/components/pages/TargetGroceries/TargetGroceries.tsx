import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import RDUProvinceMap from "../../homepage/RDUProvinceMap";

function createData(name: string, calories: string, fat: string, carbs: string, protein: string) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("A", "xx", "xx", "xx", "xx"),
  createData("B", "xx", "xx", "xx", "xx"),
  createData("C", "xx", "xx", "xx", "xx"),
  createData("D", "xx", "xx", "xx", "xx"),
  createData("E", "xx", "xx", "xx", "xx"),
];

export default function TargetGroceries() {
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>สถานที่</TableCell>
              <TableCell align="right">ที่อยู่</TableCell>
              <TableCell align="right">ตำบล</TableCell>
              <TableCell align="right">อำเภอ</TableCell>
              <TableCell align="right">จังหวัด</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
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
