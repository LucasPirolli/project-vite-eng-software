import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function TableData() {
    const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 15,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(uf, code) {
  return {uf, code};
}

const rows = [
  createData('Acre', 12),
  createData('Alagoas', 27),
  createData('Amapá', 16),
  createData('Amazonas', 13),
  createData('Bahia', 29),
  createData('Ceará', 23),
  createData('Destrito Federal', 53),
  createData('Espírito Santo', 32),
  createData('Goiás', 52),
  createData('Maranhão', 21),
  createData('Mato Grosso', 51),
  createData('Mato Grosso do Sul', 50),
  createData('Minas Gerais', 31),
  createData('Pará', 15),
  createData('Paraíba', 25),
  createData('Paraná', 41),
  createData('Pernambuco', 26),
  createData('Piauí', 22),
  createData('Rio Grande do Norte', 24),
  createData('Rio Grande do Sul', 43),
  createData('Rio de Janeiro', 33),
  createData('Rondônia', 11),
  createData('Roraima', 14),
  createData('Santa Catarina', 42),
  createData('São Paulo', 35),
  createData('Sergipe', 38),
  createData('Tocantins', 17),
];

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="right">UFs</StyledTableCell>
            <StyledTableCell align="right">Códigos</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.code}>
              <StyledTableCell align="right">{row.uf}</StyledTableCell>
              <StyledTableCell align="right">{row.code}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TableData;
