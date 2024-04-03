function Login() {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="justify-center px-6 text-left bg-white rounded-lg shadow-md py-14">
            <img src="https://i.postimg.cc/MKD7wbB5/Cook.png" alt="Logo" className="h-[40px] items-center justify-center px-[140px]"></img>
            <br/>
          <div className="justify-center mb-4 text-2xl font-semibold text-gray-700 ">Login</div>
          <div className="flex items-center justify-center ">

          <label className='relative '>
        <input type="text" placeholder="E-mail" className='h-[40px] w-96 px-6 text-xl text-gray-500 bg-white border-black-700 border-2 rounded-[4px] border-opacity-50 outline-none focus:border-blue-500 placeholder-red-500 placeholder-opacity-0 transition duration-700' />
        <span className='absolute px-2 text-base text-blue-700 transition duration-1000 bg-white text-opacity-80 left-4 top-2 input-text'>Email address</span>
      </label>
          </div>
<br/>
          <div className="flex items-center justify-center ">

          <label className='relative '>
        <input type="text" placeholder="E-mail" className='h-[40px] w-96 px-6 text-xl text-blue-500 bg-white border-black-700 border-2 rounded-[4px] border-opacity-50 outline-none focus:border-blue-500 placeholder-red-500 placeholder-opacity-0 transition duration-700' />
        <span className='absolute px-2 text-base text-blue-700 transition duration-700 bg-white text-opacity-80 left-4 top-2 input-text'>Password</span>
      </label>
          </div>
          <br/>
          <div className="flex justify-between">
            <button
              className="bg-[#eb4e87] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            >
              SIGN IN
            </button>
            
            <br/>

            <br></br>
           
          </div>
          <div className="mt-4 text-center">
            <div className="inline-block text-sm font-bold text-blue-500 align-baseline hover:text-blue-700" href="#">
              Don't have an account? <span className="font-semibold text-red-300" > <a href="">Create an account </a> </span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  export default Registration;