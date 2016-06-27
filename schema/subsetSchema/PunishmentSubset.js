'use strict';
// 惩罚(行政及党内)子集
exports = module.exports = function(mongo, mongoose) {
  var punishmentSubset = new mongoose.Schema({
    type: { type: String, ref: "Option" }, // 处分类别
    name: { type: String, ref: "Option" }, // 处分名称
    reason: { type: String, ref: "Option" }, // 处分原因
    date: { type: Date }, // 受处分时间
    givenBy: { type: String }, // 受处分给予单位
    cancelDate: { type: Date }, // 撤销处分时间
    givenBySupervise: { type: String, ref: "Option" }, // 监察机关直接给予的
    cancelStatus: { type: String }, // 惩罚取消情况
    employee: { type: mongoose.Schema.Types.ObjectId, ref: "Employee" }, // 员工ID
    _remove: { type: Boolean }
  });
  
  punishmentSubset.index({ employee: 1 });
  punishmentSubset.index({ _remove: 1 });
  mongo.model('PunishmentSubset', punishmentSubset);
};