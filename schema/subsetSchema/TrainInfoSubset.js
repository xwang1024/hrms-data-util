'use strict';
// 培训信息子集
exports = module.exports = function(mongo, mongoose) {
  var trainInfoSubset = new mongoose.Schema({
    startDate: { type: Date }, // 培训起始时间
    content: { type: String }, // 培训内容
    lessonHour: { type: Number }, // 课时
    notes: { type: String }, // 备注
    endDate: { type: Date }, // 培训结束时间
    lecturer: { type: String }, // 主讲师
    address: { type: String }, // 培训地址
    employee: { type: mongoose.Schema.Types.ObjectId, ref: "Employee" }, // 员工ID
    _remove: { type: Boolean }
  });
  
  trainInfoSubset.index({ employee: 1 });
  trainInfoSubset.index({ _remove: 1 });
  mongo.model('TrainInfoSubset', trainInfoSubset);
};