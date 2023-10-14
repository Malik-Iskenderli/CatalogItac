import React from 'react'
import Aframe from "../assets/componentsAssets/5.mp4"

const AframeImage = () => {
  return (
    <div className='frame frame-bg'>
    <div className="frame__content">
      <video className="frame-media frame-media_left" src={Aframe} autoPlay loop muted></video>
    </div>
</div>
  )
}

export default AframeImage