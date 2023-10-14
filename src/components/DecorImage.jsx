import React from 'react'
import Wedding from "../assets/componentsAssets/6.mp4"


const DecorImage = () => {
  return (
    <div className='frame frame-bg'>
    <div className="frame__content">
      <video className="frame-media frame-media_2 frame-media_right" src={Wedding} autoPlay loop muted></video>
    </div>
  </div>
  )
}

export default DecorImage