
import React, { useEffect, useState } from 'react';
import {Route, Routes} from "react-router-dom";
import './App.css';

import Metal from "./pages/Metal";
import Ventilation from './pages/Ventilation';
import Kitchen from './pages/Kitchen';
import Door from './pages/Door';
import AFrame from './pages/AFrame';
import Decor from './pages/Decor';
import Mtk from './pages/Mtk';
import Home from './pages/Home';


function App() {
  // const [zVals, setZVals] = useState([]);

  // useEffect(() => {
  //   window.scrollTo(0, 1)
  //   let zSpacing = -900;
  //   let lastPos = zSpacing / 6;
  //   let $frames = document.getElementsByClassName('frame');
  //   let frames = Array.from($frames)

  //   let handleScroll = () => {
  //     let top = document.documentElement.scrollTop;
  //     let delta = lastPos - top;

  //     lastPos = top;

  //     frames.forEach((n, i) => {
  //       zVals.push((i * zSpacing) + zSpacing);
  //       zVals[i] += delta * -5.5;
  //       let frame = frames[i],
  //         transform = `translateZ(${zVals[i]}px)`,
  //         opacity = zVals[i] < Math.abs(zSpacing) / 1.8 ? 1 : 0
  //       frame.setAttribute('style', `transform: ${transform}; opacity: ${opacity}`)
  //     });

  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  return (
  <>
    
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="/metal" element={<Metal/>}/>
      <Route path='/ventilation' element={<Ventilation/>}/>
      <Route path='/kitchen' element={<Kitchen/>}/>
      <Route path='/door' element={<Door/>}/>
      <Route path='/a-frame' element={<AFrame/>}/>
      <Route path='/decor' element={<Decor/>}/>
      <Route path='/mtk' element={<Mtk/>}/>
     </Routes>
  </>
  );
}

export default App;

