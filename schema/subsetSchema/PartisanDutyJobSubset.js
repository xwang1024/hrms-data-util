'use strict';
// 行政、党派职务子集
exports = module.exports = function(mongo, mongoose) {
  var partisanDutyJobSubset = new mongoose.Schema({
    type: { type: String, ref: "Option" }, // 职务类别
    name: { type: String, ref: "Option" }, // 职务名称
    date: { type: Date }, // 任职时间
    workplace: { type: String }, // 任职单位
    form: { type: String, ref: "Option" }, // 任职方式
    reason: { type: String, ref: "Option" }, // 任职原因
    refId: { type: String }, // 任职文号
    level: { type: String, ref: "Option" }, // 职务级别
    category: { type: String, ref: "Option" }, // 职位分类
    approvedBy: { type: String }, // 任职批准单位
    changeType: { type: String, ref: "Option" }, // 职务变动类别
    status: { type: String, ref: "Option" }, // 当前任职状况
    sequence: { type: String }, // 职务排序
    workDetail: { type: String }, // 主管或从事工作
    deposeDate: { type: Date }, // 免职时间
    deposeType: { type: String, ref: "Option" }, // 免职方式
    deposeReason: { type: String, ref: "Option" }, // 免职原因
    deposeRefId: { type: String }, // 免职文号
    deposedBy: { type: String }, // 免职批准单位
    validDate: { type: Date }, // 职务生效时间
    jobId: { type: Number }, // 职务序号
    demotionReason: { type: String, ref: "Option" }, // 降职原因
    nextJobYear: { type: String, ref: "Option" }, // 在下一级任职年限
    attr: { type: String, ref: "Option" }, // 职务属性
    clerkLevel: { type: String, ref: "Option" }, // 行员等级
    employeeLevel: { type: String, ref: "Option" }, // 职员等级
    oldJobName: { type: String, ref: "Option" }, // 原职务名称
    oldJobDate: { type: Date }, // 原任职时间
    trialIntent: { type: String }, // 使用意向
    employee: { type: mongoose.Schema.Types.ObjectId, ref: "Employee" }, // 员工ID
    _remove: { type: Boolean }
  });
  
  partisanDutyJobSubset.index({ employee: 1 });
  partisanDutyJobSubset.index({ _remove: 1 });
  mongo.model('PartisanDutyJobSubset', partisanDutyJobSubset);
};