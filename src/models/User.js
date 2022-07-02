const mongoose = require('mongoose')

const userSchema = mongoose?.Schema(
  {
    email: { type: String },
    name: { type: String, required: true },
    address: { type: String, required: true },
    orderItems: { type: Array }
  },
  {
    timestamps: true
  }
)

const User = mongoose.models.User || mongoose.model('User', userSchema)
export default User
