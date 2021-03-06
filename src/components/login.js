import React, { useState } from "react";
import { useAuth } from '../context/AuthContext';
import { IoNavigate } from "react-icons/io5";
import Alert from './alert'

const Login = ({ setLogin, router }) => {
  const { from } = router.query
  const { login } = useAuth();
  const [userDetails, setUserDetails] = useState();
  const [alert, setAlert] = useState({ type: '', message: '' });

  const handleSignIn = async () => {
    const spinner = document.querySelector('#spinner');
    spinner.classList.toggle('hidden')

    if (userDetails?.email && userDetails?.password) {
      const res = await login(userDetails?.email, userDetails?.password)
      if (res.sucess) {
        setAlert({ type: 'success', message: "you've sucessfuly loged in" });
        setTimeout(() => {
          setAlert({ type: '', message: "" });
          spinner.classList.toggle('hidden')
          if (from) {
            router.push(from);
          } else {
            router.push('/');
          }
        }, 1000)
      } else {
        setAlert({ type: 'danger', message: res?.message });
        spinner.classList.toggle('hidden')
      }
    }
  }

  return (<>
    {alert?.message && <Alert type={alert?.type} message={alert?.message} />}
    <div className='px-8 py-12'>
      <div className='flex space-x-4 items-center justify-center sm:justify-start'>
        <i className='text-2xl bg-yellow-200 rounded-full p-2 text-[#F28E1C]'>
          <IoNavigate />
        </i>
        <h4 className='text-lg sm:text-3xl font-bold'>Welcome! Login</h4>
      </div>
      <p className='text-lg font-thin text-gray-400 my-4'>
        Become repiit member & get exlusive treatment from repiit
      </p>
      <form
        action=''
        onSubmit={(e) => {
          e.preventDefault();
          handleSignIn()
        }}
      >
        <label htmlFor='email' className='text-xl font-semibold block my-2'>
          Email <span className='text-red-400'>*</span>
        </label>
        <input
          type='text'
          placeholder='Enter email'
          id='email'
          className='block font-thin border-2 p-2 w-full rounded-md'
          onChange={(e) => { setUserDetails({ ...userDetails, email: e.target.value }) }}
          value={userDetails?.email ? userDetails?.email : ''}
          required
        />
        <label htmlFor='password' className='text-xl font-semibold block my-2'>
          Password <span className='text-red-400'>*</span>
        </label>
        <input
          type='password'
          placeholder='Enter password '
          className='block font-thin border-2 p-2 w-full rounded-md'
          onChange={(e) => { setUserDetails({ ...userDetails, password: e.target.value }) }}
          value={userDetails?.password ? userDetails?.password : ''}
          required
        />
        <input
          className='bg-gradient-to-b from-orange-600 via-red-500 to-red-500 text-white py-4 rounded-md font-semibold cursor-pointer hover:scale-95 transition w-full my-5 text-center'
          type='submit'
          value='Login'
        />
        <div className='flex items-center justify-center space-x-4'>
          <hr className='border-1 border-gray-300 w-full' />
          <h4 className='uppercase'>or</h4>
          <hr className='border-1 border-gray-300 w-full' />
        </div>
        <button className='flex items-center justify-center space-x-4 py-4 rounded-md font-semibold cursor-pointer hover:scale-95 transition w-full my-5 text-center border-2'>
          <img src='images/google.png' className='w-4' alt='google' />
          <h4 className='text-[#F28A13]'>Login with Google</h4>
        </button>

        <p className='text-center'>
          Don`t have an account?
          <span
            className='text-[#F28A13] cursor-pointer mx-1'
            onClick={() => setLogin(false)}
          >
            Sign up
          </span>
        </p>
      </form>
    </div>
  </>);
};

export default Login;
