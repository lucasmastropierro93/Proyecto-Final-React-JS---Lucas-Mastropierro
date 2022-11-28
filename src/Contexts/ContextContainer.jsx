import React,{createContext, useState, useEffect} from 'react'



export const contextoGeneral = createContext();

const ContextContainer = ({children}) => {
  
    const [cartList, setCartList] = useState([]);
    const [totalAPagar, setTotalAPagar] = useState(0);
  


    const restarUno = (item) => {
      
        const carritoActualizado = cartList.map ((prod)=>{
          if(prod.id === item.id){
            return {...prod, quantity:prod.quantity -1}
          }else{
            return prod
          }
          
           
          
        }) 
        setCartList(carritoActualizado)
    }

    const addToCart = (item, newQuantity) => {  
     if (isInCart(item.id)){
      const carritoActualizado = cartList.map ((prod)=>{
        if(prod.id === item.id){
          return {...prod, quantity:prod.quantity + newQuantity}
        }else{
          return prod
        }
      })
      setCartList(carritoActualizado)
     }else{
      const purchase = {...item, quantity:newQuantity}
      setCartList([...cartList, purchase])
     }

    }
    
    const removeList = () => setCartList([]);
    
    const isInCart = (id) => {
      return cartList.find (product => product.id === id) ? true : false ;
    }
    
    const deleteItem = (id) => {
      
      setCartList(cartList.filter(product => product.id !==id)); 
     
      }

const totalPrice = () => {
  return cartList.reduce((prev, act) => prev + act.quantity * act.price, 0);
}

const totalProducts = () => {
    return cartList.reduce((acumulador, productoActual) => acumulador + productoActual.quantity, 0);
}

useEffect(()=> {

  setTotalAPagar(totalPrice)
    },[cartList]);

  return (
    <contextoGeneral.Provider value={{
      cartList, 
      addToCart, 
      removeList, 
      deleteItem, 
      isInCart,
      restarUno,
      totalPrice,
      totalProducts,
      totalAPagar
      }}>

        {children}
    </contextoGeneral.Provider>
  )
}

export default ContextContainer
