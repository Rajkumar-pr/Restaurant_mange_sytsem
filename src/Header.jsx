
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import "./Header.css";
import { Person } from '@mui/icons-material';
import { Button } from '@mui/material';
function Header() {
  const [user, setUser] = useState("");

  useEffect(() => {
    const userdata = sessionStorage.getItem("username");
    if (userdata) setUser(userdata);
  }, []);
const logoutfun=()=>{
  setUser('');
  sessionStorage.clear();
}
  return (
    <div className="headerWrapper">
      <div className="container5">
        <img 
          src="https://thumbs.dreamstime.com/z/hotel-logo-template-background-58362974.jpg" 
          height="100px" 
          width="100px" 
          alt="Logo" 
        />
        <ul className="navLinks">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/Menu">Menu</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/reviews">Reviews</NavLink></li>
        </ul>
      </div>

      <div className="container7">
        {user?.length ? (
          <div>
          <div className="logBox">
            <Person style={{height:"18px"}}/>
     
          </div>
          {user}
          <div>
<Button onClick={logoutfun}>
Logout
</Button>
            </div>
          </div>
            
        ) : (
          <ul className="authLinks">
            <li><NavLink to="/login">Login</NavLink></li>
            <li><NavLink to="/signup">Signup</NavLink></li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default Header;
