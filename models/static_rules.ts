import * as mongoose from 'mongoose'

const staticRulesSchema = new mongoose.Schema(
  {
    id: String,
    ruleId: String,
    ruleName: String,
    ruleCode: String,
    ruleType: String,
    isEdit: String,
    createdBy: String,
    orgDate: String,
    orgTime: String,
  },
  {
    timestamps: true,
  }
)

const StaticRules = mongoose.model('StaticRules', staticRulesSchema)

export default StaticRules
