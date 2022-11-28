import { AppBar, Button,  Toolbar, Typography} from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';



const Navbar = () => {
   
    const pages= [
        {label:"Productos",link:"/"},
        {label:"Checkout", link:"/checkout"},
        {label:"Contacto", link:"/contacto"},
        
    ]
    return(
<AppBar sx={{background:"#FFFFFF"}}>
    <Toolbar>
        <Link to="/"><img src="/assets/img/logo.jpg" alt="imagen logo" width={'80px'} height={'60px'}/></Link>
        <Typography>SHOP</Typography>
        
      
        {pages.map((page) => (
              <Button key={page.label} sx={{marginLeft:"10px"}} variant="contained" style={{background:'#8E1F4C'}}>
                <Link to={page.link} style={{ color: '#FFF' }}>{page.label}</Link>
              </Button  >
            ))}
        

        <Button sx={{marginLeft:"auto"}} variant="contained" style={{background:'#8E1F4C'}}>Iniciar sesion</Button>
        <Button sx={{marginLeft:"10px"}} variant="contained" style={{background:'#8E1F4C'}}>Registrarse</Button>
        <Button sx={{marginLeft:"10px"}} variant="contained" style={{background:'#8E1F4C'}}><Link to="/cart" style={{ color: '#FFF' }}><CartWidget/></Link></Button>
    </Toolbar>
</AppBar>
    );
};

export default Navbar;

