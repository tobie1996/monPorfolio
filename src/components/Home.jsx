import React from 'react';
import HeroImage from '../assets/Me.jpg';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

const Home = () => {
  return (
    <div
      name="home"
      className="w-full h-screen bg-gradient-to-b
       from-black to-gray-800 via-black"
        >
        <div className="max-w-screen-xl mx-auto flex flex-col justify-center
         items-center h-full px-4 md:flex-row ">
         <div className=' flex flex-col justify-center h-full'>
            
         
            <h2 className='text-4xl sm:text-7xl font-bold text-white  relative top-5'>
            I'm a Full Stack Developer
            </h2>

            <p className='text-gray-500 py-4 max-w-md relative top-2'>
            I'm Mbarga Ekassi Tobie, a passionate and
             experienced full-stack developer, specializing 
             in JavaScript. With my mastery of React, Mongo DB,
             Next.js and React Native, I create robust and 
             intuitive web and mobile applications.
             </p>

            <div>
                <button className='group text-white w-fit px-6 py-3 my-2 flex 
                items-center rounded-md bg-gradient-to-r from-cyan-500
                 to-blue-500 cursor-pointer'>
                    Portfilio
                    <span className='group-hover:rotate-90 duration-300'>
                    <MdOutlineKeyboardArrowRight size={25} className="ml-1"/>
                    </span>
                </button>
            </div>
        </div>
      <div>
        <img className='rounded-2xl mx-auto w-2/3 md:w-full' src={HeroImage} alt="My profile"/>
      </div>
    </div>
</div>
  );
};

export default Home;
