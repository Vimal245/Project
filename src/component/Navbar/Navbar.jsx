import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../Navbar/logo.png'; 
import profileLogo from '../Navbar/profile.png'; // Make sure to import your profile logo

export default function ButtonAppBar() {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ bgcolor: '#ffb2e6', color: '#9a52ff' }}>
        <Toolbar>
          <img src={logo} alt="Logo" style={{ width: 60, height: 60, marginRight: 16 }} />
          <Typography variant="h4" component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
            QuickBox
          </Typography>
          <Button component={Link} to="/home" color="inherit" sx={{ fontWeight: 'bold', fontSize: '15px' }}>Home</Button>
          <Button component={Link} to="/productlist" color="inherit" sx={{ fontWeight: 'bold', fontSize: '15px' }}>Shop</Button>
          <Button 
            color="inherit" 
            sx={{ fontWeight: 'bold', fontSize: '15px' }}
            onClick={() => scrollToSection('about-us')}
          >
            About
          </Button>
          <Button 
            color="inherit" 
            sx={{ fontWeight: 'bold', fontSize: '15px' }}
            onClick={() => scrollToSection('contact-us')}
          >
            Contact Us
          </Button>
          <img 
            src={profileLogo} 
            alt="Profile Logo" 
            style={{ width: 80, height: 80, borderRadius: '50%', cursor: 'pointer' }} 
            onClick={() => navigate('/')} // Add onClick handler to navigate to login page
          />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
