import React from 'react'

export default function Product({allPro}) {
    // console.log(allPro);
  return (
    <>
        {
            allPro && allPro.map(({image,price,title})=>
                <div className="col-3 text-center">
                    <img src={image} className='img-fluid' />
                    <h2>{price}</h2>
                    <p>{title}</p>
                </div>
            ) 
        }
    </>
  )
}
