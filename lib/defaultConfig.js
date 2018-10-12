"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.config = void 0;

var _Configurator = require("./Configurator");

var config = function config() {
  return new _Configurator.ConfigObject({
    tools: [{
      name: 'Generator',
      matcher: 'g'
    }]
  });
};

exports.config = config;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kZWZhdWx0Q29uZmlnLnRzIl0sIm5hbWVzIjpbImNvbmZpZyIsIkNvbmZpZ09iamVjdCIsInRvb2xzIiwibmFtZSIsIm1hdGNoZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFTyxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFvQjtBQUN4QyxTQUFPLElBQUlDLDBCQUFKLENBQWlCO0FBQ3RCQyxJQUFBQSxLQUFLLEVBQUUsQ0FBQztBQUFFQyxNQUFBQSxJQUFJLEVBQUUsV0FBUjtBQUFxQkMsTUFBQUEsT0FBTyxFQUFFO0FBQTlCLEtBQUQ7QUFEZSxHQUFqQixDQUFQO0FBR0QsQ0FKTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbmZpZ09iamVjdCB9IGZyb20gJy4vQ29uZmlndXJhdG9yJ1xuXG5leHBvcnQgY29uc3QgY29uZmlnID0gKCk6IENvbmZpZ09iamVjdCA9PiB7XG4gIHJldHVybiBuZXcgQ29uZmlnT2JqZWN0KHtcbiAgICB0b29sczogW3sgbmFtZTogJ0dlbmVyYXRvcicsIG1hdGNoZXI6ICdnJyB9XVxuICB9KVxufVxuIl19