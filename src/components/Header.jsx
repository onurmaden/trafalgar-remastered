import Logo from "../assets/logo.png"
import {MenuIcon} from '@heroicons/react/solid'
import React, {useState} from 'react'
import {XIcon} from '@heroicons/react/solid'

const Header = () => {
  const[nav,setNav] = useState(false)
  const handleClick =() => setNav(!nav)
  return (
    <div className="flex max-w-[1200px] flex-col ">
        <div className="flex flex-row justify-between px-2 mt-20 w-full flex-wrap">
          
          <div className="flex flex-row space-x-2  font-mulish font-bold">
            <h1 className="text-[26px] py-1 px-4 text-white bg-[#458FF6] rounded-full">T</h1>
            <h2 className="text-[24px] py-1">Trafalgar</h2>
          </div>
          <ul className="flex mt-3 list-none space-x-5 text-lg ">
              <li class><a className="opacity-100 font-bold font-mulish" href="">Home</a> </li>
              <li className="hidden md:flex opacity-50"><a href="">Find a Doctor</a> </li>
              <li className="hidden md:flex opacity-50"><a href="">Apps</a> </li>
              <li className="hidden md:flex opacity-50"><a href="">Testimonials</a> </li>
              <li className="hidden md:flex opacity-50"><a href="">About us</a></li>
              <li className="" onClick={handleClick}>{!nav ? <MenuIcon className="md:hidden w-8 relative bottom-1 "/> : <XIcon className="w-8 relative bottom-1" /> }</li>
          </ul>
        </div>
        <div className={!nav ? 'hidden' : 'w-full bg-[#458FF6] px-8  mt-3 border-4  flex flex-col justify-center text-center'}>
          <ul className=" " >
            <li className="py-4 border-b-2 border-gray-300 w-full  text-white font-semibold"><a href="#">Find a Doctor</a> </li>
            <li className="py-4 border-b-2 border-gray-300 w-full text-white font-semibold"><a href="#">Apps</a> </li>
            <li className="py-4 border-b-2 border-gray-300 w-full text-white font-semibold"><a href="#">Testimonials</a> </li>
            <li className="py-4 border-gray-300 w-full text-white font-semibold "><a href="#">About us</a> </li>
          </ul>
        </div>
        
    </div>
  )
}

export default Header