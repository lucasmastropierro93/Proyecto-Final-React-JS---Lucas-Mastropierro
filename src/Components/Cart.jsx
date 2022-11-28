import React from 'react'
import { useContext } from 'react'
import { contextoGeneral } from '../Contexts/ContextContainer'
import Tabla from './Tabla'
import { Link } from 'react-router-dom';
import { Button, SnackbarContent } from '@mui/material';
const Cart = () => {

    const {totalPrice, cartList} =useContext(contextoGeneral)

    const messageConditional = (
      <div>
        <div style={{padding:"10px"}}>Ops!</div>
        <div>
          <SnackbarContent message="¡Tu carrito está vacío!" style={{width:"100px",}}></SnackbarContent>
          <p style={{padding:"10px"}}>
            ¿No sabés qué comprar? ¡Miles de productos te esperan!
          </p>
          <Link to="/"><Button variant="contained" style={{background:'#8E1F4C'}}>
            Ir a comprar
            </Button></Link>
        </div>
        
      </div>
    );

  return (

    <div>
       {cartList.length === 0 ? (messageConditional) : (
        <div>
              <Tabla/>
              <h4>Resúmen</h4>
              <h5>Total: ${totalPrice()}</h5>
              <Button variant="contained" style={{background:'#8E1F4C'}}><Link to="/checkout" style={{ color: '#FFF' }}>Ir a pagar</Link></Button>
        </div>
       )}
      
    </div>
  )
}

export default Cart;
