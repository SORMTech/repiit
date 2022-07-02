// const { default: User } = require('../models/User')
const { default: Product } = require('../models/Product')
const { connect, disconnect, convertDocToObj } = require('./db')

export async function getAllProducts(limit, sumOfprevLimits) {
  await connect()
  const products = await Product.find().limit(limit).skip(sumOfprevLimits)
  await disconnect()

  return JSON.parse(JSON.stringify(products))
}

export async function getProductBySlug(slug) {
  try {
    await connect()
    const products = await Product.findOne({ slug })
    await disconnect()
    return JSON.parse(JSON.stringify(products))
  } catch (err) {
    console.log(err);
    return null
  }
}

export async function getProductsByCategory(category, limit, sumOfprevLimits = "0") {
  try {
    await connect()
    const products = await Product.find({ category: { $in: [category] } }).limit(limit).skip(sumOfprevLimits)
    await disconnect()
    return JSON.parse(JSON.stringify(products))
  } catch (err) {
    console.log(err);
    return null
  }
}

export async function getProductsByProp(prop, limit, sumOfprevLimits = "0") {
  try {
    await connect()
    const products = await Product.find({ prop: true }).limit(limit).skip(sumOfprevLimits)
    await disconnect()

    return JSON.parse(JSON.stringify(products))
  } catch (err) {
    console.log(err);
    return null
  }
}

export async function getFilteredProducts(products) {
  // const products = await Product.find({}).lean()

  const final = products
    ?.map(convertDocToObj)
    ?.map(({ _id, slug, price, title, category, image }) => ({ _id, slug, price, title, category, image }))
  return final
}

export async function getUserData(email) {
  try {
    await connect()
    const user = await User.findOne({ email }).lean()
    await disconnect()

    return {
      user: {},
      success: true,
      mes: 'success'
    }
  } catch (err) {
    return {
      user: {},
      success: false,
      mes: 'an error occured'
    }
  }
}

async function getAllUsers() {
  try {
    await connect()
    const user = await User.find({}).lean()
    await disconnect()

    return {
      user: {},
      success: true,
      mes: 'success'
    }
  } catch (err) {
    return {
      user: {},
      success: false,
      mes: 'an error occured'
    }
  }
}
