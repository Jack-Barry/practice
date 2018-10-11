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
};

exports.Paths = Paths;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9nbG9iYWxzLnRzIl0sIm5hbWVzIjpbIlBhdGhzIiwibW9kdWxlUm9vdCIsInBhdGgiLCJyZXNvbHZlIiwiX19kaXJuYW1lIiwiY2FsbGluZ0RpciIsImRpcm5hbWUiLCJyZXF1aXJlIiwibWFpbiIsImZpbGVuYW1lIiwid29ya2luZ0RpciIsInByb2Nlc3MiLCJjd2QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7O0lBRWFBLEssR0FLWCxpQkFBYztBQUFBOztBQUNaLE9BQUtDLFVBQUwsR0FBa0JDLGNBQUtDLE9BQUwsQ0FBYUMsU0FBYixFQUF3QixJQUF4QixDQUFsQjtBQUNBLE9BQUtDLFVBQUwsR0FBa0JILGNBQUtJLE9BQUwsQ0FBYUMsT0FBTyxDQUFDQyxJQUFSLENBQWNDLFFBQTNCLENBQWxCO0FBQ0EsT0FBS0MsVUFBTCxHQUFrQkMsT0FBTyxDQUFDQyxHQUFSLEVBQWxCO0FBQ0QsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XG5cbmV4cG9ydCBjbGFzcyBQYXRocyB7XG4gIG1vZHVsZVJvb3Q6IHN0cmluZztcbiAgY2FsbGluZ0Rpcjogc3RyaW5nO1xuICB3b3JraW5nRGlyOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5tb2R1bGVSb290ID0gcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCIuLlwiKTtcbiAgICB0aGlzLmNhbGxpbmdEaXIgPSBwYXRoLmRpcm5hbWUocmVxdWlyZS5tYWluIS5maWxlbmFtZSk7XG4gICAgdGhpcy53b3JraW5nRGlyID0gcHJvY2Vzcy5jd2QoKTtcbiAgfVxufVxuIl19