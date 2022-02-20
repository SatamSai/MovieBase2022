import React, { useEffect, useState } from 'react'
import CollectionHeader from '../components/CollectionHeader'
import Header from '../components/Header'
import NavBar from '../components/NavBar'
import { Content, PageStyles } from './styles'
import axios from 'axios'
import MovieGrid from '../components/MovieGrid'
import {useParams} from 'react-router'


function CollectionDetails() {
  const BaseUrl=process.env.REACT_APP_BASE_URL;
  const ApiKey=process.env.REACT_APP_API_KEY;
  const [movies,setMovies]=useState([])
  const [collection,setCollection]=useState([])
  const params=useParams()
  useEffect(async()=>{
    const res=await axios.get(BaseUrl+'collection/'+params.id+'?api_key='+ApiKey+'&language=en-US')
    setMovies(res.data.parts)
    setCollection(res.data)
    console.log(res.data.parts)
  },[])

  return (
    <PageStyles>
        <NavBar home/>
        <Content>
            <CollectionHeader collection={collection}/>
            <MovieGrid results={movies} search="movie"/>
        </Content>
    </PageStyles>
  )
}

export default CollectionDetails