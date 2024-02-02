import React from "react";
import "./Model.css";
import axios from "axios";
import { useState, useEffect } from "react";
const Model = ({ closemodal }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [center_name, setName] = useState('');
  const [cover_img, setcover] = useState('');
  const [logo, setlogo] = useState('');
  const [Evaluation, setEvaluetion] = useState('');
  const [work_time, setWork] = useState('');
  const [details, setdetails] = useState('');
  const [phone, setPhone] = useState('');
  const [lng, setlog] = useState('');
  const [lat, setlat] = useState('');
  const [cat_id, setCenter] = useState('');
  const [write_website, setwrite_website] = useState('');
  const doublelng = parseFloat(lng);
  const doublelat = parseFloat(lat);

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
      "center_name": center_name,
      "cover_img": cover_img,
      "logo": logo,
      "Evaluation": Evaluation,
      "details":details ,
      "work_time": work_time,
      "phone":phone ,
      "lng": lng,
      "lat": lat,
      "cat_id": cat_id,
      "write_website": write_website
    });
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    fetch("http://localhost:3000/api/v1/centers/add", requestOptions)
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
// let datax  = JSON.stringify({
//   center_name,
//   cover_img,
//   logo,
//   Evaluetion,
//   work_time,
//   details,
//   Phone,
//   lng,
//   lat,
//   cat_id,
//   write_website
// });
// let config = {
//   method: 'post',
//   maxBodyLength: Infinity,
//   url: 'http://localhost:3000/api/v1/centers/add/',
//   headers: { 
//     'Content-Type': 'application/json'
//   },
//   data : datax
// };

// axios.request(config)
// .then((response) => {
//   console.log(JSON.stringify(response.data));
// })
// .catch((error) => {
//   console.log(error);
// });

   
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
              
              id="name"
              onChange={(e) => setName(e.target.value)}
            />
            <br />
          </div>
          <div className="form-grop">
            <label htmlFor="cover" onChange={(e) => setcover(e.target.value)}>
              cover
            </label>
            <input  id="cover" />
            <br />
          </div>
          <div className="form-grop">
            <label htmlFor="video">Logo</label>
            <input
              
              id="video"
              onChange={(e) => setlogo(e.target.value)}
            />
            <br />
          </div>
          <div className="form-grop">
            <label htmlFor="evaluetion">Evaluetion</label>
            <input
              id="evaluetion"
              onChange={(e) => setEvaluetion(e.target.value)}
            />
            <br />
          </div>
          <div className="form-grop">
            <label htmlFor="work">Work Time</label>
            <input
              
              id="Work_Time"
              onChange={(e) => setWork(e.target.value)}
            />
            <br />
          </div>
          <div className="form-grop">
            <label htmlFor="Detiles">Detiles</label>
            <input
            
              id="Detiles"
              onChange={(e) => setdetails(e.target.value)}
            />
            <br />
          </div>
          <div className="form-grop">
            <label htmlFor="phone">phone</label>
            <input
      
              id="phone"
              onChange={(e) => setPhone(e.target.value)}
            />
            <br />
          </div>
          <div className="loglat">
          <div className="form-grop">
            <label htmlFor="lng">Lng</label>
            <input

              id="lng"
              onChange={(e) => setlog(e.target.value)}
            />
             
          </div>
          <div className="form-grop">
            <label htmlFor="lat">lat</label>
            <input
              
              id="lat"
              onChange={(e) => setlat(e.target.value)}
            />
           
          </div> 
          
          </div>
          <div className="form-grop">
            <label htmlFor="cat">catogares</label>
            <input
              
              id="catogares"
              onChange={(e) => setCenter(e.target.value)}
            />
            <br />
          </div>
          <div className="form-grop">
            <label htmlFor="web">write_website</label>
            <input
              
              id="web"
              onChange={(e) => setwrite_website(e.target.value)}
            />
            <br />
          </div>

          <div className="btn-grop">
            <button  onClick={handleClick} className="sabmit-btn">
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
