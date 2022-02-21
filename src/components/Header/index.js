import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Img from '../../assets/Header.jpg'
// Import Swiper styles
import "swiper/css";
import {Movie,Details,Poster,Title,Description,Button,Wrapper} from './Header.styles'

import { Content } from "../../pages/styles";
import PosterImg from '../../assets/Poster.jpg'
import {Autoplay} from 'swiper'

import "./styles.css";

function Header({header}) {
  return (
    <Wrapper>
      <Swiper 
      className="mySwiper" 
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      >
        {
          header.map(head=>(
            <SwiperSlide>
                <img className="headerimg" src={head.backdrop_path?"https://image.tmdb.org/t/p/w500"+head.backdrop_path:Img} alt=""/>
                <Content className="movie-info">
                    <Movie>
                        <Details>
                            <Title>{head.title||head.name}</Title>
                            <Description>{head.overview}</Description>
                            <Button>Watch Trailer</Button>
                        </Details>
                        <Poster src={head.poster_path?"https://image.tmdb.org/t/p/w500"+head.poster_path:PosterImg}/>
                    </Movie>
                </Content>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </Wrapper>
  )
}

export default Header