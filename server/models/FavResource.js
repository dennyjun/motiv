var bookshelf = require('../config/bookshelf');
var ModelBase = require('bookshelf-modelbase')(bookshelf);

module.exports = (function() {
  return bookshelf.model('Favresource', ModelBase.extend({
    tableName: 'favresources',
    user: function() {
      return this.belongsTo('User', 'user_id');
    }
  }));
})();
