/* eslint-disable no-unused-vars */
import React from 'react'
import Laptop from '../assets/react.svg'

const Peer2Peer = () => {
  return (
    <div className='w-full  py-16 px-4' id="section-2">
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img src={Laptop} alt='laptop'
            className='w-[500px] mx-auto py-4'/>
            <div className='flex flex-col justify-center'>
                <p className='text-white uppercase font-bold
                '>data Peer2Peer dashbord</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold
                py-2 text-white'> Manage Data Peer2Peer Centrally</h1>
                <p className='text-gray-500'>Lorem ipsum dolor, sit amet consectetur 
                    adipisicing elit. Facere, sequi. 
                    Explicabo laboriosam corporis quis, 
                    ex atque cupiditate mollitia quos 
                    enim perspiciatis libero sed illum, 
                    numquam modi qui asperiores. 
                    Quas, voluptates?
                </p>
                <button className='text-white w-[200px] rounded-full 
                font-medium my-6 mx-auto py-3 md:mx-0 bg-blue-600 hover:bg-blue-800 duration-100'>
                Get Starded
                </button>
            </div>

        </div>
    </div>
  )
}

export default Peer2Peer