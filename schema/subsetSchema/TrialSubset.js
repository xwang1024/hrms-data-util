'use strict';
// 试用情况子集
exports = module.exports = function(mongo, mongoose) {
  var trialSubset = new mongoose.Schema({
    trialType: { type: String, ref: "Option" }, // 试用类别
    trialStartDate: { type: Date }, // 试用开始时间
    trialEndDate: { type: Date }, // 试用终止时间
    trialScore: { type: String, ref: "Option" }, // 试用期满成绩
    employee: { type: mongoose.Schema.Types.ObjectId, ref: "Employee" }, // 员工ID
    _remove: { type: Boolean }
  });
  
  trialSubset.index({ employee: 1 });
  trialSubset.index({ _remove: 1 });
  mongo.model('TrialSubset', trialSubset);
};