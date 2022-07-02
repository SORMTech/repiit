import AdminLayout from './adminLayout'
import React, { useState } from 'react'
import { BsArrowRightSquare } from 'react-icons/bs'

export default function CreateProduct() {
  const [product, setProduct] = useState(),
    [showHelperText, setShowHelperText] = useState(false),
    [file, setFile] = useState(),
    [selectedFile, setSelectedFile] = useState(),

    imageHandler = (e) => {
      // setProduct({ ...product, productImage: e.target.files[0] });
      setFile(e.target.files[0])
      const src = URL?.createObjectURL(e?.target?.files[0]);
      src && setSelectedFile(src);
      // console.log(e.target.files[0]);
    },

    handleBoxChange = (e) => {
      let isChecked = e.target.checked,
        category = product?.category || []
      if (!!category?.length > 0) {
        if (!isChecked) {
          // uncheck
          let filtered = category?.filter(catg => {
            return catg !== e?.target?.value
          })
          console.log(filtered);
          setProduct({ ...product, category: filtered })
        } else {
          // check
          category.push(e?.target?.value)
          setProduct({ ...product, category })
        }
      } else {
        setProduct({ ...product, category: [e?.target?.value] })
      }
    },

    handlesubmit = async () => {
      const spinner = document.querySelector('#spinner');
      spinner.classList.toggle('hidden')
      // console.log(product);
      const formData = new FormData()
      formData.append('upload_preset', 'repiitUpload')
      formData.append('file', file)

      var uploadProductImage = '';
      if (file) {
        try {
          uploadProductImage = await fetch('https://api.cloudinary.com/v1_1/code-cent/image/upload', {
            method: 'POST',
            body: formData
          }).then(res => res.json())
        } catch (e) {
          spinner.classList.add('hidden')
          console.log('error uploading image', e)
          alert('error uploading image, check console for more details')
          return
        }
      }

      product = { ...product, productImage: uploadProductImage?.secure_url }
      const res = await fetch('/api/products', {
        method: 'POST',
        body: JSON.stringify(product),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const result = await res.json()
      // console.log(result);
      if (result.success == true) {
        const spinnerBody = document.querySelector("#spinnerBody");
        spinnerBody.innerHTML = `
        <div class="spinner-border animate-bounce inline-block w-8 h-8 border-4 rounded-full" role="status">
          <span class="">SUCCESS</span>
        </div>
        `
        setTimeout(() => {
          spinner.classList.toggle('hidden');
          // setProduct();
        }, 2000);
        return
      }
      console.log('error adding product', result.message)
      alert('error adding product, check console for more details')
      spinner.classList.toggle('hidden')
      return
    }

  return (<>
    <div id="spinner" className="hidden fixed top-0 left-0 w-full h-screen z-50" style={{ background: 'rgba(0,0,0,.7)' }}>
      <div className="grid place-items-center">
        <div id="spinnerBody" class="flex justify-center items-center">
          <div class="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
            <span class="hidden">Loading...</span>
          </div>
        </div>
      </div>
    </div>

    <AdminLayout>
      <div className="flex items-center gap-3">
        <BsArrowRightSquare /> <div>Create product</div>
      </div>

      <form className="w-full px-8 pt-6 pb-8 mb-6" onSubmit={e => { e.preventDefault() }}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
            Product name
          </label>
          <input
            onChange={(e) => { setProduct({ ...product, name: e.target.value }) }}
            value={product?.name}
            type="text" name="name" id="name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
          {!product?.name && showHelperText && <p className="text-red-500 text-xs italic">Please fill out this field.</p>}
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
              Regular price (N)
            </label>
            <input
              onChange={(e) => { setProduct({ ...product, price: e.target.value }) }}
              value={product?.price}
              type="number" name="price" id="price" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
            {!product?.price && showHelperText && <p className="text-red-500 text-xs italic">Please fill out this field.</p>}
          </div>

          <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
              Sales price (N)
            </label>
            <input
              onChange={(e) => { setProduct({ ...product, salesPrice: e.target.value }) }}
              value={product?.salesPrice}
              type="number" name="salesPrice" id="salesPrice" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            {!product?.salesPrice && showHelperText && <p className="text-red-500 text-xs italic">Please fill out this field.</p>}
          </div>
        </div>

        <fieldset className="text-lg font-bold text-center mb-4 mt-6 border-t border-slate-300 font-[Roboto]">
          <legend className="mx-auto px-4">Product variants</legend>
        </fieldset>

        <div className="flex flex-wrap mb-6">
          <div className="w-1/3 px-3 mb-4 md:mb-0">
            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
              Color
            </label>
            <input
              onChange={(e) => { setProduct({ ...product, color: e.target.value }) }}
              value={product?.color}
              type="text" name="color" id="color" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            {!product?.color && showHelperText && <p className="text-red-500 text-xs italic">Please fill out this field.</p>}
          </div>

          <div className="w-1/3 px-3 mb-4 md:mb-0">
            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
              Size
            </label>
            <input
              onChange={(e) => { setProduct({ ...product, size: e.target.value }) }}
              value={product?.size}
              type="text" name="size" id="size" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            {!product?.size && showHelperText && <p className="text-red-500 text-xs italic">Please fill out this field.</p>}
          </div>

          <div className="w-1/3 px-3 mb-4 md:mb-0">
            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
              Available quantity(s)
            </label>
            <input
              onChange={(e) => { setProduct({ ...product, availableQty: e.target.value }) }}
              value={product?.availableQty}
              type="number" name="availableQty" id="availableQty" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus-outline" />
            {!product?.availableQty && showHelperText && <p className="text-red-500 text-xs italic">Please fill out this field.</p>}
          </div>
        </div>

        <div className="w-full px-3 mb-4">
          <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
            Category
          </label>
          <div className="flex flex-wrap w-full">
            <div className="flex items-center mr-4">
              <input onChange={(e) => { handleBoxChange(e) }} id="inline-checkbox" type="checkbox" value="men" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label for="inline-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Men</label>
            </div>

            <div className="flex items-center mr-4">
              <input onChange={(e) => { handleBoxChange(e) }} id="inline-2-checkbox" type="checkbox" value="women" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label for="inline-2-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Women</label>
            </div>

            <div className="flex items-center mr-4">
              <input onChange={(e) => { handleBoxChange(e) }} id="inline-2-checkbox" type="checkbox" value="kids" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label for="inline-2-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Kids</label>
            </div>
          </div>
        </div>

        <div className="m-4">
          <label className="inline-block mb-2 text-gray-500">
            Upload product mage(jpg,png,svg,jpeg)
          </label>
          <div className="flex items-center justify-center w-full">
            <label className="flex flex-col w-full h-32 border-4 border-dashed hover:bg-gray-100 hover:border-gray-300">
              <div className="flex flex-col items-center justify-center pt-4">
                {!selectedFile ? <svg xmlns="http://www.w3.org/2000/svg"
                  className="w-12 h-12 text-gray-400 group-hover:text-gray-600" viewBox="0 0 20 20"
                  fill="currentColor">
                  <path fill-rule="evenodd"
                    d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                    clipRule="evenodd" />
                </svg> : <img src={selectedFile} alt="" width="70px" height="50px" />}
                <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                  Select a photo</p>
              </div>
              <input type="file" className="opacity-0" onChange={imageHandler} />
            </label>
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
            Product description
          </label>
          <textarea
            onChange={(e) => { setProduct({ ...product, description: e.target.value }) }}
            value={product?.description}
            type="text" name="description" id="description" rows="5"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
          {!product?.description && showHelperText && <p className="text-red-500 text-xs italic">Please fill out this field.</p>}
        </div>

        <button onClick={(e) => { e.preventDefault(); handlesubmit() }} type="button" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Add product
        </button>
      </form>
    </AdminLayout>
  </>)
}
