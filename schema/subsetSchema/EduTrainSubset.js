'use strict';
// 教育培训子集
exports = module.exports = function(mongo, mongoose) {
  var eduTrainSubset = new mongoose.Schema({
    property: { type: String, ref: "Option" }, // 教育培训性质
    method: { type: String, ref: "Option" }, // 学习方式
    startDate: { type: Date }, // 学习起始时间
    endDate: { type: Date }, // 学习终止时间
    hours: { type: Number }, // 总学时
    content: { type: String }, // 学习内容
    className: { type: String }, // 培训班名称
    organizer: { type: String }, // 主办单位
    organizerProperty: { type: String, ref: "Option" }, // 主办单位性质
    learningUnit: { type: String }, // 在学单位
    learningPlaceType: { type: String, ref: "Option" }, // 在学单位类别
    achievement: { type: String, ref: "Option" }, // 教育培训结果
    date: { type: String, ref: "Option" }, // 培训时间
    type: { type: String, ref: "Option" }, // 培训类别
    organizerType: { type: String, ref: "Option" }, // 主办单位类别
    abroadFlag: { type: String, ref: "Option" }, // 参加出国出境培训标识
    learningPlace: { type: String }, // 学习地点
    witness: { type: String }, // 证明人
    degree: { type: String, ref: "Option" }, // 留学学位
    employee: { type: mongoose.Schema.Types.ObjectId, ref: "Employee" }, // 员工ID
    _remove: { type: Boolean }
  });
  
  eduTrainSubset.index({ employee: 1 });
  eduTrainSubset.index({ _remove: 1 });
  mongo.model('EduTrainSubset', eduTrainSubset);
};