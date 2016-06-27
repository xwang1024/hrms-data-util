'use strict';
// 聘用制工资子集
exports = module.exports = function(mongo, mongoose) {
  var pinyongWageSubset = new mongoose.Schema({
    basicWage: { type: Number }, // 基本工资
    jobAllowance: { type: Number }, // 职务津贴（人事代理）
    benefitBonus: { type: Number }, // 效益奖金
    total: { type: Number }, // 合计
    employee: { type: mongoose.Schema.Types.ObjectId, ref: "Employee" }, // 员工ID
    _remove: { type: Boolean }
  });
  
  pinyongWageSubset.index({ employee: 1 });
  pinyongWageSubset.index({ _remove: 1 });
  mongo.model('PinyongWageSubset', pinyongWageSubset);
};