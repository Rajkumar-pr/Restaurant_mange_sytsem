
import React, { useState, useEffect } from 'react';
import styles from "./Signup.module.css";
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [data, setData] = useState({
    name: '',
    username: '',
    role: 'user',
    email: '',
    password: ''
  });

  const [str, setStr] = useState('');
  const word = "Welcome to SignUp Page";
  const navigate = useNavigate();

  useEffect(() => {
    word.split("").forEach((char, index) => {
      setTimeout(() => {
        setStr(prev => prev + char);
      }, 100 * index);
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("https://backend-restaurant-server.onrender.com/api/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    if (response.ok) {
      alert("Signup Done Successfully!");
      sessionStorage.setItem("username", data.username);
      data.role === "Admin" ? navigate("/Admin") : navigate("/Menu");
    } else {
      alert("Signup Failed!");
    }
  };

  return (
    <div className={styles.container11}>
      <h1 className={styles.heading}>{str}</h1>
      <form onSubmit={handleSubmit} className={styles.SignForm}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" value={data.name} onChange={handleChange} required />

        <label htmlFor="username">Username</label>
        <input type="text" name="username" value={data.username} onChange={handleChange} required />

        <label htmlFor="role">Role</label>
        <select name="role" value={data.role} onChange={handleChange}>
          <option value="user">User</option>
          <option value="Admin">Admin</option>
        </select>

        <label htmlFor="email">Email</label>
        <input type="email" name="email" value={data.email} onChange={handleChange} required />

        <label htmlFor="password">Password</label>
        <input type="password" name="password" value={data.password} onChange={handleChange} required />

        <div className={styles.buttonGroup}>
          <button type="submit" className={styles.primaryBtn}>Sign Up</button>
          <button type="button" onClick={() => navigate("/login")} className={styles.secondaryBtn}>
            Go To Login
          </button>
          <button type="button" onClick={()=>navigate("/")} className={styles.logoutButton}>
Go To Home
          </button>
        </div>
      </form>
    </div>
  );
}

export default Signup;
