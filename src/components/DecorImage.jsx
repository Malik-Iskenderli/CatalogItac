import React from 'react'
import Wedding from "../assets/componentsAssets/Wedding.jpg"


const DecorImage = () => {
  return (
    <div className='frame frame-bg'>
    <div className="frame__content">
      <main className="frame-media frame-media_right" style={{ backgroundImage: `url(${Wedding})` }}></main>
    </div>
  </div>
  )
}

export default DecorImage