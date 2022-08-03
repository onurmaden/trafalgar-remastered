import React from 'react'
import Part1img from "../assets/illustration.png"
const Part1 = () => {
  return (
    <div className='flex flex-col md:flex-row mt-20 max-w-[1200px] items-center md:items-default md:justify-default'>
        <div className="mt-12 mr-3 md:mr-18 md:mt-28 font-mulish max-w-[445px] ml-1 flex flex-col justify-center text-center md:text-left">
            <h1 className=' font-bold text-5xl'>
            Virtual healthcare for you
            </h1>
            <p className='text-xl text-[#7D7987] mt-5 font-light'>
            Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone
            </p>
            <p className='mt-12'>
            <a className='px-16 py-3 rounded-[55px]  bg-[#458FF6] text-white font-bold text-lg ' href="#">Consult today</a></p>
        </div>
        <div className='flex justify-center mt-4'>
            <img className='w-[500px] self-center md:w-auto' src={Part1img} alt="" />
        </div>
    </div>
  )
}

export default Part1