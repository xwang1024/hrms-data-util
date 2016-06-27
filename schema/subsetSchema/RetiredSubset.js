'use strict';
// 离休退休子集
exports = module.exports = function(mongo, mongoose) {
  var retiredSubset = new mongoose.Schema({
    type: { type: String, ref: "Option" }, // 离退类别
    date: { type: Date }, // 离（退）休时间
    treatmentLevel: { type: String, ref: "Option" }, // 离（退）休后享受级别
    paidBy: { type: String }, // 离（退）休费支付单位
    managedBy: { type: String }, // 离（退）休后管理单位
    relocation: { type: String }, // 异地安置
    rehireStatus: { type: String, ref: "Option" }, // 返聘情况
    relocationFlag: { type: String, ref: "Option" }, // 异地接收（安置）标识
    relocationDate: { type: Date }, // 异地接收（安置）时间
    attentActivity: { type: String, ref: "Option" }, // 参加各项活动
    dieDate: { type: Date }, // 离、退休死亡时间
    fee: { type: Number }, // 离退休费
    countryPercent: { type: Number }, // 国家规定的基础退休费比例
    specialPercent: { type: Number }, // 因特殊贡献提高的退休费比例
    otherPercent: { type: Number }, // 因其它情况提高的退休费比例
    countryPercentReason: { type: String }, // 国家规定的基础退休费比例的理由及文件依据
    specialPercentReason: { type: String }, // 因特殊贡献提高的退休费比例的理由及文件依
    otherPercentReason: { type: String }, // 因其它情况提高的退休费比例的理由及文件依
    wageSubsidy: { type: Number }, // 按原工资计发的退休生活补贴金额
    wageSubsidyReason: { type: String }, // 按原工资计发的退休生活补贴文件依据
    totalSubsidy: { type: Number }, // 退休后各种固定补贴合计
    totalFeeSubsidy: { type: Number }, // 退休费加各种固定补贴总金额
    committeeComment: { type: String }, // 医院或医务劳动鉴定委员会意见
    reporterComment: { type: String }, // 呈报单位意见
    adminComment: { type: String }, // 主管部门审查意见
    approvalAuthorityComment: { type: String }, // 批准机关意见
    wageSubsidyPercent: { type: Number }, // 按原工资计发的退休生活补贴比例
    retireFee: { type: Number }, // 退休费
    retireAddress: { type: String }, // 退休后住址
    retireLiveFee: { type: Number }, // 退职生活费
    fullPercentFee: { type: String }, // 退休费计发100%情况
    feePercent: { type: String }, // 退休费计发比例
    liveSubsidy: { type: Number }, // 生活补贴
    wageBefore: { type: Number }, // 退休前标准工资
    increaseDate: { type: Date }, // 退休费增加时间
    increaseFee: { type: Number }, // 退休费增加金额
    increaseReason: { type: String }, // 退休费增加金额依据文件
    mechanismChangeDate: { type: Date }, // 增长机制变动时间
    mechanismChangeFee: { type: Number }, // 增长机制变动增加金额
    mechanismChangeReason: { type: String }, // 增长机制变动增加金额依据文件
    retireJobWage: { type: Number }, // 退休后职务工资
    retireLevelWage: { type: Number }, // 退休后级别工资
    employee: { type: mongoose.Schema.Types.ObjectId, ref: "Employee" }, // 员工ID
    _remove: { type: Boolean }
  });
  
  retiredSubset.index({ employee: 1 });
  retiredSubset.index({ _remove: 1 });
  mongo.model('RetiredSubset', retiredSubset);
};