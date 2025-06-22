import React, { useState } from 'react';
import style from "./Login.module.css";
import { useNavigate } from 'react-router-dom';

function Login() {
  const [data, setData] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("https://backend-restaurant-server.onrender.com/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    if (response.ok) {
      const res = await response.json();
      console.log(res.token);
      alert("Login Done successfully");
      sessionStorage.setItem("username", data.username);
      navigate("/");
    } else {
      alert("Login Unsuccessful. Please check credentials.");
    }
  };

  return (
    <div className={style.home}>
      <form onSubmit={handleSubmit} className={style.formLogin}>
        <h2 className={style.heading}>Login</h2>

        <label htmlFor="username" className={style.label}>Username</label>
        <input
          type="text"
          name="username"
          value={data.username}
          required
          onChange={handleChange}
          className={style.input}
        />

        <label htmlFor="password" className={style.label}>Password</label>
        <input
          type="password"
          name="password"
          value={data.password}
          onChange={handleChange}
          required
          className={style.input}
        />

        <div className={style.buttonGroup}>
          <button type="submit" className={style.primaryBtn}>Login</button>
          <button type="button" onClick={() => navigate("/signup")} className={style.secondaryBtn}>Signup</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
