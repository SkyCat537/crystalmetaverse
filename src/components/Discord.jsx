/* eslint-disable no-unused-vars */
import React from 'react'

const Discord = () => {
  return (
    <div className='w-full py-16 text-white px-4' id="section-3">
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
            <div className='lg:col-span-2 my-4'>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold
                py-2'>Want tips & tricks to optimice your flow?</h1>
                <p>
                    Join our Discord and stay up to date.
                </p>
            </div>
            <div className='my-4'>
                <div className='flex flex-col sm:flex-row 
                items-center justify-between w-full'>
                    <button className='bg-blue-600 w-[200px] rounded-full 
                    font-medium my-6 ml-4 mx-auto py-3 px-6 md:mx-[0.5] 
                    text-white hover:bg-blue-800 duration-100'>
                    Join
                    </button>
                </div>

            </div>

        </div>

    </div>
  )
}

export default Discord