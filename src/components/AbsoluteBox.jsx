import React from "react";
import "./AbsoluteBox.css";
import { Link } from "react-router-dom";
function AbsoluteBox() {
  return (
    <div className="box">
      <div className="box_container">
        <div className="box_container_contents">
          <h2 className="box_titles">Partners</h2>
          <div className="partners_link">
            <li>Government</li>
            <li>Learning instituitions</li>
            <li>Youth organizations</li>
            <li>Sport organizations</li>
          </div>
        </div>
        <div className="box_container_contents">
          <h2 className="box_titles">Programs</h2>
          <div className="partners_link">
            <li>Children in prison program</li>
            <li>Prayer breakfast</li>

            <li>sports academy/competition</li>
            <li>school of music program</li>
            <Link to="/about">
              <p className="view_more">view more</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AbsoluteBox;
