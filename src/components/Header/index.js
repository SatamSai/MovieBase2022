import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Img from '../../assets/Header.jpg'
// Import Swiper styles
import "swiper/css";
import {Movie,Details,Poster,Title,Description,Button,Wrapper} from './Header.styles'

import { Content } from "../../pages/styles";
import PosterImg from '../../assets/Poster.jpg'

import "./styles.css";

function Header() {
  return (
    <Wrapper>
      <Swiper className="mySwiper" autoplay>
        <SwiperSlide>
            <img className="headerimg" src={Img} alt=""/>
            <Content className="movie-info">
                <Movie>
                    <Details>
                        <Title>SpiderMan: No Way Home</Title>
                        <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </Description>
                        <Button>Watch Trailer</Button>
                    </Details>
                    <Poster src={PosterImg}/>
                </Movie>
            </Content>
        </SwiperSlide>
        <SwiperSlide>
            <img src={Img} alt=""/>
            <Content className="movie-info">
                <Movie>
                    <Details>
                        <Title>Avengers: EndGame</Title>
                        <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </Description>
                        <Button>Watch Trailer</Button>
                    </Details>
                    <Poster src={PosterImg}/>
                </Movie>
            </Content>
        </SwiperSlide>
      </Swiper>
    </Wrapper>
  )
}

export default Header