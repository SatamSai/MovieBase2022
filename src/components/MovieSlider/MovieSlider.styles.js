import styled from "styled-components";

export const Wrapper=styled.div`
    height:360px;
    width:93%;
    max-width: 1200px;
    margin: auto;
    .swiper-slide{
        
        background-color: transparent;
        width:190px;
        margin-right: 17px;
        display:flex;
        flex-direction: column;
        cursor:pointer;

    }
    @media only screen and (max-width: 1080px){
        height:295px;
        .swiper-slide{
            width: 170px;
            margin-right: 14px;
        }
    }
    @media only screen and (max-width: 750px){
        height:240px;
        .swiper-slide{
            width: 140px;
            margin-right: 14px;
        }
    }
    @media only screen and (max-width: 480px){
        height:180px;
        .swiper-slide{
            width:90px;
            margin-right: 7px;
        }
    }
    
`
export const MovieName=styled.div`
    color:white;
    text-align: start;
    width:100%;
    height:53px;
    font-size: 17px;
    font-weight:600;
    overflow:hidden;
    margin-top: 8px;
    line-height: 120%;
    @media only screen and (max-width: 750px){
        font-size: 13.5px;
    }
    @media only screen and (max-width: 480px){
        font-size: 8.5px;
    }
`
