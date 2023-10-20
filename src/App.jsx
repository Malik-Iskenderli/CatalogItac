
import React from 'react';
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

