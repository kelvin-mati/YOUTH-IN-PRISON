import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Footer from "./Footer";
function Contact() {
  return (
    <div style={{ marginTop: "6rem" }}>
      <Container style={{ padding: "2rem" }}>
        <Typography
          variant="h5"
          align="center"
          style={{ marginBottom: "3rem" }}
        >
          CONTACT US
        </Typography>
        <Grid container spacing={4}>
          <Grid item md={4} sm={6} xs={12}>
            <Typography style={{ fontSize: "17px" }}>Director</Typography>
            <Typography style={{ fontSize: "17px" }}>
              Youth in Prison Organization
            </Typography>
            <Typography style={{ fontSize: "17px" }}>
              Mobile: +254 722 153 096
            </Typography>
            <Typography style={{ fontSize: "17px" }}>
              Email: amos.youthinprisonorg@gmail.com
            </Typography>
          </Grid>
          <Grid item md={4} sm={6} xs={12}>
            <Typography style={{ fontSize: "17px" }}>Grants Manager</Typography>
            <Typography style={{ fontSize: "17px" }}>
              Youth in Prison Organization
            </Typography>
            <Typography style={{ fontSize: "17px" }}>
              Mobile: Mobile: +254 716 251 324
            </Typography>
            <Typography style={{ fontSize: "17px" }}>
              Email: rachael.youthinprisonorg@gmail.com
            </Typography>
          </Grid>
          <Grid item md={4} sm={6} xs={12}>
            <Typography style={{ fontSize: "17px" }}>
              Project Manager
            </Typography>
            <Typography style={{ fontSize: "17px" }}>
              Children in Prison Department
            </Typography>
            <Typography style={{ fontSize: "17px" }}>
              Youth in Prison Organization
            </Typography>
            <Typography style={{ fontSize: "17px" }}>
              Mobile: +254 721 515 885
            </Typography>
            <Typography style={{ fontSize: "17px" }}>
              Email: Virginia.youthinprisonorg@gmail.com
            </Typography>
          </Grid>
        </Grid>
        <Typography align="center" style={{ fontSize: "17px" }}>
          Feedback: info@youthinprisonorg@gmail.com or +254 733 991 485
        </Typography>
      </Container>
      <Footer />
    </div>
  );
}

export default Contact;
