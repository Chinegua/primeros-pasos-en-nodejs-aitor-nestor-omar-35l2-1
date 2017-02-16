var fs = require('fs');
var git = require('simple-git')
var REPO = require("./package.json").repository.wiki


 fs.rmdirSync('wiki/.git')

git()
  .init()
  .add('.')
  .commit("Deploy Wiki")
  .addRemote('origin', REPO)
  .push(['--force', 'origin', 'master:master'], function () { });
