import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Modal from "./Modal";
import logo_img from "../images/logo.jpeg";
import "./Navbar.css";
function Navbar() {
  const [sideBar, setSideBar] = useState(false);
  const [Width, setWidth] = useState(window.innerWidth);
  const [modal, setModal] = useState(false);

  const ToggleSideBar = () => {
    setSideBar(!sideBar);
  };
  useEffect(() => {
    const changeWidth = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  const showModal = () => {
    setModal(!modal);
  };
  const closeModal = () => {
    setModal(!modal);
  };
  const links = () => {
    setSideBar(false);
  };
  return (
    <nav className="navbar">
      <div className="navbar_container flex ">
        <div className="logo">
          <div className="menu" onClick={ToggleSideBar}>
            <ion-icon
              style={{ color: "red" }}
              size="large"
              name="menu-outline"
            ></ion-icon>
          </div>
          <Link to="/">
            <img src={logo_img} alt="" className="logoImage" />
          </Link>
        </div>
        {(sideBar || Width > 560) && (
          <div className="navlinks">
            <Link to="/" className="links" onClick={links}>
              <li>Home</li>
            </Link>
            <Link to="/about" className="links" onClick={links}>
              <li>About</li>
            </Link>
            <Link to="/events" className="links" onClick={links}>
              <li>Events</li>
            </Link>
            <Link to="/gallery" className="links" onClick={links}>
              <li>Gallery</li>
            </Link>
            <Link to="/testimonial" className="links" onClick={links}>
              <li>Testimonials</li>
            </Link>
            <Link to="/contact" className="links" onClick={links}>
              <li>Contact</li>
            </Link>
          </div>
        )}

        <button className="donate_btn" onClick={showModal}>
          DONATE
        </button>
        {modal && <Modal close={closeModal} />}
      </div>
    </nav>
  );
}

export default Navbar;
