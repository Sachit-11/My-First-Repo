import React from 'react';
import single from '../assets/single.png'
import DOubLe from '../assets/double.png'
import Triple from '../assets/triple.png'

const cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] bg-white' src={single} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Subject 1</h2>
              <p className='text-center text-4xl font-bold'>DBMS</p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>Basic</p>
                  <p className='py-2 border-b mx-8'>ER</p>
                  <p className='py-2 border-b mx-8'>Relation</p>
              </div>
              <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
          </div>
          <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={DOubLe} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Subject 2</h2>
              <p className='text-center text-4xl font-bold'>MPMC</p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>Buses</p>
                  <p className='py-2 border-b mx-8'>8085</p>
                  <p className='py-2 border-b mx-8'>8086</p>
              </div>
              <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
          </div>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Triple} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Subject 3</h2>
              <p className='text-center text-4xl font-bold'>WEB-T</p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>HTML</p>
                  <p className='py-2 border-b mx-8'>CSS</p>
                  <p className='py-2 border-b mx-8'>JS</p>
              </div>
              <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
          </div>
      </div>
    </div>
  );
};

export default cards;