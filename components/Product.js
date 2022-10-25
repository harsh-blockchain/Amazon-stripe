import { StarIcon } from '@heroicons/react/outline';
import Image from 'next/image'
import React, { useState } from 'react'
import Currency from 'react-currency-formatter'

const Product = ({id,title,price,description,category,image}) => {

    const [rating] = useState(
        Math.floor(Math.random() * (5 - 1 +1) + 1 )
    );

    const [hasPrime] = useState(Math.random() < 0.5);
    
    
  return (
    <div className='relative m-5 flex flex-col bg-white p-10 z-30'>
        
        <div className='absolute top-2 right-2 text-xs italic text-gray-400'>{category}</div>

        <Image src={image} height={200} width={200} objectFit="contain" />

        <h4 className='my-3'>{title}</h4>


        <div className='flex'>

            {Array(rating)
            .fill()
            .map((_, i) => (

                 <StarIcon className='h-5 text-yellow-500' />
            ) )}



        </div>


        <div className='text-xs my-2 line-clamp-2'>{description}</div>


        <div className='mb-5'>
            <Currency quantity={price} currency="INR" />
        </div>

        <div>

        {hasPrime && (
            <div className='flex items-center space-x-2 -mt-5'>
                <img className='w-12' src="https://links.papareact.com/fdw" alt="" />
                <div className='text-xs text-gray-500'>FREE Next Day Delivery</div>
            </div>
        )}
        </div>


        <button className='mt-auto cursor-pointer hover:scale-95 transition-all duration-300 ease-in-out p-2 text-xs md:text-sm
    bg-gradient-to-b from-yellow-200 to-yellow-400 border border-yellow-300
    rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500'>Add to Basket</button>

    </div>
  )
}

export default Product