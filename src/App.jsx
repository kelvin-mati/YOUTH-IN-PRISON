import "./App.css";
import AbsoluteBox from "./components/AbsoluteBox";
import Events from "./components/Events";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import WhatWeDo from "./components/WhatWeDo";
import Gallery from "./components/Gallery";
import About from "./components/About";
import Testimonial from "./components/Testimonial";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import MoreEvents from "./components/MoreEvents";
import LearnMore from "./components/LearnMore";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <AbsoluteBox />
                <WhatWeDo />
                <Events />

                <Footer />
              </>
            }
          />

          <Route exact path="/about" element={<About />} />
          <Route exact path="/gallery" element={<Gallery />} />
          <Route exact path="/testimonial" element={<Testimonial />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/events" element={<MoreEvents />} />
          <Route exact path="/learn_more" element={<LearnMore />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
