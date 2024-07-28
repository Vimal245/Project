import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import logo from '../Navbar/logo.png'; 

export default function ButtonAppBar() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ bgcolor: '#ffb2e6', color: '#9a52ff' }}>
        <Toolbar>
          <img src={logo} alt="Logo" style={{ width: 40, height: 40, marginRight: 16 }} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
            QuickBox
          </Typography>
          <Button color="inherit" sx={{ fontWeight: 'bold' }}>Home</Button>
          <Button color="inherit" sx={{ fontWeight: 'bold' }}>Shop</Button>
          <Button 
            color="inherit" 
            sx={{ fontWeight: 'bold' }}
            onClick={() => scrollToSection('about-us')}
          >
            About
          </Button>
          <Button color="inherit" sx={{ fontWeight: 'bold' }}>Contact Us</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
