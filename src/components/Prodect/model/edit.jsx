import React from "react";
import "./Model.css";
import { Axios } from "axios";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const Edit = ({ closeedit }) => {
  const { id } = useParams();

  ///////////////////////
  // useEffect(() => {
  //   // Replace 'https://example.com/api/data' with the actual API endpoint
  //   fetch(`http://localhost:3000/api/v1/sessions/show/:${id}`)
  //     // .then(response => response.json())
  //     .then(response => {
  //       if (!response.ok) {
  //         throw new Error(`HTTP error! Status: ${response.status}`);
  //       }
  //       return response.json();
  //     })
  //     .then(data => {
  //       // Assuming the API response has a property called 'placeholderText'

  //       const fetchedPlaceholdername = data.sessions.ses_name;
  //       const fetchedPlaceholderimg = data.img;
  //       const fetchedPlaceholdervideo = data.video;
  //       const fetchedPlaceholderdetails = data.details;
  //       const fetchedPlaceholdercenter_id = data.center_id;
  //       const fetchedPlaceholderevaluation = data.evaluation;
  //       const fetchedPlaceholderprice = data.price;
  //       const fetchedPlaceholdersession_time = data.session_time;
  //       const fetchedPlaceholdernu_ssession = data.nu_ssession;

  //       // Update the placeholder state with the fetched data
  //       setPlaceholdername(fetchedPlaceholdername);
  //       setPlaceholderimg(fetchedPlaceholderimg);
  //       setPlaceholdervideo(fetchedPlaceholdervideo);
  //       setPlaceholderdetails(fetchedPlaceholderdetails);
  //       setPlaceholdercenter_id(fetchedPlaceholdercenter_id);
  //       setPlaceholderevaluation(fetchedPlaceholderevaluation);
  //       setPlaceholderprice(fetchedPlaceholderprice);
  //       setPlaceholdersession_time(fetchedPlaceholdersession_time);
  //       setPlaceholdernu_ssession(fetchedPlaceholdernu_ssession);

  //     })
  //     .catch(error => {
  //       console.error('Error fetching data:', error);
  //       // You can provide a fallback placeholder or handle the error in some way
  //       setPlaceholdername('Failed to fetch data');
  //     });
  // }, []);
  //////////////////////////////

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

  // useEffect(() => {
  //   axios.get(`http://localhost:3000/api/v1/sessions/show/:${id}`)
  //     .then(response => {
  //       setData(response.data);
  //       setLoading(false);
  //     })
  //     .catch(error => {
  //       setError(error);
  //       setLoading(false);
  //     });
  // }, []);

  // if (loading) {
  //   return <p>Loading...</p>;
  // }

  // if (error) {
  //   return <p>Error: {error.message}</p>;
  // }

  const [placeholdername, setPlaceholdername] = useState("Loading data...");
  const [placeholderimg, setPlaceholderimg] = useState("Loading data...");
  const [placeholdervideo, setPlaceholdervideo] = useState("Loading data...");
  const [placeholderdetails, setPlaceholderdetails] =
    useState("Loading data...");
  const [placeholdercenter_id, setPlaceholdercenter_id] =
    useState("Loading data...");
  const [placeholderevaluation, setPlaceholderevaluation] =
    useState("Loading data...");
  const [placeholderprice, setPlaceholderprice] = useState("Loading data...");
  const [placeholdersession_time, setPlaceholdersession_time] =
    useState("Loading data...");
  const [placeholdernu_ssession, setPlaceholdernu_ssession] =
    useState("Loading data...");

  // const handleClick = () => {
  //   var data = JSON.stringify({
  //           "ses_name":ses_name ,
  //           "img": img,
  //           "video": video,
  //           "details": details,
  //           "center_id": center_id,
  //           "evaluation": evaluation,
  //           "price": price,
  //           "session_time": session_time,
  //           "nu_ssession": nu_ssession,

  //         });
  //         let config = {
  //           method: 'put',
  //           maxBodyLength: Infinity,
  //           url: 'http://localhost:3000/api/v1/sessions/update/'+id,
  //           headers: {
  //             'Content-Type': 'application/json'
  //           },
  //           data : data
  //         };

  //         axios.request(config)
  //         .then((response) => {
  //           console.log(JSON.stringify(response.data));
  //         })
  //         .catch((error) => {
  //           console.log(error);
  //         });

  // }

  const handleClick = () => {
    setIsLoading(true);
    console.log(id);

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
      method: "put",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(`http://localhost:3000/api/v1/sessions/update/:${id}`, requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  return (
    <div
      className="pmcontainer"
      onClick={(e) => {
        if (e.target.className === "pmcontainer") {
          closeedit();
        }
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
            <input placeholder={id} type="text" id="cover" />
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
              Edit
            </button>
            <Link to={"/prodect"}>
              <button onClick={closeedit} className="cancel-btn">
                Cancel
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Edit;
