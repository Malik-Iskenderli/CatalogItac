import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const FixedPage = () => {
  const navigate = useNavigate()
  const [mouse , setMouse] =useState(false);


  // const handleMouseLeave = () => {
  //   setMouse(false)
  // }

 
  return (
    <div className='fixed'
     onMouseEnter={()=>{setMouse(true)}}
      onMouseLeave={()=>{setMouse(false)}}
      
      >
     
      <div className='fix-btn' onClick={() => { navigate("/metal") }}>
        <lord-icon
          src="https://cdn.lordicon.com/bauutlwk.json"
          trigger="loop"
          delay="500"
          style={{ width: "40px", height: "40px" }}>
        </lord-icon>

        <span id='yazi' 
        style={{ opacity: mouse ? '1' : '0' }}
        >Metal</span>
      </div>

      <div className='fix-btn-vent' onClick={() => { navigate("/ventilation") }}>

        <lord-icon
          src="https://cdn.lordicon.com/tdssnudd.json"
          trigger="loop"
          delay="500"
          style={{ width: "40px", height: "40px" }}>
        </lord-icon>
        <span
        style={{ opacity: mouse ? '1' : '0' }}
        >Havalandırma</span>
      </div>
      <div className='fix-btn-kitchen' onClick={() => { navigate("/kitchen") }}>
        <lord-icon
          src="https://cdn.lordicon.com/bsfqgkwe.json"
          trigger="loop"
          delay="500"
          style={{ width: "40px", height: "40px" }}>
        </lord-icon>
        <span
        style={{ opacity: mouse ? '1' : '0' }}
        >Mətbəx</span>
      </div>
      <div className='fix-btn-door' onClick={() => { navigate("/door") }} >
      <lord-icon
          src="https://cdn.lordicon.com/twhkqyqy.json"
          trigger="loop"
          delay="500"
          style={{ width: "40px", height: "40px" }}>
        </lord-icon>
         <span
         style={{ opacity: mouse ? '1' : '0' }}
         >Qapı və pəncərə</span>
         </div>
      <div  className='fix-btn-a_frame' onClick={() => { navigate("/a-frame") }}>
      <lord-icon
          src="https://cdn.lordicon.com/yipqsdwu.json"
          trigger="loop"
          delay="500"
          style={{ width: "40px", height: "40px" }}>
        </lord-icon>
         <span
         style={{ opacity: mouse ? '1' : '0' }}
         >A frame</span>
         </div>
      <div className='fix-btn-decor' onClick={() => { navigate("/decor") }}> 
      <lord-icon
          src="https://cdn.lordicon.com/rhvwfyob.json"
          trigger="loop"
          delay="500"
          style={{ width: "40px", height: "40px" }}>
        </lord-icon>
      <span
      style={{ opacity: mouse ? '1' : '0' }}
      >Decor</span>
      </div>
      <div className='fix-btn-mtk' onClick={() => { navigate("/mtk") }}> 
      <lord-icon
          src="https://cdn.lordicon.com/wgwzmszu.json"
          trigger="loop"
          delay="500"
          style={{ width: "40px", height: "40px" }}>
        </lord-icon>
      <span
      style={{ opacity: mouse ? '1' : '0' }}
      >MTK</span>
      </div>
    </div>
  )
}

export default FixedPage

