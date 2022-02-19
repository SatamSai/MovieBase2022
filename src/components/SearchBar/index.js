import React,{useRef,useState,useEffect} from 'react'
import {Container,Search,SearchField} from './SearchBar.styles'

function SearchBar({setSearchTerm}) {
  const [state,setState]=useState('');
  const initial=useRef(true);
  useEffect(()=>{
    if(initial.current){
        initial.current=false;
        return;
    }
    const timer=setTimeout(()=>{
      setSearchTerm(state)
    },1000)
    return ()=>clearTimeout(timer)
},[setSearchTerm,state])
  return (
    <Container>
        <Search>
            <i class="fas fa-search"></i>
            <SearchField placeholder='Type Something' onChange={(e)=>setState(e.target.value)} value={state}/>
        </Search>
    </Container>
  )
}

export default SearchBar