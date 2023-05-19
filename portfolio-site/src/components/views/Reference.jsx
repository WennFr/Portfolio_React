import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';


const references = [
    {
        name: 'Emma Björner',
        quote: '"Frederick är en seriös och motiverad arbetare."',
    },
    {
        name: 'Thomas A',
        quote: '"Alltid glad och hjälpsam"',
    },

    {
        name: 'Referens 3',
        quote: '"Suverän!"',
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
              </div>
            )}
          </div>
        );
      });
    };
  
    return (
      <>
        <section className="reference">
          <div className="cont">{renderCards()}</div>
        </section>
      </>
    );
  };
  
  export default Reference;












// const Reference = () => {
//     const [currentIndex, setCurrentIndex] = useState(1);

//     const handleClick = () => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % references.length);
//     };

//     const referenceStyle = {
//         transform: `translateX(${(currentIndex === 0 ? -50 : 0)}%)`,
//         zIndex: references.length - currentIndex,
//       };
      

//       return (
//         <>
//           <section className='reference'>
//             <div className='cont'>
//               {references.map((reference, index) => (
//                 <div
//                   key={index}
//                   className='content-card'
//                   style={index === currentIndex ? referenceStyle : null}
//                   onClick={handleClick}
//                 >
//                   <div className='body'>
//                     <h2>Referenser</h2>
//                     <h3>{reference.name}</h3>
//                     <div className='text'>
//                       <p>{reference.quote}</p>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </section>
//         </>
//       );
//     };

//     export default Reference;






