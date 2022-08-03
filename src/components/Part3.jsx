import React from 'react'
import part3pic1 from "../assets/trafalgar-illustration sec02 1.png"
import part3pic2 from "../assets/trafalgar-illustration sec03 1.png"
import downloadicon from "../assets/Vector.png"
const Part3 = () => {
  return (
    <div className=' mt-20 md:mt-[200px] space-y-52'>
        <div className='flex flex-col md:flex-row items-center md:place-items-start md:justify-default font-mulish space-x-5'>
            <div><img src={part3pic1} className="w-[500px] md:min-w-[500px]" alt="" /></div>
            <div className='w-[450px]'>
                <h1 className='font-bold text-4xl leading-[56px]'>Leading healthcare providers</h1>
                <h2 className='w-[56px] border-t-2 border-black my-[18px]'></h2>
                <p className='text-[#7D7987] font-light mb-[40px]'>Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it’s not just work. We take pride in the solutions we deliver</p>
                <a className=' px-[50px] border-solid border-[1.4px] border-[#458FF6] text-[#458FF6] py-4 font-bold text-lg rounded-[55px]' href="">Learn more</a>
            </div>
        </div>
        <div className='flex flex-col md:flex-row-reverse items-center md:place-items-start md:justify-default font-mulish space-x-10'>
            <div><img src={part3pic1} className="w-[500px] md:min-w-[500px]" alt="" /></div>
            <div className='w-[420px]'>
                <h1 className='font-bold text-4xl leading-[56px] w-[260px]'>Download our mobile apps</h1>
                <h2 className='w-[56px] border-t-2 border-black my-[18px]'></h2>
                <p className='text-[#7D7987] font-light mb-[40px]'>Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls,or administrative hassle) and securely</p>
                <div className='flex px-[50px] border-solid border-[1.4px] border-[#458FF6] text-[#458FF6] py-4 font-bold text-lg rounded-[55px] justify-center w-[200px]'>
                    <a href="#">Download </a>
                    <img className='ml-2 w-2 h-4 relative top-1.5' src={downloadicon} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Part3