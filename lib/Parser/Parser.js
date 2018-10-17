"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Parser = void 0;

var _globals = require("./../globals");

var _Configurator = require("./../Configurator");

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var globalPaths = new _globals.Paths();

var Parser =
/*#__PURE__*/
function () {
  function Parser() {
    var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    _classCallCheck(this, Parser);

    this.args = args;
    this.rootPath = globalPaths.callingDir;
    this.configModifierPath = globalPaths.projectConfigSubPath;
    this.setConfiguration();
    this.config = new _Configurator.Configurator({
      rootPath: this.rootPath,
      projectConfigSubPath: this.configModifierPath
    }).result;
  }

  _createClass(Parser, [{
    key: "setConfiguration",
    value: function setConfiguration() {
      if (this.args.includes('--config')) {
        var configValue = this.args[this.args.indexOf('--config') + 1];

        if (configValue !== undefined) {
          this.configModifierPath = configValue;
        } else {
          throw Error('You supplied the `--config` flag but did not provide a value.');
        }
      }

      if (this.args.includes('--rootPath')) {
        var rootPathValue = this.args[this.args.indexOf('--rootPath') + 1];

        if (rootPathValue !== undefined) {
          this.rootPath = _path.default.resolve(rootPathValue);
        } else {
          throw Error('You supplied the `--rootPath` flag but did not provide a value.');
        }
      }
    }
  }]);

  return Parser;
}();

