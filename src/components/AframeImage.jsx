import React from 'react'
import Aframe from "../assets/componentsAssets/AframeHouse.jpeg"

const AframeImage = () => {
  return (
    <div className='frame frame-bg'>
    <div className="frame__content">
      <div className="frame-media frame-media_left" style={{ backgroundImage: `url(${Aframe})` }}></div>
    </div>
</div>
  )
}

export default AframeImage