import React, { useEffect } from 'react';

const Dropdown = ({ isOpen, options, coords, closeDropdown }) => {
  const dropdownMenu = React.createRef();

  useEffect(() => {
    if (isOpen) {
      dropdownMenu.current.style.cssText = `
        position: absolute;
        transform: translate3d(${coords.x}px, ${coords.y}px, 0px);
        top: 0px;
        left: 0px;
      `;
      document.onclick = () => {
        document.onclick = null;
    
        closeDropdown();
      };
    }
  });
  
  return (
    <div ref={dropdownMenu} className={`dropdown-menu ${isOpen ? 'show' : ''}`}>
      {options.map(item => (
        <button key={item.text} onClick={item.callback} className="dropdown-item" type="button">{item.text}</button>
      ))}
    </div>
  );
};

export default Dropdown;