exports.Parser = Parser;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9QYXJzZXIvUGFyc2VyLnRzIl0sIm5hbWVzIjpbImdsb2JhbFBhdGhzIiwiUGF0aHMiLCJQYXJzZXIiLCJhcmdzIiwicm9vdFBhdGgiLCJjYWxsaW5nRGlyIiwiY29uZmlnTW9kaWZpZXJQYXRoIiwicHJvamVjdENvbmZpZ1N1YlBhdGgiLCJzZXRDb25maWd1cmF0aW9uIiwiY29uZmlnIiwiQ29uZmlndXJhdG9yIiwicmVzdWx0IiwiaW5jbHVkZXMiLCJjb25maWdWYWx1ZSIsImluZGV4T2YiLCJ1bmRlZmluZWQiLCJFcnJvciIsInJvb3RQYXRoVmFsdWUiLCJwYXRoIiwicmVzb2x2ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsV0FBa0IsR0FBRyxJQUFJQyxjQUFKLEVBQTNCOztJQVNhQyxNOzs7QUFNWCxvQkFBc0M7QUFBQSxRQUExQkMsSUFBMEIsdUVBQUosRUFBSTs7QUFBQTs7QUFDcEMsU0FBS0EsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsU0FBS0MsUUFBTCxHQUFnQkosV0FBVyxDQUFDSyxVQUE1QjtBQUNBLFNBQUtDLGtCQUFMLEdBQTBCTixXQUFXLENBQUNPLG9CQUF0QztBQUNBLFNBQUtDLGdCQUFMO0FBQ0EsU0FBS0MsTUFBTCxHQUFjLElBQUlDLDBCQUFKLENBQWlCO0FBQzdCTixNQUFBQSxRQUFRLEVBQUUsS0FBS0EsUUFEYztBQUU3QkcsTUFBQUEsb0JBQW9CLEVBQUUsS0FBS0Q7QUFGRSxLQUFqQixFQUdYSyxNQUhIO0FBSUQ7Ozs7dUNBRTBCO0FBQ3pCLFVBQUksS0FBS1IsSUFBTCxDQUFVUyxRQUFWLENBQW1CLFVBQW5CLENBQUosRUFBb0M7QUFDbEMsWUFBTUMsV0FBbUIsR0FBRyxLQUFLVixJQUFMLENBQVUsS0FBS0EsSUFBTCxDQUFVVyxPQUFWLENBQWtCLFVBQWxCLElBQWdDLENBQTFDLENBQTVCOztBQUNBLFlBQUlELFdBQVcsS0FBS0UsU0FBcEIsRUFBK0I7QUFDN0IsZUFBS1Qsa0JBQUwsR0FBMEJPLFdBQTFCO0FBQ0QsU0FGRCxNQUVPO0FBQ0wsZ0JBQU1HLEtBQUssQ0FDVCwrREFEUyxDQUFYO0FBR0Q7QUFDRjs7QUFFRCxVQUFJLEtBQUtiLElBQUwsQ0FBVVMsUUFBVixDQUFtQixZQUFuQixDQUFKLEVBQXNDO0FBQ3BDLFlBQU1LLGFBQXFCLEdBQUcsS0FBS2QsSUFBTCxDQUM1QixLQUFLQSxJQUFMLENBQVVXLE9BQVYsQ0FBa0IsWUFBbEIsSUFBa0MsQ0FETixDQUE5Qjs7QUFHQSxZQUFJRyxhQUFhLEtBQUtGLFNBQXRCLEVBQWlDO0FBQy9CLGVBQUtYLFFBQUwsR0FBZ0JjLGNBQUtDLE9BQUwsQ0FBYUYsYUFBYixDQUFoQjtBQUNELFNBRkQsTUFFTztBQUNMLGdCQUFNRCxLQUFLLENBQ1QsaUVBRFMsQ0FBWDtBQUdEO0FBQ0Y7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBhdGhzIH0gZnJvbSAnLi8uLi9nbG9iYWxzJ1xyXG5pbXBvcnQgeyBDb25maWdPYmplY3QsIENvbmZpZ3VyYXRvciB9IGZyb20gJy4vLi4vQ29uZmlndXJhdG9yJ1xyXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xyXG5cclxuY29uc3QgZ2xvYmFsUGF0aHM6IFBhdGhzID0gbmV3IFBhdGhzKClcclxuXHJcbmludGVyZmFjZSBJUGFyc2VyIHtcclxuICBhcmdzOiBBcnJheTxzdHJpbmc+XHJcbiAgcm9vdFBhdGg6IHN0cmluZ1xyXG4gIGNvbmZpZ01vZGlmaWVyUGF0aDogc3RyaW5nXHJcbiAgY29uZmlnOiBDb25maWdPYmplY3RcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFBhcnNlciBpbXBsZW1lbnRzIElQYXJzZXIge1xyXG4gIGFyZ3M6IEFycmF5PHN0cmluZz5cclxuICByb290UGF0aDogc3RyaW5nXHJcbiAgY29uZmlnTW9kaWZpZXJQYXRoOiBzdHJpbmdcclxuICBjb25maWc6IENvbmZpZ09iamVjdFxyXG5cclxuICBjb25zdHJ1Y3RvcihhcmdzOiBBcnJheTxzdHJpbmc+ID0gW10pIHtcclxuICAgIHRoaXMuYXJncyA9IGFyZ3NcclxuICAgIHRoaXMucm9vdFBhdGggPSBnbG9iYWxQYXRocy5jYWxsaW5nRGlyXHJcbiAgICB0aGlzLmNvbmZpZ01vZGlmaWVyUGF0aCA9IGdsb2JhbFBhdGhzLnByb2plY3RDb25maWdTdWJQYXRoXHJcbiAgICB0aGlzLnNldENvbmZpZ3VyYXRpb24oKVxyXG4gICAgdGhpcy5jb25maWcgPSBuZXcgQ29uZmlndXJhdG9yKHtcclxuICAgICAgcm9vdFBhdGg6IHRoaXMucm9vdFBhdGgsXHJcbiAgICAgIHByb2plY3RDb25maWdTdWJQYXRoOiB0aGlzLmNvbmZpZ01vZGlmaWVyUGF0aFxyXG4gICAgfSkucmVzdWx0XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldENvbmZpZ3VyYXRpb24oKSB7XHJcbiAgICBpZiAodGhpcy5hcmdzLmluY2x1ZGVzKCctLWNvbmZpZycpKSB7XHJcbiAgICAgIGNvbnN0IGNvbmZpZ1ZhbHVlOiBzdHJpbmcgPSB0aGlzLmFyZ3NbdGhpcy5hcmdzLmluZGV4T2YoJy0tY29uZmlnJykgKyAxXVxyXG4gICAgICBpZiAoY29uZmlnVmFsdWUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHRoaXMuY29uZmlnTW9kaWZpZXJQYXRoID0gY29uZmlnVmFsdWVcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aHJvdyBFcnJvcihcclxuICAgICAgICAgICdZb3Ugc3VwcGxpZWQgdGhlIGAtLWNvbmZpZ2AgZmxhZyBidXQgZGlkIG5vdCBwcm92aWRlIGEgdmFsdWUuJ1xyXG4gICAgICAgIClcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmFyZ3MuaW5jbHVkZXMoJy0tcm9vdFBhdGgnKSkge1xyXG4gICAgICBjb25zdCByb290UGF0aFZhbHVlOiBzdHJpbmcgPSB0aGlzLmFyZ3NbXHJcbiAgICAgICAgdGhpcy5hcmdzLmluZGV4T2YoJy0tcm9vdFBhdGgnKSArIDFcclxuICAgICAgXVxyXG4gICAgICBpZiAocm9vdFBhdGhWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgdGhpcy5yb290UGF0aCA9IHBhdGgucmVzb2x2ZShyb290UGF0aFZhbHVlKVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRocm93IEVycm9yKFxyXG4gICAgICAgICAgJ1lvdSBzdXBwbGllZCB0aGUgYC0tcm9vdFBhdGhgIGZsYWcgYnV0IGRpZCBub3QgcHJvdmlkZSBhIHZhbHVlLidcclxuICAgICAgICApXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19