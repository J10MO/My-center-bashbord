import React from "react";
import "./Section.css";
import { Link } from "react-router-dom";
const Section = () => {
  return (
    <div>
      <div className="headtwo">
     
        <nav>
          <ul className="navsec">
            <Link to={'/user'} className="Links" ><li>
              
              USER
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </li></Link>
          <Link to={'/prodect'} className="Links" >  <li>
                
              products
              <span></span>
              <span></span>
              <span></span>
              <span></span>
           </li> </Link>
           <li>
                
              Center
              <span></span>
              <span></span>
              <span></span>
              <span></span>
           </li>
            <Link to={'/catogares'} className="Links" > <li>
              CATOGRE
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </li></Link>
            <Link to={'/order'} className="Links" >   <li>
              ORDER
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </li></Link>
            <li>
              ADV
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </li>
            <li>
              OFFER
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Section;
