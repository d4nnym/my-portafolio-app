import React from 'react'

export default function CardControl({direction,visibility,move}){
  
  return(
    <button 
      className={"action-overflow "+direction} 
      type="button" 
      onClick={move}
      hidden={visibility}>
      <span></span>
    </button>
  );
}