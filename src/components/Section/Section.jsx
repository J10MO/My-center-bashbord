import React from "react";
import "./Section.css";
import { Link } from "react-router-dom";
const Section = () => {
  return (
    <div>
      <div className="headtwo">
        <nav>
          <ul className="navsec">
            <Link to={"/user"} className="Links">
              <li>
                USER
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </li>
            </Link>
            <Link to={"/prodect"} className="Links">
              {" "}
              <li>
                products
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </li>{" "}
            </Link>
            <Link to={"/center"} className="Links">
              {" "}
              <li>
                Center
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </li>
            </Link>
            <Link to={"/catogares"} className="Links">
              {" "}
              <li>
                CATOGRE
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </li>
            </Link>
            <Link to={"/order"} className="Links">
              {" "}
              <li>
                ORDER
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </li>
            </Link>
            <Link to={"/Offer"} className="Links">
            <li>
            OFFER
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </li>
            </Link>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Section;
