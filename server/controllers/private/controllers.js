var account = require('./account');
var aws = require('./aws');
var goal = require('./goal');
var user = require('./user');
var regime = require('./regime');
var supplement = require('./supplement');
var feed = require('./feed');
var favresource = require('./favresource');
var link = require('./link');


module.exports = (() => {
  let controllers = [
    account,
    aws,
    goal,
    user,
    regime,
    supplement,
    feed,
    favresource,
    link
  ];
  let router = {};
  controllers.forEach((controller) => {
    router[controller.path] = controller.router;
  });
  return router;
})();
