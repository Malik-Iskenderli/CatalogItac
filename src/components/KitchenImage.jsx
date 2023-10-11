import React from 'react'
import Nerj from "../assets/componentsAssets/Nerj.jpg"

const KitchenImage = () => {
  return (
    <div className='frame frame-bg'>
          <div className="frame__content">
            <div className="frame-media frame-media_left" style={{ backgroundImage: `url(${Nerj})` }}></div>
          </div>
    </div>
  )
}

export default KitchenImage