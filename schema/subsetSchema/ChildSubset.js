'use strict';
// 子女信息子集
exports = module.exports = function(mongo, mongoose) {
  var childSubset = new mongoose.Schema({
    name: { type: String }, // 子女姓名
    relation: { type: String, ref: "Option" }, // 与本人关系
    gender: { type: String, ref: "Option" }, // 子女性别
    birthday: { type: Date }, // 出生年月
    onlyCertId: { type: String }, // 独生子女证书号
    isOnlyChild: { type: String, ref: "Option" }, // 是否独生子女
    employee: { type: mongoose.Schema.Types.ObjectId, ref: "Employee" }, // 员工ID
    _remove: { type: Boolean }
  });
  
  childSubset.index({ employee: 1 });
  childSubset.index({ _remove: 1 });
  mongo.model('ChildSubset', childSubset);
};