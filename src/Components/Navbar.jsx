import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import MenuIcon from '@mui/icons-material/Menu';
import CartWidget from './CartWidget';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';


const drawerWidth = 240;

const pages= [
    {label:"Productos",link:"/"},
    {label:"Checkout", link:"/checkout"},
    {label:"Contacto", link:"/contacto"},
    
]
function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}style={{background:'#8E1F4C'}} >
      
      <Divider />
      <List >
        {pages.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}><Link to={item.link} style={{ color: '#FFF' }}>{item.label}
             </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component="nav" sx={{background:"#FFFFFF"}}>
        <Toolbar>
          <IconButton
            color="primary"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Link to="/"><img src="/assets/img/logo.jpg" alt="imagen logo" width={'80px'} height={'60px'}/></Link>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {pages.map((item) => (
              <Button key={item.label} sx={{marginLeft:"10px"}} variant="contained" style={{background:'#8E1F4C'}}  >
                <Link to={item.link} style={{ color: '#FFF' }}>{item.label}</Link>
                
              </Button>
            ))}
          </Box>
          <Button sx={{marginLeft:"auto"}} variant="contained" style={{background:'#8E1F4C'}}><Link to="/cart" style={{ color: '#FFF' }}><CartWidget/></Link></Button>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
        
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      
    </Box>
  );
}

Navbar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Navbar;

