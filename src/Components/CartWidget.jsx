import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge } from '@mui/material';
import { useContext } from 'react';
import { contextoGeneral } from '../Contexts/ContextContainer';


const CartWidget = () =>{

    const {totalProducts} = useContext(contextoGeneral)
return(
    
    <Badge badgeContent={totalProducts()|| ""} color="success">
    <ShoppingCartIcon></ShoppingCartIcon> 
    </Badge>
    
);
}

 
 
 export default CartWidget;