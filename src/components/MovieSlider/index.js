import React from 'react'
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Wrapper,MovieName} from './MovieSlider.styles';
import Poster from '../../assets/no_poster.jpg'

function MovieSlider({results,size}) {
  return (
    <Wrapper size={size}>
        <Swiper
        slidesPerView={"auto"}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        {
          results.map(result=>(
                
            <SwiperSlide className='slide'>
              <img src={"https://image.tmdb.org/t/p/w500"+(result.poster_path||result.profile_path||result.file_path)||Poster} alt=""/>
              <MovieName>{result.title||result.name} <br/><b><i>{result.character}</i></b></MovieName>
            </SwiperSlide>
                ))
        }
        </Swiper>
    </Wrapper>
  )
}

export default MovieSlider