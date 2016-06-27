'use strict';
// 合同信息子集
exports = module.exports = function(mongo, mongoose) {
  var contractSubset = new mongoose.Schema({
    type: { type: String, ref: "Option" }, // 合同种类
    startDate: { type: Date }, // 合同起始时间
    endDate: { type: Date }, // 合同终止时间
    limit: { type: Number }, // 合同期限
    abnormal: { type: String, ref: "Option" }, // 异常登记
    employee: { type: mongoose.Schema.Types.ObjectId, ref: "Employee" }, // 员工ID
    _remove: { type: Boolean }
  });
  
  contractSubset.index({ employee: 1 });
  contractSubset.index({ _remove: 1 });
  mongo.model('ContractSubset', contractSubset);
};