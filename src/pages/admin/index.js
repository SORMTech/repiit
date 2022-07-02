import AdminLayout from './adminLayout'
import { BsArrowRightSquare } from 'react-icons/bs'
import { getAllProductsWithLimit } from '../../utils/getData'

export default function Admin({ products }) {
  console.log(products);

  return (<>
    <AdminLayout>
      <div className="flex items-center gap-3">
        <BsArrowRightSquare /> <div>Home</div>
      </div>

      <div className="text-lg font-midium mt-5 font-bold text-center">Products</div>

      <table class="table-auto">
        <thead>
          <tr>
            <th>Product name</th>
            <th>Regular price</th>
            <th>Sales price</th>
            <th>Available qty</th>
            <th>Published at</th>
            <th>In stock</th>
            <th>featured</th>
            <th>trending</th>
            <th>total_qty_sold</th>
          </tr>
        </thead>
        <tbody className="h-60 overflow-auto">
          {products?.map(product => {
            return (
              <tr key={product?._id}>
                <td>{product?.name}</td>
                <td>{product?.price}</td>
                <td>{product?.salesPrice}</td>
                <td>{product?.asvailableQty}</td>
                <td>{product?.publishedAt}</td>
                <td>{product?.inStock ? '1' : '0'}</td>
                <td>{product?.featured ? '1' : '0'}</td>
                <td>{product?.trending ? '1' : '0'}</td>
                <td>{product?.totalQtySold}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </AdminLayout>
  </>)
}

export async function getServerSideProps(context) {
  /* Giving access to all in this demo, but I would check session.user.email. Then if it is my email, I would give access to the page, otherwise I would redirect to the login page. */

  // const session = await getSession(context)

  // if (session?.user) {
  //   const { email } = session?.user
  //   if (
  //     email !== "myemail"
  //   ) {
  //     return { redirect: { destination: '/auth/signin', permanent: false } }
  //   }
  // } else {
  //   return { redirect: { destination: '/auth/signin', permanent: false } }
  // }

  // const data = await getAllUsers()

  const products = await getAllProductsWithLimit(50)

  return {
    props: { products }
  }
}
