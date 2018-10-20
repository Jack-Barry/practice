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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9nbG9iYWxzLnRzIl0sIm5hbWVzIjpbIlBhdGhzIiwid29ya2luZ0RpciIsInByb2Nlc3MiLCJjd2QiLCJjYWxsaW5nRGlyIiwicGF0aCIsImRpcm5hbWUiLCJyZXF1aXJlIiwibWFpbiIsImZpbGVuYW1lIiwibW9kdWxlUm9vdCIsInJlc29sdmUiLCJfX2Rpcm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7O0lBRWFBLEssR0FLWCxpQkFBYztBQUFBOztBQUNaLE9BQUtDLFVBQUwsR0FBa0JDLE9BQU8sQ0FBQ0MsR0FBUixFQUFsQjtBQUNBLE9BQUtDLFVBQUwsR0FBa0JDLGNBQUtDLE9BQUwsQ0FBYUMsT0FBTyxDQUFDQyxJQUFSLENBQWNDLFFBQTNCLENBQWxCO0FBQ0EsT0FBS0MsVUFBTCxHQUFrQkwsY0FBS00sT0FBTCxDQUFhQyxTQUFiLEVBQXdCLElBQXhCLENBQWxCO0FBQ0QsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwYXRoIGZyb20gJ3BhdGgnXG5cbmV4cG9ydCBjbGFzcyBQYXRocyB7XG4gIHdvcmtpbmdEaXI6IHN0cmluZ1xuICBjYWxsaW5nRGlyOiBzdHJpbmdcbiAgbW9kdWxlUm9vdDogc3RyaW5nXG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy53b3JraW5nRGlyID0gcHJvY2Vzcy5jd2QoKVxuICAgIHRoaXMuY2FsbGluZ0RpciA9IHBhdGguZGlybmFtZShyZXF1aXJlLm1haW4hLmZpbGVuYW1lKVxuICAgIHRoaXMubW9kdWxlUm9vdCA9IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuLicpXG4gIH1cbn1cbiJdfQ==