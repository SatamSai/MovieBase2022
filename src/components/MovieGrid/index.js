import React from 'react'
import {Wrapper,Content,Card, PosterImg, MovieName} from './MovieGrid.styles'
import Poster from '../../assets/no_poster.jpg'

function MovieGrid({results,setId,setFilter}) {
  return (
    <Wrapper>
        <Content>
            {
                results.map(result=>(
                <Card onClick={()=>{setId(result.id);setFilter('movie')}}>
                    <PosterImg src={result.poster_path?"https://image.tmdb.org/t/p/w500"+result.poster_path:Poster}/>
                    <MovieName>{result.title||result.name}</MovieName>
                </Card>
                ))
            }
        </Content>
    </Wrapper>
  )
}

export default MovieGrid