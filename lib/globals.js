"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Paths = void 0;

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Paths = function Paths() {
  _classCallCheck(this, Paths);

  _defineProperty(this, "workingDir", void 0);

  _defineProperty(this, "callingDir", void 0);

  _defineProperty(this, "moduleRoot", void 0);

  this.workingDir = process.cwd();
  this.callingDir = _path.default.dirname(require.main.filename);
  this.moduleRoot = _path.default.resolve(__dirname, '..');
};

exports.Paths = Paths;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9nbG9iYWxzLnRzIl0sIm5hbWVzIjpbIlBhdGhzIiwid29ya2luZ0RpciIsInByb2Nlc3MiLCJjd2QiLCJjYWxsaW5nRGlyIiwicGF0aCIsImRpcm5hbWUiLCJyZXF1aXJlIiwibWFpbiIsImZpbGVuYW1lIiwibW9kdWxlUm9vdCIsInJlc29sdmUiLCJfX2Rpcm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7Ozs7SUFFYUEsSyxHQUtYLGlCQUFjO0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQ1osT0FBS0MsVUFBTCxHQUFrQkMsT0FBTyxDQUFDQyxHQUFSLEVBQWxCO0FBQ0EsT0FBS0MsVUFBTCxHQUFrQkMsY0FBS0MsT0FBTCxDQUFhQyxPQUFPLENBQUNDLElBQVIsQ0FBY0MsUUFBM0IsQ0FBbEI7QUFDQSxPQUFLQyxVQUFMLEdBQWtCTCxjQUFLTSxPQUFMLENBQWFDLFNBQWIsRUFBd0IsSUFBeEIsQ0FBbEI7QUFDRCxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHBhdGggZnJvbSAncGF0aCdcclxuXHJcbmV4cG9ydCBjbGFzcyBQYXRocyB7XHJcbiAgd29ya2luZ0Rpcjogc3RyaW5nXHJcbiAgY2FsbGluZ0Rpcjogc3RyaW5nXHJcbiAgbW9kdWxlUm9vdDogc3RyaW5nXHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy53b3JraW5nRGlyID0gcHJvY2Vzcy5jd2QoKVxyXG4gICAgdGhpcy5jYWxsaW5nRGlyID0gcGF0aC5kaXJuYW1lKHJlcXVpcmUubWFpbiEuZmlsZW5hbWUpXHJcbiAgICB0aGlzLm1vZHVsZVJvb3QgPSBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi4nKVxyXG4gIH1cclxufVxyXG4iXX0=