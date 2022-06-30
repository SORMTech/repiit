import React from "react";
import Link from "next/link";
import { MdClose, MdSearch } from "react-icons/md";
import { BsCart2 } from "react-icons/bs";
import { BiMenuAltRight } from "react-icons/bi";
import style from "./../styles/nav.module.css";

const Nav = () => {
  return (
    <>
      <nav className='p-4 flex items-center bg-gray-50'>
        <div className='hidden w-1/2 lg:flex grid-cols-5 justify-between text-bold'>
          <Link href=''>New & Featured</Link>
          <Link href=''>Men</Link>
          <Link href=''>Women</Link>
          <Link href=''>Kids</Link>
          <Link href=''>Sale</Link>
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
              <form action='' className='hidden sm:block'>
                <input
                  className='bg-gray-50 w-fit'
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
          <div className='text-sm hidden sm:flex justify-around items-center font-bold'>
            <h5>Join us</h5>
            <button className='bg-orange-700 p-2 text-white font-bold rounded-md'>
              Get Started
            </button>
          </div>
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
