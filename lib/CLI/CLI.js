"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CLI = void 0;

var globals = _interopRequireWildcard(require("../globals"));

var _fs = _interopRequireDefault(require("fs"));

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var chalk = require("chalk");

var CLI =
/*#__PURE__*/
function () {
  function CLI(args) {
    _classCallCheck(this, CLI);

    this.globalPaths = new globals.Paths();
    this.args = args;
  }

  _createClass(CLI, [{
    key: "run",
    value: function run() {
      console.log(JSON.stringify(this.globalPaths, null, 2));

      try {
        var useConfig = this.parseForConfig(this.args);

        if (useConfig != null) {
          console.log(chalk.green("Provided config: ".concat(this.parseForConfig(this.args))));
          this.globalPaths.projectConfigPath = useConfig;
        } else {
          console.log(chalk.green("Using config: ".concat(this.globalPaths.projectConfigPath)));
        }
      } catch (err) {
        console.error(chalk.red(err.message));
      }
    }
  }, {
    key: "parseForConfig",
    value: function parseForConfig(inputs) {
      var output = null;

      if (inputs.includes("--config")) {
        var providedPath = inputs[inputs.indexOf("--config") + 1];

        try {
          var configPath = _path.default.resolve(this.globalPaths.workingDir, providedPath);

          _fs.default.accessSync(configPath);

          output = configPath;
        } catch (err) {
          throw Error("You provided an invalid path for the --config flag.\nProvided path:\n\n".concat(providedPath));
        }
      }

      return output;
    }
  }]);

  return CLI;
}();

