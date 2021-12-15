import React, {useState} from 'react'
import Burger from './Burger'
import Nav from './Nav';
import imgLogo from '../../assets/img/isotype.svg'

export default function Header ({theme}) {

  const [isOpen,setOpen] = useState(false);

  const handleMenu = ()=>{
    setOpen(!isOpen)
  }

  return(
  <header className={"header "+theme}>
    <div className="navbar">
      <a className="brand" href="/#" >
        <img className="img-brand" src={imgLogo} alt="Logo"/>
      </a>
      <Nav isOpen={isOpen} handleMenu={handleMenu} />
      <Burger handleMenu={handleMenu} />  
    </div>    
  </header>
  );
}

/*onBlur={!this.state.isOpen?this.menuIsOpen:null}*/