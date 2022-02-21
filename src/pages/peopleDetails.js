import React, { useEffect, useState } from 'react'
import MovieGrid from '../components/MovieGrid'
import NavBar from '../components/NavBar'
import { PageStyles,Detail, Profile, Summary, Name, Info, Bio, Heading } from './styles'
import {useParams} from 'react-router'
import axios from 'axios'

function PeopleDetails() {
    const BaseUrl=process.env.REACT_APP_BASE_URL;
    const ApiKey=process.env.REACT_APP_API_KEY;
    const params=useParams();
    const [person,setPerson]=useState([])
    const [movies,setMovies]=useState([])
    const [series,setSeries]=useState([])
    useEffect(()=>{
        async function fetch(){
            console.log(BaseUrl)
            const res=await axios.get(BaseUrl+"person/"+params.id+"?api_key="+ApiKey+"&append_to_response=movie_credits,tv_credits")
            setPerson(res.data)
            setMovies(res.data.movie_credits.cast)
            setSeries(res.data.tv_credits.cast)
        }
        fetch()
    },[BaseUrl,ApiKey,params])
  return (
      <PageStyles>
          <NavBar/>
          <Detail>
            <Profile src={"https://image.tmdb.org/t/p/w500"+person.profile_path}/>
            <Summary>
                <Name>{person.name}</Name>
                <Info><b>Born: </b>{person.birthday}</Info>
                <Info><b>Born In: </b>{person.place_of_birth}</Info>
                <Info><b>Known for: </b>{person.known_for_department}</Info>
                <Info><b>Popularity: </b>{person.popularity}</Info>
                <Bio>{person.biography}</Bio>
            </Summary>
          </Detail>
          {
              movies?
              <>
                <Heading>Casted in Movies</Heading>
                <MovieGrid results={movies} search="movie"/>
              </>
              :<></>
          }
          {
              series?
              <>
                <Heading>Casted in Series</Heading>
                <MovieGrid results={series} search="tv"/>
              </>
              :<></>
          }
      </PageStyles>
  )
}

export default PeopleDetails