
import React, { useEffect, useState } from 'react';
import './App.css';
import MetalKonstrukciya from './assets/componentsAssets/metal_konstrukciya.jpg';
import Havalandirma from './assets/componentsAssets/Havalandirma.jpg';
import Nerj from './assets/componentsAssets/Nerj.jpg';
import TitleName from './components/TitleName';
import Void from './components/Void';
import MetalConstructiuonText from './components/MetalConstructiuonText';
import MetalConstructionImage from './components/MetalConstructionImage';
import VentilationText from './components/VentilationText';
import VentilationImage from './components/VentilationImage';
import KitchenText from './components/KitchenText';
import KitchenImage from './components/KitchenImage';

function App() {
  const [zVals, setZVals] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 1)
    let zSpacing = -1000;
    let lastPos = zSpacing / 5;
    let $frames = document.getElementsByClassName('frame');
    let frames = Array.from($frames)

    let handleScroll = () => {
      let top = document.documentElement.scrollTop;
      let delta = lastPos - top;

      lastPos = top;

      frames.forEach((n, i) => {
        zVals.push((i * zSpacing) + zSpacing);
        zVals[i] += delta * -5.5;
        let frame = frames[i],
          transform = `translateZ(${zVals[i]}px)`,
          opacity = zVals[i] < Math.abs(zSpacing) / 1.8 ? 1 : 0
        frame.setAttribute('style', `transform: ${transform}; opacity: ${opacity}`)
      });

    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="container">

      <section className='gallery'>

        {/* itac industry yazi olan hisse */}
        <TitleName/>
        {/* bosluq buraxmaq ucun */}
        <Void/>
        {/* yazilarimizin olan bolgesi sagda  */}
        <MetalConstructiuonText/>
        {/* yazimiza uygun olan sekil solda  */}
        <MetalConstructionImage/>
        {/* boslluq buraxmaq ucun  */}
        <Void/>
        {/* yazilarimizin olan bolgesi solda  */}
        <VentilationText/>
        {/* seklimiz sagda olan  */}
        <VentilationImage/> 
        {/* boslluq buraxmaq ucun  */}
        <Void/>
       
       <KitchenText/>
        {/* yazimiza uygun olan sekil solda  */}
       <KitchenImage/>
        {/* boslluq buraxmaq ucun  */}
        <Void/>



        <div className='frame '>
          <div className="frame__content">
            <div className="frame-media " style={{ backgroundImage: `url(${MetalKonstrukciya})` }}></div>
          </div>
        </div>

      </section>
    </div>
  );
}

export default App;

