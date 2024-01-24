import React from 'react'
// import style from './user.module.css'
import './user.css'
import { Link } from 'react-router-dom'
import Section from '../Section/Section'

export const User = () => {
  return (
    <div>
      <Section/>
      {/* <div className={style.container}>
  <h2>Responsive Tables Using LI <small>Triggers on 767px</small></h2>
  <ul className={style.responsive_table}>
    <li className={style.table-header}>
      <div className={style.col_1}>Job Id</div>
      <div className={style.col_2}>Customer Name</div>
      <div className={style.col_3}>Amount Due</div>
      <div className={style.col_4}>Payment Status</div>
    </li>
    
  </ul>
</div> */}
<div class="container">
  <h2>USERs TABLE </h2>
  <ul class="responsive-table">
    <li class="table-header">
      <div class="col col-1">User Id</div>
      <div class="col col-2">Name</div>
      <div class="col col-3">Email</div>
      <div class="col col-4">Phone Number</div>
    </li>
    <li class="table-row">
      <div class="col col-1" data-label="Job Id">1</div>
      <div class="col col-2" data-label="Customer Name">John Doe</div>
      <div class="col col-3" data-label="Amount">g@jjj.com</div>
      <div class="col col-4" data-label="Payment Status">07717288459</div>
    </li>
    <li class="table-row">
      <div class="col col-1" data-label="Job Id">2</div>
      <div class="col col-2" data-label="Customer Name">Jennifer Smith</div>
      <div class="col col-3" data-label="Amount">h@gmail.com</div>
      <div class="col col-4" data-label="Payment Status">07522222</div>
    </li>
    <li class="table-row">
      <div class="col col-1" data-label="Job Id">3</div>
      <div class="col col-2" data-label="Customer Name">John Smith</div>
      <div class="col col-3" data-label="Amount">h@gmail.com</div>
      <div class="col col-4" data-label="Payment Status">0780456+</div>
    </li>
    <li class="table-row">
      <div class="col col-1" data-label="Job Id">4</div>
      <div class="col col-2" data-label="Customer Name">John Carpenter</div>
      <div class="col col-3" data-label="Amount">h@gmail.com</div>
      <div class="col col-4" data-label="Payment Status">044444</div>
    </li>
  </ul>
</div>

<Link></Link>
    </div>
  )
}
