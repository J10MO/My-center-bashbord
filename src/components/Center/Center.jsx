import React , { useState, useEffect } from 'react';
import Section from "../Section/Section";
import "./Center.css";
import axios from 'axios';

export const Centert = () => {


  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

   useEffect(() => {
    axios.get('http://localhost:3000/api/v1/centers/show')
      .then(response => {
        setData(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
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
    // Handle delete logic
    setData(data.filter((item) => item.id !== id));
    console.log(`Deleting row with id: ${id}`);
  };
  return (
    <div>
      <Section />

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
        <button className="add">ADD +</button>
      </div>

      <table className="data-table">
        <thead>
          <tr>
            <th>Prodect id</th>
            <th>prodect name</th>
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
              <td>{row.lag}</td>
              <td>{row.lat}</td>
              <td>{row.cat_id}</td>
              <td>{row.write_website}</td>
              {/* Add more columns as needed */}
              <td>
                <button className="edit-btn" onClick={() => handleEdit(row.id)}>
                  Edit
                </button>
              </td>
              <td>
                <button
                  className="delete-btn"
                  onClick={() => handleDelete(row.id)}
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

