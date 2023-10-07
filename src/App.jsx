// import './App.css';
// import MetalKonstrukciya from "../src/assets/componentsAssets/metal_konstrukciya.jpg"
// import { useEffect, useState } from 'react';

// function App() {
//   let zSpacing = -1000,
//     lastPos = zSpacing / 5,
//     $frames = document.getElementsByClassName('frame'), // frame classlarini cagiriram hamisini
//     frames = Array.from($frames), // butun frame classlarini arraya atiram
//     zVals = []

//   window.onscroll = function () {
//     let top = document.documentElement.scrollTop,
//       delta = lastPos - top

//     lastPos = top

//     frames.forEach(function (n, i) {
//       zVals.push((i * zSpacing) + zSpacing)
//       zVals[i] += delta * -5.5
//       let frame = frames[i],
//         transform = `translateZ(${zVals[i]}px)`,
//         opacity = zVals[i] < Math.abs(zSpacing) / 1.8 ? 1 : 0.5
//       frame.setAttribute('style', `transform: ${transform}; opacity: ${opacity}`)
//     })
//   }
//   window.scrollTo(0, 1)

  
//   return (
//     <div className="container">
//       <section className='gallery'>

//           {/* itac indusry yazisi olan hisse */}
//         <div className='frame'>
//           <div className="frame__content">
//             <h2>ITAC INDUSTRY</h2>
//           </div>
//         </div>

//         {/* sekil olan frame soldaki */}
//         <div className='frame'>
//           <div className="frame__content">
//             <div className="frame-media frame-media_left" style={{backgroundImage: `url(${MetalKonstrukciya})`}}></div>
//           </div>
//         </div>

//           {/* sekil olan frame sagdaki */}
//           <div className='frame frame-bg'>
//           <div className="frame__content">
//             <main className="frame-media frame-media_right" style={{backgroundImage: `url(${MetalKonstrukciya})`}}></main>
//           </div>
//         </div>


//         <div className='frame '>
//           <div className="frame__content">
//             <div className="frame-media " style={{backgroundImage: `url(${MetalKonstrukciya})`}}></div>
//           </div>
//         </div>

//       </section>
//     </div>
//   );
// }

// export default App;








import React, { useEffect, useState } from 'react';
import './App.css';
import MetalKonstrukciya from './assets/componentsAssets/metal_konstrukciya.jpg';
import Havalandirma from './assets/componentsAssets/Havalandirma.jpg';



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
        <div className='frame'>
          <div className="frame__content">
            <h2>ITAC INDUSTRY</h2>
          </div>
        </div>


        {/* bosluq buraxmaq ucun */}
        <div className="frame">  </div>


            {/* yazilarimizin olan bolgesi sagda  */}
        <div className='frame'>
          <div className="frame__content text-right">
           <h3>Metal konstrukciya isleri</h3>
           <p>Kafe, restoran ve eyni zamanda diger teyinatli muesilerde sifaris esasinda metal konstrukciya islerin gorulmesi</p>
          </div>
        </div>

          {/* yazimiza uygun olan sekil solda  */}
        <div className='frame frame-bg'>
          <div className="frame__content">
            <div
              className="frame-media frame-media_left"
              style={{ backgroundImage: `url(${MetalKonstrukciya})` }}
            ></div>
          </div>
        </div>
       
          {/* boslluq buraxmaq ucun  */}
        <div className="frame"></div>

            {/* yazilarimizin olan bolgesi solda  */}
        <div className='frame'>
          <div className="frame__content text-left">
           <h3>Havalandirma sistemleri</h3>
           <p>Havalandirma sistemleri,kanal tipli kondisioner sistemlerin quraşdirilma ve temiri isleri</p>
          </div>
        </div>

          {/* seklimiz sagda olan  */}
        <div className='frame frame-bg'>
          <div className="frame__content">
            <main
              className="frame-media frame-media_right"
              style={{ backgroundImage: `url(${Havalandirma})` }}
            ></main>
          </div>
        </div>

        <div className='frame '>
          <div className="frame__content">
            <div
              className="frame-media "
              style={{backgroundImage: `url(${MetalKonstrukciya})` }}
            ></div>
          </div>
        </div>

      </section>
    </div>
  );
}

export default App;

