import React from "react";
import "./Hero.css";
import hero_img from "../images/HERO_IMG.jpg";
import { Link } from "react-router-dom";

function Hero() {
  const Hero = {
    height: "560px",
    width: "100%",
    backgroundImage: `url(${hero_img})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    backgroundBlendMode: "multiply",
    color: "#ffff",
    position: "relative",
    marginTop: "4.4rem",
  };
  return (
    <div className="hero" style={Hero}>
      <div className="hero_container hero_flex">
        <p className="welcome_hero_title">
          welcome to youth in prisons organization
        </p>
        <p className="hero_title">
          REMEMBER THOSE WHO ARE IN PRISONS(Hebrew 13:3)
        </p>

        <Link to="/learn_more">
          <button className="learn_more_btn">LEARN MORE</button>
        </Link>
      </div>
    </div>
  );
}

export default Hero;
