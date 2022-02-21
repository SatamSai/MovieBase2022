import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import SearchBar from '../components/SearchBar'
import { Button, Heading, PageStyles } from './styles'
import MovieGrid from '../components/MovieGrid'
import axios from 'axios'


const initialState={
  page:0,
  results:[],
  total_pages:0,
  total_results:0,
};

function People() {
  const BaseUrl=process.env.REACT_APP_BASE_URL;
  const ApiKey=process.env.REACT_APP_API_KEY;
  const [searchTerm,setSearchTerm]=useState('')
  const [people,setPeople]=useState(initialState)
  const [isLoading,setIsLoading]=useState(false)
  useEffect(()=>{
      async function fetch(){
        const res=await axios.get(BaseUrl+'trending/person/week?api_key='+ApiKey)
        setPeople({page:res.data.page,results:res.data.results,total_pages:res.data.total_pages,total:res.data.total_results})
      }
      fetch()
  },[ApiKey,BaseUrl,searchTerm])
    
  useEffect(()=>{
    if(isLoading){
      if(searchTerm===""){
        async function fetch(){
          const page=people.page+1
          const res=await axios.get(BaseUrl+'trending/person/week?api_key='+ApiKey+'&page='+page)
          setPeople({page:res.data.page,results:[...people.results,...res.data.results],total_pages:res.data.total_pages,total:res.data.total_results})
        }
        fetch()
        setIsLoading(false)
      }
    }
  },[ApiKey,BaseUrl,searchTerm,isLoading,people])

  useEffect(()=>{
    if(searchTerm!==""){
      async function fetch(){
        const res=await axios.get(BaseUrl+"search/person?api_key="+ApiKey+"&query="+searchTerm+"&page=1")
        setPeople({page:res.data.page,results:res.data.results,total_pages:res.data.total_pages,total_results:res.data.total_results})
        console.log({page:res.data.page,results:res.data.results,total_pages:res.data.total_pages,total_results:res.data.total_results})
      }
      fetch()
    }
  },[searchTerm,ApiKey,BaseUrl])

  useEffect(()=>{
    if(searchTerm!==""){
      if(isLoading)
      {
        async function fetch(){
          const page=people.page+1
          const res=await axios.get(BaseUrl+"search/person?api_key="+ApiKey+"&query="+searchTerm+"&page="+page)
          setPeople({page:res.data.page,results:[...people.results,...res.data.results],total_pages:res.data.total_pages,total:res.data.total_results})
        }
        fetch()
        setIsLoading(false)
      }
    }
  },[searchTerm,BaseUrl,ApiKey,isLoading,person])


  return (
    <PageStyles>
        <NavBar/>
        <SearchBar setSearchTerm={setSearchTerm}/>
        <Heading>Trending</Heading>
        <MovieGrid results={people.results} search="people"/>
        <Button onClick={()=>setIsLoading(true)} >Load More</Button>
    </PageStyles>
  )
}

export default People