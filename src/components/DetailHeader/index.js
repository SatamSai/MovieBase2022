import React from 'react'
import {Genre,Genres,Background,BackgroundImg,Content,PosterImg,MovieSummary,MovieName,MovieDesc,MovieStats,MovieRating,MovieVotes,Buttons,Button} from './DetailHeader.styles'
import Header from '../../assets/Header.jpg'
import Poster from '../../assets/Poster.jpg'


function DetailHeader({details,genres}) {
  return (
    <Background>
    <BackgroundImg src={details.backdrop_path?"https://image.tmdb.org/t/p/w500"+details.backdrop_path:Header}/>
    <Content>
        <PosterImg src={details.poster_path?"https://image.tmdb.org/t/p/w500"+details.poster_path:Poster}/>
        <MovieSummary>
            <MovieName>{details.title||details.name}</MovieName>
            <MovieDesc>{details.overview}</MovieDesc>
            <Genres>
                {
                    genres.map(genre=>(
                        <Genre>{genre.name}</Genre>
                    ))
                }
            </Genres>
            <MovieStats>
                <MovieRating><b>Rating:</b> {details.vote_average}/10</MovieRating>
                <MovieVotes>Votes: {details.vote_count}</MovieVotes>
            </MovieStats>
            <Buttons>
                <Button>Watch Trailer</Button>
                <Button reverse>Watch Movie</Button>
            </Buttons>
        </MovieSummary>
    </Content>
</Background>
  )
}

export default DetailHeader