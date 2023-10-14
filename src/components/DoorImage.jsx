import React from 'react'
import Door from "../assets/componentsAssets/4.mp4"

const DoorImage = () => {
  return (
    <div className='frame frame-bg'>
    <div className="frame__content">
      <video className="frame-media frame-media_2 frame-media_right" src={Door} autoPlay loop muted></video>
    </div>
  </div>
  )
}

export default DoorImage