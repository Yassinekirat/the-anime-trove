import React, { useState } from 'react';

const Accordion = ({ children }) => {
    // State to track the currently active index of the accordion
    const [activeIndex, setActiveIndex] = useState(null);
    const handleToggle = (index) => {
      setActiveIndex(activeIndex === index ? null : index);
    };
  
    return (
      <div className="accordion">
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, {
            isOpen: activeIndex === index, // Passes whether the current item is open
            onToggle: () => handleToggle(index), // Passes the toggle function
          });
        })}
      </div>
    );
  };
  
  export default Accordion;
