import styled from "styled-components";

export const Background=styled.div`
    width:100%;
    height:780px;
    position:relative;
    display: flex;
    justify-content: center;
    align-items: center;
    @media only screen and (max-width: 480px)
    {
        height:680px
    }
`
export const BackgroundImg=styled.img`
    height:100%;
    width: 100%;
    position: absolute;
    object-fit: cover;
    mask-image: linear-gradient(0deg, rgba(0, 0, 0, 0.0) 0%, #000000 100%);
`
export const Content=styled.div`
    width:93%;
    max-width: 1200px;
    z-index: 1;
    display: flex;
    align-items: center;
    color:white;
    @media only screen and (max-width: 750px)
    {
        flex-direction: column;
    }
`

export const PosterImg=styled.img`
    width:35%;
    aspect-ratio: 65/100;
    border-radius:4%;
    @media only screen and (max-width: 750px)
    {
        width:40%;
    }
    @media only screen and (max-width: 480px)
    {
        width:55%;
    }
`
export const MovieSummary=styled.div`
    width:65%;
    margin-left:5%;
    @media only screen and (max-width: 750px)
    {
        margin-left: 0;
        width:100%;
    }
`
export const MovieName=styled.div`
    font-size: 55px;
    font-weight: 700;
    margin: 10px 0;
    @media only screen and (max-width: 1080px)
    {
        font-size: 40px;
    }
    @media only screen and (max-width: 750px)
    {
        font-size: 33px;
    }
    @media only screen and (max-width: 480px)
    {
        font-size: 28px;
    }
`
export const MovieDesc=styled.div`
    font-size: 17px;
    margin: 10px 0;
    @media only screen and (max-width: 1080px){
        font-size: 13.5px;
    }
    @media only screen and (max-width: 750px)
    {
        font-size: 12px;
        width:100%;
    }
    @media only screen and (max-width: 480px)
    {
        font-size: 10px;
    }
`

export const Genres=styled.div`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    margin: 5px 0;
`
export const Genre=styled.div`
    margin: 5px 0;
    margin-right: 20px;
    padding:5px 15px;
    border-radius: 28px;
    border:2px solid white;
    font-size: 18px;
    @media only screen and (max-width:1080px)
    {
        font-size: 15px;
    }
    @media only screen and (max-width: 750px)
    {
        font-size: 13px;
    }
    @media only screen and (max-width: 480px)
    {
        font-size: 11px;
    }
`
export const MovieStats=styled.div`
    display: flex;
    margin: 10px 0;
    align-items: flex-end;
`
export const MovieRating=styled.div`
    font-size: 30px;
    margin-right:15px;
    @media only screen and (max-width: 1080px)
    {
        font-size: 25px;
    }
    @media only screen and (max-width: 750px)
    {
        font-size: 22px;
    }
    @media only screen and (max-width: 480px)
    {
        font-size: 20px;
    }
`
export const MovieVotes=styled.div`
    font-size: 20px;
    font-weight: 500;
    @media only screen and (max-width: 1080px)
    {
        font-size: 18px;
    }
    @media only screen and (max-width: 750px)
    {
        font-size: 16px;
    }
    @media only screen and (max-width: 480px)
    {
        font-size: 14px;
    }
`
export const Buttons=styled.div`
    margin: 10px 0;
    display: flex;
`
export const Button=styled.div`
    margin: 10px 0;
    margin-right: 25px;
    background:${props=>props.reverse?"white":"red"};
    color:${props=>props.reverse?"red":"white"};
    padding:10px 20px;
    border-radius: 25px;
    font-size: 17px;
    font-weight: 600;
    @media only screen and (max-width: 1080px)
    {
        padding:8px 16px;
        font-size:15px;
    }
    @media only screen and (max-width: 480px)
    {
        font-size: 13px;
    }
`