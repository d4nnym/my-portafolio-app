import React, {useState} from 'react'
import Burger from './Burger'
import Nav from './Nav'
import {media} from '../MediaExports' 

export default function Header ({theme}) {

  const [isOpen,setOpen] = useState(false);

  const handleMenu = ()=>{
    setOpen(!isOpen)
  }

  return(
  <header className={"header "+theme}>
    <div className="navbar">
      <a className="brand" href="/">
        <img className="img-brand" src={media.isotype.src} title={media.isotype.title} alt={media.isotype.alt} />
      </a>
      <Nav isOpen={isOpen} handleMenu={handleMenu} />
      <Burger handleMenu={handleMenu} />  
    </div>    
  </header>
  );
}

/*onBlur={!this.state.isOpen?this.menuIsOpen:null}*/