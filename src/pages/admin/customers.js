import AdminLayout from './adminLayout'
import { BsArrowRightSquare } from 'react-icons/bs'

export default function Customers() {
  return (<>
    <AdminLayout>
    <div className="flex items-center gap-3">
        <BsArrowRightSquare />
        <div>
          Customers
        </div>
      </div>
    </AdminLayout>
  </>)
}