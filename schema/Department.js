'use strict';

exports = module.exports = function(mongo, mongoose) {
  var department = new mongoose.Schema({
    _id: { type: String, unique: true },
    text: { type: String }
  });
  department.index({ _id: 1 });
  mongo.model('Department', department);
};
