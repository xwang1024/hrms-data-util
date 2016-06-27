'use strict';

exports = module.exports = function(mongo, mongoose) {
  var employee = new mongoose.Schema({
    name: { type: String }, // 姓名
    gender: { type: String, ref: "Option" }, // 性别
    birthday: { type: Date }, // 出生日期
    hometown: { type: String, ref: "Option" }, // 籍贯
    nation: { type: String, ref: "Option" }, // 民族
    marryStatus: { type: String, ref: "Option" }, // 婚姻状况
    identity: { type: String, ref: "Option" }, // 个人身份
    workDate: { type: Date }, // 参加工作时间
    groupDate: { type: Date }, // 进入集团工作时间
    workAge: { type: Number }, // 连续工龄
    workLimit: { type: Number }, // 工作年限
    employmentForm: { type: String, ref: "Option" }, // 用工形式
    laborContractType: { type: String, ref: "Option" }, // 劳动合同制用人形式
    treatmentLevel: { type: String, ref: "Option" }, // 享受待遇级别
    hukouType: { type: String, ref: "Option" }, // 户口性质
    idNum: { type: String }, // 身份证号
    company: { type: String, ref: "Department" }, // 单位
    department: { type: String, ref: "Department" }, // 部门
    currentAddress: { type: String }, // 现住址
    contactPhone: { type: String }, // 紧急联系人电话
    employeeId: { type: String }, // 员工编号
    idAddress: { type: String }, // 身份证地址
    leaveDate: { type: Date }, // 离职时间
    jobLevel: { type: String, ref: "Option" }, // 职务级别
    notes: { type: String }, // 备注
    oldCompany: { type: String }, // 原单位
    oldCompanyYears: { type: Date }, // 原单位任职时间
    archivesId: { type: String }, // 档案编号
    socialSecurityId: { type: String }, // 社保号
    archivesInDate: { type: Date }, // 档案转入时间
    politicalStatus: { type: String, ref: "Option" }, // 政治面貌
    partyDate: { type: Date }, // 入党时间
    jobPosition: { type: String, ref: "Option" }, // 集团内任职
    isMarried: { type: String, ref: "Option" }, // 婚否
    jobStatus: { type: String, ref: "Option" }, // 在职状况
    type: { type: String, ref: "Option" }, // 人员类别
    contactRelation: { type: String, ref: "Option" }, // 紧急联系人与本人关系
    email: { type: String }, // Email
    schoolDate: { type: Date }, // 入校时间
    socialSecurityStatus: { type: String, ref: "Option" }, // 社保状态
    hukouAddress: { type: String }, // 户口所在地详细地址
    workPositon: { type: String }, // 岗位
    leaveStatus: { type: String, ref: "Option" }, // 离职状况
    transferStatus: { type: String, ref: "Option" }, // 调出状况
    dieStatus: { type: String, ref: "Option" }, // 死亡状况
    schoolAge: { type: Number }, // 校龄
    sheetDate: { type: String }, // 填表时间
    transferDate: { type: Date }, // 调出时间
    pinyongFrom: { type: String, ref: "Option" }, // 人员录聘用来源
    hometownDescription: { type: String }, // 籍贯（描述）
    age: { type: Number }, // 年龄
    regularizedDate: { type: Date }, // 转正时间
    telephone: { type: String }, // 联系方式
    workPositionLimit: { type: String, ref: "Option" }, // 在当前岗位任职年限
    homePhone: { type: String }, // 家庭电话
    contact: { type: String }, // 紧急联系人
    _remove: { type: Boolean },
    _category: { type: Number },
    _oldPersonId: { type: String }
  });
  employee.index({ name: 1 });
  employee.index({ idNum: 1 });
  employee.index({ company: 1 });
  employee.index({ department: 1 });
  employee.index({ _remove: 1 });
  employee.index({ _tag: 1 });
  employee.index({ _oldPersonId: 1 });
  mongo.model('Employee', employee);
};
