<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import Header from './Header';
import Footer from "./Footer";
import style from "./Home.module.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const [str, setStr] = useState("");
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const firstr = "HI, WELCOME TO THE RESTAURANT";

  const items = [
    { name: "Kadhai Paneer Masala", img: "https://www.secondrecipe.com/wp-content/uploads/2020/05/dhaba-style-kadai-paneer-001.jpg" },
    { name: "South Indian Dosa", img: "https://static.toiimg.com/photo/msid-65164556/65164556.cms" },
    { name: "Dal Khichadi", img: "https://www.masalakorb.com/wp-content/uploads/2016/12/Masala-Khichdi-FI-0236.jpg" },
    { name: "Veg Kolhapuri", img: "https://vanitascorner.com/wp-content/uploads/2023/06/Veg-Kolhapuri-2-1024x769.jpg" },
    { name: "Pav Bhaji", img: "https://i0.wp.com/delishbite.in/wp-content/uploads/2021/06/final-14.jpg?resize=1000%2C1248&ssl=1" },
    { name: "Paneer Tikka", img: "https://th.bing.com/th/id/OIP.j6VH4YcKhjTrGLuhTsH5wwHaFj?rs=1&pid=ImgDetMain" },
    { name: "Veg Biryani", img: "https://www.yummyfoodrecipes.in/resources/picture/org/Vegetable-Dum-Biryani.jpg" },
    { name: "Chole Bhature", img: "https://ganeshaeksanskriti.com/cdn/shop/products/chole-bhature30-7-6387f_be968a67-b53a-4178-9cad-27cd875fc27d.jpg?v=1701425739&width=1946" },
    { name: "Rajma Chawal", img: "https://th.bing.com/th/id/OIP.-gjthi03X4mF4JPjdqZRPgHaJQ?w=1000&h=1250&rs=1&pid=ImgDetMain" }
  ];

  useEffect(() => {
    firstr.split("").forEach((char, index) => {
      setTimeout(() => {
        setStr(prev => prev + char);
      }, 100 * index);
    });
    setData([...items, ...items]); 
   
  }, []);

  return (
    <div className={style.main}>
      <div className={style.hero}>
        <Header />
        <div className={style.heroContent}>
          <div className={style.heroText}>
            <h1 className={style.animatedHeading}>{str}</h1>
            <button onClick={() => navigate("/Menu")} className={style.menuButton}>
              View Menu
            </button>
          </div>
          <img
            src="https://png.pngtree.com/thumb_back/fw800/background/20230412/pngtree-food-burger-delicious-background-image_2363210.jpg"
            className={style.heroImg}
            alt="Delicious Burger"
          />
        </div>
      </div>

      <div className={style.bestSellerSection}>
        <h2 className={style.bestSellerTitle}>🍽️ Our Best Sellers</h2>
        <div className={style.carousel}>
          {data.map((item, index) => (
            <div className={style.card} key={index}>
              <img src={item.img} className={style.cardImg} alt={item.name} />
              <h3 className={style.cardTitle}>{item.name}</h3>
            </div>
          ))}
        </div>
      </div>
      <div className="About">
  <h2>Why Choose Us</h2>
  <div className="about-content">
    <p>
      Serving delicious memories for over <strong>10 years</strong>, our restaurant has built a reputation for providing not just meals, but experiences. 
    </p>
    <p>
      We are known for our:
      <ul>
        <li>✨ High-quality, fresh ingredients</li>
        <li>👨‍🍳 Expert chefs with years of culinary mastery</li>
        <li>🛎️ Outstanding customer service</li>
        <li>🏆 Recognized for hygiene and hospitality standards</li>
      </ul>
    </p>
    <p>
      Whether you're here for a quick bite or a family celebration, we promise to serve food that brings joy to your tastebuds.
    </p>
  </div>
</div>

      <Footer />
    </div>
  );
}

