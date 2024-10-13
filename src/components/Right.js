import React, { useContext, useEffect, useState } from 'react'
import Product from './Product';
import SearchContext from '../Context/SearchContext';

export default function Right({p2}) {
    const valueFromSearch = useContext(SearchContext);
    console.log("==",valueFromSearch);

    var[api,setApi] = useState([]);

    useEffect(()=>{
        console.log('use effect' , p2 , valueFromSearch);
        if(p2!='' ){
           
            fetch('https://fakestoreapi.com/products/category/'+p2)
            .then(res=>res.json())
            .then(json=>{
                console.log(json)
                if(json.length>0){
                    setApi(json);
                }
            })
        }

        if( valueFromSearch!=''){
           

            fetch('https://fakestoreapi.com/products/category/'+valueFromSearch)
            .then(res=>res.json())
            .then(json=>{
                console.log(json)
                if(json.length>0){
                    setApi(json);
                }
            })
        }

    },[p2,valueFromSearch])
  return (
    <div>
        {
            (api && api.length > 0) ?(
                <>
                    <h1> All Products</h1>
                    <div className='row'>
                        <Product allPro={api} />
                    </div>
                </>
            ):("No Data Found")
        }
    </div>
  )
}
