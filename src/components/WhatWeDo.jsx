import React from "react";
import "./WhatWeDo.css";
import what_we_do_img from "../images/HERO-IMG.jpg";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
function whatWeDo() {
  const img_dimensions = {
    width: "100%",
    height: "400px",
    objectFit: "cover",
  };
  return (
    <>
      <Container className="what_we_do">
        <Grid container spacing={5}>
          <Grid item md={7} sm={12} xs={12}>
            <img src={what_we_do_img} alt="" style={img_dimensions} />
          </Grid>
          <Grid item md={5} sm={12} xs={12}>
            <Typography variant="h5" style={{ padding: "10px 0px " }}>
              YOUTH IN PRISON (AFRICA) ORG
            </Typography>
            <Typography>
              We reach ,equip,empower youth in prison as as we obey a command .
            </Typography>
            <Typography>
              (Mathew 25:36) I was in prison and you came to visit me
            </Typography>
            <Link to="/learn_more">
              <button className="learn_more_whatwedo_btn">LEARN MORE</button>
            </Link>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default whatWeDo;
