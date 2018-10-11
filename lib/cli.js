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

var chalk = require("chalk");

var CLI = function CLI() {
  _classCallCheck(this, CLI);

  this.globalPaths = new globals.Paths();

  this.run = function run() {
    try {
      var useConfig = this.parseForConfig(process.argv);

      if (useConfig != null) {
        console.log(chalk.green("Provided config: ".concat(this.parseForConfig(process.argv))));
        this.globalPaths.configPath = useConfig;
      } else {
        console.log(chalk.green("Using config: ".concat(this.globalPaths.configPath)));
      }
    } catch (err) {
      console.error(chalk.red(err.message));
    }
  };

  this.parseForConfig = function parseForConfig(inputs) {
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
  };
};

exports.CLI = CLI;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jbGkudHMiXSwibmFtZXMiOlsiY2hhbGsiLCJyZXF1aXJlIiwiQ0xJIiwiZ2xvYmFsUGF0aHMiLCJnbG9iYWxzIiwiUGF0aHMiLCJydW4iLCJ1c2VDb25maWciLCJwYXJzZUZvckNvbmZpZyIsInByb2Nlc3MiLCJhcmd2IiwiY29uc29sZSIsImxvZyIsImdyZWVuIiwiY29uZmlnUGF0aCIsImVyciIsImVycm9yIiwicmVkIiwibWVzc2FnZSIsImlucHV0cyIsIm91dHB1dCIsImluY2x1ZGVzIiwicHJvdmlkZWRQYXRoIiwiaW5kZXhPZiIsInBhdGgiLCJyZXNvbHZlIiwid29ya2luZ0RpciIsImZzIiwiYWNjZXNzU3luYyIsIkVycm9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7O0FBQ0EsSUFBTUEsS0FBSyxHQUFHQyxPQUFPLENBQUMsT0FBRCxDQUFyQjs7SUFFYUMsRyxHQUtYLGVBQWM7QUFBQTs7QUFDWixPQUFLQyxXQUFMLEdBQW1CLElBQUlDLE9BQU8sQ0FBQ0MsS0FBWixFQUFuQjs7QUFFQSxPQUFLQyxHQUFMLEdBQVcsU0FBU0EsR0FBVCxHQUFxQjtBQUM5QixRQUFJO0FBQ0YsVUFBTUMsU0FBUyxHQUFHLEtBQUtDLGNBQUwsQ0FBb0JDLE9BQU8sQ0FBQ0MsSUFBNUIsQ0FBbEI7O0FBQ0EsVUFBSUgsU0FBUyxJQUFJLElBQWpCLEVBQXVCO0FBQ3JCSSxRQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FDRVosS0FBSyxDQUFDYSxLQUFOLDRCQUFnQyxLQUFLTCxjQUFMLENBQW9CQyxPQUFPLENBQUNDLElBQTVCLENBQWhDLEVBREY7QUFHQSxhQUFLUCxXQUFMLENBQWlCVyxVQUFqQixHQUE4QlAsU0FBOUI7QUFDRCxPQUxELE1BS087QUFDTEksUUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQ0VaLEtBQUssQ0FBQ2EsS0FBTix5QkFBNkIsS0FBS1YsV0FBTCxDQUFpQlcsVUFBOUMsRUFERjtBQUdEO0FBQ0YsS0FaRCxDQVlFLE9BQU9DLEdBQVAsRUFBWTtBQUNaSixNQUFBQSxPQUFPLENBQUNLLEtBQVIsQ0FBY2hCLEtBQUssQ0FBQ2lCLEdBQU4sQ0FBVUYsR0FBRyxDQUFDRyxPQUFkLENBQWQ7QUFDRDtBQUNGLEdBaEJEOztBQWtCQSxPQUFLVixjQUFMLEdBQXNCLFNBQVNBLGNBQVQsQ0FBd0JXLE1BQXhCLEVBQStDO0FBQ25FLFFBQUlDLE1BQU0sR0FBRyxJQUFiOztBQUVBLFFBQUlELE1BQU0sQ0FBQ0UsUUFBUCxDQUFnQixVQUFoQixDQUFKLEVBQWlDO0FBQy9CLFVBQU1DLFlBQW9CLEdBQUdILE1BQU0sQ0FBQ0EsTUFBTSxDQUFDSSxPQUFQLENBQWUsVUFBZixJQUE2QixDQUE5QixDQUFuQzs7QUFFQSxVQUFJO0FBQ0YsWUFBTVQsVUFBVSxHQUFHVSxjQUFLQyxPQUFMLENBQ2pCLEtBQUt0QixXQUFMLENBQWlCdUIsVUFEQSxFQUVqQkosWUFGaUIsQ0FBbkI7O0FBSUFLLG9CQUFHQyxVQUFILENBQWNkLFVBQWQ7O0FBQ0FNLFFBQUFBLE1BQU0sR0FBR04sVUFBVDtBQUNELE9BUEQsQ0FPRSxPQUFPQyxHQUFQLEVBQVk7QUFDWixjQUFNYyxLQUFLLGtGQUNpRVAsWUFEakUsRUFBWDtBQUdEO0FBQ0Y7O0FBRUQsV0FBT0YsTUFBUDtBQUNELEdBckJEO0FBc0JELEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBnbG9iYWxzIGZyb20gXCIuL2dsb2JhbHNcIjtcclxuaW1wb3J0IGZzIGZyb20gXCJmc1wiO1xyXG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xyXG5jb25zdCBjaGFsayA9IHJlcXVpcmUoXCJjaGFsa1wiKTtcclxuXHJcbmV4cG9ydCBjbGFzcyBDTEkge1xyXG4gIGdsb2JhbFBhdGhzOiBnbG9iYWxzLlBhdGhzO1xyXG4gIHJ1bjogKCkgPT4gdm9pZDtcclxuICBwYXJzZUZvckNvbmZpZzogKGlucHV0czogQXJyYXk8c3RyaW5nPikgPT4gc3RyaW5nIHwgbnVsbDtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLmdsb2JhbFBhdGhzID0gbmV3IGdsb2JhbHMuUGF0aHMoKTtcclxuXHJcbiAgICB0aGlzLnJ1biA9IGZ1bmN0aW9uIHJ1bigpOiB2b2lkIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB1c2VDb25maWcgPSB0aGlzLnBhcnNlRm9yQ29uZmlnKHByb2Nlc3MuYXJndik7XHJcbiAgICAgICAgaWYgKHVzZUNvbmZpZyAhPSBudWxsKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcclxuICAgICAgICAgICAgY2hhbGsuZ3JlZW4oYFByb3ZpZGVkIGNvbmZpZzogJHt0aGlzLnBhcnNlRm9yQ29uZmlnKHByb2Nlc3MuYXJndil9YClcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICB0aGlzLmdsb2JhbFBhdGhzLmNvbmZpZ1BhdGggPSB1c2VDb25maWc7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICAgICAgICBjaGFsay5ncmVlbihgVXNpbmcgY29uZmlnOiAke3RoaXMuZ2xvYmFsUGF0aHMuY29uZmlnUGF0aH1gKVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoY2hhbGsucmVkKGVyci5tZXNzYWdlKSk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5wYXJzZUZvckNvbmZpZyA9IGZ1bmN0aW9uIHBhcnNlRm9yQ29uZmlnKGlucHV0cyk6IHN0cmluZyB8IG51bGwge1xyXG4gICAgICBsZXQgb3V0cHV0ID0gbnVsbDtcclxuXHJcbiAgICAgIGlmIChpbnB1dHMuaW5jbHVkZXMoXCItLWNvbmZpZ1wiKSkge1xyXG4gICAgICAgIGNvbnN0IHByb3ZpZGVkUGF0aDogc3RyaW5nID0gaW5wdXRzW2lucHV0cy5pbmRleE9mKFwiLS1jb25maWdcIikgKyAxXTtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGNvbnN0IGNvbmZpZ1BhdGggPSBwYXRoLnJlc29sdmUoXHJcbiAgICAgICAgICAgIHRoaXMuZ2xvYmFsUGF0aHMud29ya2luZ0RpcixcclxuICAgICAgICAgICAgcHJvdmlkZWRQYXRoXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgZnMuYWNjZXNzU3luYyhjb25maWdQYXRoKTtcclxuICAgICAgICAgIG91dHB1dCA9IGNvbmZpZ1BhdGg7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICB0aHJvdyBFcnJvcihcclxuICAgICAgICAgICAgYFlvdSBwcm92aWRlZCBhbiBpbnZhbGlkIHBhdGggZm9yIHRoZSAtLWNvbmZpZyBmbGFnLlxcblByb3ZpZGVkIHBhdGg6XFxuXFxuJHtwcm92aWRlZFBhdGh9YFxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBvdXRwdXQ7XHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iXX0=