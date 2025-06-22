<<<<<<< HEAD
import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import Product from './Card1';
function TotalBill() {
    const items=useSelector((state)=>state.count.cards);
const navigate=useNavigate();
  return (
    <div>
       <div >
        <Button variant="contained" onClick={() => navigate('/')}>
          Go to Home Page
        </Button>
      </div>
    <div style={{display:"flex",flexWrap:"wrap"}}>
      {items.map((item,index)=>(
        <div key={index}>
            
              <Product name={item.name} image={item.image} description={item.description} />
        </div>
      ))}
      </div>
     
    </div>
  )
}

export default TotalBill
=======
import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import Product from './Card1';
function TotalBill() {
    const items=useSelector((state)=>state.count.cards);
const navigate=useNavigate();
  return (
    <div>
       <div >
        <Button variant="contained" onClick={() => navigate('/')}>
          Go to Home Page
        </Button>
      </div>
    <div style={{display:"flex",flexWrap:"wrap"}}>
      {items.map((item,index)=>(
        <div key={index}>
            
              <Product name={item.name} image={item.image} description={item.description} />
        </div>
      ))}
      </div>
     
    </div>
  )
}

export default TotalBill
>>>>>>> b2923ed75085a17916702d9fd8ef0d4092383c4b
