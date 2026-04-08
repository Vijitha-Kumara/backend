import * as mongoose from 'mongoose'
import { v4 as uuidv4 } from 'uuid'

const userSchema = new mongoose.Schema(
  {
    id: String,
    userId: {
      type: String,
      unique: true,
      index: true,
      default: () => uuidv4(),
    },
    fullName: String,
    email: String,
    phoneNumber: String,
    password: {
      type: String,
      select: false,
    },
    sex: String,
    department: String,
    ip: String,
    location: String,
    notification: String,
    createdBy: String,
    role: {
      type: String,
      enum: ['admin', 'user'],
      default: 'user',
    },

    status: {
      type: String,
      enum: ['active', 'inactive'],
      default: 'active',
    },
  },
  {
    timestamps: true,
  }
)

const Users = mongoose.model('Users', userSchema)

export default Users
