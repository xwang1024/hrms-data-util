'use strict';

exports = module.exports = function(mongo, mongoose) {
  var option = new mongoose.Schema({
    _id: { type: String, unique: true },
    id: { type: String, unique: true },
    text: { type: String },
    parent: { type: String },
    children: { type: Boolean },
    optionCode: { type: String },
    sign: { type: String },
    icon: { type: String }
  });
  option.index({ id: 1 });
  option.index({ parent: 1 });
  option.index({ optionCode: 1 });
  mongo.model('Option', option);
};
