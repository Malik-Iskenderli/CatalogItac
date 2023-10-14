import React from 'react'
import Nerj from "../assets/componentsAssets/3.MP4"

const KitchenImage = () => {
  return (
    <div className='frame frame-bg'>
          <div className="frame__content">
            <video className="frame-media frame-media_b frame-media_left" src={Nerj} autoPlay loop muted></video>
          </div>
    </div>
  )
}

export default KitchenImage