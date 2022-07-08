const mongoose = require('mongoose')

const userSchema = mongoose?.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    emailVerified: { type: Boolean, default: false },
    photoURL: { type: String, default: '' },
    address: { type: String, default: '' },
    orderItems: { type: Array, default: [] },
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
