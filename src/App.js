import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Checkout from './Components/Checkout';
import Contacto from './Components/Contacto';
import ItemListContainer from './Components/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer';
import Navbar from './Components/Navbar';
import ContextContainer from './Contexts/ContextContainer';
import Cart from './Components/Cart';


function App() {
  return (
    <ContextContainer>

    
    <BrowserRouter>
    <div className='App'>
      <header className='App-header'>
          <Navbar/>
      </header>
      <Routes>

        <Route path='/' element={<main className='App-main'><ItemListContainer/></main>}/>
        <Route path='/contacto' element={<main className='App-main'><Contacto/></main>}/>
        <Route path='/checkout' element={<main className='App-main'><Checkout/></main>}/>
        <Route path='/cart' element={<main className='App-main'><Cart/></main>}/>

        <Route path='/item/:iditem' element={<main className='App-main'><ItemDetailContainer/></main>}/>
        <Route path='/category/:idcategory' element={<main className='App-main'><ItemListContainer/></main>}/>  
      </Routes>
      
      <footer>

      </footer>
    </div>
    </BrowserRouter>
    </ContextContainer>
  );
}

export default App;