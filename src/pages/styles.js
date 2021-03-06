import styled from 'styled-components'

export const PageStyles=styled.div`
    background:black;
    font-family: 'Montserrat', sans-serif;
    position:relative;
    padding-bottom: 40px;
    min-height: 100vh;
`
export const Content=styled.div`
`
export const Heading=styled.div`
    color:white;
    max-width:1200px;
    width:93%;
    font-size: 30px;
    margin:0 auto;
    margin-top:50px;
    margin-bottom: 30px;
    font-weight: 700;
    @media only screen and (max-width: 1080px){
        font-size: 25px;
    }
    @media only screen and (max-width: 750px){
        font-size: 21px;
    }
    @media only screen and (max-width: 480px){
        font-size: 17px;
        margin-bottom:25px;
        margin-top:25px;
    }
`

export const Button=styled.div`
    height:60px;
    width:250px;
    margin:30px auto;
    border-radius: 15px;
    background-color: red;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 25px;
    cursor: pointer;
    color: white;
    @media only screen and (max-width: 750px){
        height:40px;
        width:150px;
        font-size: 15px;
    }
    @media only screen and (max-width: 480px){
        height:30px;
        width:120px;
        font-size: 13px;
    }
`

export const Spinner =styled.div`
    border:5px solid var(--lightGrey);
    border-top: 5px solid var(--medGrey);
    border-radius: 50%;
    width: 50px;
    height: 50px;
    animation: spin 0.8s linear infinite;
    margin: 20px auto;
    @keyframes spin{
        0%{
            transform: rotate(0deg);
        }
        100%{
            transform: rotate(360deg);
        }
    }
`
export const OptionBar=styled.div`
    padding-bottom:20px;
    background-color: #2A2A2A;
`
export const Options=styled.div`
    max-width: 1200px;
    width:93%;
    margin: auto;
    height:60px;
    display: flex;
    justify-content: space-between;
    @media only screen and (max-width: 1080px)
    {
        height:50px;
    }
    @media only screen and (max-width: 750px)
    {
        height:45px;
    }
    @media only screen and (max-width: 480px)
    {
        height:25px;
    }
`
export const Option=styled.div`
    color:${props=>props.active?"red":"white"};
    background:${props=>props.active?"black":"red"};
    width:30%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 25px;
    font-size: 30px;
    font-weight: 700;
    cursor:pointer;
    @media only screen and (max-width:1080px){
        font-size: 25px;
    }
    @media only screen and (max-width:750px){
        font-size: 22px;
    }
    @media only screen and (max-width:480px){
        font-size: 12px;
    }
`

export const Videos=styled.div`
    max-width: 1200px;
    width:93%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`
export const Video=styled.iframe`
    width:49%;
    aspect-ratio: 3/2;
    @media only screen and (max-width: 480px)
    {
        width: 100%;
    }
`

export const Detail=styled.div`
    max-width: 1200px;
    width: 93%;
    margin:25px auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    @media only screen and (max-width: 480px)
    {
        flex-direction: column;
    }
`

export const Profile=styled.img`
    width:30%;
    aspect-ratio: 3.5/5;
    border-radius: 10px;
    @media only screen and (max-width: 1080px){
        width:32%;
    }
    @media only screen and (max-width: 480px){
        width:50%;
        margin-bottom: 35px;
    }
`
export const Summary=styled.div`
    width:65%;
    @media only screen and (max-width: 480px)
    {
        width:100%;
    }
`
export const Name=styled.div`
    font-size:50px;
    font-weight: 700;
    @media only screen and (max-width:1080px)
    {
        font-size: 40px;
    }
    @media only screen and (max-width:750px){
        font-size: 25px;
    }
`
export const Info=styled.div`
    font-size: 25px;
    margin:15px 0;
    font-weight: 500;
    @media only screen and (max-width:1080px)
    {
        font-size: 20px;
        margin: 10px 0;
    }
    @media only screen and (max-width: 750px)
    {
        font-size: 14px;
        margin: 8px 0;
    }
`
export const Bio=styled.div`
    @media only screen and (max-width: 1080px){
        font-size: 12px;
    }
    @media only screen and (max-width: 750px)
    {
        font-size: 9px;
    }
`