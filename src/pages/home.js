import React, { useState,useEffect } from 'react'
import Header from '../components/Header'
import NavBar from '../components/NavBar'
import SearchBar from '../components/SearchBar'
import { Content } from '../components/Header/Header.styles'
import { Button, Heading, PageStyles } from './styles'
import "swiper/css/bundle";
import MovieGrid from '../components/MovieGrid'
import MovieSlider from '../components/MovieSlider'
import axios from 'axios'

const initialState={
  page:0,
  results:[],
  total_pages:0,
  total_results:0,
};

function Home() {

  const BaseUrl=process.env.REACT_APP_BASE_URL;
  const ApiKey=process.env.REACT_APP_API_KEY;

  const [isLoadingMovies,setIsLoadingMovies]=useState(true)
  const [isLoadingSeries,setIsLoadingSeries]=useState(true)
  const [searchTerm,setSearchTerm]=useState("")
  const [topRatedMovies,setTopRatedMovies]=useState([])
  const [topRatedSeries,setTopRatedSeries]=useState([])
  const [trendingMovies,setTrendingMovies]=useState([])
  const [trendingSeries,setTrendingSeries]=useState([])
  const [searchMovieResults,setSearchMovieResults]=useState(initialState)
  const [searchSeriesResults,setSearchSeriesResults]=useState(initialState)
  const [header,setHeader]=useState([])
  useEffect(()=>{
    async function fetch(){
      const trenmovres=await axios.get(BaseUrl+'trending/movie/week?api_key='+ApiKey)
      const trenserres=await axios.get(BaseUrl+'trending/tv/week?api_key='+ApiKey)
      const topmovieres=await axios.get(BaseUrl+'movie/top_rated?api_key='+ApiKey+'&language=en-US&page=1')
      const topseriesres=await axios.get(BaseUrl+'tv/top_rated?api_key='+ApiKey+'&language=en-US&page=1')
      setTrendingMovies(trenmovres.data.results)
      setTrendingSeries(trenserres.data.results)
      setTopRatedMovies(topmovieres.data.results)
      setTopRatedSeries(topseriesres.data.results)
      setHeader([...trenmovres.data.results.slice(0,2),...trenserres.data.results.slice(0,2)])
    }
    fetch()
  },[BaseUrl,ApiKey])
  useEffect(()=>{
    async function fetch(){
      if(searchTerm!==""){
        const moviesres=await axios.get(BaseUrl+'search/movie?api_key='+ApiKey+'&language=en-US&query='+searchTerm+'&page=1&include_adult=false')
        const seriesres=await axios.get(BaseUrl+'search/tv?api_key='+ApiKey+'&language=en-US&page=1&query='+searchTerm+'&page=1&include_adult=false')
        setSearchMovieResults({page:moviesres.data.page,results:moviesres.data.results,total_pages:moviesres.data.total_pages,total_results:moviesres.data.total_results})
        setSearchSeriesResults({page:seriesres.data.page,results:seriesres.data.results,total_pages:seriesres.data.total_pages,total_results:seriesres.data.total_results})
      }
    }
    fetch()
  },[searchTerm,BaseUrl,ApiKey])
  useEffect(()=>{
    async function fetch(){
      if(searchTerm!=="")
      {
        if(isLoadingMovies){
          const page=searchMovieResults.page+1
          const moviesres=await axios.get(BaseUrl+'search/movie?api_key='+ApiKey+'&language=en-US&query='+searchTerm+'&page='+page+'&include_adult=false')
          setSearchMovieResults({page:moviesres.data.page,results:[...searchMovieResults.results,...moviesres.data.results],total_pages:moviesres.data.total_pages,total_results:moviesres.data.total_results})
          setIsLoadingMovies(false)
        }
        if(isLoadingSeries){
          const page=searchSeriesResults.page+1
          const seriesres=await axios.get(BaseUrl+'search/tv?api_key='+ApiKey+'&language=en-US&query='+searchTerm+'&page='+page+'&include_adult=false')
          setSearchSeriesResults({page:seriesres.data.page,results:[...searchSeriesResults.results,...seriesres.data.results],total_pages:seriesres.data.total_pages,total_results:seriesres.data.total_results})
          setIsLoadingSeries(false)
        }
      }
    }
    fetch()
  },[searchTerm,isLoadingMovies,isLoadingSeries,BaseUrl,ApiKey,searchMovieResults,searchSeriesResults])
  return (
    <PageStyles>
      <NavBar current="Home"/>
      <Content>
        <Header header={header}/>
        <SearchBar setSearchTerm={setSearchTerm}/>
        {
          searchTerm?
          <>
            <Heading>Movie Results</Heading>
            <MovieGrid results={searchMovieResults.results} search='movie'/>
            {
              searchMovieResults.page<searchMovieResults.total_pages?<Button onClick={()=>setIsLoadingMovies(true)}>Load More</Button>:<></>
            }
            <Heading>Series Results</Heading>
            <MovieGrid results={searchSeriesResults.results} search='tv'/>
            {
              searchSeriesResults.page<searchSeriesResults.total_pages?<Button onClick={()=>setIsLoadingSeries(true)}>Load More</Button>:<></>
            }
          </>:
          <>
            <Heading>Trending Movies</Heading>
            <MovieSlider results={trendingMovies} category="movie"/>
            <Heading>Top Rated Movies</Heading>
            <MovieSlider results={topRatedMovies} category="movie"/>
            <Heading>Trending Series</Heading>
            <MovieSlider results={trendingSeries} category="tv"/>
            <Heading>Top Rated Series</Heading>
            <MovieSlider results={topRatedSeries} category="tv"/>
          </>
        }
      </Content>
    </PageStyles>
  )
}

export default Home