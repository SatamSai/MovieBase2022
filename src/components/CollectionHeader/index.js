import React from 'react'
import {Header,CollectionDetails, PosterImg, CollectionSummary,CollectionTitle,CollectionDesc} from './CollectionHeader.styles'
import HeaderImg from '../../assets/Header.jpg'
import Poster from '../../assets/Poster.jpg'

function CollectionHeader({collection}) {
  return (
    <Header>
      <img src={collection.backdrop_path?"https://image.tmdb.org/t/p/w500"+collection.backdrop_path:HeaderImg} alt="" className='headerimg'/>
      <CollectionDetails>
        <PosterImg src={collection.poster_path?"https://image.tmdb.org/t/p/w500"+collection.poster_path:Poster}/>
        <CollectionSummary>
          <CollectionTitle>{collection.name}</CollectionTitle>
          <CollectionDesc>{collection.overview}</CollectionDesc>
        </CollectionSummary>
      </CollectionDetails>
    </Header>
  )
}

export default CollectionHeader