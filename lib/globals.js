"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.workingDir = exports.callerDir = exports.moduleRoot = void 0;

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var moduleRoot = _path.default.resolve(__dirname, "..");

exports.moduleRoot = moduleRoot;

var callerDir = _path.default.dirname(require.main.filename);

exports.callerDir = callerDir;
var workingDir = process.cwd();
exports.workingDir = workingDir;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9nbG9iYWxzLnRzIl0sIm5hbWVzIjpbIm1vZHVsZVJvb3QiLCJwYXRoIiwicmVzb2x2ZSIsIl9fZGlybmFtZSIsImNhbGxlckRpciIsImRpcm5hbWUiLCJyZXF1aXJlIiwibWFpbiIsImZpbGVuYW1lIiwid29ya2luZ0RpciIsInByb2Nlc3MiLCJjd2QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQUVPLElBQU1BLFVBQWtCLEdBQUdDLGNBQUtDLE9BQUwsQ0FBYUMsU0FBYixFQUF3QixJQUF4QixDQUEzQjs7OztBQUNBLElBQU1DLFNBQWlCLEdBQUdILGNBQUtJLE9BQUwsQ0FBYUMsT0FBTyxDQUFDQyxJQUFSLENBQWNDLFFBQTNCLENBQTFCOzs7QUFDQSxJQUFNQyxVQUFrQixHQUFHQyxPQUFPLENBQUNDLEdBQVIsRUFBM0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xuXG5leHBvcnQgY29uc3QgbW9kdWxlUm9vdDogc3RyaW5nID0gcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCIuLlwiKTtcbmV4cG9ydCBjb25zdCBjYWxsZXJEaXI6IHN0cmluZyA9IHBhdGguZGlybmFtZShyZXF1aXJlLm1haW4hLmZpbGVuYW1lKTtcbmV4cG9ydCBjb25zdCB3b3JraW5nRGlyOiBzdHJpbmcgPSBwcm9jZXNzLmN3ZCgpO1xuIl19