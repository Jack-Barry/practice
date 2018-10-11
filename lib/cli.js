"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CLI = void 0;

var globals = _interopRequireWildcard(require("./globals"));

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
      try {
        var useConfig = this.parseForConfig(this.args);

        if (useConfig != null) {
          console.log(chalk.green("Provided config: ".concat(this.parseForConfig(this.args))));
          this.globalPaths.configPath = useConfig;
        } else {
          console.log(chalk.green("Using config: ".concat(this.globalPaths.configPath)));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jbGkudHMiXSwibmFtZXMiOlsiY2hhbGsiLCJyZXF1aXJlIiwiQ0xJIiwiYXJncyIsImdsb2JhbFBhdGhzIiwiZ2xvYmFscyIsIlBhdGhzIiwidXNlQ29uZmlnIiwicGFyc2VGb3JDb25maWciLCJjb25zb2xlIiwibG9nIiwiZ3JlZW4iLCJjb25maWdQYXRoIiwiZXJyIiwiZXJyb3IiLCJyZWQiLCJtZXNzYWdlIiwiaW5wdXRzIiwib3V0cHV0IiwiaW5jbHVkZXMiLCJwcm92aWRlZFBhdGgiLCJpbmRleE9mIiwicGF0aCIsInJlc29sdmUiLCJ3b3JraW5nRGlyIiwiZnMiLCJhY2Nlc3NTeW5jIiwiRXJyb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7O0FBQ0EsSUFBTUEsS0FBSyxHQUFHQyxPQUFPLENBQUMsT0FBRCxDQUFyQjs7SUFFYUMsRzs7O0FBSVgsZUFBWUMsSUFBWixFQUFpQztBQUFBOztBQUMvQixTQUFLQyxXQUFMLEdBQW1CLElBQUlDLE9BQU8sQ0FBQ0MsS0FBWixFQUFuQjtBQUNBLFNBQUtILElBQUwsR0FBWUEsSUFBWjtBQUNEOzs7OzBCQUVrQjtBQUNqQixVQUFJO0FBQ0YsWUFBTUksU0FBUyxHQUFHLEtBQUtDLGNBQUwsQ0FBb0IsS0FBS0wsSUFBekIsQ0FBbEI7O0FBQ0EsWUFBSUksU0FBUyxJQUFJLElBQWpCLEVBQXVCO0FBQ3JCRSxVQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FDRVYsS0FBSyxDQUFDVyxLQUFOLDRCQUFnQyxLQUFLSCxjQUFMLENBQW9CLEtBQUtMLElBQXpCLENBQWhDLEVBREY7QUFHQSxlQUFLQyxXQUFMLENBQWlCUSxVQUFqQixHQUE4QkwsU0FBOUI7QUFDRCxTQUxELE1BS087QUFDTEUsVUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQ0VWLEtBQUssQ0FBQ1csS0FBTix5QkFBNkIsS0FBS1AsV0FBTCxDQUFpQlEsVUFBOUMsRUFERjtBQUdEO0FBQ0YsT0FaRCxDQVlFLE9BQU9DLEdBQVAsRUFBWTtBQUNaSixRQUFBQSxPQUFPLENBQUNLLEtBQVIsQ0FBY2QsS0FBSyxDQUFDZSxHQUFOLENBQVVGLEdBQUcsQ0FBQ0csT0FBZCxDQUFkO0FBQ0Q7QUFDRjs7O21DQUVxQkMsTSxFQUFzQztBQUMxRCxVQUFJQyxNQUFNLEdBQUcsSUFBYjs7QUFFQSxVQUFJRCxNQUFNLENBQUNFLFFBQVAsQ0FBZ0IsVUFBaEIsQ0FBSixFQUFpQztBQUMvQixZQUFNQyxZQUFvQixHQUFHSCxNQUFNLENBQUNBLE1BQU0sQ0FBQ0ksT0FBUCxDQUFlLFVBQWYsSUFBNkIsQ0FBOUIsQ0FBbkM7O0FBRUEsWUFBSTtBQUNGLGNBQU1ULFVBQVUsR0FBR1UsY0FBS0MsT0FBTCxDQUNqQixLQUFLbkIsV0FBTCxDQUFpQm9CLFVBREEsRUFFakJKLFlBRmlCLENBQW5COztBQUlBSyxzQkFBR0MsVUFBSCxDQUFjZCxVQUFkOztBQUNBTSxVQUFBQSxNQUFNLEdBQUdOLFVBQVQ7QUFDRCxTQVBELENBT0UsT0FBT0MsR0FBUCxFQUFZO0FBQ1osZ0JBQU1jLEtBQUssa0ZBQ2lFUCxZQURqRSxFQUFYO0FBR0Q7QUFDRjs7QUFFRCxhQUFPRixNQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBnbG9iYWxzIGZyb20gXCIuL2dsb2JhbHNcIjtcclxuaW1wb3J0IGZzIGZyb20gXCJmc1wiO1xyXG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xyXG5jb25zdCBjaGFsayA9IHJlcXVpcmUoXCJjaGFsa1wiKTtcclxuXHJcbmV4cG9ydCBjbGFzcyBDTEkge1xyXG4gIGdsb2JhbFBhdGhzOiBnbG9iYWxzLlBhdGhzO1xyXG4gIGFyZ3M6IEFycmF5PHN0cmluZz47XHJcblxyXG4gIGNvbnN0cnVjdG9yKGFyZ3M6IEFycmF5PHN0cmluZz4pIHtcclxuICAgIHRoaXMuZ2xvYmFsUGF0aHMgPSBuZXcgZ2xvYmFscy5QYXRocygpO1xyXG4gICAgdGhpcy5hcmdzID0gYXJncztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBydW4oKTogdm9pZCB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB1c2VDb25maWcgPSB0aGlzLnBhcnNlRm9yQ29uZmlnKHRoaXMuYXJncyk7XHJcbiAgICAgIGlmICh1c2VDb25maWcgIT0gbnVsbCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICAgICAgY2hhbGsuZ3JlZW4oYFByb3ZpZGVkIGNvbmZpZzogJHt0aGlzLnBhcnNlRm9yQ29uZmlnKHRoaXMuYXJncyl9YClcclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMuZ2xvYmFsUGF0aHMuY29uZmlnUGF0aCA9IHVzZUNvbmZpZztcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcclxuICAgICAgICAgIGNoYWxrLmdyZWVuKGBVc2luZyBjb25maWc6ICR7dGhpcy5nbG9iYWxQYXRocy5jb25maWdQYXRofWApXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoY2hhbGsucmVkKGVyci5tZXNzYWdlKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcGFyc2VGb3JDb25maWcoaW5wdXRzOiBBcnJheTxzdHJpbmc+KTogc3RyaW5nIHwgbnVsbCB7XHJcbiAgICBsZXQgb3V0cHV0ID0gbnVsbDtcclxuXHJcbiAgICBpZiAoaW5wdXRzLmluY2x1ZGVzKFwiLS1jb25maWdcIikpIHtcclxuICAgICAgY29uc3QgcHJvdmlkZWRQYXRoOiBzdHJpbmcgPSBpbnB1dHNbaW5wdXRzLmluZGV4T2YoXCItLWNvbmZpZ1wiKSArIDFdO1xyXG5cclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBjb25maWdQYXRoID0gcGF0aC5yZXNvbHZlKFxyXG4gICAgICAgICAgdGhpcy5nbG9iYWxQYXRocy53b3JraW5nRGlyLFxyXG4gICAgICAgICAgcHJvdmlkZWRQYXRoXHJcbiAgICAgICAgKTtcclxuICAgICAgICBmcy5hY2Nlc3NTeW5jKGNvbmZpZ1BhdGgpO1xyXG4gICAgICAgIG91dHB1dCA9IGNvbmZpZ1BhdGg7XHJcbiAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIHRocm93IEVycm9yKFxyXG4gICAgICAgICAgYFlvdSBwcm92aWRlZCBhbiBpbnZhbGlkIHBhdGggZm9yIHRoZSAtLWNvbmZpZyBmbGFnLlxcblByb3ZpZGVkIHBhdGg6XFxuXFxuJHtwcm92aWRlZFBhdGh9YFxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gb3V0cHV0O1xyXG4gIH1cclxufVxyXG4iXX0=