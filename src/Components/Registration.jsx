function Registration() {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="justify-center text-left bg-white rounded-lg shadow-md px-[100px] py-14">
            <img src="https://i.postimg.cc/MKD7wbB5/Cook.png" alt="Logo" className="h-[40px] items-center justify-center px-[350px]"></img>
            <br/>
          <div className="justify-center mb-4 text-2xl font-semibold text-gray-700 ">Register</div>
          <div className="flex items-center justify-center gap-4 space-2">

          <label className='relative '>
           <input type="text" placeholder="First name " className='h-[50px] w-96 px-6 text-xl text-gray-500 bg-white border-black-700 border-2 rounded-[4px] border-opacity-50 outline-none focus:border-blue-500 placeholder-red-500 placeholder-opacity-0 transition duration-700' />
           <span className='absolute px-2 text-base text-blue-700 transition duration-1000 bg-white text-opacity-80 left-2 top-3 input-text'>First name</span>
          </label>
          
          <br/> 
         

          <label className='relative '>
        <input type="text" placeholder="Last name" className='h-[50px] w-96 px-6 text-xl text-blue-500 bg-white border-black-700 border-2 rounded-[4px] border-opacity-50 outline-none focus:border-blue-500 placeholder-red-500 placeholder-opacity-0 transition duration-700' />
        <span className='absolute px-2 text-base text-blue-700 transition duration-700 bg-white text-opacity-80 left-2 top-3 input-text'>Last name</span>
      </label>
          </div>
          <br/>
          <div className="flex items-center justify-center gap-4 space-2">

           <label className='relative '>
            <input type="text" placeholder="E-mail" className='h-[50px] w-96 px-6 text-xl text-gray-500 bg-white border-black-700 border-2 rounded-[4px] border-opacity-50 outline-none focus:border-blue-500 placeholder-red-500 placeholder-opacity-0 transition duration-700' />
            <span className='absolute px-2 text-base text-blue-700 transition duration-1000 bg-white text-opacity-80 left-2 top-3 input-text'>Email</span>
             </label>

            <br/>


            <label className='relative '>
            <input type="text" placeholder="phone number" className='h-[50px] w-96 px-6 text-xl text-blue-500 bg-white border-black-700 border-2 rounded-[4px] border-opacity-50 outline-none focus:border-blue-500 placeholder-red-500 placeholder-opacity-0 transition duration-700' />
            <span className='absolute px-2 text-base text-blue-700 transition duration-700 bg-white text-opacity-80 left-2 top-3 input-text'>Phone number</span>
          </label>
</div>
          <br/>
          <div className="flex items-center justify-center gap-4 space-2">

           <label className='relative '>
            <input type="text" placeholder="password" className='h-[50px] w-96 px-6 text-xl text-gray-500 bg-white border-black-700 border-2 rounded-[4px] border-opacity-50 outline-none focus:border-blue-500 placeholder-red-500 placeholder-opacity-0 transition duration-700' />
            <span className='absolute px-2 text-base text-blue-700 transition duration-1000 bg-white text-opacity-80 left-2 top-3 input-text'>Password</span>
             </label>

            <br/>


            <label className='relative '>
            <input type="text" placeholder="confirm password" className='h-[50px] w-96 px-6 text-xl text-blue-500 bg-white border-black-700 border-2 rounded-[4px] border-opacity-50 outline-none focus:border-blue-500 placeholder-red-500 placeholder-opacity-0 transition duration-700' />
            <span className='absolute px-2 text-base text-blue-700 transition duration-700 bg-white text-opacity-80 left-2 top-3 input-text'>Confirm password</span>
          </label>
</div>
<br/>
          <div className="flex justify-between">
            <button
              className="bg-[#eb4e87] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-[240px] drop-shadow-md hover:drop-shadow-xl"
            >
              Create account
            </button>
            
            <br/>

            <br></br>
           
          </div>
          <div className="flex items-center justify-center ">
            <div className="inline-block text-sm font-semibold text-blue-500 align-baseline hover:text-blue-700" >
              Already have an account? 
              <span className="text-red-400"> <a href="">Login</a></span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  export default Registration;