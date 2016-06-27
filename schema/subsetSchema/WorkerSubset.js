'use strict';
// 工人技术等级及职务子集
exports = module.exports = function(mongo, mongoose) {
  var workerSubset = new mongoose.Schema({
    levelName: { type: String, ref: "Option" }, // 工人技术等级名称
    jobName: { type: String, ref: "Option" }, // 工人技术职务名称
    jobDate: { type: Date }, // 取得技术职务时间
    approvedBy: { type: String }, // 批准技术职务单位名称
    appointStartDate: { type: Date }, // 聘任起始时间
    employee: { type: mongoose.Schema.Types.ObjectId, ref: "Employee" }, // 员工ID
    _remove: { type: Boolean }
  });
  
  workerSubset.index({ employee: 1 });
  workerSubset.index({ _remove: 1 });
  mongo.model('WorkerSubset', workerSubset);
};