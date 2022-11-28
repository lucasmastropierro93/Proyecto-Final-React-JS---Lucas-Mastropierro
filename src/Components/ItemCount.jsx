import { Button } from '@mui/material';
import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';
 
const ItemCount = ({stock,initial, onAdd}) => {
const [numero,setNumero] = useState(initial)
 
function sumar(){
    if (numero < stock) {
        setNumero( numero + 1);
    }
    }
 
 
function restar(){
    if (numero > 1){
        setNumero(numero - 1);
    }
}
 
  return (
    <section>
   
 
    <Button onClick={sumar} variant="contained" style={{background:'#8E1F4C'}}>+</Button>
    <h2>{numero}</h2>
    <Button onClick={restar} variant="contained" style={{background:'#8E1F4C'}}>-</Button>
    <h6>stock disponible:{stock}</h6>
    <div style={{padding:"3px"}}>
    <Button variant="contained" style={{background:'#8E1F4C'}} onClick={()=> onAdd(numero)}>Agregar al carrito</Button>
    </div>
    <div style={{padding:"3px"}}>
    <Button variant="contained" style={{background:'#8E1F4C'}}><Link to="/" style={{ color: '#FFF' }}>Seguir Comprando</Link></Button>
    </div>
    <div style={{padding:"3px"}}>
    <Button variant="contained" style={{background:'#8E1F4C'}}><Link to="/checkout" style={{ color: '#FFF' }}>Terminar compra</Link></Button>
    </div>
    </section>
 
  )
}
 
export default ItemCount