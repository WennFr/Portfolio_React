import React, { useState } from 'react';


const references = [
    {
        name: 'Madeleine Kalin',
        profession: "Teknisk projektledare, Sublime",
        quote: '"Frederick integrerades väl i vårt team och har visat god kommunikationsförmåga, bidragit till en positiv arbetsmiljö och främjat samarbete inom organisationen."',
    },
    {
        name: 'Emma Björner',
        profession: "Senior expert, IKED",
        quote: '"Frederick har utfört sitt arbete med hög effektivitet och stor noggrannhet. Under sin tid vid IKED uppvisade han ett starkt engagemang, nyfikenhet och förmåga att snabbt sätta sig in i nya uppgifter"',
    },

    {
        name: 'Thomas Andersson',
        profession: "Ordförande, IKED",
        quote: '"Frederick har varit en upskattad medarbetare och vi är glada att ge honom våra allra bästa rekommendationer för uppgifter i ett internationellt såväl nationellt sammanhang."',
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
                <p class="profession">{reference.profession}</p>
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
