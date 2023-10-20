import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const FixedPage = ({ activeSection }) => {
  const navigate = useNavigate()
  const [mouse, setMouse] = useState(false);

  // useEffect(()=>{
  // if(activeSection === 'metal'){
  //   setMouse(true)
  // }else if(activeSection === 'ventilation'){
  //   setMouse(true)
  // }else if(activeSection === 'kitchen'){
  //   setMouse(true)
  // }else if(activeSection === 'door'){
  //   setMouse(true)
  // }else if(activeSection === 'aframe'){
  //   setMouse(true)
  // }else if(activeSection === 'decor'){
  //   setMouse(true)
  // }else if(activeSection === 'mtk'){
  //   setMouse(true)
  // }else if(activeSection === ''){
  //   setMouse(false)
  // }else{
  //   setMouse(false)
  // }
  // },[activeSection])

  useEffect(() => {
    if (
      activeSection === 'metal' ||
      activeSection === 'ventilation' ||
      activeSection === 'kitchen' ||
      activeSection === 'door' ||
      activeSection === 'aframe' ||
      activeSection === 'decor' ||
      activeSection === 'mtk'
    ) {
      setMouse(true);
    } else {
      setMouse(false);
    }
  }, [activeSection]);
  return (
    <div className='fixed'
      onMouseEnter={() => { setMouse(true) }}
      onMouseLeave={() => { setMouse(false) }}>

      <div className='fix-btn' onClick={() => navigate('/metal')}>
        <lord-icon
          src='https://cdn.lordicon.com/bauutlwk.json'
          trigger='loop'
          delay='500'
          class={activeSection === 'metal' ? 'active-icon' : 'default-icon'}
        />
        {activeSection === 'metal' && (
          <span id='yazi'
            className='icon-span'
            style={{ opacity: mouse ? '1' : '0' }}> Metal</span>
        )}
      </div>
      <div className='fix-btn-vent' onClick={() => { navigate("/ventilation") }}>
        <lord-icon
          src="https://cdn.lordicon.com/tdssnudd.json"
          trigger="loop"
          delay="500"
          class={activeSection === 'ventilation' ? 'active-icon' : 'default-icon'}
        >
        </lord-icon>
        {activeSection === 'ventilation' && <span
          className='icon-span'
          style={{ opacity: mouse ? '1' : '0' }} >Havalandirma</span>}
      </div>
      <div className='fix-btn-kitchen' onClick={() => { navigate("/kitchen") }}>
        <lord-icon
          src="https://cdn.lordicon.com/bsfqgkwe.json"
          trigger="loop"
          delay="500"
          class={activeSection === 'kitchen' ? 'active-icon' : 'default-icon'}
        >
        </lord-icon>
        {activeSection === 'kitchen' && <span
          className='icon-span'
          style={{ opacity: mouse ? '1' : '0' }} >Mətbəx</span>}
      </div>
      <div className='fix-btn-door' onClick={() => { navigate("/door") }} >
        <lord-icon
          src="https://cdn.lordicon.com/twhkqyqy.json"
          trigger="loop"
          delay="500"
          class={activeSection === 'door' ? 'active-icon' : 'default-icon'}
        >
        </lord-icon>
        {activeSection === 'door' && <span
          className='icon-span'
          style={{ opacity: mouse ? '1' : '0' }} >Qapı və pəncərə</span>}
      </div>
      <div className='fix-btn-a_frame' onClick={() => { navigate("/a-frame") }}>
        <lord-icon
          src="https://cdn.lordicon.com/yipqsdwu.json"
          trigger="loop"
          delay="500"
          class={activeSection === 'aframe' ? 'active-icon' : 'default-icon'}
        >
        </lord-icon>
        {activeSection === 'aframe' && <span
          className='icon-span'
          style={{ opacity: mouse ? '1' : '0' }} >A frame</span>}
      </div>
      <div className='fix-btn-decor' onClick={() => { navigate("/decor") }}>
        <lord-icon
          src="https://cdn.lordicon.com/rhvwfyob.json"
          trigger="loop"
          delay="500"
          class={activeSection === 'decor' ? 'active-icon' : 'default-icon'}
        >
        </lord-icon>
        {activeSection === 'decor' && <span
          className='icon-span'
          style={{ opacity: mouse ? '1' : '0' }} >Dekor</span>}
      </div>
      <div className='fix-btn-mtk' onClick={() => { navigate("/mtk") }}>
        <lord-icon
          src="https://cdn.lordicon.com/wgwzmszu.json"
          trigger="loop"
          delay="500"
          class={activeSection === 'mtk' ? 'active-icon' : 'default-icon'}
        >
        </lord-icon>
        {activeSection === 'mtk' && <span
          className='icon-span'
          style={{ opacity: mouse ? '1' : '0' }} >MTK</span>}
      </div>
    </div>
  )
}

export default FixedPage

