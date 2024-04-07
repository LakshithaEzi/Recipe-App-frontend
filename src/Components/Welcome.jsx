import React from 'react'

export default function Welcome() {
  return (
    <div className='items-center justify-center w-[200px] rounded-lg bg-red-200 flex-auto'>
        <div className='flex justify-center text-lg'>Have you an account </div>
        <br/>
        <div className='flex items-center justify-center space-x-5'>
      <button className='p-2 bg-red-400 rounded-md '> <a href='/Login'>Yes </a></button>
      <button className='p-2 bg-red-400 rounded-md'><a href='/Registration'>No</a></button>
      </div>
    </div>
  )
}
