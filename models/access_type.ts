import * as mongoose from 'mongoose'

const accessTypeSchema = new mongoose.Schema(
  {
    id: String,
    accessName: String,
    accessDes: String,
    isEdit: String,
    createdBy: String,
    orgDate: String,
    orgTime: String,
  },
  {
    timestamps: true,
  }
)

const AccessTypes = mongoose.model('AccessTypes', accessTypeSchema)

export default AccessTypes
