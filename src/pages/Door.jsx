import React, { useEffect, useState } from 'react'
import "../App.css"
import Void from '../components/Void';
import D1 from "../assets/pagesAssets/d_1.webp"
import D2 from "../assets/pagesAssets/d_2.jpg"
import D3 from "../assets/pagesAssets/d_3.jpg"
import D4 from "../assets/pagesAssets/d_4.jpg"
import BtnBack from '../components/Button/BtnBack';
const Door = () => {
  const [zVals, setZVals] = useState([]);
  useEffect(() => {
    window.scrollTo(0, 1)
    let zSpacing = -1800;
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
      <BtnBack />
      <section className='gallery'>
        <Void />
        <div className='frame metalFrame'>
          <div className="frame__content text-right">
            <h3>Pultla İdarə olunan darvazalar</h3>
            <p>Tək qanadlı və ya cüt qanadlı olmaq üzrə giriş və çıxışlarda quraşdırılan darvaza qolları rahat açılıb-qapanmaq qabiliyyətinə malikdir.</p>
          </div>
        </div>
        <div className='frame frame-bg'>
          <div className="frame__content">
            <div className="frame-media frame-media_left" style={{ backgroundImage: `url(${D2})` }}></div>
          </div>
        </div>
        <Void />
        <div className='frame'>
          <div className="frame__content text-left">
            <h3>Dəmİr qapıların istehsal olunub yerİndə quraşdırılması</h3>
            <p>İstehsal mərhələsində, dəmir materialı, istifadəçinin tələblərinə və qapının xüsusiyyətlərinə əsaslanaraq kəsilir, biçilir və şəkilləndirilir. Qapının istehsal mərhələsi başa çatdıqdan sonra, növbəti addım onun yerində quraşdırılmasıdır.</p>
          </div>
        </div>
        <div className='frame frame-bg'>
          <div className="frame__content">
            <main className="frame-media frame-media_right" style={{ backgroundImage: `url(${D1})` }}></main>
          </div>
        </div>
        <Void />
        <div className='frame metalFrame'>
          <div className="frame__content text-right">
            <h3>Pencərə üçün məhəccərlər</h3>
            <p>Pencərə üçün məhəccərlər, binaların estetik görünüşünü əks etdirir.Onların doğru istehsalı və yerində quraşdırılması, bina sahiblərinin və sakinlərinin təhlükəsizlik tələblərinə cavab verir.</p>
          </div>
        </div>
        <div className='frame frame-bg'>
          <div className="frame__content">
            <div className="frame-media frame-media_left" style={{ backgroundImage: `url(${D3})` }}></div>
          </div>
        </div>
        <Void />
        <div className='frame'>
          <div className="frame__content text-left">
            <h3>Dəmİr PİLƏKƏNLƏRİN İSTEHSALI</h3>
            <p>"Dəmir piləkənlər inşaat və sənaye sahələrində geniş şəkildə istifadə olunan metal məhsullarınan biridir.Piləkənlər binaların struktural təhlükəsizliyini təmin edir və estetik dizayna xidmət edir"</p>
          </div>
        </div>
        <div className='frame frame-bg'>
          <div className="frame__content">
            <main className="frame-media frame-media_right" style={{ backgroundImage: `url(${D4})` }}></main>
          </div>
        </div>
        <Void />
        {/* <div className='frame metalFrame'>
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

export default Door