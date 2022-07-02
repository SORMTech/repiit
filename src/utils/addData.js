const { default: Product } = require('../models/Product')
const { connect, disconnect } = require('./db')

export async function updateProp(prop, value) {
  try {
    await connect()
    const user = await Product.update({ prop: value })
    await disconnect()

    return {
      success: true,
      mes: 'success'
    }
  } catch (err) {
    alert('an error occured')
    return {
      success: false,
      mes: 'an error occured'
    }
  }
}