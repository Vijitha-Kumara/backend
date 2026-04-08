import * as mongoose from 'mongoose'


const departmentSchema = new mongoose.Schema(
  {
    id: String,
    departmentId: String,
    departmentName: String,
    departmentDes: String,
    accessTypes: {
      type: [String],
      default: [],
    },
    isEdit: String,
    createdByUserId: String,
    orgDate: String,
    orgTimeD: String,
  },
  {
    timestamps: true,
  }
)



const Departments = mongoose.model('Departments', departmentSchema)

export default Departments
