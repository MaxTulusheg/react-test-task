import React, { useEffect } from 'react';
import PropTypes from 'prop-types';


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
    <div ref={dropdownMenu} className={`dropdown-menu ${isOpen ? 'show' : ''}`} style={{top: 0, left: 0}}>
      {options.map(item => (
        <button key={item.text} onClick={item.callback} className="dropdown-item" type="button">{item.text}</button>
      ))}
    </div>
  );
};

Dropdown.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  options: PropTypes.array.isRequired,
  coords: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired
  }).isRequired,
  closeDropdown: PropTypes.func.isRequired
};

export default Dropdown;
