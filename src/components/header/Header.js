import React, {useState} from 'react'
import Burger from './Burger'
import Nav from './Nav'
import {digitalMedia} from '../../service/DigitalMedia' 

export default function Header ({theme}) {

  const [isOpen,setOpen] = useState(false);

  const handleMenu = ()=>{
    setOpen(!isOpen)
  }

  return(
  <header className={"header "+theme}>
    <div className="navbar">
      <a className="brand" href="/">
        <img 
        className="img-brand" 
        src={digitalMedia.isotype.src} 
        title={digitalMedia.isotype.title} 
        alt={digitalMedia.isotype.alt} />
      </a>
      <Nav isOpen={isOpen} handleMenu={handleMenu} />
      <Burger handleMenu={handleMenu} />  
    </div>    
  </header>
  );
}

/*onBlur={!this.state.isOpen?this.menuIsOpen:null}*/