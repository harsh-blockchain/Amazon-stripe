import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader



const Banner = () => {
  return (
    <div className='relative'>
        <div className='absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20' />

        <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
        >


            <div>
                <img loading='lazy' src='https://i0.wp.com/www.eastmojo.com/wp-content/uploads/2021/10/Amazon-Great-India-Festival.jpg?fit=1200%2C400&ssl=1' alt='' />
            </div>
            <div>
                <img loading='lazy' src='https://images-eu.ssl-images-amazon.com/images/G/31/img19/Wireless/Rakshabandhan/D11399736_Rakshabandhan_Fest_Desktop-Header._CB1198675309_.jpg' alt='' />
            </div>
            
            <div>
                <img loading='lazy' src='https://offerscouponsdeals.in/public/web/images/1540209419.jpg' alt='' />
            </div>
           



        </Carousel>
        
    </div>
  )
}

export default Banner