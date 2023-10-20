import React, { useEffect, useState } from 'react'
import "../App.css"
import Void from '../components/Void';
import K1 from "../assets/pagesAssets/3_1.jpg"
import K2 from "../assets/pagesAssets/3_2.jpg"
import K3 from "../assets/pagesAssets/3_3.jpg"
import K4 from "../assets/pagesAssets/3_4.jpg"
import K5 from "../assets/pagesAssets/3_5.jpg"
import K6 from "../assets/pagesAssets/3_6.jpg"
import K7 from "../assets/pagesAssets/3_7.jpg"
import K8 from "../assets/pagesAssets/3_8.jpg"
import K9 from "../assets/pagesAssets/3_9.jpg"
import BtnBack from '../components/Button/BtnBack';
const Kitchen = () => {
  const [zVals, setZVals] = useState([]);
  useEffect(() => {
    window.scrollTo(0, 1)
    let zSpacing = -1200;
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
          <h3> Paslanmaz poladdan mətbəx masaları</h3>
          <p>Yığılaraq kiçilə bilən və daşınması rahat olan paslanmaz poladdan mətbəx masalarının istehsalı</p>
          <p>375 AZN-dən başlayan qiymətlərlə</p>
        </div>
      </div>
      <div className='frame frame-bg'>
        <div className="frame__content">
          <div className="frame-media frame-media_left" style={{ backgroundImage: `url(${K1})` }}></div>
        </div>
      </div>
      <Void />
      {/* <div className='frame'>
        <div className="frame__content text-left">
          <h3>Havalandirma sistemleri</h3>
          <p>Havalandirma sistemleri,kanal tipli kondisioner sistemlerin quraşdirilma ve temiri isleri</p>
        </div>
      </div> */}
      <div className='frame frame-bg'>
        <div className="frame__content">
          <main className="frame-media" style={{ backgroundImage: `url(${K2})` }}></main>
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
          <div className="frame-media" style={{ backgroundImage: `url(${K3})` }}></div>
        </div>
      </div>
      <Void />
      {/* <div className='frame'>
        <div className="frame__content text-left">
          <h3>Havalandirma sistemleri</h3>
          <p>Havalandirma sistemleri,kanal tipli kondisioner sistemlerin quraşdirilma ve temiri isleri</p>
        </div>
      </div> */}
      <div className='frame frame-bg'>
        <div className="frame__content">
          <main className="frame-media" style={{ backgroundImage: `url(${K4})` }}></main>
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
          <div className="frame-media" style={{ backgroundImage: `url(${K5})` }}></div>
        </div>
      </div>

      <div className='frame metalFrame'>
        <div className="frame__content text-right">
          <h3> Paslanmaz poladdan mətbəx avadanlıqları</h3>
          <p>350 AZN-dən başlayan qiymətlərlə</p>
        </div>
      </div>
      <div className='frame frame-bg'>
        <div className="frame__content">
          <div className="frame-media frame-media_left" style={{ backgroundImage: `url(${K6})` }}></div>
        </div>
      </div>

      <div className='frame frame-bg'>
        <div className="frame__content">
          <div className="frame-media" style={{ backgroundImage: `url(${K7})` }}></div>
        </div>
      </div>
      <div className='frame frame-bg'>
        <div className="frame__content">
          <div className="frame-media" style={{ backgroundImage: `url(${K8})` }}></div>
        </div>
      </div>
      <div className='frame frame-bg'>
        <div className="frame__content">
          <div className="frame-media" style={{ backgroundImage: `url(${K9})` }}></div>
        </div>
      </div>
    </section>

  </div>
  )
}

export default Kitchen