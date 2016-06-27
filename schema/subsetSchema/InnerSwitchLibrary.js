'use strict';
// 内部调转库
exports = module.exports = function(mongo, mongoose) {
  var innerSwitchLibrary = new mongoose.Schema({
    inDate: { type: Date }, // 调入时间
    outDate: { type: Date }, // 调出时间
    inDepartment: { type: String, ref: "Department" }, // 调入部门
    outDepartment: { type: String, ref: "Department" }, // 调出部门
    reason: { type: String }, // 调转原因
    employee: { type: mongoose.Schema.Types.ObjectId, ref: "Employee" }, // 员工ID
    _remove: { type: Boolean }
  });
  
  innerSwitchLibrary.index({ employee: 1 });
  innerSwitchLibrary.index({ _remove: 1 });
  mongo.model('InnerSwitchLibrary', innerSwitchLibrary);
};