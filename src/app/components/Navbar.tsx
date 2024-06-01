import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <div className='hidden lg:block'>
        <div className='bg-blue-900'>
            <div className='container mx-auto'>
                <div className='flex items-center justify-between py-4 text-white'>
                    <div className='flex-none'>
                        <select className='bg-blue-900 text-white border border-gray-200 rounded p-2'>
                            <option value="en">ENG</option>
                            <option value="es">ESP</option>
                            <option value="fr">FR</option>
                        </select>
                    </div>
                    <div className='flex-grow text-center'>
                        <div className='inline-flex items-center gap-4'>
                            <Link className='navbar_link relative' href="#">
                                Car&Vehicles
                            </Link>
                            <span className='border-l border-gray-400 h-6'></span>
                            <Link className='navbar_link relative' href="#">
                                For sale
                            </Link>
                            <span className='border-l border-gray-400 h-6'></span>
                            <Link className='navbar_link relative' href="#">
                                Properties
                            </Link>
                            <span className='border-l border-gray-400 h-6'></span>
                            <Link className='navbar_link relative' href="#">
                                Jobs
                            </Link>
                            <span className='border-l border-gray-400 h-6'></span>
                            <Link className='navbar_link relative' href="#">
                                Services
                            </Link>
                            <span className='border-l border-gray-400 h-6'></span>
                            <Link className='navbar_link relative' href="#">
                                Communities
                            </Link>
                            <span className='border-l border-gray-400 h-6'></span>
                            <Link className='navbar_link relative' href="#">
                                Ports
                            </Link>
                            <span className='border-l border-gray-400 h-6'></span>
                            <Link className='navbar_link relative' href="#">
                                Houses 
                            </Link>
                        </div>
                    </div>
                    <div className='flex-none flex gap-4'>
                        <Link href="/login">
                            <button className='bg-blue-900 text-white py-2 px-4 rounded cursor-pointer hover:underline'>
                                Login
                            </button>
                        </Link>
                        <Link href="/register">
                            <button className='bg-blue-900 text-white py-2 px-4 rounded cursor-pointer hover:underline'>
                                Register
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar;

