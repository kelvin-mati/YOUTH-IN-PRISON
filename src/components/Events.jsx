import React, { useState } from "react";
import "./Events.css";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import { EventApi } from "./EventsApi";
function Events() {
  return (
    <div className="events">
      <Container>
        <div className="event_title">
          <p>Events</p>
          <Typography variant="h5">
            HERE ARE SOME OF THE EVENTS WE'VE ATTENDED
          </Typography>
        </div>

        <Grid container spacing={2}>
          {EventApi.map((event) => (
            <Grid item md={3} xs={12} sm={6} key={event.id}>
              <Card className="eventsCard">
                {event.date.map((occurence) => (
                  <Box className="date-box" key={occurence.day}>
                    <h4 className="date">{occurence.day}</h4>
                    <p className="date">{occurence.MonthAndYear}</p>
                  </Box>
                ))}
                <CardMedia
                  component="img"
                  height="240"
                  image={event.image}
                  alt="event pic"
                />
                <CardContent>
                  <Typography variant="h5">{event.Title} </Typography>
                  <Typography>{event.Text} </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default Events;
