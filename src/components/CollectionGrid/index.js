import React from 'react'
import {Collection, Wrapper,CollectionImg,CollectionName} from './CollectionGrid.styles'
import Backdrop from '../../assets/NoBackdrop.jpg'
import { Link } from 'react-router-dom'

function CollectionGrid({collections}) {
  return (
    <Wrapper>
        {
            collections.map(collection=>(
              <Collection>
              <Link to={"/collection/"+collection.id}>
                    <CollectionImg src={collection.backdrop_path?"https://image.tmdb.org/t/p/w500"+collection.backdrop_path:Backdrop}/>
                    <CollectionName>{collection.name}</CollectionName>
              </Link>
                </Collection>
            ))
        }
    </Wrapper>
  )
}

export default CollectionGrid