import * as mongoose from 'mongoose'

const accessRequestSchema = new mongoose.Schema(
  {
    id: String,
    requestRefNo: String,
    userId: String,
    department: String,
    category: String,
    resource: String,
    reason: String,
    fromDate: String,
    toDate: String,
    accessType: String,
    userLocation: String,
    locationValid: String,
    validationNote: String,
    status: String,
    approverId: String,
    approvedate: String,
    approvalNote: String,
    granteDate: String,
    expiresDate: String,
    revokeDate: String,
    notifyUseronsubmit: String,
    notifyApprover: String,
    notifyUserOnapprove: String,
    notifyUseronExpire: String,
    createdBy: String,
    orgDate: String,
    orTime: String,
    createDate: String,
    updateDate: String,
  },
  {
    timestamps: true,
  }
)

const AccessRequests = mongoose.model('AccessRequests', accessRequestSchema)

export default AccessRequests
