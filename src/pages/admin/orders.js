import AdminLayout from './adminLayout'
import { BsArrowRightSquare } from 'react-icons/bs'

export default function Orders() {
  return (<>
    <AdminLayout>
    <div className="flex items-center gap-3">
        <BsArrowRightSquare />
        <div>
          Orders
        </div>
      </div>
    </AdminLayout>
  </>)
}