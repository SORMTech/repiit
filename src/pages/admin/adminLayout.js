import Link from 'next/link'
import Image from 'next/image'
import { AiOutlineHome } from 'react-icons/ai'
import { MdOutlineProductionQuantityLimits, MdOutlineCreate } from 'react-icons/md'
import { RiUserSettingsLine } from 'react-icons/ri'
import { BsArrowLeftSquare } from 'react-icons/bs'

export default function AdminLayout({ children }) {
  return (<>
    <div className="container flex gap-10">
      <div className="w-3/12 flex flex-col gap-5 bg-[rgb(126,124,197)] h-screen pl-3 pr-7 py-5 relative" style={{ background: 'linear-gradient(121deg, rgba(6,0,178,1) 0%, rgba(107,0,207,1) 82%)' }}>
        <div className="text-center mb-5 bg-white pt-1">
          <Image src="/repit-2.png" alt="" width="120px" height="55px" />
        </div>

        <Link href="/admin"><a className="group">
          <div className="flex flex-row space-x-2 text-lg pb-3">
            <div className="h-8 w-4 rounded transform -translate-x-4 group-hover:bg-red-600"></div>

            <div className="flex items-center gap-3">
              <div className="group-hover:animate-bounce text-red-600"><AiOutlineHome size="20px" /></div>
              <div className="text-white font-bold">Home</div>
            </div>
          </div>
        </a></Link>

        <Link href="/admin/create-product"><a className="group">
          <div className="flex flex-row space-x-2 text-lg pb-3">
            <div className="h-8 w-4 rounded transform -translate-x-4 group-hover:bg-red-600"></div>

            <div className="flex items-center gap-3">
              <div className="group-hover:animate-bounce text-red-600"><MdOutlineCreate size="20px" /></div>
              <div className="text-white font-bold">Create product</div>
            </div>
          </div>
        </a></Link>

        <Link href="/admin/orders"><a className="group">
          <div className="flex flex-row space-x-2 text-lg pb-3">
            <div className="h-8 w-4 rounded transform -translate-x-4 group-hover:bg-red-600"></div>

            <div className="flex items-center gap-3">
              <div className="group-hover:animate-bounce text-red-600"><MdOutlineProductionQuantityLimits size="20px" /></div>
              <div className="text-white font-bold">Orders</div>
            </div>
          </div>
        </a></Link>

        <Link href="/admin/customers"><a className="group">
          <div className="flex flex-row space-x-2 text-lg pb-3">
            <div className="h-8 w-4 rounded transform -translate-x-4 group-hover:bg-red-600"></div>

            <div className="flex items-center gap-3">
              <div className="group-hover:animate-bounce text-red-600"><RiUserSettingsLine size="20px" /></div>
              <div className="text-white font-bold">Customers</div>
            </div>
          </div>
        </a></Link>

        <Link href="/"><a className="group absolute bottom-6 left-3">
          <div className="flex flex-row space-x-2 text-lg pb-3">
            <div className="h-8 w-4 rounded transform -translate-x-4 group-hover:bg-red-600"></div>

            <div className="flex items-center gap-3">
              <div className="group-hover:animate-pulse text-red-600"><BsArrowLeftSquare size="20px" /></div>
              <div className="text-white font-bold">Homepage</div>
            </div>
          </div>
        </a></Link>
      </div>
      <div className="w-full h-screen overflow-auto scrollbar-hide">
        <div className="border w-full mt-1 py-2 text-center text-2xl mb-2" style={{ letterSpacing: '10px' }}>
          <span className="font-black text-red-600">REPIIT</span> ADMIN PANEL
        </div>
        {children}
      </div>
    </div>
  </>)
}