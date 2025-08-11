import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Person } from '@mui/icons-material';
import { Button, Avatar } from '@mui/material';
import './Header.css';

function Header() {
  const [user, setUser] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const userdata = sessionStorage.getItem('username');
    if (userdata) setUser(userdata);
  }, []);

  const logoutfun = () => {
    setUser('');
    sessionStorage.clear();
    navigate('/');
  };

  return (
    <header className="headerWrapper">
      <div className="logoSection">
        <img
          src="https://thumbs.dreamstime.com/z/hotel-logo-template-background-58362974.jpg"
          alt="Restaurant Logo"
          className="logoImg"
        />
        <h1 className="logoText">Foodie's Hub</h1>
      </div>

      <nav className="navLinks">
        <NavLink to="/" className="navItem">Home</NavLink>
        <NavLink to="/Menu" className="navItem">Menu</NavLink>
        <NavLink to="/about" className="navItem">About</NavLink>
        <NavLink to="/reviews" className="navItem">Reviews</NavLink>
      </nav>

      <div className="authSection">
        {user ? (
          <div className="userBox">
            <Avatar sx={{ bgcolor: '#ff5722' }}><Person /></Avatar>
            <span className="userName">{user}</span>
            <Button variant="contained" size="small" color="error" onClick={logoutfun}>
              Logout
            </Button>
          </div>
        ) : (
          <div className="authLinks">
            <NavLink to="/login" className="authBtn">Login</NavLink>
            <NavLink to="/signup" className="authBtn">Signup</NavLink>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
