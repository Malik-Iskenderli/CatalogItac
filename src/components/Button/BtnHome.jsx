import React, { useState } from 'react';
import { useNavigate } from 'react-router';

const BtnHome = () => {
  const navigate = useNavigate();
  const [isAtTop, setIsAtTop] = useState(true);

  const handleScroll = () => {
    if (window.scrollY === 0) {
      setIsAtTop(true);
    } else {
      setIsAtTop(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Scroll olayını dinle
  window.addEventListener('scroll', handleScroll);

  return (
    <div
      className={`BtnHome ${isAtTop ? 'hidden' : ''}`}
      style={{
        display: 'inline-block',
        cursor: 'pointer',
        width: '50px',
        height: '50px',
        position: 'fixed',
        bottom: '40px',
        right: '40px',
        zIndex: '1',
      }}
      onClick={scrollToTop}
    >
      <lord-icon
        src="https://cdn.lordicon.com/dbxmvtbf.json"
        trigger="loop"
        delay="500"
        style={{ width: '40px', height: '40px' }}
        stroke="bold"
        class="btn-home"
      ></lord-icon>
    </div>
  );
};

export default BtnHome;




