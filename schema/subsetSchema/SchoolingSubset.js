'use strict';
// 学历及学位子集
exports = module.exports = function(mongo, mongoose) {
  var schoolingSubset = new mongoose.Schema({
    eduBackground: { type: String, ref: "Option" }, // 学历
    specialty: { type: String, ref: "Option" }, // 所学专业
    admissionDate: { type: Date }, // 入学时间
    learningForm: { type: String, ref: "Option" }, // 学习形式
    eduSystem: { type: Number }, // 学制
    graduatedDate: { type: Date }, // 毕(肄)业时间
    graduatedSchool: { type: String }, // 毕(肄)业学校及单位
    degree: { type: String, ref: "Option" }, // 学位
    degreeDate: { type: Date }, // 学位授予时间
    degreeCountry: { type: String, ref: "Option" }, // 学位授予国家(地区)
    degreeSchool: { type: String }, // 学位授予单位
    eduType: { type: String, ref: "Option" }, // 教育类别
    witness: { type: String }, // 证明人
    employee: { type: mongoose.Schema.Types.ObjectId, ref: "Employee" }, // 员工ID
    _remove: { type: Boolean }
  });
  
  schoolingSubset.index({ employee: 1 });
  schoolingSubset.index({ _remove: 1 });
  mongo.model('SchoolingSubset', schoolingSubset);
};