exports.CLI = CLI;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9DTEkvQ0xJLnRzIl0sIm5hbWVzIjpbImNoYWxrIiwicmVxdWlyZSIsIkNMSSIsImFyZ3MiLCJnbG9iYWxQYXRocyIsImdsb2JhbHMiLCJQYXRocyIsImNvbnNvbGUiLCJsb2ciLCJKU09OIiwic3RyaW5naWZ5IiwidXNlQ29uZmlnIiwicGFyc2VGb3JDb25maWciLCJncmVlbiIsInByb2plY3RDb25maWdQYXRoIiwiZXJyIiwiZXJyb3IiLCJyZWQiLCJtZXNzYWdlIiwiaW5wdXRzIiwib3V0cHV0IiwiaW5jbHVkZXMiLCJwcm92aWRlZFBhdGgiLCJpbmRleE9mIiwiY29uZmlnUGF0aCIsInBhdGgiLCJyZXNvbHZlIiwid29ya2luZ0RpciIsImZzIiwiYWNjZXNzU3luYyIsIkVycm9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUNBLElBQU1BLEtBQUssR0FBR0MsT0FBTyxDQUFDLE9BQUQsQ0FBckI7O0lBRWFDLEc7OztBQUlYLGVBQVlDLElBQVosRUFBaUM7QUFBQTs7QUFDL0IsU0FBS0MsV0FBTCxHQUFtQixJQUFJQyxPQUFPLENBQUNDLEtBQVosRUFBbkI7QUFDQSxTQUFLSCxJQUFMLEdBQVlBLElBQVo7QUFDRDs7OzswQkFFa0I7QUFDakJJLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxJQUFJLENBQUNDLFNBQUwsQ0FBZSxLQUFLTixXQUFwQixFQUFpQyxJQUFqQyxFQUF1QyxDQUF2QyxDQUFaOztBQUNBLFVBQUk7QUFDRixZQUFNTyxTQUFTLEdBQUcsS0FBS0MsY0FBTCxDQUFvQixLQUFLVCxJQUF6QixDQUFsQjs7QUFDQSxZQUFJUSxTQUFTLElBQUksSUFBakIsRUFBdUI7QUFDckJKLFVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUNFUixLQUFLLENBQUNhLEtBQU4sNEJBQWdDLEtBQUtELGNBQUwsQ0FBb0IsS0FBS1QsSUFBekIsQ0FBaEMsRUFERjtBQUdBLGVBQUtDLFdBQUwsQ0FBaUJVLGlCQUFqQixHQUFxQ0gsU0FBckM7QUFDRCxTQUxELE1BS087QUFDTEosVUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQ0VSLEtBQUssQ0FBQ2EsS0FBTix5QkFBNkIsS0FBS1QsV0FBTCxDQUFpQlUsaUJBQTlDLEVBREY7QUFHRDtBQUNGLE9BWkQsQ0FZRSxPQUFPQyxHQUFQLEVBQVk7QUFDWlIsUUFBQUEsT0FBTyxDQUFDUyxLQUFSLENBQWNoQixLQUFLLENBQUNpQixHQUFOLENBQVVGLEdBQUcsQ0FBQ0csT0FBZCxDQUFkO0FBQ0Q7QUFDRjs7O21DQUVxQkMsTSxFQUFzQztBQUMxRCxVQUFJQyxNQUFNLEdBQUcsSUFBYjs7QUFFQSxVQUFJRCxNQUFNLENBQUNFLFFBQVAsQ0FBZ0IsVUFBaEIsQ0FBSixFQUFpQztBQUMvQixZQUFNQyxZQUFvQixHQUFHSCxNQUFNLENBQUNBLE1BQU0sQ0FBQ0ksT0FBUCxDQUFlLFVBQWYsSUFBNkIsQ0FBOUIsQ0FBbkM7O0FBRUEsWUFBSTtBQUNGLGNBQU1DLFVBQVUsR0FBR0MsY0FBS0MsT0FBTCxDQUNqQixLQUFLdEIsV0FBTCxDQUFpQnVCLFVBREEsRUFFakJMLFlBRmlCLENBQW5COztBQUlBTSxzQkFBR0MsVUFBSCxDQUFjTCxVQUFkOztBQUNBSixVQUFBQSxNQUFNLEdBQUdJLFVBQVQ7QUFDRCxTQVBELENBT0UsT0FBT1QsR0FBUCxFQUFZO0FBQ1osZ0JBQU1lLEtBQUssa0ZBQ2lFUixZQURqRSxFQUFYO0FBR0Q7QUFDRjs7QUFFRCxhQUFPRixNQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBnbG9iYWxzIGZyb20gXCIuLi9nbG9iYWxzXCI7XHJcbmltcG9ydCBmcyBmcm9tIFwiZnNcIjtcclxuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcclxuY29uc3QgY2hhbGsgPSByZXF1aXJlKFwiY2hhbGtcIik7XHJcblxyXG5leHBvcnQgY2xhc3MgQ0xJIHtcclxuICBnbG9iYWxQYXRoczogZ2xvYmFscy5QYXRocztcclxuICBhcmdzOiBBcnJheTxzdHJpbmc+O1xyXG5cclxuICBjb25zdHJ1Y3RvcihhcmdzOiBBcnJheTxzdHJpbmc+KSB7XHJcbiAgICB0aGlzLmdsb2JhbFBhdGhzID0gbmV3IGdsb2JhbHMuUGF0aHMoKTtcclxuICAgIHRoaXMuYXJncyA9IGFyZ3M7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcnVuKCk6IHZvaWQge1xyXG4gICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkodGhpcy5nbG9iYWxQYXRocywgbnVsbCwgMikpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgdXNlQ29uZmlnID0gdGhpcy5wYXJzZUZvckNvbmZpZyh0aGlzLmFyZ3MpO1xyXG4gICAgICBpZiAodXNlQ29uZmlnICE9IG51bGwpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcclxuICAgICAgICAgIGNoYWxrLmdyZWVuKGBQcm92aWRlZCBjb25maWc6ICR7dGhpcy5wYXJzZUZvckNvbmZpZyh0aGlzLmFyZ3MpfWApXHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLmdsb2JhbFBhdGhzLnByb2plY3RDb25maWdQYXRoID0gdXNlQ29uZmlnO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICAgICAgY2hhbGsuZ3JlZW4oYFVzaW5nIGNvbmZpZzogJHt0aGlzLmdsb2JhbFBhdGhzLnByb2plY3RDb25maWdQYXRofWApXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoY2hhbGsucmVkKGVyci5tZXNzYWdlKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcGFyc2VGb3JDb25maWcoaW5wdXRzOiBBcnJheTxzdHJpbmc+KTogc3RyaW5nIHwgbnVsbCB7XHJcbiAgICBsZXQgb3V0cHV0ID0gbnVsbDtcclxuXHJcbiAgICBpZiAoaW5wdXRzLmluY2x1ZGVzKFwiLS1jb25maWdcIikpIHtcclxuICAgICAgY29uc3QgcHJvdmlkZWRQYXRoOiBzdHJpbmcgPSBpbnB1dHNbaW5wdXRzLmluZGV4T2YoXCItLWNvbmZpZ1wiKSArIDFdO1xyXG5cclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBjb25maWdQYXRoID0gcGF0aC5yZXNvbHZlKFxyXG4gICAgICAgICAgdGhpcy5nbG9iYWxQYXRocy53b3JraW5nRGlyLFxyXG4gICAgICAgICAgcHJvdmlkZWRQYXRoXHJcbiAgICAgICAgKTtcclxuICAgICAgICBmcy5hY2Nlc3NTeW5jKGNvbmZpZ1BhdGgpO1xyXG4gICAgICAgIG91dHB1dCA9IGNvbmZpZ1BhdGg7XHJcbiAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIHRocm93IEVycm9yKFxyXG4gICAgICAgICAgYFlvdSBwcm92aWRlZCBhbiBpbnZhbGlkIHBhdGggZm9yIHRoZSAtLWNvbmZpZyBmbGFnLlxcblByb3ZpZGVkIHBhdGg6XFxuXFxuJHtwcm92aWRlZFBhdGh9YFxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gb3V0cHV0O1xyXG4gIH1cclxufVxyXG4iXX0=