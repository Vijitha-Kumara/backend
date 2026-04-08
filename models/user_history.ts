import * as mongoose from 'mongoose'

const userHistorySchema = new mongoose.Schema(
  {
    id: String,
    jwt: String,
    userId: String,
    email:String,    
    action: String,
    loginTime: String,  
    logOutTime: String,
    ip: String,
    location: String,
    note: String,
    snapshot: Object,
    createdBy: String,
  },
  {
    timestamps: true,
  }
)

const UserHistory = mongoose.model('UserHistory', userHistorySchema)

export default UserHistory
