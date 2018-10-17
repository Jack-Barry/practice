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
    this.setConfigurationPath();
    this.config = this.setConfig();
    this.toolToUse = this.setTool();
  }

  _createClass(Parser, [{
    key: "setConfigurationPath",
    value: function setConfigurationPath() {
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
  }, {
    key: "setConfig",
    value: function setConfig() {
      return new _Configurator.Configurator({
        rootPath: this.rootPath,
        projectConfigSubPath: this.configModifierPath
      }).result;
    }
  }, {
    key: "setTool",
    value: function setTool() {
      var tools = this.config.tools;
      var toolMatchers = tools.map(function (t) {
        return t.matcher;
      });
      var firstArg = this.args[0];

      if (/^[a-zA-Z0-9]$/.test(firstArg) && !toolMatchers.includes(firstArg)) {
        throw Error('You need to include a valid tool matcher. Choose from: \n' + toolMatchers.join(', '));
      }

      return this.config.tools[0];
    }
  }]);

  return Parser;
}();

exports.Parser = Parser;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9QYXJzZXIvUGFyc2VyLnRzIl0sIm5hbWVzIjpbImdsb2JhbFBhdGhzIiwiUGF0aHMiLCJQYXJzZXIiLCJhcmdzIiwicm9vdFBhdGgiLCJjYWxsaW5nRGlyIiwiY29uZmlnTW9kaWZpZXJQYXRoIiwicHJvamVjdENvbmZpZ1N1YlBhdGgiLCJzZXRDb25maWd1cmF0aW9uUGF0aCIsImNvbmZpZyIsInNldENvbmZpZyIsInRvb2xUb1VzZSIsInNldFRvb2wiLCJzZXRJZlByZXNlbnQiLCJycCIsInBhdGgiLCJyZXNvbHZlIiwiZmxhZyIsInNldFZhbCIsImNhbGxiYWNrIiwiaSIsImluY2x1ZGVzIiwidmFsIiwiaW5kZXhPZiIsInVuZGVmaW5lZCIsIkVycm9yIiwiQ29uZmlndXJhdG9yIiwicmVzdWx0IiwidG9vbHMiLCJ0b29sTWF0Y2hlcnMiLCJtYXAiLCJ0IiwibWF0Y2hlciIsImZpcnN0QXJnIiwidGVzdCIsImpvaW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFdBQWtCLEdBQUcsSUFBSUMsY0FBSixFQUEzQjs7SUFVYUMsTTs7O0FBT1gsb0JBQXNDO0FBQUEsUUFBMUJDLElBQTBCLHVFQUFKLEVBQUk7O0FBQUE7O0FBQ3BDLFNBQUtBLElBQUwsR0FBWUEsSUFBWjtBQUNBLFNBQUtDLFFBQUwsR0FBZ0JKLFdBQVcsQ0FBQ0ssVUFBNUI7QUFDQSxTQUFLQyxrQkFBTCxHQUEwQk4sV0FBVyxDQUFDTyxvQkFBdEM7QUFDQSxTQUFLQyxvQkFBTDtBQUNBLFNBQUtDLE1BQUwsR0FBYyxLQUFLQyxTQUFMLEVBQWQ7QUFDQSxTQUFLQyxTQUFMLEdBQWlCLEtBQUtDLE9BQUwsRUFBakI7QUFDRDs7OzsyQ0FFOEI7QUFDN0IsV0FBS0MsWUFBTCxDQUFrQixVQUFsQixFQUE4QixvQkFBOUI7QUFDQSxXQUFLQSxZQUFMLENBQWtCLFlBQWxCLEVBQWdDLFVBQWhDLEVBQTRDLFVBQUFDLEVBQUUsRUFBSTtBQUNoRCxlQUFPQyxjQUFLQyxPQUFMLENBQWFGLEVBQWIsQ0FBUDtBQUNELE9BRkQ7QUFHRDs7O2lDQUdDRyxJLEVBQ0FDLE0sRUFJQTtBQUFBLFVBSEFDLFFBR0EsdUVBSGtDLFVBQUFDLENBQUMsRUFBSTtBQUNyQyxlQUFPQSxDQUFQO0FBQ0QsT0FDRDs7QUFDQSxVQUFJLEtBQUtqQixJQUFMLENBQVVrQixRQUFWLENBQW1CSixJQUFuQixDQUFKLEVBQThCO0FBQzVCLFlBQU1LLEdBQVcsR0FBRyxLQUFLbkIsSUFBTCxDQUFVLEtBQUtBLElBQUwsQ0FBVW9CLE9BQVYsQ0FBa0JOLElBQWxCLElBQTBCLENBQXBDLENBQXBCOztBQUVBLFlBQUlLLEdBQUcsS0FBS0UsU0FBWixFQUF1QjtBQUNyQixlQUFLTixNQUFMLElBQWVDLFFBQVEsQ0FBQ0csR0FBRCxDQUF2QjtBQUNELFNBRkQsTUFFTztBQUNMLGdCQUFNRyxLQUFLLDRCQUNXUixJQURYLHdDQUFYO0FBR0Q7QUFDRjtBQUNGOzs7Z0NBRWlDO0FBQ2hDLGFBQU8sSUFBSVMsMEJBQUosQ0FBaUI7QUFDdEJ0QixRQUFBQSxRQUFRLEVBQUUsS0FBS0EsUUFETztBQUV0QkcsUUFBQUEsb0JBQW9CLEVBQUUsS0FBS0Q7QUFGTCxPQUFqQixFQUdKcUIsTUFISDtBQUlEOzs7OEJBRTZCO0FBQzVCLFVBQU1DLEtBQUssR0FBRyxLQUFLbkIsTUFBTCxDQUFZbUIsS0FBMUI7QUFDQSxVQUFNQyxZQUEyQixHQUFHRCxLQUFLLENBQUNFLEdBQU4sQ0FBVSxVQUFBQyxDQUFDLEVBQUk7QUFDakQsZUFBT0EsQ0FBQyxDQUFDQyxPQUFUO0FBQ0QsT0FGbUMsQ0FBcEM7QUFHQSxVQUFNQyxRQUFRLEdBQUcsS0FBSzlCLElBQUwsQ0FBVSxDQUFWLENBQWpCOztBQUVBLFVBQUksZ0JBQWdCK0IsSUFBaEIsQ0FBcUJELFFBQXJCLEtBQWtDLENBQUNKLFlBQVksQ0FBQ1IsUUFBYixDQUFzQlksUUFBdEIsQ0FBdkMsRUFBd0U7QUFDdEUsY0FBTVIsS0FBSyxDQUNULDhEQUNFSSxZQUFZLENBQUNNLElBQWIsQ0FBa0IsSUFBbEIsQ0FGTyxDQUFYO0FBSUQ7O0FBRUQsYUFBTyxLQUFLMUIsTUFBTCxDQUFZbUIsS0FBWixDQUFrQixDQUFsQixDQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQYXRocyB9IGZyb20gJy4vLi4vZ2xvYmFscydcclxuaW1wb3J0IHsgVG9vbE9iamVjdCwgQ29uZmlnT2JqZWN0LCBDb25maWd1cmF0b3IgfSBmcm9tICcuLy4uL0NvbmZpZ3VyYXRvcidcclxuaW1wb3J0IHBhdGggZnJvbSAncGF0aCdcclxuXHJcbmNvbnN0IGdsb2JhbFBhdGhzOiBQYXRocyA9IG5ldyBQYXRocygpXHJcblxyXG5pbnRlcmZhY2UgSVBhcnNlciB7XHJcbiAgYXJnczogQXJyYXk8c3RyaW5nPlxyXG4gIHJvb3RQYXRoOiBzdHJpbmdcclxuICBjb25maWdNb2RpZmllclBhdGg6IHN0cmluZ1xyXG4gIGNvbmZpZzogQ29uZmlnT2JqZWN0XHJcbiAgdG9vbFRvVXNlOiBUb29sT2JqZWN0XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBQYXJzZXIgaW1wbGVtZW50cyBJUGFyc2VyIHtcclxuICBhcmdzOiBBcnJheTxzdHJpbmc+XHJcbiAgcm9vdFBhdGg6IHN0cmluZ1xyXG4gIGNvbmZpZ01vZGlmaWVyUGF0aDogc3RyaW5nXHJcbiAgY29uZmlnOiBDb25maWdPYmplY3RcclxuICB0b29sVG9Vc2U6IFRvb2xPYmplY3RcclxuXHJcbiAgY29uc3RydWN0b3IoYXJnczogQXJyYXk8c3RyaW5nPiA9IFtdKSB7XHJcbiAgICB0aGlzLmFyZ3MgPSBhcmdzXHJcbiAgICB0aGlzLnJvb3RQYXRoID0gZ2xvYmFsUGF0aHMuY2FsbGluZ0RpclxyXG4gICAgdGhpcy5jb25maWdNb2RpZmllclBhdGggPSBnbG9iYWxQYXRocy5wcm9qZWN0Q29uZmlnU3ViUGF0aFxyXG4gICAgdGhpcy5zZXRDb25maWd1cmF0aW9uUGF0aCgpXHJcbiAgICB0aGlzLmNvbmZpZyA9IHRoaXMuc2V0Q29uZmlnKClcclxuICAgIHRoaXMudG9vbFRvVXNlID0gdGhpcy5zZXRUb29sKClcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0Q29uZmlndXJhdGlvblBhdGgoKSB7XHJcbiAgICB0aGlzLnNldElmUHJlc2VudCgnLS1jb25maWcnLCAnY29uZmlnTW9kaWZpZXJQYXRoJylcclxuICAgIHRoaXMuc2V0SWZQcmVzZW50KCctLXJvb3RQYXRoJywgJ3Jvb3RQYXRoJywgcnAgPT4ge1xyXG4gICAgICByZXR1cm4gcGF0aC5yZXNvbHZlKHJwKVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0SWZQcmVzZW50KFxyXG4gICAgZmxhZzogc3RyaW5nLFxyXG4gICAgc2V0VmFsOiAncm9vdFBhdGgnIHwgJ2NvbmZpZ01vZGlmaWVyUGF0aCcsXHJcbiAgICBjYWxsYmFjazogKGk6IHN0cmluZykgPT4gc3RyaW5nID0gaSA9PiB7XHJcbiAgICAgIHJldHVybiBpXHJcbiAgICB9XHJcbiAgKSB7XHJcbiAgICBpZiAodGhpcy5hcmdzLmluY2x1ZGVzKGZsYWcpKSB7XHJcbiAgICAgIGNvbnN0IHZhbDogc3RyaW5nID0gdGhpcy5hcmdzW3RoaXMuYXJncy5pbmRleE9mKGZsYWcpICsgMV1cclxuXHJcbiAgICAgIGlmICh2YWwgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHRoaXNbc2V0VmFsXSA9IGNhbGxiYWNrKHZhbClcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aHJvdyBFcnJvcihcclxuICAgICAgICAgIGBZb3Ugc3VwcGxpZWQgdGhlICR7ZmxhZ30gZmxhZyBidXQgZGlkIG5vdCBwcm92aWRlIGEgdmFsdWUuYFxyXG4gICAgICAgIClcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRDb25maWcoKTogQ29uZmlnT2JqZWN0IHtcclxuICAgIHJldHVybiBuZXcgQ29uZmlndXJhdG9yKHtcclxuICAgICAgcm9vdFBhdGg6IHRoaXMucm9vdFBhdGgsXHJcbiAgICAgIHByb2plY3RDb25maWdTdWJQYXRoOiB0aGlzLmNvbmZpZ01vZGlmaWVyUGF0aFxyXG4gICAgfSkucmVzdWx0XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldFRvb2woKTogVG9vbE9iamVjdCB7XHJcbiAgICBjb25zdCB0b29scyA9IHRoaXMuY29uZmlnLnRvb2xzXHJcbiAgICBjb25zdCB0b29sTWF0Y2hlcnM6IEFycmF5PHN0cmluZz4gPSB0b29scy5tYXAodCA9PiB7XHJcbiAgICAgIHJldHVybiB0Lm1hdGNoZXJcclxuICAgIH0pXHJcbiAgICBjb25zdCBmaXJzdEFyZyA9IHRoaXMuYXJnc1swXVxyXG5cclxuICAgIGlmICgvXlthLXpBLVowLTldJC8udGVzdChmaXJzdEFyZykgJiYgIXRvb2xNYXRjaGVycy5pbmNsdWRlcyhmaXJzdEFyZykpIHtcclxuICAgICAgdGhyb3cgRXJyb3IoXHJcbiAgICAgICAgJ1lvdSBuZWVkIHRvIGluY2x1ZGUgYSB2YWxpZCB0b29sIG1hdGNoZXIuIENob29zZSBmcm9tOiBcXG4nICtcclxuICAgICAgICAgIHRvb2xNYXRjaGVycy5qb2luKCcsICcpXHJcbiAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5jb25maWcudG9vbHNbMF1cclxuICB9XHJcbn1cclxuIl19