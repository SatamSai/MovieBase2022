import React, { useEffect, useState } from 'react'
import {Videos,Video,Heading, PageStyles} from './styles'
import MovieSlider from '../components/MovieSlider'
import axios from 'axios'
import DetailHeader from '../components/DetailHeader'
import {useParams} from 'react-router'
import NavBar from '../components/NavBar'

function DetailPage() {
    const BaseUrl=process.env.REACT_APP_BASE_URL;
    const ApiKey=process.env.REACT_APP_API_KEY;
    const [details,setDetails]=useState([])
    const [cast,setCast]=useState([])
    const [posters,setPosters]=useState([])
    const [related,setRelated]=useState([])
    const [trailers,setTrailers]=useState([])
    const [teasers,setTeasers]=useState([])
    const [videos,setVideos]=useState([])
    const [genres,setGenres]=useState([])
    const params=useParams()
    useEffect(async()=>{
        const detailres=await axios.get(BaseUrl+params.category+'/'+params.id+'?api_key='+ApiKey+'&append_to_response=videos,images,credits,similar')
        setDetails(detailres.data)
        setPosters(detailres.data.images.posters.slice(0,20))
        setCast(detailres.data.credits.cast)
        setRelated(detailres.data.similar.results)
        setTrailers(detailres.data.videos.results.filter(vid=>vid.type=="Trailer").slice(0,2))
        setTeasers(detailres.data.videos.results.filter(vid=>vid.type=="Teaser").slice(0,2))
        setVideos(detailres.data.videos.results.filter(vid=>vid.type!=="Trailer"&&vid.type!=="Teaser").slice(0,2))
        setGenres(detailres.data.genres)
    },[params.id])
  return(
    <PageStyles>
        <NavBar/>
        <DetailHeader details={details} genres={genres}/>
        <Heading>Cast</Heading>
        <MovieSlider size="person" results={cast}/>
        <Heading>Posters</Heading>
        <MovieSlider size="person" results={posters}/>
        {
            trailers.length!==0?
            <>
                <Heading>Trailers</Heading>
                <Videos>
                    {
                        trailers.map(vid=>(
                            <Video
                                allowFullScreen
                                frameBorder="0"
                                src={`https://www.youtube.com/embed/${vid.key}`}
                            />
                        ))
                    }
                </Videos>
            
            </>:
            <></>
        }
        {
            teasers.length!==0?
            <>
                <Heading>Teasers</Heading>
                <Videos>
                    {
                        teasers.map(vid=>(
                            <Video
                            allowFullScreen
                                frameBorder="0"
                                src={`https://www.youtube.com/embed/${vid.key}`}
                            />
                        ))
                    }
                    
                </Videos>
            </>:
            <></>
        }
        {
            videos.length!==0?
            <>
                <Heading>Other Videos</Heading>
                <Videos>
                    {
                        videos.map(vid=>(
                            <Video
                            allowFullScreen
                                frameBorder="0"
                                src={`https://www.youtube.com/embed/${vid.key}`}
                            />
                        ))
                    }
                    
                </Videos>
            </>:
            <></>
        }

        <Heading>Related Movies</Heading>
        <MovieSlider size="person" results={related}/>
    </PageStyles>

  )
}

export default DetailPage