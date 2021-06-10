// make npm package befre adding any npm package 
// run npm init --yes 
//require tree 
// 1. seaches core module
// 2. files or folder
// 3. node_modules
// npm i jshint --save-dev
// ^ caret character in package.json refers any package with major as the fix versions 
//Version SEMVER Major.Minor.Patch // 5.12.3
// ~ tilde refers if any new package is available get that
// npm list list all dependencies npm list --depth=0
// npm view underscore version , npm outdated 



var _ = require('underscore');
var result = _.contains([1,2,3,5], 3)
console.log(result);