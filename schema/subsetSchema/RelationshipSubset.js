'use strict';
// 家庭成员及社会关系子集
exports = module.exports = function(mongo, mongoose) {
  var relationshipSubset = new mongoose.Schema({
    name: { type: String }, // 成员姓名
    relation: { type: String, ref: "Option" }, // 与本人的关系
    birthday: { type: Date }, // 成员出生日期
    workplaceJob: { type: String }, // 工作单位及职务
    politicalStatus: { type: String, ref: "Option" }, // 成员政治面貌
    separateStartDate: { type: Date }, // 夫妻分居起始时间
    education: { type: String, ref: "Option" }, // 成员文化程度
    age: { type: Number }, // 成员年龄
    notes: { type: String }, // 备注
    employee: { type: mongoose.Schema.Types.ObjectId, ref: "Employee" }, // 员工ID
    _remove: { type: Boolean }
  });
  
  relationshipSubset.index({ employee: 1 });
  relationshipSubset.index({ _remove: 1 });
  mongo.model('RelationshipSubset', relationshipSubset);
};