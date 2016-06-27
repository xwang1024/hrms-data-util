'use strict';

exports = module.exports = function(mongo, mongoose) {
  var columnProp = new mongoose.Schema({
    _id: { type: String, unique: true },
    id: { type: String },
    name: { type: String },
    oldItemId: { type: String, unique: true },
    enable:  { type: Boolean, default: true },
    required:  { type: Boolean, default: false },
    itemType: { type: String, default: 'S', enum: ['S', 'M', 'D', 'C', 'N'] },
    itemLen: { type: Number },
    max: { type: Number },
    min: { type: Number },
    optionCode: { type: String },
    setProp: { type: String, ref: 'SetProp' }
  });
  columnProp.index({ id: 1 });
  columnProp.index({ setProp: 1 });
  mongo.model('ColumnProp', columnProp);
};
