'use strict';
// 职业资格子集
exports = module.exports = function(mongo, mongoose) {
  var professionQualSubset = new mongoose.Schema({
    date: { type: Date }, // 取得时间
    name: { type: String }, // 资格证书名称
    employee: { type: mongoose.Schema.Types.ObjectId, ref: "Employee" }, // 员工ID
    _remove: { type: Boolean }
  });
  
  professionQualSubset.index({ employee: 1 });
  professionQualSubset.index({ _remove: 1 });
  mongo.model('ProfessionQualSubset', professionQualSubset);
};