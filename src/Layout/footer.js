import Link from "next/link";

const footer = () => {
  return (
    <div className='bg-black text-white'>
      <div>
        <div className='w-5/6 sm:w-4/6 mx-auto grid grid-cols-2 md:grid-cols-4 py-12 gap-3'>
          <div>
            <h5 className='font-bold uppercase text-gray-200 text-sm'>
              Quick Links
            </h5>
            <div className='flex flex-col text-xs mt-5 gap-1 text-gray-400'>
              <Link href=''>
                <p className='cursor-pointer'>Shipping + Returns</p>
              </Link>
              <Link href=''>
                <p className='cursor-pointer'>FAQs</p>
              </Link>
              <Link href=''>
                <p className='cursor-pointer'>Contact Us</p>
              </Link>
              <Link href=''>
                <p className='cursor-pointer'>Gift Cards</p>
              </Link>
              <Link href=''>
                <p className='cursor-pointer'>Privacy Policy</p>
              </Link>
              <Link href=''>
                <p className='cursor-pointer'>Terms of Service</p>
              </Link>
              <Link href=''>
                <p className='cursor-pointer'>Refund Policy</p>
              </Link>
            </div>
          </div>
          <div>
            <h5 className='font-bold uppercase text-gray-200 text-sm'>
              About us
            </h5>
            <div className='flex flex-col text-xs mt-5 gap-1 text-gray-400'>
              <Link href=''>
                <p className='cursor-pointer'>Our Story +</p>
              </Link>
              <Link href=''>
                <p className='cursor-pointer'>Mission</p>
              </Link>
              <Link href=''>
                <p className='cursor-pointer'>Location</p>
              </Link>
              <Link href=''>
                <p className='cursor-pointer'>Collaboration</p>
              </Link>
              <Link href=''>
                <p className='cursor-pointer'>Careers</p>
              </Link>
            </div>
          </div>
          <div className='flex items-center'>
            <div className='flex flex-row gap-2 md:justify-center items-center'>
              <a href=''>
                <img src='images/fb.png' className='w-4 md:w-8' alt='fb' />
              </a>
              <a href=''>
                <img src='images/ig.png' className='w-4  md:w-8' alt='ig' />
              </a>
              <a href=''>
                <img src='images/tw.png' className='w-4  md:w-8' alt='tw' />
              </a>
              <a href=''>
                <img src='images/yt.png' className='w-4  md:w-8' alt='yt' />
              </a>
            </div>
          </div>
          <div>
            <Link href='/'>
              <img
                className='md:ml-auto w-24 md:w-4/6'
                src='images/logo.png'
                alt='logo'
              />
            </Link>
          </div>
        </div>
      </div>
      <p className='text-center text-xs p-4'>
        © {new Date().getFullYear()} REPIIT{" "}
      </p>
    </div>
  );
};

export default footer;
