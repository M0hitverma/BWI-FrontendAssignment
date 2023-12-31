import React from 'react'
import Image from 'next/image'
import './CardStyle.css'
const Card = (data) => {
     
  return (
    <div className="maincard rounded-md">
 
    <div className='blogimg'
       style={{
        backgroundImage:`url(${data.thumbnail})`
       }}>
     </div>
 


     <div className='details flex flex-col gap-2 p-3'>
        <div className='flex flex-row gap-2'>
       <p className=' font-semibold'>{data.title} </p>
       <p className='text-sm'>({data.brand})</p>
       </div>
       <p className=' font-light text-xs '>{data.description}</p>
      <div className='flex flex-row justify-between'>

        <div className='flex flex-row gap-3 '>  
        <p>₹{Math.round(data.price-(data.price* (data.discountPercentage/100)))}</p>
        <p> <del className=' mt-2  text-sm font-bolder text-stone-400'>₹{data.price}</del></p>
        </div>
        <p className='text-green-500'>{data.discountPercentage}%</p>

         </div>
       </div>
    </div>
  )
}

export default Card
