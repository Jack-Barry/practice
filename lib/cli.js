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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jbGkudHMiXSwibmFtZXMiOlsiY2hhbGsiLCJyZXF1aXJlIiwiQ0xJIiwiYXJncyIsImdsb2JhbFBhdGhzIiwiZ2xvYmFscyIsIlBhdGhzIiwiY29uc29sZSIsImxvZyIsIkpTT04iLCJzdHJpbmdpZnkiLCJ1c2VDb25maWciLCJwYXJzZUZvckNvbmZpZyIsImdyZWVuIiwicHJvamVjdENvbmZpZ1BhdGgiLCJlcnIiLCJlcnJvciIsInJlZCIsIm1lc3NhZ2UiLCJpbnB1dHMiLCJvdXRwdXQiLCJpbmNsdWRlcyIsInByb3ZpZGVkUGF0aCIsImluZGV4T2YiLCJjb25maWdQYXRoIiwicGF0aCIsInJlc29sdmUiLCJ3b3JraW5nRGlyIiwiZnMiLCJhY2Nlc3NTeW5jIiwiRXJyb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7O0FBQ0EsSUFBTUEsS0FBSyxHQUFHQyxPQUFPLENBQUMsT0FBRCxDQUFyQjs7SUFFYUMsRzs7O0FBSVgsZUFBWUMsSUFBWixFQUFpQztBQUFBOztBQUMvQixTQUFLQyxXQUFMLEdBQW1CLElBQUlDLE9BQU8sQ0FBQ0MsS0FBWixFQUFuQjtBQUNBLFNBQUtILElBQUwsR0FBWUEsSUFBWjtBQUNEOzs7OzBCQUVrQjtBQUNqQkksTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlDLElBQUksQ0FBQ0MsU0FBTCxDQUFlLEtBQUtOLFdBQXBCLEVBQWlDLElBQWpDLEVBQXVDLENBQXZDLENBQVo7O0FBQ0EsVUFBSTtBQUNGLFlBQU1PLFNBQVMsR0FBRyxLQUFLQyxjQUFMLENBQW9CLEtBQUtULElBQXpCLENBQWxCOztBQUNBLFlBQUlRLFNBQVMsSUFBSSxJQUFqQixFQUF1QjtBQUNyQkosVUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQ0VSLEtBQUssQ0FBQ2EsS0FBTiw0QkFBZ0MsS0FBS0QsY0FBTCxDQUFvQixLQUFLVCxJQUF6QixDQUFoQyxFQURGO0FBR0EsZUFBS0MsV0FBTCxDQUFpQlUsaUJBQWpCLEdBQXFDSCxTQUFyQztBQUNELFNBTEQsTUFLTztBQUNMSixVQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FDRVIsS0FBSyxDQUFDYSxLQUFOLHlCQUE2QixLQUFLVCxXQUFMLENBQWlCVSxpQkFBOUMsRUFERjtBQUdEO0FBQ0YsT0FaRCxDQVlFLE9BQU9DLEdBQVAsRUFBWTtBQUNaUixRQUFBQSxPQUFPLENBQUNTLEtBQVIsQ0FBY2hCLEtBQUssQ0FBQ2lCLEdBQU4sQ0FBVUYsR0FBRyxDQUFDRyxPQUFkLENBQWQ7QUFDRDtBQUNGOzs7bUNBRXFCQyxNLEVBQXNDO0FBQzFELFVBQUlDLE1BQU0sR0FBRyxJQUFiOztBQUVBLFVBQUlELE1BQU0sQ0FBQ0UsUUFBUCxDQUFnQixVQUFoQixDQUFKLEVBQWlDO0FBQy9CLFlBQU1DLFlBQW9CLEdBQUdILE1BQU0sQ0FBQ0EsTUFBTSxDQUFDSSxPQUFQLENBQWUsVUFBZixJQUE2QixDQUE5QixDQUFuQzs7QUFFQSxZQUFJO0FBQ0YsY0FBTUMsVUFBVSxHQUFHQyxjQUFLQyxPQUFMLENBQ2pCLEtBQUt0QixXQUFMLENBQWlCdUIsVUFEQSxFQUVqQkwsWUFGaUIsQ0FBbkI7O0FBSUFNLHNCQUFHQyxVQUFILENBQWNMLFVBQWQ7O0FBQ0FKLFVBQUFBLE1BQU0sR0FBR0ksVUFBVDtBQUNELFNBUEQsQ0FPRSxPQUFPVCxHQUFQLEVBQVk7QUFDWixnQkFBTWUsS0FBSyxrRkFDaUVSLFlBRGpFLEVBQVg7QUFHRDtBQUNGOztBQUVELGFBQU9GLE1BQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGdsb2JhbHMgZnJvbSBcIi4vZ2xvYmFsc1wiO1xyXG5pbXBvcnQgZnMgZnJvbSBcImZzXCI7XHJcbmltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XHJcbmNvbnN0IGNoYWxrID0gcmVxdWlyZShcImNoYWxrXCIpO1xyXG5cclxuZXhwb3J0IGNsYXNzIENMSSB7XHJcbiAgZ2xvYmFsUGF0aHM6IGdsb2JhbHMuUGF0aHM7XHJcbiAgYXJnczogQXJyYXk8c3RyaW5nPjtcclxuXHJcbiAgY29uc3RydWN0b3IoYXJnczogQXJyYXk8c3RyaW5nPikge1xyXG4gICAgdGhpcy5nbG9iYWxQYXRocyA9IG5ldyBnbG9iYWxzLlBhdGhzKCk7XHJcbiAgICB0aGlzLmFyZ3MgPSBhcmdzO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHJ1bigpOiB2b2lkIHtcclxuICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHRoaXMuZ2xvYmFsUGF0aHMsIG51bGwsIDIpKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHVzZUNvbmZpZyA9IHRoaXMucGFyc2VGb3JDb25maWcodGhpcy5hcmdzKTtcclxuICAgICAgaWYgKHVzZUNvbmZpZyAhPSBudWxsKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXHJcbiAgICAgICAgICBjaGFsay5ncmVlbihgUHJvdmlkZWQgY29uZmlnOiAke3RoaXMucGFyc2VGb3JDb25maWcodGhpcy5hcmdzKX1gKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5nbG9iYWxQYXRocy5wcm9qZWN0Q29uZmlnUGF0aCA9IHVzZUNvbmZpZztcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcclxuICAgICAgICAgIGNoYWxrLmdyZWVuKGBVc2luZyBjb25maWc6ICR7dGhpcy5nbG9iYWxQYXRocy5wcm9qZWN0Q29uZmlnUGF0aH1gKVxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGNoYWxrLnJlZChlcnIubWVzc2FnZSkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIHBhcnNlRm9yQ29uZmlnKGlucHV0czogQXJyYXk8c3RyaW5nPik6IHN0cmluZyB8IG51bGwge1xyXG4gICAgbGV0IG91dHB1dCA9IG51bGw7XHJcblxyXG4gICAgaWYgKGlucHV0cy5pbmNsdWRlcyhcIi0tY29uZmlnXCIpKSB7XHJcbiAgICAgIGNvbnN0IHByb3ZpZGVkUGF0aDogc3RyaW5nID0gaW5wdXRzW2lucHV0cy5pbmRleE9mKFwiLS1jb25maWdcIikgKyAxXTtcclxuXHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgY29uZmlnUGF0aCA9IHBhdGgucmVzb2x2ZShcclxuICAgICAgICAgIHRoaXMuZ2xvYmFsUGF0aHMud29ya2luZ0RpcixcclxuICAgICAgICAgIHByb3ZpZGVkUGF0aFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgZnMuYWNjZXNzU3luYyhjb25maWdQYXRoKTtcclxuICAgICAgICBvdXRwdXQgPSBjb25maWdQYXRoO1xyXG4gICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICB0aHJvdyBFcnJvcihcclxuICAgICAgICAgIGBZb3UgcHJvdmlkZWQgYW4gaW52YWxpZCBwYXRoIGZvciB0aGUgLS1jb25maWcgZmxhZy5cXG5Qcm92aWRlZCBwYXRoOlxcblxcbiR7cHJvdmlkZWRQYXRofWBcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG91dHB1dDtcclxuICB9XHJcbn1cclxuIl19