import React, { useState, useEffect } from "react";
import { MenuList as menu } from "./data/data";
import "./Fpage.css";

function Fpage() {
  const [data, setData] = useState([]);
  const [items, setItems] = useState([]);
  const [da, setDa] = useState("");

  useEffect(() => {
    const me = menu.slice(0, 5);
    setData([...me, ...me]); // duplicate for smooth loop
    setItems([...menu]);
  }, []);

  useEffect(() => {
    const totalItems = menu.filter((dat) =>
      dat.name.toLowerCase().includes(da.toLowerCase())
    );
    setItems(totalItems);
  }, [da]);

  return (
    <div className="first">
      <div>
        <input
          type="text"
          value={da}
          onChange={(e) => setDa(e.target.value)}
        />
      </div>

      <div className="container3">
        <div className="container4">
          {data.map((ma, index) => (
            <div
              key={index}
              style={{
                border: "2px solid black",
                marginRight: "20px",
              }}
            >
              <img
                src={ma.image}
                height="300px"
                width="200px"
                alt={`img${index}`}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="container6">
        {items.map((ma, index) => (
          <div className="container8" key={index}>
            <img
              src={ma.image}
              alt={`img${index}`}
              height="400px"
              width="400px"
            />
            <div className="container7">Price: {ma.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Fpage;
