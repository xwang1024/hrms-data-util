'use strict';
// 个人简历子集
exports = module.exports = function(mongo, mongoose) {
  var resumeSubset = new mongoose.Schema({
    startDate: { type: Date }, // 起始时间
    endDate: { type: Date }, // 终止时间
    workplace: { type: String }, // 所在单位
    work: { type: String }, // 从事工作或担任职务
    witness: { type: String }, // 证明人
    phone: { type: String }, // 联系电话
    leaveDate: { type: Date }, // 离职时间
    changeReason: { type: String }, // 工作变动原因
    limit: { type: Number }, // 工作年限
    job: { type: String }, // 担任职务
    employee: { type: mongoose.Schema.Types.ObjectId, ref: "Employee" }, // 员工ID
    _remove: { type: Boolean }
  });
  
  resumeSubset.index({ employee: 1 });
  resumeSubset.index({ _remove: 1 });
  mongo.model('ResumeSubset', resumeSubset);
};