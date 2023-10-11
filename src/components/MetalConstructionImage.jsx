import React from 'react'
import MetalKonstrukciya from "../assets/componentsAssets/metal_konstrukciya.jpg"
import { useNavigate } from 'react-router'

const MetalConstructionImage = () => {
  const navigate = useNavigate()
  return (
    <div className='frame frame-bg'>
    <div className="frame__content">
      <div className="frame-media frame-media_left" onClick={()=> navigate('/metal')} style={{ backgroundImage: `url(${MetalKonstrukciya})` }}></div>
    </div>
  </div>
  )
}

export default MetalConstructionImage