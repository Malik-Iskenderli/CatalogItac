import React from 'react'
import MetalKonstrukciya from "../assets/componentsAssets/metal_konstrukciya.jpg"

const MetalConstructionImage = () => {
  return (
    <div className='frame frame-bg'>
    <div className="frame__content">
      <div className="frame-media frame-media_left" style={{ backgroundImage: `url(${MetalKonstrukciya})` }}></div>
    </div>
  </div>
  )
}

export default MetalConstructionImage