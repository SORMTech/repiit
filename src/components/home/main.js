import React from "react";
import { IoIosArrowForward } from "react-icons/io";
const main = () => {
  const addStyle =
    "bg-gradient-to-b from-orange-600 via-red-500 to-red-500 text-white flex justify-around items-center p-2 px-3 sm:px-6 -translate-y-20 w-fit ml-auto cursor-pointer";
  return (
    <>
      <div className='relative shadow-lg py-12'>
        <div className='grid grid-cols-3 items-center w-4/6 mx-auto'>
          <hr className='border-1 border-gray-900' />
          <h2 className='text-center text-xl sm:text-3xl font-semibold my-3'>
            New & Featured
          </h2>
          <hr className='border-1 border-gray-900' />
        </div>
        <div className='grid grid-cols-2 gap-4 sm:w-4/6 mx-auto p-8 justify-center items-center'>
          <div className='relative w-full h-full'>
            <img src='images/seven.png' className='h-full' alt='shoe' />
            <div className={addStyle}>
              <h5 className='text-sm'>Add to Bag</h5>
              <img className='w-6 mx-2' src='images/add.png' alt='img' />
            </div>
            <img
              className='absolute top-5 right-5 w-8'
              src='images/vec.png'
              alt=''
            />
          </div>
          <div className='relative h-full'>
            <img src='images/nine.png' className='h-full' alt='shoe' />
            <div className={addStyle}>
              <h5 className='text-sm'>Add to Bag</h5>
              <img className='w-6 mx-2' src='images/add.png' alt='img' />
            </div>
            <img
              className='absolute top-5 right-5 w-8'
              src='images/vec.png'
              alt=''
            />
          </div>
          <div className='relative h-full'>
            <img src='images/eigth.png' alt='shoe' className='h-full' />
            <div className={addStyle}>
              <h5 className='text-sm'>Add to Bag</h5>
              <img className='w-6 mx-2' src='images/add.png' alt='img' />
            </div>
            <img
              className='absolute top-5 right-5 w-8'
              src='images/vec2.png'
              alt=''
            />
          </div>
          <div className='relative h-full'>
            <img src='images/ten.png' className='h-full' alt='shoe' />
            <div className={addStyle}>
              <h5 className='text-sm'>Add to Bag</h5>
              <img className='w-6 mx-2' src='images/add.png' alt='img' />
            </div>
            <img
              className='absolute top-5 right-5 w-8'
              src='images/vec2.png'
              alt=''
            />
          </div>
        </div>
        <button className='flex text-sm items-center  text-gray-900 hover:text-white p-1 px-8 rounded-full font-semibold w-fit border-gray-900 border-2 mx-auto hover:bg-gray-900 transition'>
          <h5>See More</h5>
          <i className=' p-1 rounded-full m-2  text-2xl'>
            <IoIosArrowForward />
          </i>
        </button>
        <img
          className='absolute top-0 right-0 w-1/2'
          src='/images/3.png'
          alt='bg'
        />
        <img
          className='absolute top-0 -left-36'
          src='/images/three.png'
          alt='bg'
        />
      </div>
      <div className='relative shadow-lg py-12'>
        <div className='grid grid-cols-3 items-center w-4/6 mx-auto'>
          <hr className='border-1 border-gray-900' />
          <h2 className='text-center text-xl sm:text-3xl font-semibold my-3'>
            Trending
          </h2>
          <hr className='border-1 border-gray-900' />
        </div>
        <div className='grid grid-cols-2 gap-4 sm:w-4/6 mx-auto p-8 justify-center items-center'>
          <div className='relative w-full h-full'>
            <img src='images/eleven.png' className='h-full' alt='shoe' />
            <div className={addStyle}>
              <h5 className='text-sm'>Add to Bag</h5>
              <img className='w-6 mx-2' src='images/add.png' alt='img' />
            </div>
            <img
              className='absolute top-5 right-5 w-8'
              src='images/vec.png'
              alt=''
            />
          </div>
          <div className='relative h-full'>
            <img src='images/twelve.png' className='h-full' alt='shoe' />
            <div className={addStyle}>
              <h5 className='text-sm'>Add to Bag</h5>
              <img className='w-6 mx-2' src='images/add.png' alt='img' />
            </div>
            <img
              className='absolute top-5 right-5 w-8'
              src='images/vec.png'
              alt=''
            />
          </div>
          <div className='relative h-full'>
            <img src='images/13.png' alt='shoe' className='h-full' />
            <div className={addStyle}>
              <h5 className='text-sm'>Add to Bag</h5>
              <img className='w-6 mx-2' src='images/add.png' alt='img' />
            </div>
            <img
              className='absolute top-5 right-5 w-8'
              src='images/vec2.png'
              alt=''
            />
          </div>
          <div className='relative h-full'>
            <img src='images/14.png' className='h-full' alt='shoe' />
            <div className={addStyle}>
              <h5 className='text-sm'>Add to Bag</h5>
              <img className='w-6 mx-2' src='images/add.png' alt='img' />
            </div>
            <img
              className='absolute top-5 right-5 w-8'
              src='images/vec2.png'
              alt=''
            />
          </div>
        </div>
        <button className='flex text-sm items-center  text-gray-900 hover:text-white p-1 px-8 rounded-full font-semibold w-fit border-gray-900 border-2 mx-auto hover:bg-gray-900 transition'>
          <h5>See More</h5>
          <i className=' p-1 rounded-full m-2  text-2xl'>
            <IoIosArrowForward />
          </i>
        </button>
        <img
          className='absolute top-0 right-0 w-1/2'
          src='/images/3.png'
          alt='bg'
        />
        <img
          className='absolute top-0 -left-36'
          src='/images/three.png'
          alt='bg'
        />
      </div>
      <p className='w-5/6 sm:w-4/6 mx-auto my-5 mt-10 text-center text-sm text-gray-900'>
        Trendy Clothing & Accessories at REPIIT - An Online Dress Boutique
        REPIIT is a UNISEX clothing store with new trendy and affordable
        arrivals dropping 2-3 times weekly. Shop the latest trends in women`s
        fashion dresses, tops, sweaters, skirts, jeans, accessories & more.
      </p>

      <div className='flex items-center justify-center p-4 gap-2 sm:w-4/6 mx-auto'>
        <img src='images/forward.png' className='w-8' alt='for' />
        <div className='grid grid-cols-2 sm:grid-cols-4 gap-3'>
          <img src='images/15.png' alt='others' />
          <img src='images/16.png' alt='others' />
          <img src='images/17.png' alt='others' />
          <img src='images/18.png' alt='others' />
        </div>
        <img src='images/backward.png' className='w-8' alt='back' />
      </div>

      <p className='p-4 my-5 text-center text-sm text-gray-900'>
        Hear the lastest. <br /> (new products, exclusive offers and other
        suprises)
      </p>
      <div className='grid grid-cols-2 w-5/6 mb-8 mx-auto justify-center items-center border-2 border-gray-200 p-2 sm:w-1/2 '>
        <form className='flex items-center text-sm text-gray-900 font-semibold'>
          <input
            type='text'
            className='p-2 w-full'
            placeholder='Email Address'
          />
        </form>
        <button className='bg-gray-900 text-sm  p-2 w-5/6 ml-auto text-white'>
          Subscribe
        </button>
      </div>
    </>
  );
};

export default main;
