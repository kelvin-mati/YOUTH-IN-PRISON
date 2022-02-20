import React from "react";
import Wave from "react-wavify";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import testimonial_img from "../images/default.png";
import George_waciuri from "../images/George_waciuri.jpeg";
import Footer from "./Footer";

function Testimonial() {
  const testimonial = {
    marginTop: "4.4rem",
    paddingTop: "2rem",
    paddingBottom: "2rem",
  };
  const testimonial_titles = {
    textAlign: "center",
    padding: "25px 0px",
  };
  const testimonial_image = {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    position: "absolute",
    left: "-50%",
    right: "-50%",
    margin: "0px auto",
    bottom: "4.4rem",
    border: "2px solid maroon",
  };
  const testimonialText = {
    padding: "1.5rem ",
  };
  const name = {
    position: "absolute",
    bottom: "20px",
    textAlign: "center",
    backgroundColor: "#80808060",
    color: "#cccccc",
    width: "55%",
    margin: "0px auto",
    right: "-50%",
    left: "-50%",
    borderRadius: "5px",
    padding: "2px",
  };

  return (
    <>
      <div style={testimonial}>
        <div style={testimonial_titles}>
          <p>Testimonial</p>
          <Typography variant="h5" style={{ padding: "10px 0px " }}>
            HERE ARE SOME PEOPLES'S REVIEWS
          </Typography>
        </div>
        <Container>
          <Grid container spacing={3}>
            <Grid item md={4} sm={6} xs={12}>
              <main
                style={{
                  width: "95%",
                  position: "relative",
                  backgroundColor: "#80808010",
                  paddingTop: "10px",
                  borderRadius: "5px",
                }}
              >
                <p style={testimonialText}>
                  "Youth in prison we value what we do"
                </p>
                <img src={George_waciuri} style={testimonial_image} alt="" />
                <Wave
                  fill="maroon"
                  paused={true}
                  options={{
                    height: 12,
                    amplitude: 30,
                    speed: 0.15,
                    points: 7,
                  }}
                />
                <h3 style={name}>George Waciuri</h3>
              </main>
            </Grid>
            <Grid item md={4} sm={6} xs={12}>
              <main
                style={{
                  width: "95%",
                  position: "relative",
                  backgroundColor: "#80808010",
                  paddingTop: "10px",
                  borderRadius: "5px",
                }}
              >
                <p style={testimonialText}>
                  "Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Consequuntur, iste Lorem, ipsum dolor"
                </p>
                <img src={testimonial_img} style={testimonial_image} alt="" />
                <Wave
                  fill="maroon"
                  paused={true}
                  options={{
                    height: 12,
                    amplitude: 30,
                    speed: 0.15,
                    points: 7,
                  }}
                />
                <h3 style={name}>John Doe</h3>
              </main>
            </Grid>
            <Grid item md={4} sm={6} xs={12}>
              <main
                style={{
                  width: "95%",
                  position: "relative",
                  backgroundColor: "#80808010",
                  paddingTop: "10px",
                  borderRadius: "5px",
                }}
              >
                <p style={testimonialText}>
                  "Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Consequuntur, iste Lorem, ipsum dolor sit amet consectetur
                  adipisicing elit. Distinctio, animi..""
                </p>
                <img src={testimonial_img} style={testimonial_image} alt="" />
                <Wave
                  fill="maroon"
                  paused={true}
                  options={{
                    height: 12,
                    amplitude: 30,
                    speed: 0.15,
                    points: 7,
                  }}
                />
                <h3 style={name}>John Doe</h3>
              </main>
            </Grid>
          </Grid>
        </Container>
      </div>
      <Footer />
    </>
  );
}

export default Testimonial;
