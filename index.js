#!/usr/bin/env node

const globals = require("./lib/globals");
const globalPaths = new globals.Paths();

console.log(globalPaths.workingDir);
console.log(globalPaths.configPath);
console.log(globalPaths.moduleRoot);
console.log(globalPaths.callingDir);
