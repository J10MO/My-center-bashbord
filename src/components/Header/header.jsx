import React from 'react'
import style from './header.module.css'
import { Link } from 'react-router-dom'
import avatar from '../../assets/admin.avif'


const Header = () => {
  return (
    <div>
      <div className={style.head}>
        <div className={style.logo}>
        <h1 className={style.hlogo}>DASHBORD<span className={style.logospan}>MC</span> </h1>
        </div>
        <ul className={`${style.nav}`}>
          <li><a href="/">Home</a></li>
          <li><a href="#">jasem mohammed</a></li>
          <li> <div className={style.imgcover}><img src={avatar} className={style.avatar}/></div></li>
        </ul>

      </div>
      
    </div>
  )
}

export default Header
