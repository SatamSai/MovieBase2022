import styled from "styled-components";

export const Wrapper=styled.div`
    width:93%;
    max-width: 1200px;
    margin: 0 auto;
    margin-top: 50px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`
export const Collection=styled.div`
    width:49%;
    aspect-ratio: 5/3.5;
    margin-bottom: 20px;
    cursor: pointer;
    @media only screen and (max-width:480px)
    {
        width:100%;
    }
    :hover{
        img{
            opacity: 0.4;
        }
    }
`

export const CollectionImg=styled.img`
    width: 100%;
    aspect-ratio: 5/3;
    border-radius: 10px;
    object-fit: cover;
`
export const CollectionName=styled.div`
    width: 100%;
    aspect-ratio: 5/0.5;
    font-size: 19px;
    height:60px;
    font-weight: 700;
    overflow:hidden;
    margin-top: 5px;
    color:white;
    @media only screen and (max-width: 1080px){
        font-size: 18px;
        height:40px;
    }
    @media only screen and (max-width: 750px){
        font-size: 15px;
    }
    @media only screen and (max-width: 480px){
        font-size: 15px;
        height:35px;
    }
`