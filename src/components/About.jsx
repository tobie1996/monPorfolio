import React from 'react'

const About = () => {
  return (
    
    <div
     name="about"
     className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'
     >
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
      <div className='pb-8'>
        <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
        About
        </p>
      </div>
     
      <p className='text-xl mt-20'>
      Tobie, a passionate and experienced full-stack developer, 
      specializing in JavaScript. With my mastery of React, Mongo DB,
       Next.js and React Native, I create robust and intuitive web and
        mobile applications.
      </p>
      <br/>
      <p className='text-xl'>
        morem.50and experienced full-stack developer, 
        specializing in JavaScript. With my mastery of React, Mongo DB,
        Next.js and React Native, I create robust and intuitive web and
          mobile applications.
        </p>
    </div>
    </div>
  )
}

export default About