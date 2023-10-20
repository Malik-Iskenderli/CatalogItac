import React, { useEffect, useState } from 'react'
import "../App.css"
import Void from '../components/Void';
import V1 from "../assets/pagesAssets/2_1.jpg"
import V2 from "../assets/pagesAssets/2_2.jpg"
import V3 from "../assets/pagesAssets/2_3.jpg"
import BtnBack from '../components/Button/BtnBack';
const Ventilation = () => {
  const [zVals, setZVals] = useState([]);
  useEffect(() => {
    window.scrollTo(0, 1)
    let zSpacing = -2000;
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
            <h3>müəsİsələr üçün Havalandırma sİstemlərİ</h3>
            <p>Broler təsərüfatı, istixana,zavod və digər istehsal müəsisələrində havalandırma sistemlərinin quraşdılması</p>
            <p>65 AZN-dən (Kvadrat/metr) başlayan qiymətlərlə</p>
          </div>
        </div>
        <div className='frame frame-bg'>
          <div className="frame__content">
            <div className="frame-media frame-media_left" style={{ backgroundImage: `url(${V1})` }}></div>
          </div>
        </div>
        <Void />
        <div className='frame'>
          <div className="frame__content text-left">
            <h3> Kafe və Restoranlar üçün Havalandirma sİstemlerİ</h3>
            <p>İctimai iaşə obyektləri üçün,kanal tipli kondisioner sistemlərinin istehsalı və quraşdirılması</p>
            <p>62 AZN-dən (Kvadrat/metr) başlayan qiymətlərlə</p>
          </div>
        </div>
        <div className='frame frame-bg'>
          <div className="frame__content">
            <main className="frame-media frame-media_right" style={{ backgroundImage: `url(${V2})` }}></main>
          </div>
        </div>
        <Void />
        <div className='frame metalFrame'>
          <div className="frame__content text-right">
            <h3>Mətbəx üçün havalandırma sİstemlərİ</h3>
            <p>Havalandırma zontlarının istənilən ölçüdə və formada hazırlanması</p>
            <p>62 AZN-dən (Kvadrat/metr) başlayan qiymətlərlə</p>
          </div>
        </div>
        <div className='frame frame-bg'>
          <div className="frame__content">
            <div className="frame-media frame-media_left" style={{ backgroundImage: `url(${V3})` }}></div>
          </div>
        </div>
        <Void />
        {/* <div className='frame'>
          <div className="frame__content text-left">
            <h3>Havalandirma sistemleri</h3>
            <p>Havalandirma sistemleri,kanal tipli kondisioner sistemlerin quraşdirilma ve temiri isleri</p>
          </div>
        </div>
        <div className='frame frame-bg'>
          <div className="frame__content">
            <main className="frame-media frame-media_right" style={{ backgroundImage: `url(${Havalandirma})` }}></main>
          </div>
        </div>
        <Void />
        <div className='frame metalFrame'>
          <div className="frame__content text-right">
            <h3>Metal konstrukciya isleri</h3>
            <p>Kafe, restoran ve eyni zamanda diger teyinatli muesilerde sifaris esasinda metal konstrukciya islerin gorulmesi</p>
          </div>
        </div>
        <div className='frame frame-bg'>
          <div className="frame__content">
            <div className="frame-media frame-media_left" style={{ backgroundImage: `url(${MetalKonstrukciya})` }}></div>
          </div>
        </div> */}
      </section>

    </div>
  )
}

export default Ventilation