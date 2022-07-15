import React from "react";
import { IoNavigate } from "react-icons/io5";

const Signup = ({ setLogin, router }) => {
  return (
    <div className='px-8 py-12'>
      <div className='flex space-x-4 items-center justify-center sm:justify-start'>
        <i className='text-2xl bg-yellow-200 rounded-full p-2 text-[#F28E1C]'>
          <IoNavigate />
        </i>
        <h4 className='text-lg sm:text-3xl font-bold'>Create an Account</h4>
      </div>
      <p className='text-lg font-thin text-gray-400 my-4'>
        Become repiit member & get exlusive treatment from repiit
      </p>
      <form
        action=''
        onSubmit={(e) => {
          e.preventDefault();
          router.push("/");
        }}
      >
        <label htmlFor='name' className='text-xl font-semibold block my-2'>
          FullName <span className='text-red-400'>*</span>
        </label>
        <input
          type='name'
          placeholder='Full name'
          id='name'
          className='block font-thin border-2 p-2 w-full rounded-md'
        />
        <label htmlFor='email' className='text-xl font-semibold block my-2'>
          Email <span className='text-red-400'>*</span>
        </label>
        <input
          type='text'
          placeholder='Enter email'
          id='email'
          className='block font-thin border-2 p-2 w-full rounded-md'
        />
        <label htmlFor='password' className='text-xl font-semibold block my-2'>
          Password <span className='text-red-400'>*</span>
        </label>
        <input
          type='password'
          placeholder='Enter password '
          className='block font-thin border-2 p-2 w-full rounded-md'
        />
        <input
          className='bg-gradient-to-b from-orange-600 via-red-500 to-red-500 text-white py-4 rounded-md font-semibold cursor-pointer hover:scale-95 transition w-full my-5 text-center'
          type='submit'
          value='Signin'
        />
        <div className='flex items-center justify-center space-x-4'>
          <hr className='border-1 border-gray-300 w-full' />
          <h4 className='uppercase'>or</h4>
          <hr className='border-1 border-gray-300 w-full' />
        </div>
        <button className='flex items-center justify-center space-x-4 py-4 rounded-md font-semibold cursor-pointer hover:scale-95 transition w-full my-5 text-center border-2'>
          <img src='images/google.png' className='w-4' alt='google' />
          <h4 className='text-[#F28A13]'>Signin with Google</h4>
        </button>

        <p className='text-center'>
          Already have an account?
          <span
            className='text-[#F28A13] cursor-pointer mx-1'
            onClick={() => setLogin(true)}
          >
            Login
          </span>
        </p>
      </form>
    </div>
  );
};

export default Signup;
