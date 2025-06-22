
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button, Box, Typography, Grid } from '@mui/material';
import RevCard1 from './RevCard1';

function Admin() {
  const [data, setData] = useState([]);
const [message,setMessage]=useState("");
 const[username,setUsername]=useState('');
  const getReviews = async () => {
   
    try {
      const response = await fetch("https://backend-restaurant-server.onrender.com/api/feedback");
      const res = await response.json();
      setData(res.feedback);
    } catch (err) {
      console.error("Failed to fetch reviews:", err);
    }
  };

  useEffect(() => {
    getReviews();
    const name=sessionStorage.getItem("username");
if(name)
{
  setUsername(name);
}
  }, []);

const updateData = async (id) => {
  try {
    const response = await fetch(`http://localhost:8080/Feed/api/reviews/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, message })
    });

    const result = await response.json();

    if (response.ok) {
      alert("Review updated successfully!");
      getReviews(); 
      setMessage("");
    } else {
      alert(result.message || "Update failed");
    }
  } catch (err) {
    console.error("Error updating review:", err);
    alert("Something went wrong while updating");
  }
};
const deleteData = async (id) => {
  try {
    const username = sessionStorage.getItem("username");

    const response = await fetch(`http://localhost:8080/Feed/api/reviews/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username }) 
    });

    const result = await response.json();

    if (response.ok) {
      alert("Review deleted successfully!");
      getReviews(); 
      alert(result.message || "Delete failed");
    }
  } catch (err) {
    console.error("Error deleting review:", err);
    alert("Something went wrong while deleting");
  }
};

  return (
    
    <Box sx={{ p: 4 }}>
      <div>
     <input type="text" value={message} placeholder="Enter Message" onChange={(e)=>setMessage(e.target.value)}/>

    </div>
      {data.length === 0 ? (
        <Box textAlign="center" mt={4}>
          <Typography variant="h6" gutterBottom>No Reviews Found</Typography>
          <Button variant="contained" component={Link} to="/" sx={{ mt: 2 }}>
            Go To Home
          </Button>
        </Box>
      ) : (
        <Box>
          <Typography variant="h5" fontWeight="bold" textAlign="center" mb={3}>
            What People Say
          </Typography>

          <Grid container spacing={3} justifyContent="center">
            {data.map((da, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <RevCard1 rat={da.rating} mess={da.message} updateReview={()=>updateData(da._id)} deleteReview={()=>deleteData(da._id)}  />
              </Grid>
            ))}
          </Grid>

          <Box textAlign="center" mt={4}>
            <Button variant="contained" component={Link} to="/" color="primary">
              Go To Home
            </Button>
          </Box>
        </Box>
      )}
    </Box>
  );
}

export default Admin;

