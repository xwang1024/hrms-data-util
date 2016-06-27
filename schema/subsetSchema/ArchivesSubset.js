'use strict';
// 人事档案管理子集
exports = module.exports = function(mongo, mongoose) {
  var archivesSubset = new mongoose.Schema({
    archivesId: { type: String }, // 档案编号
    type: { type: String, ref: "Option" }, // 档案类别
    inDate: { type: Date }, // 档案转入时间
    inPlace: { type: String }, // 档案来处
    outDate: { type: Date }, // 档案转出时间
    outPlace: { type: String }, // 档案去处
    employee: { type: mongoose.Schema.Types.ObjectId, ref: "Employee" }, // 员工ID
    _remove: { type: Boolean }
  });
  
  archivesSubset.index({ employee: 1 });
  archivesSubset.index({ _remove: 1 });
  mongo.model('ArchivesSubset', archivesSubset);
};