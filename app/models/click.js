var db = require('../config');
var Link = require('./link.js');
var mongoose = require('mongoose');

var clicksSchema = mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,
  linkId: Number,
  timestamps: {type: Date, default: Date.now}
});

var Click = mongoose.model('Click', clicksSchema);

var Click = db.Model.extend({
  tableName: 'clicks',
  hasTimestamps: true,
  link: function() {
    return this.belongsTo(Link, 'linkId');
  }
});

module.exports = Click;
