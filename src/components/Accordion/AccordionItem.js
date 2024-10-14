import React from 'react';

const AccordionItem = ({ title, children, isOpen, onToggle }) => {
    return (
      <div className="accordion-item">
        {/* Title that toggles the accordion content */}
        <div className="accordion-title" onClick={onToggle}>
          <h3>{title}</h3>
          {/* Indicate open/closed state with '+' or '-' */}
          <span>{isOpen ? '-' : '+'}</span>
        </div>
        {/* Render content if the item is open */}
        {isOpen && <div className="accordion-content">{children}</div>}
      </div>
    );
  };
  
  export default AccordionItem;
