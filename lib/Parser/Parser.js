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
      this.setIfPresent('--config', 'configModifierPath');
      this.setIfPresent('--rootPath', 'rootPath', function (rp) {
        return _path.default.resolve(rp);
      });
    }
  }, {
    key: "setIfPresent",
    value: function setIfPresent(flag, setVal) {
      var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (i) {
        return i;
      };

      if (this.args.includes(flag)) {
        var val = this.args[this.args.indexOf(flag) + 1];

        if (val !== undefined) {
          this[setVal] = callback(val);
        } else {
          throw Error("You supplied the ".concat(flag, " flag but did not provide a value."));
        }
      }
    }
  }]);

  return Parser;
}();

exports.Parser = Parser;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9QYXJzZXIvUGFyc2VyLnRzIl0sIm5hbWVzIjpbImdsb2JhbFBhdGhzIiwiUGF0aHMiLCJQYXJzZXIiLCJhcmdzIiwicm9vdFBhdGgiLCJjYWxsaW5nRGlyIiwiY29uZmlnTW9kaWZpZXJQYXRoIiwicHJvamVjdENvbmZpZ1N1YlBhdGgiLCJzZXRDb25maWd1cmF0aW9uIiwiY29uZmlnIiwiQ29uZmlndXJhdG9yIiwicmVzdWx0Iiwic2V0SWZQcmVzZW50IiwicnAiLCJwYXRoIiwicmVzb2x2ZSIsImZsYWciLCJzZXRWYWwiLCJjYWxsYmFjayIsImkiLCJpbmNsdWRlcyIsInZhbCIsImluZGV4T2YiLCJ1bmRlZmluZWQiLCJFcnJvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsV0FBa0IsR0FBRyxJQUFJQyxjQUFKLEVBQTNCOztJQVNhQyxNOzs7QUFNWCxvQkFBc0M7QUFBQSxRQUExQkMsSUFBMEIsdUVBQUosRUFBSTs7QUFBQTs7QUFDcEMsU0FBS0EsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsU0FBS0MsUUFBTCxHQUFnQkosV0FBVyxDQUFDSyxVQUE1QjtBQUNBLFNBQUtDLGtCQUFMLEdBQTBCTixXQUFXLENBQUNPLG9CQUF0QztBQUNBLFNBQUtDLGdCQUFMO0FBQ0EsU0FBS0MsTUFBTCxHQUFjLElBQUlDLDBCQUFKLENBQWlCO0FBQzdCTixNQUFBQSxRQUFRLEVBQUUsS0FBS0EsUUFEYztBQUU3QkcsTUFBQUEsb0JBQW9CLEVBQUUsS0FBS0Q7QUFGRSxLQUFqQixFQUdYSyxNQUhIO0FBSUQ7Ozs7dUNBRTBCO0FBQ3pCLFdBQUtDLFlBQUwsQ0FBa0IsVUFBbEIsRUFBOEIsb0JBQTlCO0FBQ0EsV0FBS0EsWUFBTCxDQUFrQixZQUFsQixFQUFnQyxVQUFoQyxFQUE0QyxVQUFBQyxFQUFFLEVBQUk7QUFDaEQsZUFBT0MsY0FBS0MsT0FBTCxDQUFhRixFQUFiLENBQVA7QUFDRCxPQUZEO0FBR0Q7OztpQ0FHQ0csSSxFQUNBQyxNLEVBSUE7QUFBQSxVQUhBQyxRQUdBLHVFQUhrQyxVQUFBQyxDQUFDLEVBQUk7QUFDckMsZUFBT0EsQ0FBUDtBQUNELE9BQ0Q7O0FBQ0EsVUFBSSxLQUFLaEIsSUFBTCxDQUFVaUIsUUFBVixDQUFtQkosSUFBbkIsQ0FBSixFQUE4QjtBQUM1QixZQUFNSyxHQUFXLEdBQUcsS0FBS2xCLElBQUwsQ0FBVSxLQUFLQSxJQUFMLENBQVVtQixPQUFWLENBQWtCTixJQUFsQixJQUEwQixDQUFwQyxDQUFwQjs7QUFFQSxZQUFJSyxHQUFHLEtBQUtFLFNBQVosRUFBdUI7QUFDckIsZUFBS04sTUFBTCxJQUFlQyxRQUFRLENBQUNHLEdBQUQsQ0FBdkI7QUFDRCxTQUZELE1BRU87QUFDTCxnQkFBTUcsS0FBSyw0QkFDV1IsSUFEWCx3Q0FBWDtBQUdEO0FBQ0Y7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBhdGhzIH0gZnJvbSAnLi8uLi9nbG9iYWxzJ1xyXG5pbXBvcnQgeyBDb25maWdPYmplY3QsIENvbmZpZ3VyYXRvciB9IGZyb20gJy4vLi4vQ29uZmlndXJhdG9yJ1xyXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xyXG5cclxuY29uc3QgZ2xvYmFsUGF0aHM6IFBhdGhzID0gbmV3IFBhdGhzKClcclxuXHJcbmludGVyZmFjZSBJUGFyc2VyIHtcclxuICBhcmdzOiBBcnJheTxzdHJpbmc+XHJcbiAgcm9vdFBhdGg6IHN0cmluZ1xyXG4gIGNvbmZpZ01vZGlmaWVyUGF0aDogc3RyaW5nXHJcbiAgY29uZmlnOiBDb25maWdPYmplY3RcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFBhcnNlciBpbXBsZW1lbnRzIElQYXJzZXIge1xyXG4gIGFyZ3M6IEFycmF5PHN0cmluZz5cclxuICByb290UGF0aDogc3RyaW5nXHJcbiAgY29uZmlnTW9kaWZpZXJQYXRoOiBzdHJpbmdcclxuICBjb25maWc6IENvbmZpZ09iamVjdFxyXG5cclxuICBjb25zdHJ1Y3RvcihhcmdzOiBBcnJheTxzdHJpbmc+ID0gW10pIHtcclxuICAgIHRoaXMuYXJncyA9IGFyZ3NcclxuICAgIHRoaXMucm9vdFBhdGggPSBnbG9iYWxQYXRocy5jYWxsaW5nRGlyXHJcbiAgICB0aGlzLmNvbmZpZ01vZGlmaWVyUGF0aCA9IGdsb2JhbFBhdGhzLnByb2plY3RDb25maWdTdWJQYXRoXHJcbiAgICB0aGlzLnNldENvbmZpZ3VyYXRpb24oKVxyXG4gICAgdGhpcy5jb25maWcgPSBuZXcgQ29uZmlndXJhdG9yKHtcclxuICAgICAgcm9vdFBhdGg6IHRoaXMucm9vdFBhdGgsXHJcbiAgICAgIHByb2plY3RDb25maWdTdWJQYXRoOiB0aGlzLmNvbmZpZ01vZGlmaWVyUGF0aFxyXG4gICAgfSkucmVzdWx0XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldENvbmZpZ3VyYXRpb24oKSB7XHJcbiAgICB0aGlzLnNldElmUHJlc2VudCgnLS1jb25maWcnLCAnY29uZmlnTW9kaWZpZXJQYXRoJylcclxuICAgIHRoaXMuc2V0SWZQcmVzZW50KCctLXJvb3RQYXRoJywgJ3Jvb3RQYXRoJywgcnAgPT4ge1xyXG4gICAgICByZXR1cm4gcGF0aC5yZXNvbHZlKHJwKVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0SWZQcmVzZW50KFxyXG4gICAgZmxhZzogc3RyaW5nLFxyXG4gICAgc2V0VmFsOiAncm9vdFBhdGgnIHwgJ2NvbmZpZ01vZGlmaWVyUGF0aCcsXHJcbiAgICBjYWxsYmFjazogKGk6IHN0cmluZykgPT4gc3RyaW5nID0gaSA9PiB7XHJcbiAgICAgIHJldHVybiBpXHJcbiAgICB9XHJcbiAgKSB7XHJcbiAgICBpZiAodGhpcy5hcmdzLmluY2x1ZGVzKGZsYWcpKSB7XHJcbiAgICAgIGNvbnN0IHZhbDogc3RyaW5nID0gdGhpcy5hcmdzW3RoaXMuYXJncy5pbmRleE9mKGZsYWcpICsgMV1cclxuXHJcbiAgICAgIGlmICh2YWwgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHRoaXNbc2V0VmFsXSA9IGNhbGxiYWNrKHZhbClcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aHJvdyBFcnJvcihcclxuICAgICAgICAgIGBZb3Ugc3VwcGxpZWQgdGhlICR7ZmxhZ30gZmxhZyBidXQgZGlkIG5vdCBwcm92aWRlIGEgdmFsdWUuYFxyXG4gICAgICAgIClcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=