'use strict';
// 政治面貌及党籍情况子集
exports = module.exports = function(mongo, mongoose) {
  var politicalSubset = new mongoose.Schema({
    status: { type: String, ref: "Option" }, // 政治面貌
    startDate: { type: Date }, // 参加党派时间
    startWorkplace: { type: String }, // 参加党派时所在单位
    introducer: { type: String }, // 介绍人
    regularizedDate: { type: Date }, // 转正时间
    abnormalType: { type: String, ref: "Option" }, // 异常类别
    abnormalReason: { type: String }, // 异常原因
    partyJob: { type: String }, // 党（团）职务
    democraticJob: { type: String }, // 民主党派职务
    employee: { type: mongoose.Schema.Types.ObjectId, ref: "Employee" }, // 员工ID
    _remove: { type: Boolean }
  });
  
  politicalSubset.index({ employee: 1 });
  politicalSubset.index({ _remove: 1 });
  mongo.model('PoliticalSubset', politicalSubset);
};