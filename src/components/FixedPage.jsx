import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const FixedPage = () => {
  const navigate = useNavigate()


  return (
    < div className='fixed'>
      <div className='fix-btn' onClick={() => { navigate("/metal") }}>
        <lord-icon
          src="https://cdn.lordicon.com/bauutlwk.json"
          trigger="loop"
          delay="500"
          style={{ width: "40px", height: "40px" }}>
        </lord-icon>

        <span id='yazi'>Metal</span>
      </div>

      <div className='fix-btn-vent' onClick={() => { navigate("/ventilation") }}>

        <lord-icon
          src="https://cdn.lordicon.com/tdssnudd.json"
          trigger="loop"
          delay="500"
          style={{ width: "40px", height: "40px" }}>
        </lord-icon>
        <span>Ventilation</span>
      </div>
      <div className='fix-btn-kitchen' onClick={() => { navigate("/kitchen") }}>
        <lord-icon
          src="https://cdn.lordicon.com/bsfqgkwe.json"
          trigger="loop"
          delay="500"
          style={{ width: "40px", height: "40px" }}>
        </lord-icon>
        <span>Kitchen</span>
      </div>
      <div className='fix-btn-door' onClick={() => { navigate("/door") }}>
      <lord-icon
          src="https://cdn.lordicon.com/twhkqyqy.json"
          trigger="loop"
          delay="500"
          style={{ width: "40px", height: "40px" }}>
        </lord-icon>
         <span>Door</span>
         </div>
      <div  className='fix-btn-a_frame' onClick={() => { navigate("/a-frame") }}>
      <lord-icon
          src="https://cdn.lordicon.com/yipqsdwu.json"
          trigger="loop"
          delay="500"
          style={{ width: "40px", height: "40px" }}>
        </lord-icon>
         <span>A frame</span>
         </div>
      <div className='fix-btn-decor' onClick={() => { navigate("/decor") }}> 
      <lord-icon
          src="https://cdn.lordicon.com/rhvwfyob.json"
          trigger="loop"
          delay="500"
          style={{ width: "40px", height: "40px" }}>
        </lord-icon>
      <span>Decor</span>
      </div>
      <div className='fix-btn-mtk' onClick={() => { navigate("/mtk") }}> 
      <lord-icon
          src="https://cdn.lordicon.com/wgwzmszu.json"
          trigger="loop"
          delay="500"
          style={{ width: "40px", height: "40px" }}>
        </lord-icon>
      <span>MTK</span>
      </div>
    </div>
  )
}

export default FixedPage



// import React, { useState } from 'react';

// const FixedPage = () => {
//   const [showNames, setShowNames] = useState(false);

//   const items = [
//     { name: 'Metal', icon: 'metal-icon.png' },
//     { name: 'Ventilation', icon: 'ventilation-icon.png' },
//     { name: 'Kitchen', icon: 'kitchen-icon.png' },
//     { name: 'Door', icon: 'door-icon.png' },
//     { name: 'Aframe', icon: 'aframe-icon.png' },
//     { name: 'Decor', icon: 'decor-icon.png' },
//     { name: 'Mtk', icon: 'mtk-icon.png' },
//   ];

//   return (
//     <div className='fixed'>
//       <div className="navbar">
//         {items.map((item, index) => (
//           <div
//             key={index}
//             className="navbar-item"
//             onMouseEnter={() => setShowNames(true)}
//             onMouseLeave={() => setShowNames(false)}
//           >
//             <img src={item.icon} alt={item.name} />
//           </div>
//         ))}
//       </div>
//       {showNames && (
//         <div className="item-names">
//           {items.map((item, index) => (
//             <div key={index} className="item-name">
//               {item.name}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default FixedPage;


