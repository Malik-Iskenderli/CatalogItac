import React from 'react'
import Havalandirma from "../assets/componentsAssets/2.MOV"
const VentilationImage = () => {
  return (
    <div className='frame frame-bg'>
      <div className="frame__content">
        <video className="frame-media frame-media_2 frame-media_right" src={Havalandirma} autoPlay loop muted></video>
      </div>
    </div>
  )
}

export default VentilationImage