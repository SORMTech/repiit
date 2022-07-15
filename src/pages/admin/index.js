import Link from 'next/link'
import AdminLayout from './adminLayout'
import { BsArrowRightSquare, BsPencilSquare, BsTrash, BsToggleOff, BsToggleOn } from 'react-icons/bs'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Admin() {
  const [products, setProducts] = useState();
  const [limit, setLimit] = useState(50)
  const [sumOfprevLimits, setSumOfprevLimits] = useState(0)
  const [productsChanged, setProductsChanged] = useState(false)

  // // console.log(products);
  // var spinner = null
  // var spinnerBody = null
  // useEffect(() => {
  //   spinner = document.querySelector('#spinner');
  //   spinnerBody = document.querySelector("#spinnerBody");
  // }, [])

  useEffect(() => {
    const fetch = async () => {
      const res = await axios
        .get(`/api/products?limit=${limit}&sumOfprevLimits=${sumOfprevLimits}`)
        .catch((err) => {
          console.log("Error getAllProducts Call>>>", err);
          return err;
        });
      // console.log(res)
      res?.data?.success && setProducts(res.data.message)
    }
    fetch()
  }, [productsChanged])

  async function updateProp(id, propty, value) {
    const spinner = document.querySelector('#spinner');
    spinner.classList.toggle('hidden')
    const res = await axios
      .put(`/api/products?propty=${propty}&id=${id}&value=${value}&spinner=${spinner}`)
      .catch((err) => {
        alert('Error Put Call, check console for more details')
        console.log("Error Put Call>>>", err);
      });
    // console.log(res)
    setProductsChanged(!productsChanged)
    spinner.classList.toggle('hidden')
  }

  async function deleteProduct(id) {
    if (window.confirm(`Do you really want to delete this product? (${id})`) == true) {
      const spinner = document.querySelector('#spinner');
      spinner.classList.toggle('hidden')
      const res = await axios
        .delete(`/api/products?id=${id}`)
        .catch((err) => {
          alert('Error Delete Call, check console for more details')
          console.log("Error delete Call>>>", err);
        });
      setProductsChanged(!productsChanged)
      spinner.classList.toggle('hidden')
    }
  }

  function formatDate(date) {
    const nDate = new Date(date)
    const day = nDate.getDate()
    const month = nDate.getMonth()
    const year = nDate.getFullYear();

    const formatedDate = day + '-' + month + '-' + year
    
    return formatedDate
  }


  return (<>
    <AdminLayout>
      <div className="flex items-center gap-3">
        <BsArrowRightSquare /> <div>Home</div>
      </div>

      <div className="text-lg font-midium mt-5 font-bold text-center">Products</div>

      <div className="max-h-80 overflow-auto">
        <table className="table-auto min-w-full">
          <thead className="bg-white border-b">
            <tr>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                #
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Product name
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Regular price
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Sales price
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Published at
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Available qty
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                In stock
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                featured
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                trending
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                total_qty_sold
              </th>
            </tr>
          </thead>
          <tbody>
            {products?.map((product, index) => {
              return (
                <tr className={`${(index + 1) % 2 == 0 ? 'hover:bg-gray-200' : 'bg-gray-300 border-b hover:bg-gray-200'}`} key={product?._id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    <div className="flex items-center gap-2">
                      {index + 1}
                      <Link href={`/admin/edit/${product?._id}`}><a className="hover:text-blue-700"><BsPencilSquare /></a></Link>
                      <div onClick={() => { deleteProduct(product?._id) }} className="cursor-pointer text-red-700"><BsTrash /></div>
                    </div>
                  </td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    {product?.name}
                  </td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    {product?.price}
                  </td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    {product?.salesPrice || product?.salePrice}
                  </td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    {product?._publishedAt && formatDate(product?._publishedAt)}
                  </td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    {product?.availableQty}
                  </td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      {product?.inStock ? '1' : '0'}
                      <div onClick={async () => {
                        spinner.classList.toggle('hidden')
                        await updateProp(product?._id, 'inStock', product?.inStock ? false : true)
                        spinner.classList.toggle('hidden')
                      }}>
                        {product?.inStock ? <div className="cursor-pointer"><BsToggleOn /></div> :
                          <div className="cursor-pointer"><BsToggleOff /></div>}
                      </div>
                    </div>
                  </td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      {product?.featured ? '1' : '0'}
                      <div onClick={async () => {
                        spinner.classList.toggle('hidden')
                        await updateProp(product?._id, 'featured', product?.featured ? false : true)
                        spinner.classList.toggle('hidden')
                      }}>
                        {product?.featured ? <div className="cursor-pointer"><BsToggleOn /></div> :
                          <div className="cursor-pointer"><BsToggleOff /></div>}
                      </div>
                    </div>
                  </td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      {product?.trending ? '1' : '0'}
                      <div onClick={async () => {
                        spinner.classList.toggle('hidden')
                        await updateProp(product?._id, 'trending', product?.trending ? false : true)
                        spinner.classList.toggle('hidden')
                      }}>
                        {product?.trending ? <div className="cursor-pointer"><BsToggleOn /></div> :
                          <div className="cursor-pointer"><BsToggleOff /></div>}
                      </div>
                    </div>
                  </td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
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

  // const products = await getAllProducts(1)

  // if (products) {
  //   return {
  //     props: { initialProduct: products }
  //   }
  // }
  return {
    props: { }
  }
}
