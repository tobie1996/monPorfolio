import React from 'react'
import Html from '../assets/html.png'
import Css from '../assets/Css.png'
import Fastapi from '../assets/Fastapi.png'
import Github from '../assets/GitHub.png'
import Javascripts from '../assets/JavaScript.png'
import NextJs from '../assets/Nextjs.png'
import ReactJs from '../assets/React.png'
import Mongodb from '../assets/mongodb.png'



const Experience = () => {

const experiences =[
    {
        id:1,
        src:Html,
        title:'HTML',
        style:"shadow-orange-500"
    },
    {
        id:2,
        src:Css,
        title:'CSS',
        style:"shadow-orange-500"
    },
    {
        id:3,
        src:Fastapi,
        title:'FASTAPI',
        style:"shadow-orange-500"
    },
    {
        id:4,
        src:Github,
        title:'GITHUB',
        style:"shadow-orange-500"
    },
    
    {
        id:5,
        src:Javascripts,
        title:'JAVASCRIPT',
        style:"shadow-orange-500"
    },
    {
        id:6,
        src:NextJs,
        title:'NEXTJS',
        style:"shadow-orange-500"
    },
    {
        id:7,
        src:ReactJs,
        title:'REACT JS',
        style:"shadow-orange-500"
    },
    {
        id:8,
        src:Mongodb,
        title:'MONGOBD',
        style:"shadow-orange-500"
    },
    
  ]


  return (
    <div
    name="experience" 
    className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-full'
    >
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col  justify-center w-full h-full '>
            <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                Experience
            </p> 
            <p className='py-6'>
            These are the technologie I've worked with
            </p> 

            </div>

            
                <div className='w-full grid grid-cols-2 sm:grid-cols-3
                 gap-8 text-center py-8 px-12 sm:px-0'>

                {experiences.map(({ id,src,title, style })=>(

                        <div 
                        key={id}  className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                            <img src={src}
                            alt=""
                            className="w-20 mx-auto"
                            />
                            <p className='mt-4 text-center'>{title}</p>
                            
                       </div>
                ))}
            </div>
            </div>
    </div>
  )
}

export default Experience
