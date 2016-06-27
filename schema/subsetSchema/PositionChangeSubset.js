'use strict';
// 岗位变化子集
exports = module.exports = function(mongo, mongoose) {
  var positionChangeSubset = new mongoose.Schema({
    oldPodition: { type: String }, // 原岗位
    status: { type: String, ref: "Option" }, // 岗位变化情况
    date: { type: Date }, // 岗位变化时间
    inductionType: { type: String, ref: "Option" }, // 公务员上岗方式
    employee: { type: mongoose.Schema.Types.ObjectId, ref: "Employee" }, // 员工ID
    _remove: { type: Boolean }
  });
  
  positionChangeSubset.index({ employee: 1 });
  positionChangeSubset.index({ _remove: 1 });
  mongo.model('PositionChangeSubset', positionChangeSubset);
};