import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../Navbar/logo.png'; 
import profileLogo from '../Navbar/profile.png'; // Make sure to import your profile logo
import HomeIcon from '@mui/icons-material/Home';
import CategoryIcon from '@mui/icons-material/Category';
import InfoIcon from '@mui/icons-material/Info';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet'; // Wallet icon

export default function ButtonAppBar() {
  const navigate = useNavigate(); // Initialize the useNavigate hook
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ bgcolor: '#F5EDED', color: '#6482AD' }}>
        <Toolbar>
          <img src={logo} alt="Logo" style={{ width: 60, height: 60, marginRight: 16 }} />
          <Typography variant="h4" component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
            QuickBox
          </Typography>
          
          <Tooltip title="Home" arrow>
            <Button 
              component={Link} 
              to="/home" 
              color="inherit" 
              sx={{ fontWeight: 'bold', fontSize: '15px', display: 'flex', alignItems: 'center' }}
            >
              <HomeIcon sx={{ mr: 1 }} />
            </Button>
          </Tooltip>
          
          <Tooltip title="Category" arrow>
            <Button 
              component={Link} 
              to="/productlist" 
              color="inherit" 
              sx={{ fontWeight: 'bold', fontSize: '15px', display: 'flex', alignItems: 'center' }}
            >
              <CategoryIcon sx={{ mr: 1 }} />
            </Button>
          </Tooltip>
          
          <Tooltip title="About" arrow>
            <Button 
              color="inherit" 
              sx={{ fontWeight: 'bold', fontSize: '15px', display: 'flex', alignItems: 'center' }}
              onClick={() => scrollToSection('about-us')}
            >
              <InfoIcon sx={{ mr: 1 }} />
            </Button>
          </Tooltip>
          
          <Tooltip title="Contact Us" arrow>
            <Button 
              color="inherit" 
              sx={{ fontWeight: 'bold', fontSize: '15px', display: 'flex', alignItems: 'center' }}
              onClick={() => scrollToSection('contact-us')}
            >
              <ContactMailIcon sx={{ mr: 1 }} />
            </Button>
          </Tooltip>
          
          <Tooltip title="Wallet" arrow>
            <Button 
              color="inherit" 
              sx={{ fontWeight: 'bold', fontSize: '15px', display: 'flex', alignItems: 'center' }}
            >
              <AccountBalanceWalletIcon sx={{ mr: 1 }} />
            </Button>
          </Tooltip>
          
          <img 
            src={profileLogo} 
            alt="Profile Logo" 
            style={{ width: 80, height: 80, borderRadius: '50%', cursor: 'pointer' }} 
            onClick={handleClick} // Open menu on click
          />
          
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            sx={{ mt: '45px' }} // Adjust the margin to fit your layout
          >
            <MenuItem onClick={() => { handleClose(); navigate('/login'); }}>Login</MenuItem>
            <MenuItem onClick={() => { handleClose(); navigate('/signup'); }}>Signup</MenuItem>
            <MenuItem onClick={() => { handleClose(); /* Add settings functionality here */ }}>Settings</MenuItem>
          </Menu>
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}
