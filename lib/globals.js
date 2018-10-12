"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Paths = void 0;

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Paths = function Paths() {
  _classCallCheck(this, Paths);

  this.workingDir = process.cwd();
  this.callingDir = _path.default.dirname(require.main.filename);
  this.moduleRoot = _path.default.resolve(__dirname, '..');
};

exports.Paths = Paths;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9nbG9iYWxzLnRzIl0sIm5hbWVzIjpbIlBhdGhzIiwid29ya2luZ0RpciIsInByb2Nlc3MiLCJjd2QiLCJjYWxsaW5nRGlyIiwicGF0aCIsImRpcm5hbWUiLCJyZXF1aXJlIiwibWFpbiIsImZpbGVuYW1lIiwibW9kdWxlUm9vdCIsInJlc29sdmUiLCJfX2Rpcm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7O0lBRWFBLEssR0FLWCxpQkFBYztBQUFBOztBQUNaLE9BQUtDLFVBQUwsR0FBa0JDLE9BQU8sQ0FBQ0MsR0FBUixFQUFsQjtBQUNBLE9BQUtDLFVBQUwsR0FBa0JDLGNBQUtDLE9BQUwsQ0FBYUMsT0FBTyxDQUFDQyxJQUFSLENBQWNDLFFBQTNCLENBQWxCO0FBQ0EsT0FBS0MsVUFBTCxHQUFrQkwsY0FBS00sT0FBTCxDQUFhQyxTQUFiLEVBQXdCLElBQXhCLENBQWxCO0FBQ0QsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwYXRoIGZyb20gJ3BhdGgnXHJcblxyXG5leHBvcnQgY2xhc3MgUGF0aHMge1xyXG4gIHdvcmtpbmdEaXI6IHN0cmluZ1xyXG4gIGNhbGxpbmdEaXI6IHN0cmluZ1xyXG4gIG1vZHVsZVJvb3Q6IHN0cmluZ1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMud29ya2luZ0RpciA9IHByb2Nlc3MuY3dkKClcclxuICAgIHRoaXMuY2FsbGluZ0RpciA9IHBhdGguZGlybmFtZShyZXF1aXJlLm1haW4hLmZpbGVuYW1lKVxyXG4gICAgdGhpcy5tb2R1bGVSb290ID0gcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4uJylcclxuICB9XHJcbn1cclxuIl19