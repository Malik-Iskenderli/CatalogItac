import React from 'react'
import Mtk from "../assets/componentsAssets/Mtk.jpg"

const MtkImage = () => {
  return (
    <div className='frame frame-bg'>
    <div className="frame__content">
      <div className="frame-media frame-media_left" style={{ backgroundImage: `url(${Mtk})` }}></div>
    </div>
    </div>
  )
}

export default MtkImage