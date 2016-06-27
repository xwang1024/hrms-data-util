'use strict';
// 专业技术职务子集
exports = module.exports = function(mongo, mongoose) {
  var specialtySubset = new mongoose.Schema({
    qualName: { type: String, ref: "Option" }, // 专业技术资格名称
    qualMethod: { type: String, ref: "Option" }, // 取得资格途径
    qualDate: { type: Date }, // 取得资格时间
    appointName: { type: String, ref: "Option" }, // 聘任专业技术职务名称
    appointStartDate: { type: Date }, // 聘任起始时间
    appointEndDate: { type: Date }, // 聘任终止时间
    appointedBy: { type: String }, // 聘任单位
    appointStatus: { type: String, ref: "Option" }, // 聘任情况
    specialty: { type: String }, // 有何种专长
    qualedBy: { type: String }, // 资格审批单位
    qualReview: { type: String }, // 评审任职资格
    employee: { type: mongoose.Schema.Types.ObjectId, ref: "Employee" }, // 员工ID
    _remove: { type: Boolean }
  });
  
  specialtySubset.index({ employee: 1 });
  specialtySubset.index({ _remove: 1 });
  mongo.model('SpecialtySubset', specialtySubset);
};