<<<<<<< HEAD
import React from "react";
import { Facebook, Instagram, LinkedIn, Twitter, Room, Phone, Email } from "@mui/icons-material";
import { Box, Typography, IconButton, Grid, Divider } from "@mui/material";

function Footer() {
  return (
    <Box sx={{ backgroundColor: "#1a1a1a", color: "white", mt: 5, pt: 4, pb: 2 }}>
      <Grid container spacing={4} justifyContent="center">
        {/* About Section */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6" gutterBottom>
            About Us
          </Typography>
          <Typography variant="body2">
            Welcome to FoodieHeaven – where taste meets tradition. We serve authentic Indian cuisine with a modern twist. Visit us for an unforgettable culinary experience.
          </Typography>
        </Grid>

        {/* Contact Info */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6" gutterBottom>
            Contact
          </Typography>
          <Typography variant="body2">
            <Room fontSize="small" sx={{ mr: 1 }} />
            123 Spice Street, Mumbai, India
          </Typography>
          <Typography variant="body2">
            <Phone fontSize="small" sx={{ mr: 1 }} />
            +91 98765 43210
          </Typography>
          <Typography variant="body2">
            <Email fontSize="small" sx={{ mr: 1 }} />
            support@foodieheaven.com
          </Typography>
        </Grid>

        {/* Social Media */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6" gutterBottom>
            Follow Us
          </Typography>
          <Box>
            <IconButton color="inherit" href="https://facebook.com" target="_blank">
              <Facebook />
            </IconButton>
            <IconButton color="inherit" href="https://instagram.com" target="_blank">
              <Instagram />
            </IconButton>
            <IconButton color="inherit" href="https://twitter.com" target="_blank">
              <Twitter />
            </IconButton>
            <IconButton color="inherit" href="https://linkedin.com" target="_blank">
              <LinkedIn />
            </IconButton>
          </Box>
        </Grid>
      </Grid>

      <Divider sx={{ my: 3, backgroundColor: "gray" }} />

      <Typography variant="body2" align="center" sx={{ color: "#aaa" }}>
        © 2025 FoodieHeaven. All rights reserved.
      </Typography>
    </Box>
  );
}

export default Footer;
=======
import React from "react";
import { Facebook, Instagram, LinkedIn, Twitter, Room, Phone, Email } from "@mui/icons-material";
import { Box, Typography, IconButton, Grid, Divider } from "@mui/material";

function Footer() {
  return (
    <Box sx={{ backgroundColor: "#1a1a1a", color: "white", mt: 5, pt: 4, pb: 2 }}>
      <Grid container spacing={4} justifyContent="center">
        {/* About Section */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6" gutterBottom>
            About Us
          </Typography>
          <Typography variant="body2">
            Welcome to FoodieHeaven – where taste meets tradition. We serve authentic Indian cuisine with a modern twist. Visit us for an unforgettable culinary experience.
          </Typography>
        </Grid>

        {/* Contact Info */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6" gutterBottom>
            Contact
          </Typography>
          <Typography variant="body2">
            <Room fontSize="small" sx={{ mr: 1 }} />
            123 Spice Street, Mumbai, India
          </Typography>
          <Typography variant="body2">
            <Phone fontSize="small" sx={{ mr: 1 }} />
            +91 98765 43210
          </Typography>
          <Typography variant="body2">
            <Email fontSize="small" sx={{ mr: 1 }} />
            support@foodieheaven.com
          </Typography>
        </Grid>

        {/* Social Media */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6" gutterBottom>
            Follow Us
          </Typography>
          <Box>
            <IconButton color="inherit" href="https://facebook.com" target="_blank">
              <Facebook />
            </IconButton>
            <IconButton color="inherit" href="https://instagram.com" target="_blank">
              <Instagram />
            </IconButton>
            <IconButton color="inherit" href="https://twitter.com" target="_blank">
              <Twitter />
            </IconButton>
            <IconButton color="inherit" href="https://linkedin.com" target="_blank">
              <LinkedIn />
            </IconButton>
          </Box>
        </Grid>
      </Grid>

      <Divider sx={{ my: 3, backgroundColor: "gray" }} />

      <Typography variant="body2" align="center" sx={{ color: "#aaa" }}>
        © 2025 FoodieHeaven. All rights reserved.
      </Typography>
    </Box>
  );
}

export default Footer;
>>>>>>> b2923ed75085a17916702d9fd8ef0d4092383c4b
