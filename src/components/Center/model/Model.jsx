import React from "react";
import "./Model.css";
import { Axios } from "axios";
import axios from "axios";
import { useState, useEffect } from "react";
const Model = ({ closemodal }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [centername, setName] = useState("");
  const [cover, setcover] = useState("");
  const [logo, setlogo] = useState("");
  const [Evaluetion, setEvaluetion] = useState("");
  const [Work, setWork] = useState("");
  const [details, setdetails] = useState("");
  const [Phone, setPhone] = useState("");
  const [lng, setlog] = useState("");
  const [lat, setlat] = useState("");
  const [cat_id, setCenter] = useState("");
  const [write_website, setwrite_website] = useState("");

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
      centername,
      cover,
      logo,
      Evaluetion,
      Work,
      details,
      Phone,
      lng,
      lat,
      cat_id,
      write_website,
    });

    var requestOptions = {
      method: "post",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://localhost:3000/api/v1/centers/add", requestOptions).then(
      (response) => response.json()
    );
  };

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
            <label htmlFor="name" onChange={(e) => setcover(e.target.value)}>
              cover
            </label>
            <input type="text" id="cover" />
            <br />
          </div>
          <div className="form-grop">
            <label htmlFor="name">Logo</label>
            <input
              type="text"
              id="video"
              onChange={(e) => setlogo(e.target.value)}
            />
            <br />
          </div>
          <div className="form-grop">
            <label htmlFor="name">Evaluetion</label>
            <input
              type="text"
              id="detils"
              onChange={(e) => setEvaluetion(e.target.value)}
            />
            <br />
          </div>
          <div className="form-grop">
            <label htmlFor="name">Work Time</label>
            <input
              type="text"
              id="Work Time"
              onChange={(e) => setWork(e.target.value)}
            />
            <br />
          </div>
          <div className="form-grop">
            <label htmlFor="name">Detiles</label>
            <input
              type="text"
              id="evaluation"
              onChange={(e) => setdetails(e.target.value)}
            />
            <br />
          </div>
          <div className="form-grop">
            <label htmlFor="name">phone</label>
            <input
              type="text"
              id="price"
              onChange={(e) => setPhone(e.target.value)}
            />
            <br />
          </div>
          <div className="loglat">
          <div className="form-grop">
            <label htmlFor="name">Log</label>
            <input
              type="text"
              id="Center"
              onChange={(e) => setlog(e.target.value)}
            />
             
          </div>
          <div className="form-grop">
            <label htmlFor="name">lat</label>
            <input
              type="text"
              id="Center"
              onChange={(e) => setlat(e.target.value)}
            />
           
          </div> 
          
          </div>
          {/* <div className="form-grop">
            <label htmlFor="name">lat</label>
            <input
              type="text"
              id="Center"
              onChange={(e) => setlat(e.target.value)}
            />
            <br />
          </div> */}
          <div className="form-grop">
            <label htmlFor="name">Center</label>
            <input
              type="text"
              id="Center"
              onChange={(e) => setCenter(e.target.value)}
            />
            <br />
          </div>
          <div className="form-grop">
            <label htmlFor="name">write_website</label>
            <input
              type="text"
              id="Center"
              onChange={(e) => set(e.target.value)}
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

export default Model;
