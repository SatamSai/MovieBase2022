import React, { useState } from 'react'
import { Nav,Logo,Links,NavBarContent,Main,Menu } from './NavBar.styles'
import Ham from '../../assets/Menu.svg'
import {Link } from 'react-router-dom'


function NavBar({current}) {
  const [show,setShow]=useState(false)
  console.log(current)
  return (
    <Nav>
      <NavBarContent>
        <Main>
          <Logo>Movie<span style={{color:"red"}}>Base</span></Logo>
          <Menu src={Ham} onClick={()=>setShow(!show)}/>
        </Main>
        <Links show={show}>
          <Link className='navlink' active={true} to="/">Home</Link>
          <Link className='navlink' active={current==="movie"} to="/movie">Movies</Link>
          <Link className='navlink' active={current==="tv"} to="/tv">Shows</Link>
          <Link className='navlink' active={current==="Collection"} to="/collection">Collections</Link>
          <Link className='navlink' active={current==="People"} to="/">People</Link>
        </Links>
      </NavBarContent>
    </Nav>
  )
}

export default NavBar