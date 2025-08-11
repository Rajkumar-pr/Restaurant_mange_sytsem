import React, { useState, useEffect } from 'react';
import ProductCard from './Card';
import { useNavigate } from 'react-router-dom';
import style from './Menu.module.css';
import { MenuList as menu } from '../data/data';
import Header from './Header';
import Footer from './Footer';
import { Button } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { AddItem, removeItem } from './state/counter';

function Menu() {
  const [display, setDisplay] = useState(false);
  const [ud, setUd] = useState('');
  const [input, setInput] = useState('');
  const [filmenu, setFilmenu] = useState(menu);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const data = useSelector((state) => state.count.cards);
  const total = useSelector((state) => state.count.tot);

  const remcard = (card) => {
    
    dispatch(removeItem(card.id));
  };

  const Clickfun = (ma) => {
    dispatch(AddItem(ma));
  };

  useEffect(() => {
    const username = sessionStorage.getItem('username');

    const fetchuser = async () => {
      if (!username) {
        alert('Signup First');
        navigate('/signup');
        return;
      }
      try {
        const resp = await fetch(`https://backend-restaurant-server.onrender.com/user/${username}`);
        const userdata = await resp.json();
        setUd(userdata.user._id);
        sessionStorage.setItem('ud', userdata.user._id);
      } catch (err) {
        console.error('Failed to fetch user:', err);
      }
    };
    fetchuser();
  }, []);

  useEffect(() => {
    const filtered = menu.filter((item) =>
      item.name.toLowerCase().includes(input.toLowerCase())
    );
    setFilmenu(filtered);
  }, [input]);

  const AddBill = async () => {
    try {
      const response = await fetch("https://backend-restaurant-server.onrender.com/order/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items: data, total: total, user: ud })
      });

      if (response.ok) {
        alert("Bill Added Successfully");
        navigate("/Feedback");
      }
    } catch (err) {
      alert(err);
    }
  };

  return (
    <div>
      <Header totalItems={data.length} />

      <Button
        variant="contained"
        color="primary"
        sx={{ position: "fixed", top: "80px", right: "290px", zIndex: 1000 }}
        onClick={() => setDisplay(true)}
      >
        Show Cart
      </Button>

      {display && (
        <div className={style.cartOverlay}>
          <h2>🧾 Cart Summary</h2>
          <div className={style.cartItems}>
            {data.map((da, index) => (
              <div key={index} className={style.cartItem}>
                <span>{da.name}</span>
                <span>₹{da.price}</span>
              </div>
            ))}
          </div>
          <h3>Total: ₹{total}</h3>
          <div className={style.cartActions}>
            <Button variant="contained" color="error" onClick={() => setDisplay(false)}>Close</Button>
            <Button variant="contained" color="success" onClick={AddBill}>Place Order</Button>
          </div>
        </div>
      )}

      <div className={style.inpBox}>
        <input
          type="text"
          placeholder="Search your dish..."
          onChange={(e) => setInput(e.target.value)}
        />
      </div>

      <div>
        <button onClick={() => navigate("/bill")} className={style.button1}>
          Total Bill
        </button>
      </div>

      <div className={style.home}>
        {filmenu.map((ma, index) => (
          <ProductCard
            key={index}
            image={ma.image}
            name={ma.name}
            description={ma.description}
            price={ma.price}
            onAddtoCart={() => Clickfun(ma)}
            onRemoveCard={() => remcard(ma)}
          />
        ))}
      </div>

      <Footer className={style.second} />
    </div>
  );
}

export default Menu;
