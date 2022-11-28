import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import {getFirestore, collection, getDocs } from 'firebase/firestore';



const ItemListContainer = () => {

  const { idcategory } = useParams();
    const [products,setProducts] =useState([]);
    

  useEffect(()=> {
const db = getFirestore();
const productos = collection(db, 'productos');

getDocs(productos).then((res)=> {
  
  const arrayNorm = res.docs.map((element)=>{
    return { id: element.id, name: element.data().name, category: element.data().category, price: element.data().price, rating: element.data().rating, image: element.data().image, description: element.data().description }
  })
  
  
  setProducts(arrayNorm)});

  


  },[idcategory]);


  return (
    <div>
      
      <ItemList products={products}/>
    </div>
  )
}

export default ItemListContainer
