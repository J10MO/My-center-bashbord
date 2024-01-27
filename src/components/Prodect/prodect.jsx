import React , { useState, useEffect } from 'react';
import Section from '../Section/Section'
import './prodect.css'; // Import the CSS file for styling
import axios from 'axios';
import Model from './model/Model';
import { Link } from 'react-router-dom';

export const Prodect = () => {
  const  [modelopen,setmodeleopen]=useState(false);


  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

   useEffect(() => {
    axios.get('http://localhost:3000/api/v1/sessions/show')
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






  const handleEdit = () => {
    // Clear the editing state and refetch the data
    setEditingId(null);
    axios.get('http://localhost:3000/api/v1/sessions/show')
      .then(response => setData(response.data))
      .catch(error => console.error('Error fetching data:', error));
  };

  const startEditing = (id) => {
    // Show a confirmation alert before editing
    const shouldEdit = window.confirm('Are you sure you want to edit this row?');
    if (shouldEdit) {
      // Set the ID of the row to be edited
      setEditingId(id);
    }


  }


  const handleDelete = (id) => {
    // Handle delete logic
    setData(data.filter(item => item.ses_id !== id));
    console.log(`Deleting row with id: ${id}`);
  };

  return (
<div>

<Section/>
{modelopen&& <Model closemodal={()=>{
  setmodeleopen(false);
}}/>}
    <div className="sect">
    <div className="search-container">
        <div className='searchdiv'>
      <input type="text" placeholder="Search..." className="search-input" />
      <button className="search-button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="11" cy="15" r="8" />
  <line x1="21" y1="25" x2="16.65" y2="18.65" />
</svg></button>
</div>
    </div>
    <button className='add' onClick={()=> setmodeleopen (true)} >
       ADD +</button>
    </div>
    
    <table className="data-table">
      <thead>
        <tr>
          <th>Prodect id</th>
          <th>prodect name</th>
          <th>cover</th>
          <th>video</th>
          <th>detils</th>
          <th>Work Time</th>
          <th>evaluation</th>
          <th>price</th>
          <th>Center id</th>
          {/* Add more column headers as needed */}
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {data.map(row => (
          <tr key={row.ses_id}>
            {/* <td>{editingId === row.ses_id ? (
                <EditForm data={row} onEdit={handleEdit} />
              ) : (
                row.ses_id
              )}</td> */}
            <td>{row.ses_id}</td>
            <td>{row.ses_name}</td>
            <td>{row.img}</td>
            <td>{row.video}</td>
            <td>{row.details}</td>
            <td>{row.Session_time}</td>
            <td>{row.evaluation}</td>
            <td>{row.price}</td>
            <td>{row.center_id}</td>
            {/* Add more columns as needed */}
            <td>
                {/* {editingId !== item.id && ( */}
                  <button onClick={()=> setmodeleopen(true)}>Edit</button>
             
              </td>
            <td>
              <button className="delete-btn" onClick={() => handleDelete(row.id)}>Delete</button>
            </td>
            
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};
function EditForm({ data, onEdit }) {
  const [editedData, setEditedData] = useState({ ...data });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedData({ ...editedData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Make an API request to update the data in the database
    axios.put(`http://localhost:3000/api/v1/sessions/${data.id}`, editedData)
      .then(response => {
        // Handle successful update
        console.log('Data updated successfully:', response.data);
        // Notify the parent component that the data was edited
        onEdit();
      })
      .catch(error => {
        // Handle error
        console.error('Error updating data:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={editedData.name}
          onChange={handleInputChange}
        />
      </label>
      {/* Add more input fields based on your data structure */}
      <button type="submit">Update</button>
    </form>
  );
  }
