import React from 'react'
import services1 from "../assets/Frame.png"
import services2 from "../assets/Frame2.png";
import services3 from "../assets/frame3.png";
import services4 from "../assets/Frame1.png";
import services5 from "../assets/Frame123.png";
import services6 from "../assets/Group.png";
const Part2 = () => {
  return (
    <div className='flex flex-col  mt-24 justify-center align-middle text-center font-mulish'>
        <div className='max-w-[950px] justify-self-center mx-auto '>        
            <h1 className=' text-[36px] font-bold'>Our Services</h1>
            <h2 className='mt-[26px] border-t-2 border-solid border-black w-[56px] justify-self-center mx-auto mb-8'></h2>
            <p className=' font-light text-l text-[#7D7987] mb-[60px]'>We provide to you the best choiches for you. Adjust it to your health needs and make sure your undergo treatment with our highly qualified doctors you can consult with us which type of service is suitable for your health</p>
        </div>
        <div className='xl:w-[1100px]'>
          <div className='flex justify-evenly flex-wrap '>
              <div className='services'>
                <div className='absolute top-14 ml-9'>
                  <img src={services1} alt="" />
                </div>
                <div className='absolute top-44  mx-9 text-left'>
                  <h2 className=' mb-5 font-bold text-2xl'>Search doctor</h2>
                  <p className=' leading-8 text-[#7D7987]'>Choose your doctor from thousands of specialist, general, and trusted hospitals</p>
                </div>
              </div>
              <div className='services'>
                <div className='absolute top-14 ml-9'>
                  <img src={services2} alt="" />
                </div>
                <div className='absolute top-44  mx-9 text-left'>
                  <h2 className=' mb-5 font-bold text-2xl'>Online pharmacy</h2>
                  <p className=' leading-8 text-[#7D7987]'>Buy  your medicines with our mobile application with a simple delivery system</p>
                </div>
              </div>
              <div className='services'>
                <div className='absolute top-14 ml-9'>
                  <img src={services3} alt="" />
                </div>
                <div className='absolute top-44  mx-9 text-left'>
                  <h2 className=' mb-5 font-bold text-2xl'>Consultation</h2>
                  <p className=' leading-8 text-[#7D7987]'>Free consultation with our trusted doctors and get the best recomendations</p>
                </div>
              </div>
              <div className='services'>
                <div className='absolute top-14 ml-9'>
                  <img src={services4} alt="" />
                </div>
                <div className='absolute top-44  mx-9 text-left'>
                  <h2 className=' mb-5 font-bold text-2xl'>Details info</h2>
                  <p className=' leading-8 text-[#7D7987]'>Free consultation with our trusted doctors and get the best recomendations</p>
                </div>
              </div>
              <div className='services'>
                <div className='absolute top-14 ml-9'>
                  <img src={services5} alt="" />
                </div>
                <div className='absolute top-44  mx-9 text-left'>
                  <h2 className=' mb-5 font-bold text-2xl'>Emergency Care</h2>
                  <p className=' leading-8 text-[#7D7987]'>You can get 24/7 urgent care for yourself or your children and your lovely family</p>
                </div>
              </div>
              <div className='services'>
                <div className='absolute top-14 ml-9'>
                  <img src={services6} alt="" />
                </div>
                <div className='absolute top-44  mx-9 text-left'>
                  <h2 className=' mb-5 font-bold text-2xl'>Tracking</h2>
                  <p className=' leading-8 text-[#7D7987]'>Track and save your medical history and health data </p>
                </div>
              </div>
          </div>
        </div>
        <div className='mt-16'>
        <a className=' px-[50px] border-solid border-[1.4px] border-[#458FF6] text-[#458FF6] py-4 font-bold text-lg rounded-[55px]' href="">Learn more</a>
        </div>
    </div>
  )
}

export default Part2