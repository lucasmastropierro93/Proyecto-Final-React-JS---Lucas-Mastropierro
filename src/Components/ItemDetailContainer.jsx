import { SnackbarContent, Box, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { doc, getDoc, getFirestore } from 'firebase/firestore';




const ItemListContainer = () => {

  const { iditem } = useParams();

    const [product,setProduct] =useState({});
   


  useEffect(()=> {
const db = getFirestore();
let docSinNombre = doc(db, 'productos', iditem)

getDoc(docSinNombre).then((item)=>{
  setProduct({ id: item.id, ...item.data() });
});
    /*const productoPromise = new Promise((res, rej)=>{
      setTimeout(() => {
          res(productsHC.find((item)=> item.id == iditem));
      }, 2000);
  });



  productoPromise.then((res)=> setProduct(res));*/


  },[iditem]);


  return (
    <div>
        {product.id ?(
            <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3}>
        
        
          
          <ItemDetail product={product}/>
          
        </Grid>
      </Box>
        ):<SnackbarContent message="Cargando..." sx={{width:"100px"}}></SnackbarContent>
        }
         
        
       
    </div>
  )
}

export default ItemListContainer
