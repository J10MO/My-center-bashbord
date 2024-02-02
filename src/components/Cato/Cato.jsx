
import React , { useState, useEffect } from 'react';
import './Cato.css'
import Section from '../Section/Section';
import axios from 'axios';

const tableData = [
    { id: 1, name: 'Item 1', logo: 'logo1.png' },
    { id: 2, name: 'Item 2', logo: 'logo2.png' },
    { id: 3, name: 'Item 3', logo: 'logo3.png' },
  ];
const Cato = () => {



  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

   useEffect(() => {
    axios.get('http://localhost:3000/api/v1/categories/show')
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
            <th>Logo</th>
            <th className='act'>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.id}>
              <td>{item.cat_id}</td>
              <td>{item.name}</td>
              <td><img src={item.img} alt="" className='clogo'/> </td>
              
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
  )
}

export default Cato
