import React , { useState, useEffect } from 'react';
import Section from '../Section/Section'
import './prodect.css'; // Import the CSS file for styling
import axios from 'axios';
import Model from './model/Model';
import { Link } from 'react-router-dom';
// import  {useHistory}  from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Edit from './model/edit';


export const Prodect = () => {
  const navigate = useNavigate();
  const  [modelopen,setmodeleopen]=useState(false);
  const  [editopen,seteditopen]=useState(false);
  // const history = useHistory();

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




  // const Handeleditchange = (id) => {
  //   // Show a confirmation alert before editing
  //   history.push(`edit/${id}`);
    
  // };

 
 
 const handleDelete = (ses_id) => {
  console.log("delete button clicked");
  fetch(`http://localhost:3000/api/v1/sessions/delete/${ses_id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      // Include any additional headers as needed
    },
  })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      // Handle the successful deletion
      onDeleteSuccess(data.message);
    })
    .catch(error => {
      console.error('Error deleting session:', error);
      onDeleteError('Failed to delete session');
    });
      // Replace 'http://localhost:3000/api/v1/sessions/delete/' with your actual API endpoint
      // fetch(`http://localhost:3000/api/v1/sessions/delete/${ses_id}`, {

       
    
  };

  return (
<div>

<Section/>
{modelopen&& <Model closemodal={()=>{
  setmodeleopen(false);
}}/>}
 {editopen&& <Edit closeedit={()=>{
  seteditopen(false);
}}/>}
<div className="sctcont">
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
            <td><img  src={row.img} alt="" className='pimg' /> </td>
            <td><img src={row.vedio} alt="" className='pimg' /> </td>
            <td>{row.details}</td>
            <td>{row.Session_time}</td>
            <td>{row.evaluation}</td>
            <td>{row.price}</td>
            <td>{row.center_id}</td>
            {/* Add more columns as needed */}
            <td>
                {/* {editingId !== item.id && ( */}
                <button onClick={() => { setmodeleopen(true);handleEditClick(row.ses_id);  }} className='edit-btn'>
  Edit
</button>
             
              </td>
            <td>
              <button className="delete-btn" onClick={() => handleDelete(row.ses_id)}>Delete</button>
            </td>
            
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};
