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

  this.moduleRoot = _path.default.resolve(__dirname, "..");
  this.callingDir = _path.default.dirname(require.main.filename);
  this.workingDir = process.cwd();
  this.configPath = _path.default.resolve(this.workingDir, 'fpcli.config.js');
};

exports.Paths = Paths;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9nbG9iYWxzLnRzIl0sIm5hbWVzIjpbIlBhdGhzIiwibW9kdWxlUm9vdCIsInBhdGgiLCJyZXNvbHZlIiwiX19kaXJuYW1lIiwiY2FsbGluZ0RpciIsImRpcm5hbWUiLCJyZXF1aXJlIiwibWFpbiIsImZpbGVuYW1lIiwid29ya2luZ0RpciIsInByb2Nlc3MiLCJjd2QiLCJjb25maWdQYXRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7OztJQUVhQSxLLEdBTVgsaUJBQWM7QUFBQTs7QUFDWixPQUFLQyxVQUFMLEdBQWtCQyxjQUFLQyxPQUFMLENBQWFDLFNBQWIsRUFBd0IsSUFBeEIsQ0FBbEI7QUFDQSxPQUFLQyxVQUFMLEdBQWtCSCxjQUFLSSxPQUFMLENBQWFDLE9BQU8sQ0FBQ0MsSUFBUixDQUFjQyxRQUEzQixDQUFsQjtBQUNBLE9BQUtDLFVBQUwsR0FBa0JDLE9BQU8sQ0FBQ0MsR0FBUixFQUFsQjtBQUNBLE9BQUtDLFVBQUwsR0FBa0JYLGNBQUtDLE9BQUwsQ0FBYSxLQUFLTyxVQUFsQixFQUE4QixpQkFBOUIsQ0FBbEI7QUFDRCxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQYXRocyB7XHJcbiAgbW9kdWxlUm9vdDogc3RyaW5nO1xyXG4gIGNhbGxpbmdEaXI6IHN0cmluZztcclxuICB3b3JraW5nRGlyOiBzdHJpbmc7XHJcbiAgY29uZmlnUGF0aDpzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5tb2R1bGVSb290ID0gcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCIuLlwiKTtcclxuICAgIHRoaXMuY2FsbGluZ0RpciA9IHBhdGguZGlybmFtZShyZXF1aXJlLm1haW4hLmZpbGVuYW1lKTtcclxuICAgIHRoaXMud29ya2luZ0RpciA9IHByb2Nlc3MuY3dkKCk7XHJcbiAgICB0aGlzLmNvbmZpZ1BhdGggPSBwYXRoLnJlc29sdmUodGhpcy53b3JraW5nRGlyLCAnZnBjbGkuY29uZmlnLmpzJylcclxuICB9XHJcbn1cclxuIl19