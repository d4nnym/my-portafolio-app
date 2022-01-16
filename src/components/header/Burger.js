import React from 'react'
export default function Burger({handleMenu}){
  
  return(
    <button 
      className="btn-menu" 
      type="button" 
      onClick={handleMenu}> 
      <span></span>
    </button>
  );
}

/*onBlur={isOpen?handleMenu:null} */