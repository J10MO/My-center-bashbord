import React, { useEffect } from 'react'
import './Adv.css'
import Section from '../Section/Section';
import { useState } from 'react';
 


const Offer = () => {
  
  const [Data,setData]=useState([]);

  useEffect(()=>{

  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch("http://localhost:3000/api/v1/advertisements/show", requestOptions)
    .then(response => response.json())
    .then(result => setData(result))
    .catch(error => console.log('error', error));

},[],);

  return (
    <div>
      <div>
        <Section/>
        
        <div className='container'>
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
    <button className='add'>ADD +</button>
    </div>
        <div className="table-container">
      <table className="custom-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>IMG</th>
            <th>Prodect id</th>
            <th className='act' >Action</th>
          </tr>
        </thead>
        <tbody>
          {Data.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>
                <img src={item.img}  className="logo-img" />
              </td>
              <td>{item.video}</td>
              <td>{item.ses_id}</td>
              <td className="action-cell">
                <button className="delete-button" onClick={() => handleDelete(item.id)}>
                  Delete
                </button>
                
              </td>
              <td className="action-cell">
                <button className="edit-button" onClick={() => handleDelete(item.id)}>
                  Edit
                </button>
                
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Offer
