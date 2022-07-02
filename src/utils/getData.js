// import User from '../models/User'

const { default: Product } = require('../models/Product')
const { connect, disconnect, convertDocToObj } = require('./db')

async function getAllProductsWithLimit(limit) {
  await connect()
  const products = await Product.find().limit(limit)
  await disconnect()

  return JSON.parse(JSON.stringify(products))
}

async function getNext(limit, skip) {
  await connect()
  const products = await Product.find().limit(limit).skip(skip)
  await disconnect()

  return JSON.parse(JSON.stringify(products))
}

async function getProductBySlug(slug) {
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

async function getProductsByCategory(category) {
  try {
    await connect()
    const products = await Product.find({ category: { $in: [category] } })
    await disconnect()
    return JSON.parse(JSON.stringify(products))
  } catch (err) {
    console.log(err);
    return null
  }
}

async function getFeaturedProducts() {
  try {
    await connect()
    const products = await Product.find({ featured: true }).limit(4)
    await disconnect()

    return JSON.parse(JSON.stringify(products))
  } catch (err) {
    console.log(err);
    return null
  }
}

async function getTrendingProducts() {
  try {
    await connect()
    const products = await Product.find({ trending: true }).limit(4)
    await disconnect()

    return JSON.parse(JSON.stringify(products))
  } catch (err) {
    console.log(err);
    return null
  }
}

async function getFilteredProducts(products) {
  // const products = await Product.find({}).lean()

  const final = products
    ?.map(convertDocToObj)
    ?.map(({ _id, slug, price, title, category, image }) => ({ _id, slug, price, title, category, image }))
  return final
}

async function getUserData(userEmail) {
  //   await connect()
  //   const user = await User.findOne({ email: userEmail }).lean()
  //   await disconnect()

  //   const { email, name, address, orderItems } = user

  //   return {
  //     user: { email, name, address, orderItems }
  //   }
  // }

  // async function getAllUsers() {
  //   const user = await User.find({}).lean()

  //   return user
}

export { getAllProductsWithLimit, getNext, getProductBySlug, getProductsByCategory, getFeaturedProducts, getTrendingProducts, getFilteredProducts }
