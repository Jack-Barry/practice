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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9DTEkvQ0xJLnRzIl0sIm5hbWVzIjpbImNoYWxrIiwicmVxdWlyZSIsIkNMSSIsImFyZ3MiLCJnbG9iYWxQYXRocyIsImdsb2JhbHMiLCJQYXRocyIsImNvbnNvbGUiLCJsb2ciLCJKU09OIiwic3RyaW5naWZ5IiwidXNlQ29uZmlnIiwicGFyc2VGb3JDb25maWciLCJncmVlbiIsInByb2plY3RDb25maWdQYXRoIiwiZXJyIiwiZXJyb3IiLCJyZWQiLCJtZXNzYWdlIiwiaW5wdXRzIiwib3V0cHV0IiwiaW5jbHVkZXMiLCJwcm92aWRlZFBhdGgiLCJpbmRleE9mIiwiY29uZmlnUGF0aCIsInBhdGgiLCJyZXNvbHZlIiwid29ya2luZ0RpciIsImZzIiwiYWNjZXNzU3luYyIsIkVycm9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUNBLElBQU1BLEtBQUssR0FBR0MsT0FBTyxDQUFDLE9BQUQsQ0FBckI7O0lBRWFDLEc7OztBQUlYLGVBQVlDLElBQVosRUFBaUM7QUFBQTs7QUFDL0IsU0FBS0MsV0FBTCxHQUFtQixJQUFJQyxPQUFPLENBQUNDLEtBQVosRUFBbkI7QUFDQSxTQUFLSCxJQUFMLEdBQVlBLElBQVo7QUFDRDs7OzswQkFFa0I7QUFDakJJLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxJQUFJLENBQUNDLFNBQUwsQ0FBZSxLQUFLTixXQUFwQixFQUFpQyxJQUFqQyxFQUF1QyxDQUF2QyxDQUFaOztBQUNBLFVBQUk7QUFDRixZQUFNTyxTQUFTLEdBQUcsS0FBS0MsY0FBTCxDQUFvQixLQUFLVCxJQUF6QixDQUFsQjs7QUFDQSxZQUFJUSxTQUFTLElBQUksSUFBakIsRUFBdUI7QUFDckJKLFVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUNFUixLQUFLLENBQUNhLEtBQU4sNEJBQWdDLEtBQUtELGNBQUwsQ0FBb0IsS0FBS1QsSUFBekIsQ0FBaEMsRUFERjtBQUdBLGVBQUtDLFdBQUwsQ0FBaUJVLGlCQUFqQixHQUFxQ0gsU0FBckM7QUFDRCxTQUxELE1BS087QUFDTEosVUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQ0VSLEtBQUssQ0FBQ2EsS0FBTix5QkFBNkIsS0FBS1QsV0FBTCxDQUFpQlUsaUJBQTlDLEVBREY7QUFHRDtBQUNGLE9BWkQsQ0FZRSxPQUFPQyxHQUFQLEVBQVk7QUFDWlIsUUFBQUEsT0FBTyxDQUFDUyxLQUFSLENBQWNoQixLQUFLLENBQUNpQixHQUFOLENBQVVGLEdBQUcsQ0FBQ0csT0FBZCxDQUFkO0FBQ0Q7QUFDRjs7O21DQUVxQkMsTSxFQUFzQztBQUMxRCxVQUFJQyxNQUFNLEdBQUcsSUFBYjs7QUFFQSxVQUFJRCxNQUFNLENBQUNFLFFBQVAsQ0FBZ0IsVUFBaEIsQ0FBSixFQUFpQztBQUMvQixZQUFNQyxZQUFvQixHQUFHSCxNQUFNLENBQUNBLE1BQU0sQ0FBQ0ksT0FBUCxDQUFlLFVBQWYsSUFBNkIsQ0FBOUIsQ0FBbkM7O0FBRUEsWUFBSTtBQUNGLGNBQU1DLFVBQVUsR0FBR0MsY0FBS0MsT0FBTCxDQUNqQixLQUFLdEIsV0FBTCxDQUFpQnVCLFVBREEsRUFFakJMLFlBRmlCLENBQW5COztBQUlBTSxzQkFBR0MsVUFBSCxDQUFjTCxVQUFkOztBQUNBSixVQUFBQSxNQUFNLEdBQUdJLFVBQVQ7QUFDRCxTQVBELENBT0UsT0FBT1QsR0FBUCxFQUFZO0FBQ1osZ0JBQU1lLEtBQUssa0ZBQ2lFUixZQURqRSxFQUFYO0FBR0Q7QUFDRjs7QUFFRCxhQUFPRixNQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBnbG9iYWxzIGZyb20gXCIuLi9nbG9iYWxzXCI7XG5pbXBvcnQgZnMgZnJvbSBcImZzXCI7XG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xuY29uc3QgY2hhbGsgPSByZXF1aXJlKFwiY2hhbGtcIik7XG5cbmV4cG9ydCBjbGFzcyBDTEkge1xuICBnbG9iYWxQYXRoczogZ2xvYmFscy5QYXRocztcbiAgYXJnczogQXJyYXk8c3RyaW5nPjtcblxuICBjb25zdHJ1Y3RvcihhcmdzOiBBcnJheTxzdHJpbmc+KSB7XG4gICAgdGhpcy5nbG9iYWxQYXRocyA9IG5ldyBnbG9iYWxzLlBhdGhzKCk7XG4gICAgdGhpcy5hcmdzID0gYXJncztcbiAgfVxuXG4gIHB1YmxpYyBydW4oKTogdm9pZCB7XG4gICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkodGhpcy5nbG9iYWxQYXRocywgbnVsbCwgMikpO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB1c2VDb25maWcgPSB0aGlzLnBhcnNlRm9yQ29uZmlnKHRoaXMuYXJncyk7XG4gICAgICBpZiAodXNlQ29uZmlnICE9IG51bGwpIHtcbiAgICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICAgY2hhbGsuZ3JlZW4oYFByb3ZpZGVkIGNvbmZpZzogJHt0aGlzLnBhcnNlRm9yQ29uZmlnKHRoaXMuYXJncyl9YClcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5nbG9iYWxQYXRocy5wcm9qZWN0Q29uZmlnUGF0aCA9IHVzZUNvbmZpZztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAgIGNoYWxrLmdyZWVuKGBVc2luZyBjb25maWc6ICR7dGhpcy5nbG9iYWxQYXRocy5wcm9qZWN0Q29uZmlnUGF0aH1gKVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcihjaGFsay5yZWQoZXJyLm1lc3NhZ2UpKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgcGFyc2VGb3JDb25maWcoaW5wdXRzOiBBcnJheTxzdHJpbmc+KTogc3RyaW5nIHwgbnVsbCB7XG4gICAgbGV0IG91dHB1dCA9IG51bGw7XG5cbiAgICBpZiAoaW5wdXRzLmluY2x1ZGVzKFwiLS1jb25maWdcIikpIHtcbiAgICAgIGNvbnN0IHByb3ZpZGVkUGF0aDogc3RyaW5nID0gaW5wdXRzW2lucHV0cy5pbmRleE9mKFwiLS1jb25maWdcIikgKyAxXTtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgY29uZmlnUGF0aCA9IHBhdGgucmVzb2x2ZShcbiAgICAgICAgICB0aGlzLmdsb2JhbFBhdGhzLndvcmtpbmdEaXIsXG4gICAgICAgICAgcHJvdmlkZWRQYXRoXG4gICAgICAgICk7XG4gICAgICAgIGZzLmFjY2Vzc1N5bmMoY29uZmlnUGF0aCk7XG4gICAgICAgIG91dHB1dCA9IGNvbmZpZ1BhdGg7XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgdGhyb3cgRXJyb3IoXG4gICAgICAgICAgYFlvdSBwcm92aWRlZCBhbiBpbnZhbGlkIHBhdGggZm9yIHRoZSAtLWNvbmZpZyBmbGFnLlxcblByb3ZpZGVkIHBhdGg6XFxuXFxuJHtwcm92aWRlZFBhdGh9YFxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBvdXRwdXQ7XG4gIH1cbn1cbiJdfQ==