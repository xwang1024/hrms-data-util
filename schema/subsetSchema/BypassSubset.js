'use strict';
// 人员分流情况子集
exports = module.exports = function(mongo, mongoose) {
  var bypassSubset = new mongoose.Schema({
    date: { type: Date }, // 人员分流时间
    whereabouts: { type: String, ref: "Option" }, // 人员分流去向
    employee: { type: mongoose.Schema.Types.ObjectId, ref: "Employee" }, // 员工ID
    _remove: { type: Boolean }
  });
  
  bypassSubset.index({ employee: 1 });
  bypassSubset.index({ _remove: 1 });
  mongo.model('BypassSubset', bypassSubset);
};