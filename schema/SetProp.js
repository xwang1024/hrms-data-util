'use strict';

exports = module.exports = function(mongo, mongoose) {
  var setProp = new mongoose.Schema({
    _id: { type: String, unique: true },
    id: { type: String, unique: true },
    name: { type: String, unique: true },
    oldSetId: { type: String, unique: true },
    enable:  { type: Boolean, default: true }
  });
  setProp.index({ id: 1 });
  mongo.model('SetProp', setProp);
};
