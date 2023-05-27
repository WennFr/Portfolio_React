import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';


const references = [
    {
        name: 'Referens 1',
        quote: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."',
    },
    {
        name: 'Referens 2',
        quote: '"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."',
    },

    {
        name: 'Referens 3',
        quote: '"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."',
    },

    
];

const Reference = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const handleClick = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % references.length);
    };
  
    const renderCards = () => {
      return references.map((reference, index) => {
        const isActive = index === currentIndex;
        const cardClassName = `content-card ${isActive ? 'active' : ''}`;
        const indicator = isActive ? `${index + 1} / ${references.length}` : '';
        const progressBarClassName = `progress-bar ${isActive ? 'active' : ''}`;
  
        return (
          <div
            key={index}
            className={cardClassName}
            onClick={handleClick}
          >
            {isActive && (
              <div className="body">
                <h2>Referenser</h2>
                <h3>{reference.name}</h3>
                <div className="text">
                  <p>{reference.quote}</p>
                </div>
                <div className="progress-bar-container">
              {references.map((_, i) => (
                <div
                  key={i}
                  className={i === currentIndex ? progressBarClassName : 'progress-bar'}
                ></div>
              ))}
            </div>
              </div>
            )}
          </div>
        );
      });
    };
  
    return (
      <>
        <section id='reference' className="reference">
          <div className="cont">{renderCards()}</div>
        </section>
      </>
    );
  };
  
  export default Reference;
