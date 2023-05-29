import React, { useState, useEffect } from 'react';
import { scrollToTop, toggleBackToTopButton } from '../../utilities/scrollUtilities';


const BackToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const handleScroll = () => {
    toggleBackToTopButton(setShowButton); 
  };

 
  return (
    <div className={`back-to-top ${showButton ? 'hide' : ''}`}>
      <button onClick={scrollToTop}>
        <i className="fas fa-chevron-up"></i>
      </button>
    </div>
  );
};

export default BackToTop;