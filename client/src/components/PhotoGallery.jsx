import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { IoIosHeart } from 'react-icons/io';
import ImageCard from './ImageCard';

const PhotoGallery = () => {
  return (
    <div className='my-20 bg-white flex flex-col justify-center items-center '>
   <h3 className='text-3xl font-semibold my-14 '>photos</h3>
   {/*all my photos will be listed inside this div */}
   
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-5 mb-20'>
            {/* image card */}
        <ImageCard title="The Mountain" author="DeepakChoudhary" img="https://images.pexels.com/photos/22086550/pexels-photo-22086550/free-photo-of-river-in-a-mountain-valley.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            price={10}
            icon1={ <FaShoppingCart className='text-2xl text-black cursor-pointer hover:scale-110 transition-all ease-linear duration-300'/>}
            icon2={<IoIosHeart className='text-2xl text-red-500 cursor-pointer hover:scale-110 transition-all ease-linear duration-300'/>}
        />
         <ImageCard title="The City" author="DeepakChoudhary" img="https://images.pexels.com/photos/27989044/pexels-photo-27989044/free-photo-of-av-paulista.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            price={25}
            icon1={ <FaShoppingCart className='text-2xl text-black cursor-pointer hover:scale-110 transition-all ease-linear duration-300'/>}
            icon2={<IoIosHeart className='text-2xl text-red-500 cursor-pointer hover:scale-110 transition-all ease-linear duration-300'/>}
        />

    </div>
    </div>
  )
}

export default PhotoGallery