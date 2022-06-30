import { IoIosArrowForward } from "react-icons/io";
import style from "../../styles/hero.module.css";
const Hero = () => {
  return (
    <>
      <main className='relative'>
        <div className='flex py-10 flex-col-reverse sm:flex-row items-center sm:w-5/6 mx-auto'>
          <div className='p-4'>
            <h1 className='text-4xl font-extrabold'>
              Repping <span className='font-semibold'>a better</span> you
            </h1>
            <p className='text-sm font-semibold my-4'>
              Anyone can beat you but no one can beat your outfit as along as
              you <span className='text-orange-600 '>repiit</span>.
            </p>
            <button className='flex text-sm items-center bg-orange-700 text-white p-1 px-4 rounded-full font-semibold'>
              <h5>Start Shopping</h5>
              <i className='bg-white p-1 text-orange-700 rounded-full m-2 text-2xl'>
                <IoIosArrowForward />
              </i>
            </button>
          </div>
          <div className='w-5/6 mx-auto mt-8 relative'>
            <img
              src='images/six.png'
              className='sm:w-5/6 mx-auto'
              alt='buyers'
            />
            <img
              className='w-2/3 left-12 absolute -top-5 -z-20'
              src='images/two.png'
              alt='circle'
            />
          </div>
        </div>
        <img className='absolute top-0 right-52' src='images/3.png' alt='bg' />
        <img
          className='absolute top-52 left-0'
          src='images/three.png'
          alt='bg'
        />
        <div className='bg-gradient-to-b w-full from-orange-300 via-orange-100 to-pink-200 p-4 py-16'>
          <div className='grid sm:grid-cols-3 items-center justify-center sm:w-4/6 mx-auto gap-3'>
            <div className={`${style.img1}`}>
              <h4 className='bg-white p-4 mx-auto text-sm text-center'>
                Men's Collection
              </h4>
            </div>
            <div className={style.img2}>
              <h4 className='bg-white p-4 mx-auto text-sm text-center'>
                Women's Collection
              </h4>
            </div>
            <div className={style.img3}>
              <h4 className='bg-white p-4 mx-auto text-sm text-center'>
                Kid's Collection
              </h4>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Hero;
