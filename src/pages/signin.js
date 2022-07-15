import React from "react";
import Login from "../components/login";
import Signup from "../components/signup";
import { useRouter } from "next/router";

const Signin = () => {
  const router = useRouter();
  const [login, setLogin] = React.useState(true);
  console.log(login);
  return (
    <div className='py-10 px-4 text-gray-700 min-h-screen flex flex-col justify-center items-center max-w-7xl mx-auto'>
      <div className='grid sm:grid-cols-2 shadow-lg justify-center items-center'>
        <div className='flex flex-col items-center space-y-5 '>
          <img src='/images/logo.png' className='w-32 my-6' alt='' />
          <img
            src='/images/six.png'
            className='w-full hidden sm:block'
            alt=''
          />
        </div>
        <div>
          {login ? (
            <Login router={router} setLogin={setLogin} />
          ) : (
            <Signup router={router} setLogin={setLogin} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Signin;
