
import React , { useState, useEffect } from 'react';
import './user.css'
import { Link } from 'react-router-dom'
import Section from '../Section/Section'
import axios from 'axios';

export const User = () => {


  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

   useEffect(() => {
    axios.get('http://localhost:3000/api/v1/user/users')
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






  return (
    <div>
      <Section/>
    
<div class="container">
  <h2>USERs TABLE </h2>
  <ul class="responsive-table">
    <li class="table-header">
      <div class="col col-1">User Id</div>
      <div class="col col-2">Name</div>
      <div class="col col-3">Email</div>
      <div class="col col-4">Phone Number</div>
    </li>
   { data.map(item => (
    <li class="table-row">
      <div class="col col-1" data-label="Job Id">{item.user_id}</div>
      <div class="col col-2" data-label="Customer Name">{item.name}</div>
      <div class="col col-4" data-label="Payment Status">{item.email}</div>
      <div class="col col-3" data-label="Amount">{item.phone}</div>
    </li>
    ))}
  </ul>
</div>

    </div>
  )
}
