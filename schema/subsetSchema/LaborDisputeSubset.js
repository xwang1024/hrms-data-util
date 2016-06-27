'use strict';
// 劳务纠纷处理子集
exports = module.exports = function(mongo, mongoose) {
  var laborDisputeSubset = new mongoose.Schema({
    date: { type: Date }, // 发生时间
    department: { type: String, ref: "Department" }, // 发生部门
    description: { type: String }, // 事件简要
    form: { type: String, ref: "Option" }, // 处理形式
    result: { type: String }, // 处理结果
    employee: { type: mongoose.Schema.Types.ObjectId, ref: "Employee" }, // 员工ID
    _remove: { type: Boolean }
  });
  
  laborDisputeSubset.index({ employee: 1 });
  laborDisputeSubset.index({ _remove: 1 });
  mongo.model('LaborDisputeSubset', laborDisputeSubset);
};