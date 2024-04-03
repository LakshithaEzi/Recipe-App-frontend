import React from 'react'

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full bg-white backdrop-blur-xl">
      <div className="px-4 mx-auto max-w-7xl">
        <div className="flex items-center justify-between h-12">
         
          <div className="flex-shrink-0 ">
            <img src='https://i.postimg.cc/MKD7wbB5/Cook.png' alt='Logo' className='h-[35px]'></img>
          </div>
        
          <div className="hidden md:block ">
            <div className="flex items-baseline justify-center m-1 ml-10 space-x-4 ">
              <a href="#" className="px-3 py-2 text-sm font-medium text-black rounded-md hover:text-red-300 hover:underline ">HOME</a>
              <a href="#" className="px-3 py-2 text-sm font-medium text-black rounded-md hover:text-red-700 hover:underline ">FAVORITE</a>
             
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};


