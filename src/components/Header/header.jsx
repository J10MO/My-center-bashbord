import React from 'react'
import style from './header.module.css'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <div>
      <div className={style.head}>
        <div className={style.logo}>
        <h1 className={style.hlogo}>DASHBORD<span className={style.logospan}>MC</span> </h1>
        </div>
        <ul className={`${style.nav}`}>
          <li><a href="/">Home</a></li>
          <li><a href="#">admin name</a></li>
          <li> <div className={style.imgcover}><image></image></div></li>
        </ul>

      </div>
      
    </div>
  )
}

export default Header
