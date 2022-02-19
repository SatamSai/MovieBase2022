import React,{useState,useEffect} from 'react'
import NavBar from '../components/NavBar'
import SearchBar from '../components/SearchBar'
import { Content, Option, OptionBar, Options, PageStyles,Heading, Button } from './styles'
import MovieGrid from '../components/MovieGrid'
import axios from 'axios'
import DetailPage from '../components/DetailPage'

const initialState={
  page:0,
  results:[],
  total_pages:0,
  total_results:0,
};

function Search({search}) {
  const [id,setId]=useState('')
  const [filter,setFilter]=useState('trending')
  const [list,setList]=useState(initialState)
  const [isLoading,setIsLoading]=useState(false)
  const [searchTerm,setSearchTerm]=useState('')
  //searching
  useEffect(async()=>{
    if(searchTerm!==""){
      setFilter("search")
      const res=await axios.get('https://api.themoviedb.org/3/search/'+search+'?api_key=c86faea40c58bed45bf935494c28bc38&language=en-US&query='+searchTerm+'&page=1&include_adult=false')
      setList({page:res.data.page,results:res.data.results,total_pages:res.data.total_pages,total_results:res.data.total_results})
    }
  },[searchTerm])
  useEffect(async()=>{
    if(filter==="search")
    {
      if(isLoading){
        const page=list.page+1
        const res=await axios.get('https://api.themoviedb.org/3/search/'+search+'?api_key=c86faea40c58bed45bf935494c28bc38&language=en-US&query='+searchTerm+'&page='+page+'&include_adult=false')
        setList({page:res.data.page,results:[...list.results,...res.data.results],total_pages:res.data.total_pages,total_results:res.data.total_results})
        setIsLoading(false)
      }
    }
  },[searchTerm,isLoading])

  //filtering
  useEffect(async()=>{
    if(filter!=='search')
    {
      const query=(filter==="trending")?"trending/"+search+"/week":(filter==="toprated")?(search+"/top_rated"):(search+(search==="movie"?"/upcoming":"/on_the_air"))
      console.log('https://api.themoviedb.org/3/'+query+'?api_key=c86faea40c58bed45bf935494c28bc38&language=en-US&page=1')
      const res=await axios.get('https://api.themoviedb.org/3/'+query+'?api_key=c86faea40c58bed45bf935494c28bc38&language=en-US&page=1')
      setList({page:res.data.page,results:res.data.results,total_pages:res.data.total_pages,total_results:res.data.total_results})
      console.log({page:res.data.page,results:res.data.results,total_pages:res.data.total_pages,total_results:res.data.total_results})
    }
  },[filter])

  useEffect(async()=>{
    if(isLoading && filter!=="search"){
      const query=(filter==="trending")?"trending/"+search+"/week":(filter==="toprated")?(search+"/top_rated"):(search+(search==="movie"?"/upcoming":"/on_the_air"))
      const page=list.page+1
      const res=await axios.get('https://api.themoviedb.org/3/'+query+'?api_key=c86faea40c58bed45bf935494c28bc38&language=en-US&page='+page)
      setList({page:res.data.page,results:[...list.results,...res.data.results],total_pages:res.data.total_pages,total_results:res.data.total_results})
      setIsLoading(false)
    }
  },[filter,isLoading,list.pages])
  return (
    <PageStyles>
        <NavBar home/>
        <Content>
            <SearchBar setSearchTerm={setSearchTerm}/>
            <OptionBar>
              <Options>
                <Option active={filter==="trending"} onClick={()=>setFilter('trending')}>Trending</Option>
                <Option active={filter==="toprated"} onClick={()=>setFilter('toprated')}>Top Rated</Option>
                <Option active={filter==="upcoming"} onClick={()=>setFilter('upcoming')}>{search==="movie"?"Upcomings":"Air this Week"}</Option>
              </Options>
            </OptionBar>
            {
              filter!=="movie"?
              <>
                <Heading>{filter==="trending"?"Trending Movies":filter==="toprated"?"TopRated Movies":filter==="upcoming"?"Upcoming Movies":"Search Results"}</Heading>
                <MovieGrid results={list.results} setFilter={setFilter} setId={setId}/>
                {
                  list.page<list.total_pages?<Button onClick={()=>setIsLoading(true)}>Load More</Button>:<></>
                }
              </>
              :
              <>
                <DetailPage id={id} search={search}/>
              </>
            }
        </Content>
    </PageStyles>
  )
}

export default Search