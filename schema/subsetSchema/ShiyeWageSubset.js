'use strict';
// 事业编制工资子集
exports = module.exports = function(mongo, mongoose) {
  var shiyeWageSubset = new mongoose.Schema({
    basicWage: { type: Number }, // 档案工资
    attendanceBonus: { type: Number }, // 岗位责任考勤奖
    schoolAllowance: { type: Number }, // 校内津贴
    benefitBonus: { type: Number }, // 效益奖金
    total: { type: Number }, // 合计
    employee: { type: mongoose.Schema.Types.ObjectId, ref: "Employee" }, // 员工ID
    _remove: { type: Boolean }
  });
  
  shiyeWageSubset.index({ employee: 1 });
  shiyeWageSubset.index({ _remove: 1 });
  mongo.model('ShiyeWageSubset', shiyeWageSubset);
};