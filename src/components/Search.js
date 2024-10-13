import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import apiPath from '../env';
import Moviebox from './Moviebox';


export default function Search() {
    let values = useParams();
    // console.log(values);
    // console.log(values.moviename);
    var[api,setApi] = useState([]);

    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiPath.apikey}&language=en-US&query=${values.moviename}&page=1`).then(res=>res.json()).then(value=>{
            // console.log(value);
            // console.log(value['results']);
            setApi(value['results']);
        })
    },[values.moviename])

  return (
    <Moviebox record={api} title="Search Movie Page" />
  )
}
