import styled from "styled-components";

export const Header=styled.div`
    height:600px;
    width: 100%;
    position: relative;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    margin-bottom: 35px;
    .headerimg{
        position: absolute;
        height:100%;
        width: 100%;
        object-fit: cover;
        mask-image: linear-gradient(0deg, rgba(0, 0, 0, 0.0) 0%, #000000 100%);
    }
`
export const CollectionDetails=styled.div`
    width:93%;
    max-width: 1200px;
    z-index: 2;
    display: flex;
    justify-content: space-between;
    @media only screen and (max-width: 480px)
    {
        flex-direction: column;
    }
`
export const PosterImg=styled.img`
    width:25%;
    aspect-ratio: 3/5;
    border-radius: 10px;
    @media only screen and (max-width: 480px){
        align-self: center;
        width:50%;
        margin-bottom: 25px;
    }
`
export const CollectionSummary=styled.div`
    width:70%;
    color:white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media only screen and (max-width: 480px)
    {
        width: 100%;
        text-align: center;
    }
`

export const CollectionTitle=styled.div`
    font-size: 35px;
    font-weight: 700;
    @media only screen and (max-width: 750px){
        font-size: 25px;
    }
`
export const CollectionDesc=styled.div`
    font-size: 16px;
    font-weight: 500;
    margin: 15px 0;
    @media only screen and (max-width: 750px){
        font-size: 12px;
    }
`