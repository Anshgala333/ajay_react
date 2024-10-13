import React, { useEffect, useState } from 'react'
import apiPath from '../env';
import { useParams } from 'react-router-dom';
export default function Singlemovie() {

    let params = useParams();
    // console.log(params.movid);

    var[cast,setCast] = useState([]);
    var[details,setDetails] = useState({});

    //https://api.themoviedb.org/3/movie/${movie_id}?api_key=${Api_key}&language=en-US
    
    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/${params.movid}?api_key=${apiPath.apikey}&language=en-US`)
        .then(res=>res.json())
        .then(value=>{
            console.log(value);
            setDetails(value);
        });

        fetch(`https://api.themoviedb.org/3/movie/${params.movid}/credits?api_key=${apiPath.apikey}&language=en-US`)
        .then(res=>res.json())
        .then(value=>{
            console.log(value);
            setCast(value['cast'])
        })
    },[params.movid])

  return (
    <div className='container'>
        <h1 className='text-center p-5'>Singlemovie Page</h1>
        
            {
                details && Object.keys(details).length>0 && (
                    <div className='row'>
                        <div className='col-xl-6'>
                            <h3 className='text-uppercase' style={{'textDecoration':'underline'}}>{details.original_title}</h3>
                            <p>{details.overview}</p>
                            <p>{details.vote_average}/10</p>
                            <p>{details.status}</p>
                        </div>
                        <div className='col-xl-6'>
                            <img src={apiPath.imagepath + "/" + details.backdrop_path } className='img-fluid' />
                        </div>
                    </div>
                )
            }
       
        <h1>Movie Cast details</h1>
        <div className='row'>
            {
                cast && cast.length>0 && cast.map(({original_name,profile_path})=>
                    <div className='col-xl-2 col-4'>
                        
                        {
                            (profile_path!==null)?(
                                <img src={apiPath.imagepath + "/" + profile_path } className='img-fluid' />
                            ):(
                                <img src='https://cdn4.iconfinder.com/data/icons/computer-network-4/64/error-404-warning-missing-disconnect-512.png' className='img-fluid' />
                            )
                        }
                        
                        <h4>{original_name}</h4>
                    </div>    
                )
            }
        </div>
    </div>
  )
}
