import React, { useState } from 'react';
import './prodect.css'; // Import the CSS file for styling

const Prodect = () => {
  const [data, setData] = useState([
    // Your data here, each object should have properties for each column
    { id: 1, col1: 'Value 1', col2: 'Value 2',col3: 'Value 2',col4: 'Value 2',col5: 'Value 2',col6: 'Value 2',col7: 'Value 2',col8: 'Value 2',col9: 'Value 2',col10: 'Value 2'},
    { id: 2, col1: 'Value 3', col2: 'Value 4', /* ... */ },
    // Add more rows as needed
  ]);

  const handleEdit = (id) => {
    // Handle edit logic
    console.log(`Editing row with id: ${id}`);
  };

  const handleDelete = (id) => {
    // Handle delete logic
    setData(data.filter(item => item.id !== id));
    console.log(`Deleting row with id: ${id}`);
  };

  return (
<div>
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

    <table className="data-table">
      <thead>
        <tr>
          <th>Prodect id</th>
          <th>prodect name</th>
          <th>cover</th>
          <th>logo</th>
          <th>Evaluetion</th>
          <th>Work Time</th>
          <th>Phone</th>
          <th>log</th>
          <th>lat</th>
          <th>Catogeres</th>
          {/* Add more column headers as needed */}
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {data.map(row => (
          <tr key={row.id}>
            <td>{row.col1}</td>
            <td>{row.col2}</td>
            <td>{row.col3}</td>
            <td>{row.col4}</td>
            <td>{row.col5}</td>
            <td>{row.col6}</td>
            <td>{row.col7}</td>
            <td>{row.col8}</td>
            <td>{row.col9}</td>
            <td>{row.col10}</td>
            {/* Add more columns as needed */}
            <td>
              <button className="edit-btn" onClick={() => handleEdit(row.id)}>Edit</button>
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

export default Prodect;