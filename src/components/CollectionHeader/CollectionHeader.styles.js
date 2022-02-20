import styled from "styled-components";

export const Header=styled.div`
    height:600px;
    width: 100%;
    position: relative;
    display: flex;
    align-items: flex-end;
    justify-content: center;
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
    z-index: 999;
    display: flex;
    justify-content: space-between;
`
export const PosterImg=styled.img`
    width:25%;

`
export const CollectionSummary=styled.div`
    width:70%;
    color:white;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const CollectionTitle=styled.div`
    font-size: 35px;
    font-weight: 700;
`
export const CollectionDesc=styled.div`
    font-size: 16px;
    font-weight: 500;
    margin: 15px 0;
`
export const CollectionParts=styled.div`
    font-size: 25px;
    font-weight: 700;
`