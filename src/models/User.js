const mongoose = require('mongoose')

const userSchema = mongoose?.Schema(
  {
    uid: { type: String, required: true, unique: true },
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    emailVerified: { type: Boolean, default: false },
    photoURL: { type: String, default: '' },
    address: { type: String, default: '' },
    orderItems: { type: Array },
    role: {
      type: String, default: 'user', enum: ['user', 'admin', 'root'] //the role field can only accept one of these three values
    }
  },
  {
    timestamps: true
  }
)

const User = mongoose.models.User || mongoose.model('User', userSchema)
export default User
