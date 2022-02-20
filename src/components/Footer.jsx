import React from "react";
import "./Footer.css";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";
import logo_img from "../images/logo.jpeg";
function Footer() {
  return (
    <div className="footer">
      <Container sx={{ p: "20px" }}>
        <Grid container spacing={4}>
          <Grid item md={4} sm={6} xs={12}>
            <Typography variant="h6">FOLLOW US</Typography>
            <div className="footer_logo">
              <img src={logo_img} alt="" />
            </div>
            <Typography>
              <ion-icon
                style={{ color: "#ccc" }}
                size="large"
                name="logo-facebook"
              ></ion-icon>{" "}
              <ion-icon
                style={{ color: "#ccc" }}
                size="large"
                name="logo-instagram"
              ></ion-icon>{" "}
              <ion-icon
                style={{ color: "#ccc" }}
                size="large"
                name="logo-twitter"
              ></ion-icon>
            </Typography>
          </Grid>
          <Grid item md={4} sm={6} xs={12}>
            <Typography variant="h6">ADDRESS</Typography>
            <Typography style={{ color: "#ccc" }}>
              Youth in Prison(Africa)
            </Typography>
            <Typography style={{ color: "#ccc" }}>
              P.O Box 41282-001 Nairobi
            </Typography>
            <Typography style={{ color: "#ccc" }}>
              Tell: 0722 153 096
            </Typography>
            <Typography style={{ color: "#ccc" }}>
              Email: youthinprison@gmail.com
            </Typography>
          </Grid>
          <Grid item md={4} sm={6} xs={12}>
            <Typography variant="h6">QUICK LINKS</Typography>
            <Link to="/">
              <Typography style={{ color: "#ccc" }}>Home</Typography>
            </Link>
            <Link to="/about">
              <Typography style={{ color: "#ccc" }}>About</Typography>
            </Link>
            <Link to="/events">
              <Typography style={{ color: "#ccc" }}>Events</Typography>
            </Link>
            <Link to="/gallery">
              <Typography style={{ color: "#ccc" }}>Gallery</Typography>
            </Link>
            <Link to="/testimonial">
              <Typography style={{ color: "#ccc" }}>Testimonial</Typography>
            </Link>
            <Link to="/contact">
              <Typography style={{ color: "#ccc" }}>Contact</Typography>
            </Link>
          </Grid>
        </Grid>
        <hr className="horizontal-line" />
        <Typography align="center" className="copyright">
          copyright 2022.All rights reserved{" "}
        </Typography>
      </Container>
    </div>
  );
}

export default Footer;
