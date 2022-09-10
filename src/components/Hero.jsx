import React from 'react'
import Typed from 'react-typed'

const Hero = () => {
  return (
    <div className='text-white'>
        <div className = 'max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <p  className = 'text-teal-400'>CSE WITH DATA ANALYTICS</p>
            <h1 className = 'md:text-7xl sm:text-6xl text-4xl md: py-6'>Grow with East Campus.</h1>
            <div className = 'flex justify-center items-center'>
                <p className = 'md:text-5xl sm:text-4xl text-xl font-bold py-4'>Subject of 3rd Semester: </p>
                <Typed className = 'md:text-5xl sm:text-4xl text-xl font-bold  md:pl-4 pl-2'
                strings ={['DBMS', 'WEB-T', 'DAA', 'CAO', "MPMC"]} typeSpeed = {120} backspeed = {140} loop
                />
            </div>
            <p className= 'md:text-2xl text-xl font-bold text-gray-500'>Hello I am Sachit Gupta, currently pursuing my B-tech in CSE from NSUT, New Delhi</p>
            <button className = 'bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button>
        </div>
    </div>
  );
};

export default Hero