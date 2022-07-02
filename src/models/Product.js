const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
  slug: { type: String, require: true, unique: true },
  name: { type: String, require: true },
  price: { type: Number, require: true },
  salesPrice: { type: Number, default: 0 },
  size: { type: String, require: true },
  availableQty: { type: Number, default: 1 },
  category: { type: [], require: true },
  color: { type: String },
  image: { type: String, require: true },
  description: { type: String, default: '' },
  inStock: { type: Boolean, default: true },
  published: { type: Boolean, default: true },
  featured: { type: Boolean, default: false },
  trending: { type: Boolean, default: false },
  totalQtySold: { type: Number, default: 0 },
  _publishedAt: { type: String, require: true },
  discount: { type: Number, default: 0 },
}, {
  timestamps: true
})

const Product = mongoose.models.Product || mongoose.model('Product', productSchema)
export default Product

// or

// module.exports = mongoose.model('Product', productSchema)
