import React from 'react'
import Mtk from "../assets/componentsAssets/7.MP4"

const MtkImage = () => {
  return (
    <div className='frame frame-bg'>
    <div className="frame__content">
      <video className="frame-media frame-media_left"muted loop autoPlay src={Mtk}></video>
    </div>
    </div>
  )
}

export default MtkImage