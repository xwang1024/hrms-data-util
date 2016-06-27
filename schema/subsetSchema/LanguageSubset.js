'use strict';
// 语言能力子集
exports = module.exports = function(mongo, mongoose) {
  var languageSubset = new mongoose.Schema({
    name: { type: String, ref: "Option" }, // 语种
    proficiency: { type: String, ref: "Option" }, // 语种熟练程度
    level: { type: String, ref: "Option" }, // 掌握语种的级别
    employee: { type: mongoose.Schema.Types.ObjectId, ref: "Employee" }, // 员工ID
    _remove: { type: Boolean }
  });
  
  languageSubset.index({ employee: 1 });
  languageSubset.index({ _remove: 1 });
  mongo.model('LanguageSubset', languageSubset);
};