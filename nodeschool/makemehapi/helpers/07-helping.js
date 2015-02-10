module.exports = function (context) {
  var util = require('util');
  util.debug(util.inspect(context));
  var query = context.data.root.query;
  return 'Hello ' + query.name + query.suffix;
};
