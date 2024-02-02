import React from "react";
import "./Model.css";
import { Axios } from "axios";
import axios from "axios";
import { useState, useEffect } from "react";
const Modelcenter = ({ closemodal }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [ses_name, setName] = useState("");
  const [img, setImg] = useState("");
  const [video, setVideo] = useState("");
  const [details, setdetails] = useState("");
  const [center_id, setcenter_id] = useState("");
  const [evaluation, setevaluation] = useState("");
  const [price, setprice] = useState("");
  const [session_time, setsession_time] = useState("");
  const [nu_ssession, setnu_ssession] = useState("");

  
  // const handelsabmit =(event)=>{
  //   event.preventDefault();
  //   axios.put('http://localhost:3000/api/v1/sessions/add',{ses_name:name,img:img,video:video,details:details,center_id:center_id,evaluation:evaluation,price:price,session_time:session_time,nu_ssession:nu_ssession})
  //   .then(res=>console.log(res))
  //   .catch(er=>console.log(er))
  // }

  const handleClick = () => {
    setIsLoading(true);
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      ses_name,
      img,
      video,
      details,
      center_id,
      evaluation,
      price,
      session_time,
      nu_ssession,
    });

    var requestOptions = {
      method: "post",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://localhost:3000/api/v1/sessions/add", requestOptions)
      .then((response) => response.json())
      
  }

  return (
    <div
      className="pmcontainer"
      onClick={(e) => {
        if (e.target.className === "pmcontainer") closemodal();
      }}
    >
      <div className="model">
        <form action="">
          <div className="form-grop">
            <label htmlFor="name">Prodect Name</label>
            <input
              type="text"
              id="name"
              onChange={(e) => setName(e.target.value)}
            />
            <br />
          </div>
          <div className="form-grop">
            <label htmlFor="name" onChange={(e) => setImg(e.target.value)}>
              cover
            </label>
            <input type="text" id="cover" />
            <br />
          </div>
          <div className="form-grop">
            <label htmlFor="name">video</label>
            <input
              type="text"
              id="video"
              onChange={(e) => setVideo(e.target.value)}
            />
            <br />
          </div>
          <div className="form-grop">
            <label htmlFor="name">detils</label>
            <input
              type="text"
              id="detils"
              onChange={(e) => setdetails(e.target.value)}
            />
            <br />
          </div>
          <div className="form-grop">
            <label htmlFor="name">Work Time</label>
            <input
              type="text"
              id="Work Time"
              onChange={(e) => setsession_time(e.target.value)}
            />
            <br />
          </div>
          <div className="form-grop">
            <label htmlFor="name">evaluation</label>
            <input
              type="text"
              id="evaluation"
              onChange={(e) => setevaluation(e.target.value)}
            />
            <br />
          </div>
          <div className="loglat">
          <div className="form-grop">
            <label htmlFor="name">price</label>
            <input
              type="text"
              id="price"
              onChange={(e) => setprice(e.target.value)}
            />
        
          </div>
          <div className="form-grop">
            <label htmlFor="name">number</label>
            <input
              type="text"
              id="Center"
              onChange={(e) => setnu_ssession(e.target.value)}
            />
          
          </div>
          </div>
          <div className="form-grop">
            <label htmlFor="name">Center</label>
            <input
              type="text"
              id="Center"
              onChange={(e) => setcenter_id(e.target.value)}
            />
            <br />
          </div>
          
          <div className="btn-grop">
            <button id="sabmit" onClick={handleClick} className="sabmit-btn">
              sabmit
            </button>
            <button onClick={closemodal} className="cancel-btn">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modelcenter;
