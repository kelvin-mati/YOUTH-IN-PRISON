import React from "react";
import Footer from "./Footer";
import "./About.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import about_img from "../images/HERO-IMG.jpg";

function About() {
  const about = {
    height: "450px",
    width: "100%",
    color: "#ffff",
    marginTop: "4.4rem",
    position: "relative",
  };
  const About_img_div = {
    width: "100%",
    height: "100%",
    backgroundImage: `url(${about_img})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    backgroundBlendMode: "multiply",
  };
  return (
    <>
      <Box style={about}>
        <Box style={About_img_div}>
          <h3 className="about_title">About Us</h3>
        </Box>
      </Box>
      <section className="about_setion">
        <div className="about_container about_grid">
          <main className="about_card">
            <h3 className="about_card_title">Programs</h3>
            <div className="about_links">
              <li>Re- Integrations Programs </li>
              <li>Theological Education Extension(T.E.E) Program</li>
              <li>Entrepreneurship courses</li>
              <li>School of Leadership Program</li>
              <li>Proffesionalism</li>
              <li>
                ICT resources, Computers, Free WI-FI for research purposes
                program
              </li>
              <li>Evangelism and Discipleship</li>
            </div>
          </main>
          <main className="about_card">
            <h3 className="about_card_title">Mission</h3>
            <div className="about_links">
              To raise,transform and equip prison officers to be a change and
              innovative servant leaders in our society as well as producing
              wholesome, spiritually nourished and knowledgeable reformed
              persons by alleviating the stigma that comes with being an inmate
              or exinmate.
            </div>
          </main>
          <main className="about_card">
            <h3 className="about_card_title">Vision</h3>
            <div className="about_links">
              Raising change and innovative leaders. Redefining inmates and
              ex-inmates through transformation and re-integration
            </div>
          </main>
          <main className="about_card">
            <h3 className="about_card_title">Core Values</h3>
            <div className="about_links">
              <li>Integrity</li>
              <li>Unity in Diversity</li>
              <li>Ecumenism</li>
              <li>Innovation</li>
              <li>Proffesionalism</li>
              <li>Prayer based</li>
              <li>Wisdom centerdness</li>
            </div>
          </main>
        </div>
      </section>
      <Container style={{ paddingTop: "3rem ", paddingBottom: "3rem" }}>
        <Grid container spacing={8}>
          <Grid item md={6} sm={12} xs={12}>
            <div className="video">
              <video src="" controls></video>
            </div>
          </Grid>
          <Grid item md={6} sm={12} xs={12}>
            <Typography variant="h5">OBJECTIVES</Typography>
            <Typography>
              <li>
                The greatest role of “Youth in Prisons Africa” Organization is
                to see transformed youth in Prison and beyond and mobilize the
                society to support youth in Prisons in their transformed
                Journey.
              </li>
            </Typography>
            <Typography>
              <li>
                To keep prisoners abreast with rise in technology and ICT
                services/products
              </li>
            </Typography>
            <Typography>
              <li>
                To equip counseling centers and libraries with educational
                resources/materials
              </li>
            </Typography>
            <Typography>
              <li>
                To introduce experts/mentors in the areas of entrepreneurship,
                leadership and governance among others
              </li>
            </Typography>
            <Typography>
              <li>
                To provide children in prison with basic amenities such as food,
                clothing, learning materials and mentorship.
              </li>
            </Typography>
            <Typography>
              <li>
                To reach every Prisoner with joy, peace and hope that comes with
                the Gospel of our Lord Jesus Christ.
              </li>
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

export default About;
