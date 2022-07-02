import AdminLayout from './adminLayout'
import { BsArrowRightSquare, BsPencilSquare, BsTrash, BsToggleOff, BsToggleOn } from 'react-icons/bs'
import { getAllProducts } from '../../utils/getData'
import { useEffect } from 'react'

export default function Admin({ products }) {
  // console.log(products);
  var spinner = null
  var spinnerBody = null
  useEffect(() => {
    spinner = document.querySelector('#spinner');
    spinnerBody = document.querySelector("#spinnerBody");
  }, [])

  return (<>
    <AdminLayout>
      <div className="flex items-center gap-3">
        <BsArrowRightSquare /> <div>Home</div>
      </div>

      <div className="text-lg font-midium mt-5 font-bold text-center">Products</div>

      <div className="max-h-80 overflow-auto">
        <table class="table-auto min-w-full">
          <thead class="bg-white border-b">
            <tr>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                #
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Product name
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Regular price
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Sales price
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Published at
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Available qty
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                In stock
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                featured
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                trending
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                total_qty_sold
              </th>
            </tr>
          </thead>
          <tbody>
            {products?.map((product, index) => {
              return (
                <tr class={`${(index + 1) % 2 == 0 ? 'hover:bg-gray-200' : 'bg-gray-300 border-b hover:bg-gray-200'}`} key={product?._id}>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    <div className="flex items-center gap-2">
                      {index + 1}
                      <div className="cursor-pointer"><BsPencilSquare /></div>
                      <div className="cursor-pointer"><BsTrash /></div>
                    </div>
                  </td>
                  <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    {product?.name}
                  </td>
                  <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    {product?.price}
                  </td>
                  <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    {product?.salesPrice || product?.salePrice}
                  </td>
                  <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    {product?.availableQty}
                  </td>
                  <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    {new Date(product?._publishedAt).getDate()}
                  </td>
                  <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      {product?.inStock ? '1' : '0'}
                      <div onClick={async () => {
                        spinner.classList.toggle('hidden')
                        await updateProp(inStock, product?.inStock ? false : true)
                        spinner.classList.toggle('hidden')
                      }}>
                        {product?.inStock ? <div className="cursor-pointer"><BsToggleOff /></div> :
                          <div className="cursor-pointer"><BsToggleOn /></div>}
                      </div>
                    </div>
                  </td>
                  <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      {product?.featured ? '1' : '0'}
                      <div onClick={async () => {
                        spinner.classList.toggle('hidden')
                        await updateProp(featured, product?.featured ? false : true)
                        spinner.classList.toggle('hidden')
                      }}>
                        {product?.featured ? <div className="cursor-pointer"><BsToggleOff /></div> :
                          <div className="cursor-pointer"><BsToggleOn /></div>}
                      </div>
                    </div>
                  </td>
                  <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      {product?.trending ? '1' : '0'}
                      <div onClick={async () => {
                        spinner.classList.toggle('hidden')
                        await updateProp(trending, product?.trending ? false : true)
                        spinner.classList.toggle('hidden')
                      }}>
                        {product?.trending ? <div className="cursor-pointer"><BsToggleOff /></div> :
                          <div className="cursor-pointer"><BsToggleOn /></div>}
                      </div>
                    </div>
                  </td>
                  <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    {product?.totalQtySold}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
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

  // const users = await getAllUsers()

  const products = await getAllProducts(50)

  return {
    props: { products }
  }
}
