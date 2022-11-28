import React, { useState } from 'react'
import { useContext } from 'react'
import { contextoGeneral } from '../Contexts/ContextContainer'
import {getFirestore, collection, addDoc } from 'firebase/firestore';
import { Button, Input } from '@mui/material';

const Checkout = () => {

  const {cartList, totalAPagar, removeList} = useContext(contextoGeneral)
  const [nombre, setNombre] = useState("")
  const [tel, setTel] = useState("")
  const [email, setEmail] = useState("")
  const [orderId, setOrderId] = useState("")




  
  function handleClickBuyButton(){
   


    const pedido = {
      comprador: {nombre, tel, email},
      cartList,
      total: totalAPagar,
    };
    
    const db = getFirestore();
    const pedidos = collection(db, 'pedidos');


    addDoc(pedidos, pedido).then(({id})=>{
      setOrderId(id)
      removeList();
    });



  };

  
 
    
      
  return (
    <div>
      
      <div>
        
        {orderId ? "Gracias por confiar en nosotros. Tu id de compra es: " + orderId : (
        <>
        <h2>Completa el formulario con tus datos para confirmar la compra</h2>
        <Input placeholder='nombre' value={nombre} onChange={(e)=> setNombre(e.target.value)} sx={{marginLeft:"10px"}}/>
        <Input placeholder='tel'value={tel} onChange={(e)=> setTel(e.target.value)} sx={{marginLeft:"10px"}}/>
        <Input placeholder='email' value={email} onChange={(e)=> setEmail(e.target.value)} sx={{marginLeft:"10px"}}/>
        <Button onClick={handleClickBuyButton} variant="contained" style={{background:'#8E1F4C'}} sx={{marginLeft:"10px"}}>Comprar</Button>
        </>
        )}
        </div>
       
      
    </div>
  )
}

export default Checkout
