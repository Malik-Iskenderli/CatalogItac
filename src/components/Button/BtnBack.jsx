import React from 'react'
import { useNavigate } from 'react-router'
const BtnBack = () => {
const navigate = useNavigate()
  return (
    <div className='btn' 
    style={{
        display:"inline-block",
        cursor:"pointer",
        width:"50px",
        height:"50px",
        position:"fixed",
        top:"10px",
        left:"20px",
        zIndex:"1"
    }}
    onClick={()=>{navigate(-1)}} >
        <lord-icon 
          src="https://cdn.lordicon.com/fpbjnrwq.json"
          trigger="loop"
          delay="500"
          style={{ width: "40px", height: "40px" }}
          stroke="bold"
          className='btn-back'
          >
        </lord-icon>
    </div>
  )
}

export default BtnBack