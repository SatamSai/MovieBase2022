import styled from "styled-components";

export const Wrapper=styled.div`
    height:810px;
    @media only screen and (max-width: 750px){
        height: 700px;
    }
`

export const Content=styled.div`
`
export const Movie=styled.div`
    color: white;
    width:92%;
    max-width: 1200px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media only screen and (max-width: 750px)
    {
        margin-top:20px;
        flex-direction: column-reverse;
    }
`
export const Details=styled.div`
    width:60%;
    text-align: start;
    @media only screen and (max-width: 750px){
        width:100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
`
export const Poster=styled.img`
    width:35%;
    height:50%;
    border-radius: 20px;
    @media only screen and (max-width: 750px){
        width: 45%;
        margin-bottom:25px;
    }
    @media only screen and (max-width: 480px){
        width: 60%;
    }
`
export const Title=styled.div`
    font-size: 55px;
    font-weight: 700;
    @media only screen and (max-width: 1080px)
    {
        font-size: 35px;
    }
    @media only screen and (max-width: 480px){
        font-size: 30px;
    }
`
export const Description=styled.div`
    font-size: 18px;
    margin: 35px 0;
    @media only screen and (max-width: 1080px)
    {
        font-size:15px;
        margin: 25px 0;
    }
    @media only screen and (max-width: 480px)
    {
        font-size: 12px;
    }
`
export const Button=styled.div`
    background-color: red;
    height:50px;
    width: 200px;
    border-radius:25px;
    font-weight: 800;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    @media only screen and (max-width:480px){
        font-size: 13px;
        height:35px;
        width: 175px;
    }
`