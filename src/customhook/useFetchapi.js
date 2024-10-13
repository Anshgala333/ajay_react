import React, { useEffect, useState } from "react";
import apiPath from "../env";
import fetchData from "../functions/fetchData";

function useFetchapi(extrapath){
    var[api,setApi] = useState([]);

    useEffect(()=>{
        // console.log(extrapath);
        var finalPath = apiPath.moviedbpath+extrapath;
        // console.log(finalPath);
        fetchData(finalPath)
        .then(values=>{
            // console.log(values);
            setApi(values);
        })
        
    },[]);

    return api;
}

export default useFetchapi;