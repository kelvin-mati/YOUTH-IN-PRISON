import React from "react";

import "./MoreEvents.css";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import counselling from "../images/counselling_program.jpeg";
import { more_event_api } from "./MoreEventsApi";
import Footer from "./Footer";
const options = {
  margin: 10,
  responsiveClass: true,
  autoplay: true,
  loop: true,
  autoplayHoverPause: true,
  dots: false,
  smartSpeed: 1000,
  nav: true,
  responsive: {
    0: {
      items: 1,
      nav: true,
    },
    400: {
      items: 1,
      nav: true,
    },
    500: {
      items: 2,
      nav: true,
    },
    600: {
      items: 3,
      nav: true,
    },
    1000: {
      items: 4,
      nav: true,
    },
    1000: {
      items: 4,
      nav: true,
    },
  },
};

function MoreEvents() {
  return (
    <>
      <Container style={{ paddingTop: "8rem", paddingBottom: "2.5rem" }}>
        <OwlCarousel {...options}>
          {more_event_api.map((event) => (
            <main className="moreEvent_card" key={event.id}>
              {event.date.map((occurence) => (
                <Box className="date-box" key={occurence.day}>
                  <h4 className="date">{occurence.day}</h4>
                  <p className="date">{occurence.MonthAndYear}</p>
                </Box>
              ))}

              <div className="event_img_div">
                <img src={event.image} alt="" />
              </div>
              <Box style={{ padding: "15px" }}>
                <Typography variant="h5">{event.Title}</Typography>
                <Typography>{event.Text}</Typography>
              </Box>
            </main>
          ))}
        </OwlCarousel>
      </Container>
      <Footer />
    </>
  );
}

export default MoreEvents;
