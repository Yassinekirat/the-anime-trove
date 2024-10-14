import React, { useState } from 'react';

const Accordion = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="accordion">
      {React.Children.map(children, (child, index) => {
        return React.cloneElement(child, {
          isOpen: activeIndex === index,
          onToggle: () => handleToggle(index),
        });
      })}
    </div>
  );
};

export default Accordion;
