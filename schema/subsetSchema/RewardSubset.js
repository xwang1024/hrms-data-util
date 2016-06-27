'use strict';
// 奖励(行政及党内)子集
exports = module.exports = function(mongo, mongoose) {
  var rewardSubset = new mongoose.Schema({
    type: { type: String, ref: "Option" }, // 奖励类别
    name: { type: String, ref: "Option" }, // 奖励名称
    reason: { type: String, ref: "Option" }, // 奖励原因
    date: { type: Date }, // 奖励时间
    approvedBy: { type: String }, // 奖励批准单位
    honorName: { type: String, ref: "Option" }, // 荣誉称号名称
    honorApprovedBy: { type: String, ref: "Option" }, // 荣誉称号授予单位
    cancelStatus: { type: String }, // 奖励取消情况
    employee: { type: mongoose.Schema.Types.ObjectId, ref: "Employee" }, // 员工ID
    _remove: { type: Boolean }
  });
  
  rewardSubset.index({ employee: 1 });
  rewardSubset.index({ _remove: 1 });
  mongo.model('RewardSubset', rewardSubset);
};