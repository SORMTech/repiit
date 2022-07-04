import AdminLayout from '../adminLayout'
import { BsArrowRightSquare } from 'react-icons/bs'
import Form from '../components/form'
import Product from '../../../models/Product'
import { connect, disconnect } from '../../../utils/db'

export default function EditProduct({ product }) {
  
  return (<>
    <AdminLayout>
      <div className="flex items-center gap-3">
        <BsArrowRightSquare /> <div>Edit product</div>
      </div>
      <Form initialProduct={product} />
    </AdminLayout>
  </>)
}

export async function getServerSideProps(context) {
  const { id } = context.params;
  await connect()
  const product = await Product.findOne({ _id: id })
  await disconnect()
  // console.log(product)
  // const res = await getProductByid(id)

  if (product) {
    return {
      props: { product: JSON.parse(JSON.stringify(product)) }
    }
  }
  return {
    props: { product: null }
  }
}
