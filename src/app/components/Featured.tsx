'use client'
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Featured = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="m-4 mt-[5px] h-4vh bg-blue-50">
      <h2 className="text-3xl font-bold mb-6 text-center text-bold">Featured Categories</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 m-20 border-gray-200">
        <div className="relative rounded-lg overflow-hidden aspect-w-1 aspect-h-1">
        <Image src="/office.png" alt="Office Image" width={400} height={300} />

          <div className="absolute top-0 right-0 p-2">
            <Link href="#">
              <button className="bg-purple-500 text-white py-1 px-3 rounded-full">Popular</button>
            </Link>
          </div>
          <div className="absolute bottom-2 left-8 right-8 bg-white rounded-full bg-opacity-30 p-2 text-black flex justify-between">
            <span>Jobs</span>
            <span className='border-1 border-gray-400 h-6'>Counter 1</span>
          </div>
        </div>
        <div className="relative rounded-lg overflow-hidden aspect-w-1 aspect-h-1">
          <Image src="/car.png" alt="car" className="w-full h-full object-cover" width={400} height={300}/>
          <div className="absolute top-0 right-0 p-2">
            <Link href="#">
              <button className="bg-blue-500 text-white py-1 px-3 rounded-full">Best Selling</button>
            </Link>
          </div>
          <div className="absolute bottom-2 left-8 right-8 bg-white rounded-full bg-opacity-30 p-2 text-black flex justify-between">
            <span>Automobiles</span>
            <span className='border-1 border-gray-400 h-6'>Counter 2</span>
          </div>
        </div>
        <div className="relative rounded-lg overflow-hidden aspect-w-1 aspect-h-1">
          <Image src="/house.png" alt="house" className="w-full h-full object-cover"width={400} height={300} />
          <div className="absolute top-0 right-0 p-2">
            <Link href="#">
              <button className="bg-purple-500 text-white py-1 px-3 rounded-full">Popular</button>
            </Link>
          </div>
          <div className="absolute bottom-2 left-8 right-8 bg-white rounded-full bg-opacity-30 p-2 text-black flex justify-between">
            <span>Real Estate</span>
            <span className='border-1 border-gray-400 h-6'>Counter 3</span>
          </div>
        </div>
      </div>

      {!showMore && (
        <div className="text-center mt-6">
          <button 
            onClick={() => setShowMore(true)} 
            className="bg-pink-400 text-white py-2 px-4 mb-10 rounded-full"
          >
            View all Categories
          </button>
        </div>
      )}

      {showMore && (
        <div className="mt-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 m-20">
            <div className="relative rounded-lg overflow-hidden aspect-w-1 aspect-h-1">
              <Image src="/furniture.png" alt="Trade" className="w-full h-full object-cover" width={400} height={300} />
              <div className="absolute top-0 right-0 p-2">
                <Link href="#">
                  <button className="bg-purple-500 text-white py-1 px-3 rounded-full">Popular</button>
                </Link>
              </div>
              <div className="absolute bottom-2 left-8 right-8 bg-white rounded-full bg-opacity-50 p-2 text-black flex justify-between">
                <span>Furniture</span>
                <span>Counter 4</span>
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden aspect-w-1 aspect-h-1">
              <Image src="/sport.png" alt="sport" className="w-full h-full object-cover" width={400} height={300} />
              <div className="absolute top-0 right-0 p-2">
                <Link href="#">
                  <button className="bg-blue-500 text-white py-1 px-3 rounded-full">Best Selling</button>
                </Link>
              </div>
              <div className="absolute bottom-2 left-8 right-8 bg-white rounded-full bg-opacity-50 p-2 text-black flex justify-between">
                <span>Sports</span>
                <span>Counter 5</span>
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden aspect-w-1 aspect-h-1">
              <Image src="/phones.png" alt="phones" className="w-full h-full object-cover " width={400} height={300} />
              <div className="absolute top-0 right-0 p-2">
                <Link href="#">
                  <button className="bg-purple-500 text-white py-1 px-3 rounded-full">Popular</button>
                </Link>
              </div>
              <div className="absolute bottom-2 left-8 right-8 bg-white rounded-full bg-opacity-50 p-2 text-black flex justify-between">
                <span>Phones</span>
                <span>Counter 6</span>
              </div>
            </div>
          </div>
          <div className="text-center mt-6">
            <button 
              onClick={() => setShowMore(false)} 
              className="bg-purple-600 text-white py-2 px-4 rounded-full mb-4"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Featured;

