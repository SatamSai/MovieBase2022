import styled from 'styled-components'

export const Container=styled.div`
    height:95px;
    background-color: #2A2A2A;
    display: flex;
    justify-content: center;
    align-items: center;
    color:white;
    @media only screen and (max-width: 750px)
    {
        height:75px;
        font-size: 27px;
    }
    @media only screen and (max-width:480px){
        height:56px;
    }
`
export const Search=styled.div`
    background:#1A1A1A;
    height:60px;
    max-width: 1200px;
    width: 93%;
    border-radius:30px;
    display: flex;
    align-items: center;
    padding-left:15px;
    font-size: 30px;
    @media only screen and (max-width: 750px)
    {
        height:50px;
        font-size: 27px;
    }
    @media only screen and (max-width:480px){
        padding-left: 10px;
        height:30px;
        font-size: 17px;
    }

`
export const SearchField=styled.input`
    width:90%;
    margin-left:15px;
    background: rgba(0,0,0,0);
    border:0;
    color:white;
    font-size: 22px;
    :focus{
        outline: none;
    }
    @media only screen and (max-width:480px){
        margin-left: 5px;
        font-size: 13px;
    }

`