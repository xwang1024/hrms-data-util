'use strict';

exports = module.exports = function(mongo, mongoose) {

  require('./schema/Department')(mongo, mongoose);
  require('./schema/SetProp')(mongo, mongoose);
  require('./schema/ColumnProp')(mongo, mongoose);
  require('./schema/Option')(mongo, mongoose);

  require('./schema/Employee')(mongo, mongoose); // 人员基本情况
  require('./schema/subsetSchema/SchoolingSubset')(mongo, mongoose); // 学历及学位子集
  require('./schema/subsetSchema/PartisanDutyJobSubset')(mongo, mongoose); // 行政、党派职务子集
  require('./schema/subsetSchema/SpecialtySubset')(mongo, mongoose); // 专业技术职务子集
  require('./schema/subsetSchema/WorkerSubset')(mongo, mongoose); // 工人技术等级及职务子集
  require('./schema/subsetSchema/TrialSubset')(mongo, mongoose); // 试用情况子集
  require('./schema/subsetSchema/ContractSubset')(mongo, mongoose); // 合同信息子集
  require('./schema/subsetSchema/PositionChangeSubset')(mongo, mongoose); // 岗位变化子集
  require('./schema/subsetSchema/ResumeSubset')(mongo, mongoose); // 个人简历子集
  require('./schema/subsetSchema/BypassSubset')(mongo, mongoose); // 人员分流情况子集
  require('./schema/subsetSchema/PoliticalSubset')(mongo, mongoose); // 政治面貌及党籍情况子集
  require('./schema/subsetSchema/RewardSubset')(mongo, mongoose); // 奖励(行政及党内)子集
  require('./schema/subsetSchema/PunishmentSubset')(mongo, mongoose); // 惩罚(行政及党内)子集
  require('./schema/subsetSchema/LanguageSubset')(mongo, mongoose); // 语言能力子集
  require('./schema/subsetSchema/EduTrainSubset')(mongo, mongoose); // 教育培训子集
  require('./schema/subsetSchema/RetiredSubset')(mongo, mongoose); // 离休退休子集
  require('./schema/subsetSchema/RelationshipSubset')(mongo, mongoose); // 家庭成员及社会关系子集
  require('./schema/subsetSchema/ArchivesSubset')(mongo, mongoose); // 人事档案管理子集
  require('./schema/subsetSchema/ProfessionQualSubset')(mongo, mongoose); // 职业资格子集
  require('./schema/subsetSchema/LaborDisputeSubset')(mongo, mongoose); // 劳务纠纷处理子集
  require('./schema/subsetSchema/ChildSubset')(mongo, mongoose); // 子女信息子集
  require('./schema/subsetSchema/JobSubset')(mongo, mongoose); // 职称信息子集
  require('./schema/subsetSchema/TrainInfoSubset')(mongo, mongoose); // 培训信息子集
  require('./schema/subsetSchema/ShiyeWageSubset')(mongo, mongoose); // 事业编制工资子集
  require('./schema/subsetSchema/PinyongWageSubset')(mongo, mongoose); // 聘用制工资子集
  require('./schema/subsetSchema/InnerSwitchLibrary')(mongo, mongoose); // 内部调转库
};
