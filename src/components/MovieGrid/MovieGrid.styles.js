import styled from "styled-components";

export const Wrapper=styled.div`
    width:93%;
    max-width: 1200px;
    margin:0 auto;
`

export const Content=styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(200px,1fr));
    grid-gap:2.2rem ;
    @media only screen and (max-width: 1080px){
        grid-template-columns: repeat(auto-fill,minmax(180px,1fr));
        grid-gap:1.7rem ;
    }
    @media only screen and (max-width: 750px){
        grid-template-columns: repeat(auto-fill,minmax(134px,1fr));
        grid-gap:1.4rem ;
    }
    @media only screen and (max-width: 480px){
        grid-template-columns: repeat(auto-fill,minmax(105px,1fr));
        grid-gap:1rem ;
    }
`

export const Card=styled.div`
    margin-bottom:10px;
    cursor: pointer;
    :hover{
        img{
            opacity: 0.4;
        }
    }
`
export const PosterImg=styled.img`
    width: 100%;
    aspect-ratio: 65/100;
    object-fit: cover;
    border-radius: 10px;
`
export const MovieName=styled.div`
    font-size: 19px;
    height:60px;
    font-weight: 700;
    overflow:hidden;
    color:white;
    text-decoration: none;
    @media only screen and (max-width: 1080px){
        font-size: 18px;
        height:40px;
    }
    @media only screen and (max-width: 750px){
        font-size: 15px;
    }
    @media only screen and (max-width: 480px){
        font-size: 11px;
        height:35px;
    }
`