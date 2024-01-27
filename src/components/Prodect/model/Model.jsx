import React from 'react'
import './Model.css'

const Model = ({closemodal}) => {
  return (
    <div className='pmcontainer' onClick={(e)=>{
        if(e.target.className==="pmcontainer")
        closemodal()
    }}>
      <div className="model">
       <form action="">
        <div className="form-grop">
        <label htmlFor="name" >Prodect Name</label>
        <input type="text" id="name"/><br/>
        </div>
        <div className="form-grop">
        <label htmlFor="name">cover</label>
        <input type="text" id="cover"/><br/>
</div>
<div className="form-grop">
        <label htmlFor="name">video</label>
        <input type="text" id="video"/><br/></div>
        <div className="form-grop">
        <label htmlFor="name">detils</label>
        <input type="text" id="detils"/><br/></div>
        <div className="form-grop">
        <label htmlFor="name">Work Time</label>
        <input type="text" id="Work Time"/><br/></div>
        <div className="form-grop">
        <label htmlFor="name">evaluation</label>
        <input type="text" id="evaluation"/><br/></div>
        <div className="form-grop">
        <label htmlFor="name">price</label>
        <input type="text" id="price"/><br/></div>
        <div className="form-grop">
        <label htmlFor="name">Center</label>
        <input type="text" id="Center"/><br/></div>
       <div className="btn-grop">
       <button id='sabmit' onClick={()=>{alert('Done')}} className='sabmit-btn'>sabmit</button>
       <button onClick={closemodal} className='cancel-btn'>Cancel</button>
       </div>
       </form>
      </div>
    </div>
  )
}

export default Model
