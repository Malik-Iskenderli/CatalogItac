import React from 'react'
import Havalandirma from "../assets/componentsAssets/Havalandirma.jpg"
const VentilationImage = () => {
  return (
    <div className='frame frame-bg'>
    <div className="frame__content">
      <main className="frame-media frame-media_right" style={{ backgroundImage: `url(${Havalandirma})` }}></main>
    </div>
  </div>
  )
}

export default VentilationImage