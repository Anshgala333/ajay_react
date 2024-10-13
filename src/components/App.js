import React, { useState } from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'

export default function App() {
  var[textData,setTextData] = useState("");

  function dataToCollect(searchData){
    console.log('This is App Comp Function',searchData);
    setTextData(searchData);
  }

  return (
    <>
        <Header p1={dataToCollect} />
        <Outlet />
    </>
  )
}
