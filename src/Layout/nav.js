import React from "react";
import Link from "next/link";
import { MdClose, MdSearch } from "react-icons/md";
import { BsCart2 } from "react-icons/bs";
import { BiLogOut, BiMenuAltRight, BiUserCircle } from "react-icons/bi";
import style from "./../styles/nav.module.css";
import { useRouter } from "next/router";
import { useAuth } from "../context/AuthContext";

const Nav = ({ user }) => {
  const { logout } = useAuth()
  const router = useRouter();
  return (
    <>
      <nav className='p-4 flex items-center absolute z-50 top-0 w-full px-8 shadow-sm max-w-7xl mx-auto'>
        <div className='hidden w-1/2 lg:flex grid-cols-5 justify-between text-bold'>
          <Link href='/'>New & Featured</Link>
          <Link href='/'>Men</Link>
          <Link href='/'>Women</Link>
          <Link href='/'>Kids</Link>
          <Link href='/'>Sale</Link>
        </div>
        <div className={`${style.nav_center} gap-1`}>
          <div className='flex flex-col lg:items-center lg:justify-center'>
            <img className='w-0' src='images/logo.png' alt='logo' />
          </div>
          <div className=''>
            <div className='flex items-center justify-center p-2 rounded-full bg-gray-50 shadow-md'>
              <i className='text-xl hidden sm:block'>
                <MdSearch />
              </i>
              <form action='' className='hidden mx-2 sm:block'>
                <input
                  className='bg-gray-50 w-fit outline-none'
                  type='text'
                  placeholder='search'
                />
              </form>
              <span className='font-extrabold hidden sm:block'>|</span>
              <i className='text-xl ml-1 relative'>
                <BsCart2 />
              </i>
              <span className='font-extrabold text-orange-700 -translate-y-1'>
                4
              </span>
            </div>
          </div>
          {user ? <>
          <div className="flex items-center justify-center gap-2">
            <div className="grid place-items-center text-4xl"><BiUserCircle /></div>
            <button
              className='bg-gradient-to-b from-orange-600 via-red-500 to-red-500 text-white font-bold rounded-md hover:scale-105 transition px-5 flex items-center gap-2'
              onClick={() => logout() }
            >
              Logout <BiLogOut />
            </button>
          </div>
          </> : <div className='text-sm hidden sm:flex justify-around items-center font-bold'>
            <h5>Join us</h5>
            <button
              className='bg-gradient-to-b from-orange-600 via-red-500 to-red-500 p-2 text-white font-bold rounded-md hover:scale-105 transition px-5'
              onClick={() => router.push("/signin")}
            >
              Signin
            </button>
          </div>}
          <div className='flex flex-col items-end'>
            <i className='w-fit flex sm:hidden flex-col items-center justify-center bg-black text-white text-3xl p-1'>
              <BiMenuAltRight />
            </i>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
