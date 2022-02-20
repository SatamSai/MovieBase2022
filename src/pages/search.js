import React,{useState,useEffect} from 'react'
import NavBar from '../components/NavBar'
import SearchBar from '../components/SearchBar'
import { Content, Option, OptionBar, Options, PageStyles,Heading, Button } from './styles'
import MovieGrid from '../components/MovieGrid'
import axios from 'axios'

const initialState={
  page:0,
  results:[],
  total_pages:0,
  total_results:0,
};

function Search({search}) {
  const BaseUrl=process.env.REACT_APP_BASE_URL;
  const ApiKey=process.env.REACT_APP_API_KEY;
  const [filter,setFilter]=useState('trending')
  const [list,setList]=useState(initialState)
  const [isLoading,setIsLoading]=useState(false)
  const [searchTerm,setSearchTerm]=useState('')
  //searching
  useEffect(()=>{
    async function fetch(){
      if(searchTerm!==""){
        setFilter("search")
        const res=await axios.get(BaseUrl+'search/'+search+'?api_key='+ApiKey+'&language=en-US&query='+searchTerm+'&page=1&include_adult=false')
        setList({page:res.data.page,results:res.data.results,total_pages:res.data.total_pages,total_results:res.data.total_results})
      }
    }
    fetch()
  },[searchTerm,search,BaseUrl,ApiKey])
  useEffect(()=>{
    async function fetch(){
      if(filter==="search")
      {
        if(isLoading){
          const page=list.page+1
          const res=await axios.get(BaseUrl+'search/'+search+'?api_key='+ApiKey+'&language=en-US&query='+searchTerm+'&page='+page+'&include_adult=false')
          setList({page:res.data.page,results:[...list.results,...res.data.results],total_pages:res.data.total_pages,total_results:res.data.total_results})
          setIsLoading(false)
        }
      }
    }
    fetch()
  },[searchTerm,isLoading,search,BaseUrl,ApiKey,filter,list])

  //filtering
  useEffect(()=>{
    async function fetch(){
      if(filter!=='search')
      {
        const query=(filter==="trending")?"trending/"+search+"/week":(filter==="toprated")?(search+"/top_rated"):(search+(search==="movie"?"/upcoming":"/on_the_air"))
        console.log(BaseUrl+query+'?api_key='+ApiKey+'&language=en-US&page=1')
        const res=await axios.get(BaseUrl+query+'?api_key='+ApiKey+'&language=en-US&page=1')
        setList({page:res.data.page,results:res.data.results,total_pages:res.data.total_pages,total_results:res.data.total_results})
        console.log({page:res.data.page,results:res.data.results,total_pages:res.data.total_pages,total_results:res.data.total_results})
      }
    }
    fetch()
  },[filter,search,BaseUrl,ApiKey])

  useEffect(()=>{
    async function fetch(){
      if(isLoading && filter!=="search"){
        const query=(filter==="trending")?"trending/"+search+"/week":(filter==="toprated")?(search+"/top_rated"):(search+(search==="movie"?"/upcoming":"/on_the_air"))
        const page=list.page+1
        const res=await axios.get(BaseUrl+query+'?api_key='+ApiKey+'&language=en-US&page='+page)
        setList({page:res.data.page,results:[...list.results,...res.data.results],total_pages:res.data.total_pages,total_results:res.data.total_results})
        setIsLoading(false)
      }
    }
    fetch()
  },[filter,isLoading,search,BaseUrl,ApiKey,list])
  return (
    <PageStyles>
        <NavBar current={search}/>
        <Content>
            <SearchBar setSearchTerm={setSearchTerm}/>
            <OptionBar>
              <Options>
                <Option active={filter==="trending"} onClick={()=>setFilter('trending')}>Trending</Option>
                <Option active={filter==="toprated"} onClick={()=>setFilter('toprated')}>Top Rated</Option>
                <Option active={filter==="upcoming"} onClick={()=>setFilter('upcoming')}>{search==="movie"?"Upcomings":"Air this Week"}</Option>
              </Options>
            </OptionBar>
              <>
                <Heading>{filter==="trending"?"Trending Movies":filter==="toprated"?"TopRated Movies":filter==="upcoming"?"Upcoming Movies":"Search Results"}</Heading>
                <MovieGrid results={list.results} search={search}/>
                {
                  list.page<list.total_pages?<Button onClick={()=>setIsLoading(true)}>Load More</Button>:<></>
                }
              </>
        </Content>
    </PageStyles>
  )
}

export default Search