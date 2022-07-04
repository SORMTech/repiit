const mongoose = require('mongoose')

const userSchema = mongoose?.Schema(
  {
    email: { type: String },
    name: { type: String, required: true },
    address: { type: String, required: true },
    orderItems: { type: Array },
    role: {
      type: String, required: true, default: 'user', enum: ['user', 'admin', 'root'] //the role field can only accept one of these three values
    }
  },
  {
    timestamps: true
  }
)

const User = mongoose.models.User || mongoose.model('User', userSchema)
export default User
