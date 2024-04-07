import React from 'react'

export default function MainCat() {
  return (
    <div className="hidden md:block ">
            <div className="flex items-baseline justify-center m-1 ml-10 space-x-[40px] ">
              <a href="#" className="w-[100px] px-3 py-2 text-white bg-red-400 rounded-full font-sm text-full hover:text-red-400 outline outline-1 outline-red-400 hover:bg-white items-center justify-center flex">HOME</a>
              <a href="#" className="px-3 py-2 text-white bg-red-400 rounded-full font-sm text-full hover:text-red-400 outline outline-1 outline-red-400 hover:bg-white w-[100px] items-center justify-center flex">FAVORITE</a>
             </div>
            </div>
  )
}
