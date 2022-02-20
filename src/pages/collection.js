import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CollectionGrid from '../components/CollectionGrid'
import NavBar from '../components/NavBar'
import SearchBar from '../components/SearchBar'
import { Content, PageStyles } from './styles'

function Collection() {
    const BaseUrl=process.env.REACT_APP_BASE_URL;
    const ApiKey=process.env.REACT_APP_API_KEY;
    const [searchTerm,setSearchTerm]=useState('')
    const [collections,setCollections]=useState([])
    useEffect(()=>{
        async function fetch(){
            if(searchTerm!==""){
                const res=await axios.get(BaseUrl+'search/collection?api_key='+ApiKey+'&language=en-US&query='+searchTerm+'&page=1')
                setCollections(res.data.results)
            }
        }
        fetch()
    },[searchTerm,ApiKey,BaseUrl])
  return (
    <PageStyles>
        <NavBar current="Collection"/>
        <Content>
            <SearchBar setSearchTerm={setSearchTerm}/>
            <CollectionGrid collections={collections}/>
        </Content>
    </PageStyles>
  )
}

export default Collection