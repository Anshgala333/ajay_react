import React, { useState } from 'react'
import Content from './Content'

import SearchContext from '../Context/SearchContext';

export default function Fakestore() {
    var[rec,setRec] = useState("");
    var[rec1,setRec1] = useState("");

    var myfunc1 = function(ev){
        // console.log(ev);
        // console.log(ev.target);
        setRec(ev.target.value);
    }

    var myfunc2 = function(ev){
        // console.log(ev);
        // console.log(ev.target);
        setRec1(ev.target.value);
    }

  return (
    <div className='container border border-1'>
        <h1 className='p-2'> Fakestore - Props Drilling </h1>
        <div className='border-bottom border-1 p-3'>
            <input type='text' className='form-control' onBlur={myfunc1} /> 
            <br />
            <br />
            <input type='text' className='form-control' onBlur={myfunc2} /> 
            
            
            <SearchContext.Provider value={rec1 }>
                <Content p1={rec} />
            </SearchContext.Provider>

        </div>
    </div>
  )
}
