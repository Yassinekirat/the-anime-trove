import React from 'react';

const AccordionItem = ({ title, children, isOpen, onToggle }) => {
  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={onToggle}>
        <h3>{title}</h3>
        <span>{isOpen ? '-' : '+'}</span>
      </div>
      {isOpen && <div className="accordion-content">{children}</div>}
    </div>
  );
};

export default AccordionItem;
