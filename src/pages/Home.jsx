import React, { useEffect, useState } from 'react'
import ItacVideo from '../assets/componentsAssets/itacindustry.mp4';
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
import BtnHome from '../components/Button/BtnHome';
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
  const [activeSection, setActiveSection] = useState('');
  const [see,setsee]=useState(false)
  useEffect(() => {

    const metalSectionTop = 0; 
    const ventilationSectionTop = metalSectionTop + 500;
    const kitchenSectionTop = ventilationSectionTop + 500;
    const doorSectionTop = kitchenSectionTop + 400;
    const aframeSectionTop = doorSectionTop + 400;
    const decorSectionTop = aframeSectionTop + 400;
    const mtkSectionTop = decorSectionTop + 400;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const isAtPageBottom = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight;

      if(scrollY === isAtPageBottom){
        setsee(true)
      }else{
        setsee(false)
      }

      if (scrollY >= metalSectionTop && scrollY < ventilationSectionTop) {
        setActiveSection('metal');
      } else if (scrollY >= ventilationSectionTop && scrollY < kitchenSectionTop) {
        setActiveSection('ventilation');
      } else if (scrollY >= kitchenSectionTop && scrollY < doorSectionTop) {
        setActiveSection('kitchen');
      } else if (scrollY >= doorSectionTop && scrollY < aframeSectionTop) {
        setActiveSection('door');
      } else if (scrollY >= aframeSectionTop && scrollY < decorSectionTop) {
        setActiveSection('aframe');
      } else if (scrollY >= decorSectionTop && scrollY < mtkSectionTop) {
        setActiveSection('decor');
      } else if (scrollY >= mtkSectionTop) {
        setActiveSection('mtk');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
    return (
        <>
            <div className="container">
            <FixedPage activeSection={activeSection} />
            {activeSection === 'mtk' ? <BtnHome/> : <></>}
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
                            <video className="frame-media " autoPlay loop muted src={ItacVideo}></video>
                        </div>
                    </div>

                </section>

            </div>
        </>
    )
}

export default Home







