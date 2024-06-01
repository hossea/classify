import React from 'react';

const HeroBanner = () => {
  return (
    <div className='relative h-[40vh] w-full'>
      <div
        className='absolute inset-0 bg-cover bg-center'
        style={{ backgroundImage: 'url("/trade.png")' }}
      />
      <div className='absolute inset-0 bg-gradient-to-r from-purple-900 via-blue-800 to-purple-900 opacity-75' />
      <div className='relative z-10 flex flex-col items-center justify-center h-full text-white text-center p-4'>
        <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold'>
          Buy & Sell <br />
          Anything, Anywhere
        </h1>
        <button className='mt-4 bg-pink-500 hover:bg-pink-800 text-white font-bold py-2 px-4 rounded-full'>
          GET STARTED
        </button>
      </div>
    </div>
  );
};

export default HeroBanner;


