require('shells/global');
let git = require('simple-git')
let REPO = require("./package.json").repository.wiki


 rm('-rf','.git');

git()
  .init()
  .add('.')
  .commit("Deploy Wiki")
  .addRemote('origin', REPO)
  .push(['--force', 'origin', 'master:master'], function () { });
