import React , { useState, useEffect } from 'react';
import Section from "../Section/Section";
import "./Center.css";
import axios from 'axios';
import Model from './model/Model';
import Edit from './model/edit';
import { Link } from 'react-router-dom';

export const Center = () => {


  const [data, setData] = useState([]);
  const [datadelete, setDatadelete] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const  [modelopen,setmodeleopen]=useState(false);
  const  [editopen,seteditopen]=useState(false);

   useEffect(() => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("http://localhost:3000/api/v1/centers/show", requestOptions)
      .then(response => response.json())
      .then(result => {setData(result) ,setLoading(false)})
      
      .catch(error => setError( error));

    // axios.get('http://localhost:3000/api/v1/centers/show')
    //   .then(response => {
    //     setData(response.data);
    //     setLoading(false);
    //   })
    //   .catch(error => {
    //     setError(error);
    //     setLoading(false);
    //   });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }





  const handleEdit = (id) => {
    // Handle edit logic
    console.log(`Editing row with id: ${id}`);
  };

  const handleDelete = (id) => {
    var requestOptions = {
      method: 'DELETE',
      redirect: 'follow'
    };
    
    fetch(`http://localhost:3000/api/v1/centers/delete/${id}`, requestOptions)
      .then(result =>  setData(data.filter((item) => item.center_id !== id)))
      
  };
  return (
    <div>
      <Section />
      {modelopen&& <Model closemodal={()=>{
  setmodeleopen(false);
}}/>}
 {editopen&& <Edit closeedit={()=>{
  seteditopen(false);
}}/>}
      <div className="sctcont">
      <div className="sect">
        <div className="search-container">
          <div className="searchdiv">
            <input
              type="text"
              placeholder="Search..."
              className="search-input"
            />
            <button className="search-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="16"
                height="16"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="11" cy="15" r="8" />
                <line x1="21" y1="25" x2="16.65" y2="18.65" />
              </svg>
            </button>
          </div>
        </div>
        <button className="add" onClick={()=> setmodeleopen(true)}>ADD +</button>
      </div>
</div>
      <table className="data-table">
        <thead>
          <tr>
            <th>center id</th>
            <th>center name </th>
            <th>cover</th>
            <th>logo</th>
            <th>Evaluetion</th>
            <th>Work Time</th>
            <th>details</th>
            <th>Phone</th>
            <th>log</th>
            <th>lat</th>
            <th>Center</th>
            <th>write_website</th>
            {/* Add more column headers as needed */}
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.center_id}>
              <td>{row.center_id}</td>
              <td>{row.center_name}</td>
              <td><img src={row.cover_img} alt="" className='timg' /></td>
              <td><img src={row.logo} alt="" className='timg' /> </td>
              <td>{row.evaluation}</td>
              <td>{row.work_time}</td>
              <td>{row.details}</td>
              <td>{row.phone}</td>
              <td>{row.lng}</td>
              <td>{row.lat}</td>
              <td>{row.cat_id}</td>
              <td>{row.write_website}</td>
              {/* Add more columns as needed */}
              <td>
               <button className="edit-btn" onClick={() => seteditopen(true)}>
                  Edit
                </button>
              </td>
              <td>
                <button
                  className="delete-btn"
                  onClick={() => handleDelete(row.center_id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

