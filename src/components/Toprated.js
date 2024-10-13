import React from 'react'
import useFetchapi from '../customhook/useFetchapi'
import apiPath from '../env';
import Moviebox from './Moviebox';

export default function Toprated() {
    var ansFetch = useFetchapi(`3/movie/top_rated?api_key=${apiPath.apikey}&language=en-US&page=1`);
//   console.log(ansFetch);

  return (
   
    <Moviebox record={ansFetch} title="Top Rated Movie" />
           
  )
}
