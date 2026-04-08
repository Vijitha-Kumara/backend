import * as mongoose from 'mongoose'
const serverSchema = new mongoose.Schema(
  {
    id: String,
    serverName: String,
    serverPort: String,
    serverUrl: String,
    serverHost: String,
    serverToken: String,
    healthStatus: String,
    isEdit: String,
    createdBy: String,
    orgDate: String,
    orgTime: String,
  },
  {
    timestamps: true,
  }
)

const Servers = mongoose.model('Servers', serverSchema)

export default Servers
