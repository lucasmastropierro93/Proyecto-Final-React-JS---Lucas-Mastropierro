import React, { useState } from 'react'
import { useContext } from 'react'
import { contextoGeneral } from '../Contexts/ContextContainer'
import {getFirestore, collection, addDoc } from 'firebase/firestore';
import { Button, Input } from '@mui/material';

const Checkout = () => {

  const {cartList, totalAPagar, removeList} = useContext(contextoGeneral)
  const [nombre, setNombre] = useState({campo:"", valido: null})
  const [tel, setTel] = useState("")
  const [email, setEmail] = useState("")
  const [orderId, setOrderId] = useState("")
  const [error, setError] = useState(false)
  const expresiones = {
    usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    password: /^.{4,12}$/, // 4 a 12 digitos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,14}$/ // 7 a 14 numeros.
  }

const validacion = () => {
  if(expresiones){
    console.log("hola");
    if(expresiones.test(nombre.campo)){

      console.log("input correcto");
    
    }else{
      console.log("input incorrecto");
      
    }
  }
}
  
  function handleClickBuyButton(e){
   
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
        <form>
          <label>Nombre</label>
        <Input expresiones={expresiones.nombre} type='text' placeholder='nombre' value={nombre.campo} onChange={(e)=> setNombre({...nombre, campo: e.target.value})} onKeyUp={validacion} onBlur={validacion} sx={{marginLeft:"10px"}}/>
        <p>El nombre solo puede contener letras</p>
        </form>
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
