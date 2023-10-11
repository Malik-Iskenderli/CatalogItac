import React, { useEffect, useState } from 'react'
import MetalKonstrukciya from '../assets/componentsAssets/metal_konstrukciya.jpg';
import TitleName from '../components/TitleName';
import Void from '../components/Void';
import MetalConstructiuonText from '../components/MetalConstructiuonText';
import MetalConstructionImage from '../components/MetalConstructionImage';
import VentilationText from '../components/VentilationText';
import VentilationImage from '../components/VentilationImage';
import KitchenText from '../components/KitchenText';
import KitchenImage from '../components/KitchenImage';
import DoorText from '../components/DoorText';
import DoorImage from '../components/DoorImage';
import AframeHouseText from '../components/AframeHouseText';
import AframeImage from '../components/AframeImage';
import DecorText from '../components/DecorText';
import DecorImage from '../components/DecorImage';
import MtkText from '../components/MtkText';
import MtkImage from '../components/MtkImage';
import FixedPage from '../components/FixedPage';
const Home = () => {
    const [zVals, setZVals] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 1)
    let zSpacing = -800;
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
        frame.setAttribute('style', `transform: ${transform}; opacity: ${opacity}  `)
      });

    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
    return (
        <>
            <div className="container">
            <FixedPage/>
                <section className='gallery'>
                    <TitleName />
                    <Void />
                    <MetalConstructiuonText />
                    <MetalConstructionImage />
                    <Void />
                    <VentilationText />
                    <VentilationImage />
                    <Void />
                    <KitchenText />
                    <KitchenImage />
                    <Void />
                    <DoorText />
                    <DoorImage />
                    <Void />
                    <AframeHouseText />
                    <AframeImage />
                    <Void />
                    <DecorText />
                    <DecorImage />
                    <Void />
                    <MtkText />
                    <MtkImage />
                    <Void/>
                    <div className='frame '>
                        <div className="frame__content">
                            <div className="frame-media " style={{ backgroundImage: `url(${MetalKonstrukciya})` }}></div>
                        </div>
                    </div>

                </section>

            </div>
        </>
    )
}

export default Home