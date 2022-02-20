import React from 'react'
import {Wrapper,Content,Card, PosterImg, MovieName} from './MovieGrid.styles'
import Poster from '../../assets/no_poster.jpg'
import {Link} from 'react-router-dom'
import { Movie } from '../Header/Header.styles'

function MovieGrid({results,search}) {
  return (
    <Wrapper>
        <Content>
            {
                results.map(result=>(
                  <Link to={"/"+search+"/"+result.id}>
                    <Card>
                        <PosterImg src={result.poster_path?"https://image.tmdb.org/t/p/w500"+result.poster_path:Poster}/>
                        <MovieName>{result.title||result.name}</MovieName>
                    </Card>
                  </Link>
                ))
            }
        </Content>
    </Wrapper>
  )
}

export default MovieGrid