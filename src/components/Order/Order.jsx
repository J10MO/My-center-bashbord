import React from 'react'
import './Order.css'
import Section from '../Section/Section';


const initialOrderData = [
    { orderId: 'OD123', customerName: 'John Doe', product: 'Product A', date: 2, total: 150, status: 'Waiting' },
    { orderId: 'OD124', customerName: 'Jane Smith', product: 'Product B', date: 1, total: 75, status: 'Done' },
    { orderId: 'OD125', customerName: 'Bob Johnson', product: 'Product C', date: 3, total: 200, status: 'Cancelled' },
  ];
const Order = () => {
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
          <div className="order-table-container">
      <table className="order-table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer Name</th>
            <th>Product</th>
            <th>Date</th>
            <th>Price</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {initialOrderData.map(order => (
            <tr key={order.orderId}>
              <td>{order.orderId}</td>
              <td>{order.customerName}</td>
              <td>{order.product}</td>
              <td>{order.date}</td>
              <td>${order.total}</td>
              <td className={`status-${order.status.toLowerCase()}`}>{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
    </div>
  )
}

export default Order
