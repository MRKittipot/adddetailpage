import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import styled from "styled-components";

export default function TableCustom(props) {
  const { data } = props;

  return (
    <TableContainerCustom>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell align="center">Description</TableCell>
            <TableCell align="center">Publish Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableCellCustom
              key={row.title}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.title}
              </TableCell>
              <TableCell>{row.description}</TableCell>
              <TableCell align="center">{row.publishDate}</TableCell>
            </TableCellCustom>
          ))}
        </TableBody>
      </Table>
    </TableContainerCustom>
  );
}

const TableContainerCustom = styled(TableContainer)`
  margin-top: 10px;
  display: flex;
  justify-content: center;
  > table {
    border: 1px solid #eeeeee;
    width: 80vw;
  }
  padding-bottom: 5rem;
`;

const TableCellCustom = styled(TableRow)`
  &:hover {
    background-color: #eeeeee;
    transition: all ease 0.1s;
  }

  cursor: pointer;

  > td:nth-child(1) {
    width: 20%;
  }

  > td:nth-child(2) {
    width: 60%;
  }

  > td:nth-child(3) {
    width: 20%;
  }
`;
