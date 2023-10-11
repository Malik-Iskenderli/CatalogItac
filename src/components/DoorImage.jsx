import React from 'react'
import Door from "../assets/componentsAssets/door.jpg"

const DoorImage = () => {
  return (
    <div className='frame frame-bg'>
    <div className="frame__content">
      <main className="frame-media frame-media_right" style={{ backgroundImage: `url(${Door})` }}></main>
    </div>
  </div>
  )
}

export default DoorImage