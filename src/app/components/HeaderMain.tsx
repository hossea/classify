import React from 'react';
import { BsSearch } from 'react-icons/bs';
import Link from 'next/link';


const HeaderMain = () => {
  return (
    <div className='border-b border-gray-400 py-2 text-[15px]'>
      <div className='container sm:flex justify-between items-center'>
        <div className='font-bold text-4xl p-2 text-center pb-4 sm:pb-0 text-blue-700 ml-20'>
          Ho<BsSearch className='inline-block' size={30} />K
        </div>

        <div className='w-full sm:w-[500px] md:w-[900px] relative'>
          <input
            className='border-gray-700 border p-2 w-full rounded-full px-4 py-2'
            type='text'
            placeholder='Type anything here...'
          />
          <BsSearch className='absolute right-0 top-0 mr-3 mt-3 bg-purple-700 p-1 items-center rounded-full text-gray-800' size={25} />
        </div>

        <div className='hidden lg:flex gap-4 text-gray-500 text-[20px]'>
          <Link href='/post-ads'>
            <button className='bg-blue-300 text-black py-2 px-4 rounded-full'>
              Post Ad
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeaderMain;