export default Home;
=======
import React, { useState, useEffect } from "react";
import Header from './Header';
import Footer from "./Footer";
import style from "./Home.module.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const [str, setStr] = useState("");
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const firstr = "HI, WELCOME TO THE RESTAURANT";

  const items = [
    { name: "Kadhai Paneer Masala", img: "https://www.secondrecipe.com/wp-content/uploads/2020/05/dhaba-style-kadai-paneer-001.jpg" },
    { name: "South Indian Dosa", img: "https://static.toiimg.com/photo/msid-65164556/65164556.cms" },
    { name: "Dal Khichadi", img: "https://www.masalakorb.com/wp-content/uploads/2016/12/Masala-Khichdi-FI-0236.jpg" },
    { name: "Veg Kolhapuri", img: "https://vanitascorner.com/wp-content/uploads/2023/06/Veg-Kolhapuri-2-1024x769.jpg" },
    { name: "Pav Bhaji", img: "https://i0.wp.com/delishbite.in/wp-content/uploads/2021/06/final-14.jpg?resize=1000%2C1248&ssl=1" },
    { name: "Paneer Tikka", img: "https://th.bing.com/th/id/OIP.j6VH4YcKhjTrGLuhTsH5wwHaFj?rs=1&pid=ImgDetMain" },
    { name: "Veg Biryani", img: "https://www.yummyfoodrecipes.in/resources/picture/org/Vegetable-Dum-Biryani.jpg" },
    { name: "Chole Bhature", img: "https://ganeshaeksanskriti.com/cdn/shop/products/chole-bhature30-7-6387f_be968a67-b53a-4178-9cad-27cd875fc27d.jpg?v=1701425739&width=1946" },
    { name: "Rajma Chawal", img: "https://th.bing.com/th/id/OIP.-gjthi03X4mF4JPjdqZRPgHaJQ?w=1000&h=1250&rs=1&pid=ImgDetMain" }
  ];

  useEffect(() => {
    firstr.split("").forEach((char, index) => {
      setTimeout(() => {
        setStr(prev => prev + char);
      }, 100 * index);
    });
    setData([...items, ...items]); 
   
  }, []);

  return (
    <div className={style.main}>
      <div className={style.hero}>
        <Header />
        <div className={style.heroContent}>
          <div className={style.heroText}>
            <h1 className={style.animatedHeading}>{str}</h1>
            <button onClick={() => navigate("/Menu")} className={style.menuButton}>
              View Menu
            </button>
          </div>
          <img
            src="https://png.pngtree.com/thumb_back/fw800/background/20230412/pngtree-food-burger-delicious-background-image_2363210.jpg"
            className={style.heroImg}
            alt="Delicious Burger"
          />
        </div>
      </div>

      <div className={style.bestSellerSection}>
        <h2 className={style.bestSellerTitle}>🍽️ Our Best Sellers</h2>
        <div className={style.carousel}>
          {data.map((item, index) => (
            <div className={style.card} key={index}>
              <img src={item.img} className={style.cardImg} alt={item.name} />
              <h3 className={style.cardTitle}>{item.name}</h3>
            </div>
          ))}
        </div>
      </div>
      <div className="About">
  <h2>Why Choose Us</h2>
  <div className="about-content">
    <p>
      Serving delicious memories for over <strong>10 years</strong>, our restaurant has built a reputation for providing not just meals, but experiences. 
    </p>
    <p>
      We are known for our:
      <ul>
        <li>✨ High-quality, fresh ingredients</li>
        <li>👨‍🍳 Expert chefs with years of culinary mastery</li>
        <li>🛎️ Outstanding customer service</li>
        <li>🏆 Recognized for hygiene and hospitality standards</li>
      </ul>
    </p>
    <p>
      Whether you're here for a quick bite or a family celebration, we promise to serve food that brings joy to your tastebuds.
    </p>
  </div>
</div>

      <Footer />
    </div>
  );
}

export default Home;
>>>>>>> b2923ed75085a17916702d9fd8ef0d4092383c4b
