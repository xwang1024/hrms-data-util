'use strict';
// 职称信息子集
exports = module.exports = function(mongo, mongoose) {
  var jobSubset = new mongoose.Schema({
    date: { type: Date }, // 取得时间
    level: { type: String, ref: "Option" }, // 职称等级
    certName: { type: String }, // 职称证书名称
    employee: { type: mongoose.Schema.Types.ObjectId, ref: "Employee" }, // 员工ID
    _remove: { type: Boolean }
  });
  
  jobSubset.index({ employee: 1 });
  jobSubset.index({ _remove: 1 });
  mongo.model('JobSubset', jobSubset);
};