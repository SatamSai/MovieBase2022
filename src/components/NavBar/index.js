import React, { useState } from 'react'
import { Nav,Logo,Links,Link,NavBarContent,Main,Menu } from './NavBar.styles'
import Ham from '../../assets/Menu.svg'
function NavBar() {
  const [show,setShow]=useState(false)
  return (
    <Nav>
      <NavBarContent>
        <Main>
          <Logo>Movie<span style={{color:"red"}}>Base</span></Logo>
          <Menu src={Ham} onClick={()=>setShow(!show)}/>
        </Main>
        <Links show={show}>
          <Link>Home</Link>
          <Link>Movies</Link>
          <Link>Shows</Link>
          <Link>Collections</Link>
          <Link>People</Link>
        </Links>
      </NavBarContent>
    </Nav>
  )
}

export default NavBar