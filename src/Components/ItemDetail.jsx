import { Grid} from '@mui/material';
import React, {useState} from 'react';
import { contextoGeneral } from '../Contexts/ContextContainer';


import ItemCount from './ItemCount';





export default function ItemDetail ({product}) {
  
const [goToCart,setGoToCart] = useState(false);
const {addToCart} = React.useContext(contextoGeneral) 

function onAdd (quantity){
setGoToCart(true);
addToCart(product,quantity);
}


  return (
   <Grid container spacing={2}>
    <Grid item lg={6}>
      <img src={product.image} alt="imagen detalle producto" height={"500px"} width={"600px"}/>
    </Grid>
    <Grid item lg={6}>
      <h2>{product.name}</h2>
      <h3>{product.category}</h3>
      <p>{product.description}</p>
      <h2>${product.price}</h2>
      <ItemCount stock={10} initial={1} onAdd={onAdd}/>
        
    </Grid>
    
      
   </Grid>
    
  );
}