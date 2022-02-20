import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import women_in_prison from "../images/women_in_prison.jpg";
import hero_img from "../images/HERO-IMG.jpg";
import hero_img2 from "../images/HERO_IMG.jpg";
import test from "../images/test.jpg";
import prayer_breakfast from "../images/prayer_breakfast.jpg";
import adapt_a_child from "../images/adapt_a_child.jpg";
import counselling_program from "../images/counselling_program.jpeg";
import gallery1 from "../images/gallery (1).jpg";
import gallery2 from "../images/gallery (2).jpg";
import gallery3 from "../images/gallery (3).jpg";
import gallery4 from "../images/gallery (4).jpg";
import gallery5 from "../images/gallery (5).jpg";
import gallery6 from "../images/gallery (6).jpg";
import gallery7 from "../images/gallery (7).jpg";
import gallery8 from "../images/gallery (8).jpg";
import gallery9 from "../images/gallery (9).jpg";
import gallery10 from "../images/gallery (10).jpg";
import gallery11 from "../images/gallery (11).jpg";
import gallery12 from "../images/gallery (12).jpg";
import gallery13 from "../images/gallery (13).jpg";
import gallery14 from "../images/gallery (14).jpg";
import gallery15 from "../images/gallery (15).jpg";
import gallery16 from "../images/gallery (16).jpg";
import gallery17 from "../images/gallery (17).jpg";
import gallery18 from "../images/gallery (18).jpg";
import gallery19 from "../images/gallery (19).jpg";

import Footer from "./Footer";
export default function Gallery() {
  return (
    <>
      <Container style={{ marginTop: "7rem", paddingBottom: "2rem" }}>
        <Grid container spacing={1}>
          <Grid item md={5} xs={12} sm={12}>
            <img style={{ width: "100%", height: 500 }} src={test} alt="" />
          </Grid>
          <Grid item md={7} xs={12} sm={12}>
            <ImageList
              sx={{ width: "100%", height: 500 }}
              cols={3}
              rowHeight={164}
            >
              {itemData.map((item) => (
                <ImageListItem key={item.id}>
                  <img
                    src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                    srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                    alt="Gallery image"
                    loading="lazy"
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

const itemData = [
  {
    id: 1,
    img: `${prayer_breakfast}`,
  },
  {
    id: 2,
    img: `${gallery19}`,
  },
  {
    id: 3,
    img: `${hero_img}`,
  },
  {
    id: 4,
    img: `${adapt_a_child}`,
  },
  {
    id: 5,
    img: `${women_in_prison}`,
  },
  {
    id: 6,
    img: `${counselling_program}`,
  },
  {
    id: 7,
    img: `${hero_img2}`,
  },
  {
    id: 8,
    img: `${gallery16}`,
  },
  {
    id: 9,
    img: `${gallery17}`,
  },
  {
    id: 10,
    img: `${gallery18}`,
  },
  {
    id: 11,
    img: `${gallery1}`,
  },
  {
    id: 12,
    img: `${gallery2}`,
  },
  {
    id: 13,
    img: `${gallery3}`,
  },
  {
    id: 14,
    img: `${gallery4}`,
  },
  {
    id: 15,
    img: `${gallery5}`,
  },
  {
    id: 16,
    img: `${gallery6}`,
  },
  {
    id: 17,
    img: `${gallery7}`,
  },
  {
    id: 18,
    img: `${gallery8}`,
  },
  {
    id: 19,
    img: `${gallery9}`,
  },
  {
    id: 20,
    img: `${gallery10}`,
  },
  {
    id: 21,
    img: `${gallery11}`,
  },
  {
    id: 22,
    img: `${gallery12}`,
  },
  {
    id: 23,
    img: `${gallery13}`,
  },
  {
    id: 24,
    img: `${gallery14}`,
  },
  {
    id: 25,
    img: `${gallery15}`,
  },
];
