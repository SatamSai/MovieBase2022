import styled from 'styled-components'

export const PageStyles=styled.div`
    background:black;
    font-family: 'Montserrat', sans-serif;
    position:relative;
    padding-bottom: 40px;
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