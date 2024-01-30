import React from 'react'
import Section from '../Section/Section'
import './home.css'
const Home = () => {
  return (
    <div>
        <Section/>
     <main className='home_container'>
     <p>Welcome To Dashbord</p>
  <section className="animation">
    <div className="first"><div>MY CENTER</div></div>
    <div className="second"><div>JASEM MOHAMMED</div></div>
    <div className="third"><div>SAFA AHMED</div></div>
  </section>
     </main>
    </div>
  )
}

export default Home
