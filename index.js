var _          = require('lodash');
var fs         = require('fs');
var mysql      = require('mysql');
var mongoose   = require('mongoose');
var mongooseUtils   = require('mongoose/lib/utils');
var setProps   = require('./set-prop.json');
var assert     = require('assert');

var db = {};
db.mysql = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '123456',
  database : 'ndhq'
});

db.mongo = mongoose.createConnection('mongodb://localhost:27017/hrms');
db.mongo.on('error', console.error.bind(console, 'mongoose connection error: '));
db.mongo.once('open', function () { /* ... */ });

require('./models')(db.mongo, mongoose);

function saveEmployees() {
  db.mongo.collections['employees'].drop((err) => {
    var setProp = setProps[0];
    db.mysql.query('SELECT * FROM ndhq.'+_.toLower(setProp.oldSetId)+';', function(err, rows, fields) {
      rows.map((row) => {
        var model = new db.mongo.models[_.upperFirst(setProp.id)]();
        setProp.columnProps.map((columnProp) => {
          // 空值return
          if(typeof row[columnProp.oldItemId] === 'undefined' || row[columnProp.oldItemId] === null) {
            return;
          }
          // 非选择类型
          if(columnProp.itemType === 'S' || columnProp.itemType === 'M') {
            model[columnProp.id] = row[columnProp.oldItemId].trim();
          }
          else if(columnProp.itemType === 'D') {
            if(row[columnProp.oldItemId] != '0000-00-00 00:00:00') {
              model[columnProp.id] = row[columnProp.oldItemId];
            }
          }
          else if(columnProp.itemType !== 'C') {
            model[columnProp.id] = row[columnProp.oldItemId];
          }
          // 映射到Option的选择类型
          else if(columnProp.optionCode !== 'M' && columnProp.optionCode !== 'N') {
            model[columnProp.id] = columnProp.optionCode + '-' + row[columnProp.oldItemId];
            return;
          }
          // 映射到Department的选择类型
          else {
            var code;
            if(row[columnProp.oldItemId].length == 2) {
              code = row[columnProp.oldItemId];
            } else if(row[columnProp.oldItemId].length == 4) {
              code = row[columnProp.oldItemId].slice(0,2) + '-' + row[columnProp.oldItemId].slice(2,4);
            } else if(row[columnProp.oldItemId].length == 6) {
              code = row[columnProp.oldItemId].slice(0,2) + '-' + row[columnProp.oldItemId].slice(2,4) + '-' + row[columnProp.oldItemId].slice(4,6);
            } else if(row[columnProp.oldItemId].length == 7) {
              code = row[columnProp.oldItemId].slice(0,2) + '-' + row[columnProp.oldItemId].slice(2,4) + '-' + row[columnProp.oldItemId].slice(4,7);
            } else if(row[columnProp.oldItemId].length == 10) {
              code = row[columnProp.oldItemId].slice(0,2) + '-' + row[columnProp.oldItemId].slice(2,4)+ '-' + row[columnProp.oldItemId].slice(4,7)+ '-' + row[columnProp.oldItemId].slice(7,10);
            }
            model[columnProp.id] = code;
            return;
          }

          // validation
          // console.log('[validation]', model[columnProp.id], columnProp.itemType);
          // switch(columnProp.itemType) {
          //   case 'S':
          //   case 'M':
          //   case 'C':
          //     assert(typeof model[columnProp.id] === 'string' || typeof model[columnProp.id] === 'undefined');
          //     break;
          //   case 'N':
          //     assert(typeof model[columnProp.id] === 'number' || typeof model[columnProp.id] === 'undefined');
          //     break;
          //   case 'D':
          //     assert(typeof model[columnProp.id] === 'undefined' || !isNaN( new Date(model[columnProp.id].getTime()) ));
          //     break;
          // }
        });
        if(row.PClassID == '-1') {
          model._remove = true;
        } else {
          model._category = parseInt(row.PClassID);
        }
        model._oldPersonId = row.PersonID;
        model.save((err) => {
          if(err) {
            console.log(err, model)
            throw err;
          }
          console.log(model.name)
        });
      });
    });
  });
}

function saveSubsets() {
  setProps.map( (setProp) => {
    if(setProp.id === 'employee') return;
    db.mongo.collections[mongooseUtils.toCollectionName(setProp.id)].drop((err) => {
      console.log('[Droped]', mongooseUtils.toCollectionName(setProp.id));
      db.mysql.query('SELECT * FROM ndhq.'+_.toLower(setProp.oldSetId)+';', function(err, rows, fields) {
        console.log('[MYSQL Query]', _.toLower(setProp.oldSetId));
        rows.map((row) => {
          var model = new db.mongo.models[_.upperFirst(setProp.id)]();
          setProp.columnProps.map((columnProp) => {
            // 空值return
            if(typeof row[columnProp.oldItemId] === 'undefined' || row[columnProp.oldItemId] === null) {
              return;
            }
            // 非选择类型
            if(columnProp.itemType === 'S' || columnProp.itemType === 'M') {
              model[columnProp.id] = row[columnProp.oldItemId].trim();
            }
            else if(columnProp.itemType === 'D') {
              if(row[columnProp.oldItemId] != '0000-00-00 00:00:00') {
                model[columnProp.id] = row[columnProp.oldItemId];
              }
            }
            else if(columnProp.itemType !== 'C') {
              model[columnProp.id] = row[columnProp.oldItemId];
            }
            // 映射到Option的选择类型
            else if(columnProp.optionCode !== 'M' && columnProp.optionCode !== 'N') {
              model[columnProp.id] = columnProp.optionCode + '-' + row[columnProp.oldItemId];
              return;
            }
            // 映射到Department的选择类型
            else {
              var code;
              if(row[columnProp.oldItemId].length == 2) {
                code = row[columnProp.oldItemId];
              } else if(row[columnProp.oldItemId].length == 4) {
                code = row[columnProp.oldItemId].slice(0,2) + '-' + row[columnProp.oldItemId].slice(2,4);
              } else if(row[columnProp.oldItemId].length == 6) {
                code = row[columnProp.oldItemId].slice(0,2) + '-' + row[columnProp.oldItemId].slice(2,4) + '-' + row[columnProp.oldItemId].slice(4,6);
              } else if(row[columnProp.oldItemId].length == 7) {
                code = row[columnProp.oldItemId].slice(0,2) + '-' + row[columnProp.oldItemId].slice(2,4) + '-' + row[columnProp.oldItemId].slice(4,7);
              } else if(row[columnProp.oldItemId].length == 10) {
                code = row[columnProp.oldItemId].slice(0,2) + '-' + row[columnProp.oldItemId].slice(2,4)+ '-' + row[columnProp.oldItemId].slice(4,7)+ '-' + row[columnProp.oldItemId].slice(7,10);
              }
              model[columnProp.id] = code;
              return;
            }
          });
          db.mongo.models.Employee.findOne({_oldPersonId: row.PersonID}).exec((err, doc) => {
            if(err) throw err;
            if(!doc) return console.log('[Error]', row.PersonID + '不存在');
            if(Object.keys(model.toObject()).length <= 1) {
              return;
            }
            model.employee = doc._id;
            model.save((err) => {
              if(err) {
                console.log(err);
                throw err;
              }
              console.log(JSON.stringify(model.toObject()))
            });
          });
        });
      });
    });
  })
}

saveSubsets();
