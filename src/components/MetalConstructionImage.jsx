import React, { useRef } from 'react'
import MetalKonstrukciya from "../assets/componentsAssets/1.MP4"

const MetalConstructionImage = () => {

  return (
    <div className='frame frame-bg'>
      <div className="frame__content">
        <video  className="frame-media frame-media_left"   autoPlay loop muted src={MetalKonstrukciya} ></video>
      </div>
    </div>
  )
}

export default MetalConstructionImage