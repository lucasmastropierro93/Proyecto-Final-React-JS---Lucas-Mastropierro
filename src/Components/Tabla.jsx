import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import { useContext } from 'react'
import { contextoGeneral } from '../Contexts/ContextContainer'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));






export default function Tabla() {
    const {cartList, deleteItem, removeList, restarUno} = useContext(contextoGeneral)
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Cantidad</StyledTableCell>
            <StyledTableCell align="right">Articulo</StyledTableCell>
            <StyledTableCell align="right">Precio</StyledTableCell>
            <StyledTableCell align="right">Subtotal</StyledTableCell>
            <StyledTableCell align="right"><Button style={{background:'#FF0000', color:"white"}}onClick={removeList}>BORRAR TODO</Button></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cartList.map((item,index) => (
            <StyledTableRow key={index}>
              <StyledTableCell component="th" scope="row">{item.quantity}</StyledTableCell>
              <StyledTableCell align="right">{item.name}</StyledTableCell>
              <StyledTableCell align="right">{item.price}</StyledTableCell>
              <StyledTableCell align="right">{item.quantity * item.price}</StyledTableCell>
              <StyledTableCell align="right">
                <Button style={{background:'#FF0000', color:"white", marginLeft:"3px"}} onClick={()=>restarUno(item)}>-</Button>
                <Button style={{background:'#FF0000', color:"white", marginLeft:"3px"}} onClick={()=>deleteItem(item.id)}>x</Button>
                </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

