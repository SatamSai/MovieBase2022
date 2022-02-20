import styled from "styled-components";

export const Nav=styled.div`

    position: -webkit-sticky;
    position: sticky;
    color:white;
    background:rgba(0,0,0,0.9);
    display: flex;
    justify-content: center;
    z-index:999;
    top: 0;
`
export const NavBarContent=styled.div`
    padding:20px 0;
    display: flex;
    max-width:1200px;
    width:93%;
    align-items: center;
    justify-content: space-between;
    @media only screen and (max-width: 700px){
        flex-direction: column;
        align-items: flex-start;
    }
`

export const Main=styled.div`
    width:auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media only screen and (max-width: 750px){
        width:100%;
    }
`
export const Menu=styled.img`
    height:40px;
    width:40px;
    cursor:pointer;
    display: none;
    @media only screen and (max-width: 750px)
    {
        display: block;
    }
`
export const Logo=styled.div`
    font-size:40px;
    font-weight:700;
    @media only screen and (max-width:750px)
    {
        font-size: 35px;
    }
    @media only screen and (max-width:480px){
        font-size:24px;
    }
`

export const Links=styled.div`
    font-size:22px; 
    display: flex;
    .navlink{
        color: ${props=>props.active?"red":"white"};
        text-decoration:none;
        font-weight:500;
        padding:0px 10px;
    }
    @media only screen and (max-width:1080px){
        font-size: 19px;
    }
    @media only screen and (max-width:750px){
        flex-direction: column;
        margin-top: 15px;
        display: ${props=>props.show?"block":"none"};
    }
`
export const NavLink=styled.div`
    @media only screen and (max-width: 750px){
        padding:10px 0;
    }
`