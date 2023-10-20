import React, { useEffect, useState } from 'react'
import "../App.css"
import Void from '../components/Void';
import M1 from "../assets/pagesAssets/7_1.jpeg"
import M2 from "../assets/pagesAssets/7_2.jpg"
import M3 from "../assets/pagesAssets/7_3.jpg"
import M4 from "../assets/pagesAssets/7_4.jpg"
import M5 from "../assets/pagesAssets/7_5.jpg"
import BtnBack from '../components/Button/BtnBack';
const Mtk = () => {
  const [zVals, setZVals] = useState([]);
  useEffect(() => {
    window.scrollTo(0, 1)
    let zSpacing = -1450;
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
    <div className='container'>
    <BtnBack/>
    <section className='gallery'>
      <Void />
      <div className='frame metalFrame'>
        <div className="frame__content text-right">
          <h3>İstirahət meydançaları</h3>
          <p>Yaşayış kompleksləri üçün istirahet meydançalarının istehsalı və quraşdırılması</p>
        </div>
      </div>
      <div className='frame frame-bg'>
        <div className="frame__content">
          <div className="frame-media frame-media_left" style={{ backgroundImage: `url(${M1})` }}></div>
        </div>
      </div>
      <Void />
      <div className='frame'>
        <div className="frame__content text-left">
          <h3>İşıq dirəkləri</h3>
          <p>İstənilən dizayna uyğun işıq dirəklərin istehsalı və quraşdırılması</p>
        </div>
      </div>
      <div className='frame frame-bg'>
        <div className="frame__content">
          <main className="frame-media frame-media_right" style={{ backgroundImage: `url(${M2})` }}></main>
        </div>
      </div>
      <Void />
      {/* <div className='frame metalFrame'>
        <div className="frame__content text-right">
          <h3>Metal konstrukciya isleri</h3>
          <p>Kafe, restoran ve eyni zamanda diger teyinatli muesilerde sifaris esasinda metal konstrukciya islerin gorulmesi</p>
        </div>
      </div> */}
      <div className='frame frame-bg'>
        <div className="frame__content">
          <div className="frame-media" style={{ backgroundImage: `url(${M3})` }}></div>
        </div>
      </div>
      <Void />
      <div className='frame'>
        <div className="frame__content text-left">
          <h3>Oturacaqlar</h3>
          <p>Yaşayış kompleksleri üçün istənilən dizaynda oturacaqların istehsalı və quraşdırılması</p>
        </div>
      </div>
      <div className='frame frame-bg'>
        <div className="frame__content">
          <main className="frame-media frame-media_right" style={{ backgroundImage: `url(${M4})` }}></main>
        </div>
      </div>
      <Void />
      {/* <div className='frame metalFrame'>
        <div className="frame__content text-right">
          <h3>Metal konstrukciya isleri</h3>
          <p>Kafe, restoran ve eyni zamanda diger teyinatli muesilerde sifaris esasinda metal konstrukciya islerin gorulmesi</p>
        </div>
      </div> */}
      <div className='frame frame-bg'>
        <div className="frame__content">
          <div className="frame-media" style={{ backgroundImage: `url(${M5})` }}></div>
        </div>
      </div>
    </section>

  </div>
  )
}

export default Mtk