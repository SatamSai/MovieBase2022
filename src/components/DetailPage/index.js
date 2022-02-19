import React, { useEffect, useState } from 'react'
import {Genre,Genres,Background,BackgroundImg,Content,PosterImg,MovieSummary,MovieName,MovieDesc,MovieStats,MovieRating,MovieVotes,Buttons,Button,Videos,Video} from './DetailPage.styled'
import Header from '../../assets/Header.jpg'
import Poster from '../../assets/Poster.jpg'
import MovieSlider from '../MovieSlider'
import axios from 'axios'
import { Heading } from '../../pages/styles'

function DetailPage({id,search}) {
    const [movie,setMovie]=useState([])
    const [cast,setCast]=useState([])
    const [posters,setPosters]=useState([])
    const [related,setRelated]=useState([])
    const [trailers,setTrailers]=useState([])
    const [teasers,setTeasers]=useState([])
    const [videos,setVideos]=useState([])
    const [genres,setGenres]=useState([])
    useEffect(async()=>{
        const movieres=await axios.get('https://api.themoviedb.org/3/'+search+'/'+id+'?api_key=c86faea40c58bed45bf935494c28bc38&append_to_response=videos,images,credits,similar')
        setMovie(movieres.data)
        setPosters(movieres.data.images.posters.slice(0,20))
        setCast(movieres.data.credits.cast)
        setRelated(movieres.data.similar.results)
        setTrailers(movieres.data.videos.results.filter(vid=>vid.type=="Trailer").slice(0,2))
        setTeasers(movieres.data.videos.results.filter(vid=>vid.type=="Teaser").slice(0,2))
        setVideos(movieres.data.videos.results.filter(vid=>vid.type!=="Trailer"&&vid.type!=="Teaser").slice(0,2))
        setGenres(movieres.data.genres)
    },[id])
  return(
    <>
        <Background>
            <BackgroundImg src={"https://image.tmdb.org/t/p/w500"+movie.backdrop_path}/>
            <Content>
                <PosterImg src={"https://image.tmdb.org/t/p/w500"+movie.poster_path}/>
                <MovieSummary>
                    <MovieName>{movie.title||movie.name}</MovieName>
                    <MovieDesc>{movie.overview}</MovieDesc>
                    <Genres>
                        {
                            genres.map(genre=>(
                                <Genre>{genre.name}</Genre>
                            ))
                        }
                    </Genres>
                    <MovieStats>
                        <MovieRating><b>Rating:</b> {movie.vote_average}/10</MovieRating>
                        <MovieVotes>Votes: {movie.vote_count}</MovieVotes>
                    </MovieStats>
                    <Buttons>
                        <Button>Watch Trailer</Button>
                        <Button reverse>Watch Movie</Button>
                    </Buttons>
                </MovieSummary>
            </Content>
        </Background>
        <Heading>Cast</Heading>
        <MovieSlider size="person" results={cast}/>
        <Heading>Posters</Heading>
        <MovieSlider size="person" results={posters}/>
        {
            trailers.length!==0?
            <>
                <Heading>Trailers</Heading>
                <Videos>
                    {
                        trailers.map(vid=>(
                            <Video
                                allowFullScreen
                                frameBorder="0"
                                src={`https://www.youtube.com/embed/${vid.key}`}
                            />
                        ))
                    }
                </Videos>
            
            </>:
            <></>
        }
        {
            teasers.length!==0?
            <>
                <Heading>Teasers</Heading>
                <Videos>
                    {
                        teasers.map(vid=>(
                            <Video
                            allowFullScreen
                                frameBorder="0"
                                src={`https://www.youtube.com/embed/${vid.key}`}
                            />
                        ))
                    }
                    
                </Videos>
            </>:
            <></>
        }
        {
            videos.length!==0?
            <>
                <Heading>Other Videos</Heading>
                <Videos>
                    {
                        videos.map(vid=>(
                            <Video
                            allowFullScreen
                                frameBorder="0"
                                src={`https://www.youtube.com/embed/${vid.key}`}
                            />
                        ))
                    }
                    
                </Videos>
            </>:
            <></>
        }

        <Heading>Related Movies</Heading>
        <MovieSlider size="person" results={related}/>
    </>

  )
}

export default DetailPage