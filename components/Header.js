import React from 'react'
import Image from 'next/image'
import {MenuIcon,SearchIcon, ShoppingBagIcon, ShoppingCartIcon} from '@heroicons/react/outline'

const Header = () => {
  return (
    <header>
        
        <div className='flex items-center bg-amazon_blue p-1 py-2 flex-grow'>
            <div className='mt-2 flex items-center flex-grow sm:flex-grow-0'>

                <Image
                alt='amazon logo'
                src="https://links.papareact.com/f90" width={150} height={40} objectFit="contain" 
                className=' cursor-pointer'
                />

            </div>


            {/* search */}


            <div className='bg-yellow-400 hover:bg-yellow-500 h-10 rounded-md items-center flex-grow cursor-pointer hidden sm:flex'>
                <input type="text" className='p-2 h-full w-6 flex-grow rounded-l-md flex-shrink focus:outline-none' />
                <SearchIcon className='h-12 p-4' />

            </div>


            {/* right */}


            <div className='text-white flex items-center text-xs space-x-6 mx-6'>
                <div className='link'>
                    <p className='font-extrabold md:text-sm' >Hello Harsh Bardhan</p>
                    <p className='font-extrabold md:text-sm'>Accounts & Lists</p>
                </div>
                <div className='link'>
                    <p className='font-extrabold md:text-sm'>
                        Returns
                    </p>
                    <p className='font-extrabold md:text-sm'>& Orders</p>
                </div>
                <div className='link relative flex items-center'>

                    <span className='absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold'>
                        0
                    </span>


                    <ShoppingCartIcon className='h-10 ' />
                    <p className='font-extrabold md:text-sm hidden md:inline-flex mt-2'>Basket</p>
                </div>
            </div>

        </div>

        {/* bottom */}

        <div className='flex items-center bg-amazon_blue-light text-white text-sm space-x-3 p-2 pl-6'>

            <p className='link flex items-center'>
                <MenuIcon className='h-6 mr-1' />
                All
            </p>

            <p className='link font-semibold'>Prime Video</p>
            <p className='link font-semibold'>Amazon Business</p>
            <p className='link font-semibold'>Today&apos;s Deals</p>
            <p className='link hidden font-semibold lg:inline-flex'>Electronics</p>
            <p className='link hidden font-semibold lg:inline-flex'>Food & Grocery</p>
            <p className='link hidden font-semibold lg:inline-flex'>Buy Again</p>
            <p className='link hidden font-semibold lg:inline-flex'>Shopper Toolkit</p>
            <p className='link hidden font-semibold lg:inline-flex'>Health & Personal Care</p>

        </div>
    </header>
  )
}

export default Header