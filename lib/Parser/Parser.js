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

      if (/^[a-zA-Z0-9]$/.test(firstArg) && !toolMatchers.includes(firstArg) || tools.length > 1 && firstArg === undefined) {
        throw Error("You need to provide a valid tool matcher. Valid tool matchers include: ".concat(toolMatchers.join('\n')));
      }

      return tools[toolMatchers.indexOf(firstArg)] || tools[0];
    }
  }]);

  return Parser;
}();

exports.Parser = Parser;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9QYXJzZXIvUGFyc2VyLnRzIl0sIm5hbWVzIjpbImdsb2JhbFBhdGhzIiwiUGF0aHMiLCJQYXJzZXIiLCJhcmdzIiwicm9vdFBhdGgiLCJjYWxsaW5nRGlyIiwiY29uZmlnTW9kaWZpZXJQYXRoIiwicHJvamVjdENvbmZpZ1N1YlBhdGgiLCJzZXRDb25maWd1cmF0aW9uUGF0aCIsImNvbmZpZyIsInNldENvbmZpZyIsInRvb2xUb1VzZSIsInNldFRvb2wiLCJzZXRJZlByZXNlbnQiLCJycCIsInBhdGgiLCJyZXNvbHZlIiwiZmxhZyIsInNldFZhbCIsImNhbGxiYWNrIiwiaSIsImluY2x1ZGVzIiwidmFsIiwiaW5kZXhPZiIsInVuZGVmaW5lZCIsIkVycm9yIiwiQ29uZmlndXJhdG9yIiwicmVzdWx0IiwidG9vbHMiLCJ0b29sTWF0Y2hlcnMiLCJtYXAiLCJ0IiwibWF0Y2hlciIsImZpcnN0QXJnIiwidGVzdCIsImxlbmd0aCIsImpvaW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFdBQWtCLEdBQUcsSUFBSUMsY0FBSixFQUEzQjs7SUFVYUMsTTs7O0FBT1gsb0JBQXNDO0FBQUEsUUFBMUJDLElBQTBCLHVFQUFKLEVBQUk7O0FBQUE7O0FBQ3BDLFNBQUtBLElBQUwsR0FBWUEsSUFBWjtBQUNBLFNBQUtDLFFBQUwsR0FBZ0JKLFdBQVcsQ0FBQ0ssVUFBNUI7QUFDQSxTQUFLQyxrQkFBTCxHQUEwQk4sV0FBVyxDQUFDTyxvQkFBdEM7QUFDQSxTQUFLQyxvQkFBTDtBQUNBLFNBQUtDLE1BQUwsR0FBYyxLQUFLQyxTQUFMLEVBQWQ7QUFDQSxTQUFLQyxTQUFMLEdBQWlCLEtBQUtDLE9BQUwsRUFBakI7QUFDRDs7OzsyQ0FFOEI7QUFDN0IsV0FBS0MsWUFBTCxDQUFrQixVQUFsQixFQUE4QixvQkFBOUI7QUFDQSxXQUFLQSxZQUFMLENBQWtCLFlBQWxCLEVBQWdDLFVBQWhDLEVBQTRDLFVBQUFDLEVBQUUsRUFBSTtBQUNoRCxlQUFPQyxjQUFLQyxPQUFMLENBQWFGLEVBQWIsQ0FBUDtBQUNELE9BRkQ7QUFHRDs7O2lDQUdDRyxJLEVBQ0FDLE0sRUFJQTtBQUFBLFVBSEFDLFFBR0EsdUVBSGtDLFVBQUFDLENBQUMsRUFBSTtBQUNyQyxlQUFPQSxDQUFQO0FBQ0QsT0FDRDs7QUFDQSxVQUFJLEtBQUtqQixJQUFMLENBQVVrQixRQUFWLENBQW1CSixJQUFuQixDQUFKLEVBQThCO0FBQzVCLFlBQU1LLEdBQVcsR0FBRyxLQUFLbkIsSUFBTCxDQUFVLEtBQUtBLElBQUwsQ0FBVW9CLE9BQVYsQ0FBa0JOLElBQWxCLElBQTBCLENBQXBDLENBQXBCOztBQUVBLFlBQUlLLEdBQUcsS0FBS0UsU0FBWixFQUF1QjtBQUNyQixlQUFLTixNQUFMLElBQWVDLFFBQVEsQ0FBQ0csR0FBRCxDQUF2QjtBQUNELFNBRkQsTUFFTztBQUNMLGdCQUFNRyxLQUFLLDRCQUNXUixJQURYLHdDQUFYO0FBR0Q7QUFDRjtBQUNGOzs7Z0NBRWlDO0FBQ2hDLGFBQU8sSUFBSVMsMEJBQUosQ0FBaUI7QUFDdEJ0QixRQUFBQSxRQUFRLEVBQUUsS0FBS0EsUUFETztBQUV0QkcsUUFBQUEsb0JBQW9CLEVBQUUsS0FBS0Q7QUFGTCxPQUFqQixFQUdKcUIsTUFISDtBQUlEOzs7OEJBRTZCO0FBQzVCLFVBQU1DLEtBQXdCLEdBQUcsS0FBS25CLE1BQUwsQ0FBWW1CLEtBQTdDO0FBQ0EsVUFBTUMsWUFBMkIsR0FBR0QsS0FBSyxDQUFDRSxHQUFOLENBQVUsVUFBQUMsQ0FBQyxFQUFJO0FBQ2pELGVBQU9BLENBQUMsQ0FBQ0MsT0FBVDtBQUNELE9BRm1DLENBQXBDO0FBR0EsVUFBTUMsUUFBZ0IsR0FBRyxLQUFLOUIsSUFBTCxDQUFVLENBQVYsQ0FBekI7O0FBRUEsVUFDRyxnQkFBZ0IrQixJQUFoQixDQUFxQkQsUUFBckIsS0FBa0MsQ0FBQ0osWUFBWSxDQUFDUixRQUFiLENBQXNCWSxRQUF0QixDQUFwQyxJQUNDTCxLQUFLLENBQUNPLE1BQU4sR0FBZSxDQUFmLElBQW9CRixRQUFRLEtBQUtULFNBRnBDLEVBR0U7QUFDQSxjQUFNQyxLQUFLLGtGQUNpRUksWUFBWSxDQUFDTyxJQUFiLENBQ3hFLElBRHdFLENBRGpFLEVBQVg7QUFLRDs7QUFFRCxhQUFPUixLQUFLLENBQUNDLFlBQVksQ0FBQ04sT0FBYixDQUFxQlUsUUFBckIsQ0FBRCxDQUFMLElBQXlDTCxLQUFLLENBQUMsQ0FBRCxDQUFyRDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGF0aHMgfSBmcm9tICcuLy4uL2dsb2JhbHMnXG5pbXBvcnQgeyBUb29sT2JqZWN0LCBDb25maWdPYmplY3QsIENvbmZpZ3VyYXRvciB9IGZyb20gJy4vLi4vQ29uZmlndXJhdG9yJ1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCdcblxuY29uc3QgZ2xvYmFsUGF0aHM6IFBhdGhzID0gbmV3IFBhdGhzKClcblxuaW50ZXJmYWNlIElQYXJzZXIge1xuICBhcmdzOiBBcnJheTxzdHJpbmc+XG4gIHJvb3RQYXRoOiBzdHJpbmdcbiAgY29uZmlnTW9kaWZpZXJQYXRoOiBzdHJpbmdcbiAgY29uZmlnOiBDb25maWdPYmplY3RcbiAgdG9vbFRvVXNlOiBUb29sT2JqZWN0XG59XG5cbmV4cG9ydCBjbGFzcyBQYXJzZXIgaW1wbGVtZW50cyBJUGFyc2VyIHtcbiAgYXJnczogQXJyYXk8c3RyaW5nPlxuICByb290UGF0aDogc3RyaW5nXG4gIGNvbmZpZ01vZGlmaWVyUGF0aDogc3RyaW5nXG4gIGNvbmZpZzogQ29uZmlnT2JqZWN0XG4gIHRvb2xUb1VzZTogVG9vbE9iamVjdFxuXG4gIGNvbnN0cnVjdG9yKGFyZ3M6IEFycmF5PHN0cmluZz4gPSBbXSkge1xuICAgIHRoaXMuYXJncyA9IGFyZ3NcbiAgICB0aGlzLnJvb3RQYXRoID0gZ2xvYmFsUGF0aHMuY2FsbGluZ0RpclxuICAgIHRoaXMuY29uZmlnTW9kaWZpZXJQYXRoID0gZ2xvYmFsUGF0aHMucHJvamVjdENvbmZpZ1N1YlBhdGhcbiAgICB0aGlzLnNldENvbmZpZ3VyYXRpb25QYXRoKClcbiAgICB0aGlzLmNvbmZpZyA9IHRoaXMuc2V0Q29uZmlnKClcbiAgICB0aGlzLnRvb2xUb1VzZSA9IHRoaXMuc2V0VG9vbCgpXG4gIH1cblxuICBwcml2YXRlIHNldENvbmZpZ3VyYXRpb25QYXRoKCkge1xuICAgIHRoaXMuc2V0SWZQcmVzZW50KCctLWNvbmZpZycsICdjb25maWdNb2RpZmllclBhdGgnKVxuICAgIHRoaXMuc2V0SWZQcmVzZW50KCctLXJvb3RQYXRoJywgJ3Jvb3RQYXRoJywgcnAgPT4ge1xuICAgICAgcmV0dXJuIHBhdGgucmVzb2x2ZShycClcbiAgICB9KVxuICB9XG5cbiAgcHJpdmF0ZSBzZXRJZlByZXNlbnQoXG4gICAgZmxhZzogc3RyaW5nLFxuICAgIHNldFZhbDogJ3Jvb3RQYXRoJyB8ICdjb25maWdNb2RpZmllclBhdGgnLFxuICAgIGNhbGxiYWNrOiAoaTogc3RyaW5nKSA9PiBzdHJpbmcgPSBpID0+IHtcbiAgICAgIHJldHVybiBpXG4gICAgfVxuICApIHtcbiAgICBpZiAodGhpcy5hcmdzLmluY2x1ZGVzKGZsYWcpKSB7XG4gICAgICBjb25zdCB2YWw6IHN0cmluZyA9IHRoaXMuYXJnc1t0aGlzLmFyZ3MuaW5kZXhPZihmbGFnKSArIDFdXG5cbiAgICAgIGlmICh2YWwgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzW3NldFZhbF0gPSBjYWxsYmFjayh2YWwpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBFcnJvcihcbiAgICAgICAgICBgWW91IHN1cHBsaWVkIHRoZSAke2ZsYWd9IGZsYWcgYnV0IGRpZCBub3QgcHJvdmlkZSBhIHZhbHVlLmBcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2V0Q29uZmlnKCk6IENvbmZpZ09iamVjdCB7XG4gICAgcmV0dXJuIG5ldyBDb25maWd1cmF0b3Ioe1xuICAgICAgcm9vdFBhdGg6IHRoaXMucm9vdFBhdGgsXG4gICAgICBwcm9qZWN0Q29uZmlnU3ViUGF0aDogdGhpcy5jb25maWdNb2RpZmllclBhdGhcbiAgICB9KS5yZXN1bHRcbiAgfVxuXG4gIHByaXZhdGUgc2V0VG9vbCgpOiBUb29sT2JqZWN0IHtcbiAgICBjb25zdCB0b29sczogQXJyYXk8VG9vbE9iamVjdD4gPSB0aGlzLmNvbmZpZy50b29sc1xuICAgIGNvbnN0IHRvb2xNYXRjaGVyczogQXJyYXk8c3RyaW5nPiA9IHRvb2xzLm1hcCh0ID0+IHtcbiAgICAgIHJldHVybiB0Lm1hdGNoZXJcbiAgICB9KVxuICAgIGNvbnN0IGZpcnN0QXJnOiBzdHJpbmcgPSB0aGlzLmFyZ3NbMF1cblxuICAgIGlmIChcbiAgICAgICgvXlthLXpBLVowLTldJC8udGVzdChmaXJzdEFyZykgJiYgIXRvb2xNYXRjaGVycy5pbmNsdWRlcyhmaXJzdEFyZykpIHx8XG4gICAgICAodG9vbHMubGVuZ3RoID4gMSAmJiBmaXJzdEFyZyA9PT0gdW5kZWZpbmVkKVxuICAgICkge1xuICAgICAgdGhyb3cgRXJyb3IoXG4gICAgICAgIGBZb3UgbmVlZCB0byBwcm92aWRlIGEgdmFsaWQgdG9vbCBtYXRjaGVyLiBWYWxpZCB0b29sIG1hdGNoZXJzIGluY2x1ZGU6ICR7dG9vbE1hdGNoZXJzLmpvaW4oXG4gICAgICAgICAgJ1xcbidcbiAgICAgICAgKX1gXG4gICAgICApXG4gICAgfVxuXG4gICAgcmV0dXJuIHRvb2xzW3Rvb2xNYXRjaGVycy5pbmRleE9mKGZpcnN0QXJnKV0gfHwgdG9vbHNbMF1cbiAgfVxufVxuIl19