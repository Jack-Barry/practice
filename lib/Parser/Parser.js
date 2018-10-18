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
    this.output = this.setOutput();
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
  }, {
    key: "setOutput",
    value: function setOutput() {
      var output = {};

      if (this.toolToUse !== undefined && this.toolToUse.flags !== undefined) {
        var flags = this.toolToUse.flags;
        var _args = this.args;
        flags.forEach(function (f) {
          switch (f.type) {
            case 'boolean':
              output[f.name] = _args.some(function (a) {
                return (f.matchers || []).includes(a);
              });
              break;

            default:
              output[f.name] = null;
          }
        });
      }

      return output;
    }
  }]);

  return Parser;
}();

exports.Parser = Parser;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9QYXJzZXIvUGFyc2VyLnRzIl0sIm5hbWVzIjpbImdsb2JhbFBhdGhzIiwiUGF0aHMiLCJQYXJzZXIiLCJhcmdzIiwicm9vdFBhdGgiLCJjYWxsaW5nRGlyIiwiY29uZmlnTW9kaWZpZXJQYXRoIiwicHJvamVjdENvbmZpZ1N1YlBhdGgiLCJzZXRDb25maWd1cmF0aW9uUGF0aCIsImNvbmZpZyIsInNldENvbmZpZyIsInRvb2xUb1VzZSIsInNldFRvb2wiLCJvdXRwdXQiLCJzZXRPdXRwdXQiLCJzZXRJZlByZXNlbnQiLCJycCIsInBhdGgiLCJyZXNvbHZlIiwiZmxhZyIsInNldFZhbCIsImNhbGxiYWNrIiwiaSIsImluY2x1ZGVzIiwidmFsIiwiaW5kZXhPZiIsInVuZGVmaW5lZCIsIkVycm9yIiwiQ29uZmlndXJhdG9yIiwicmVzdWx0IiwidG9vbHMiLCJ0b29sTWF0Y2hlcnMiLCJtYXAiLCJ0IiwibWF0Y2hlciIsImZpcnN0QXJnIiwidGVzdCIsImxlbmd0aCIsImpvaW4iLCJmbGFncyIsImZvckVhY2giLCJmIiwidHlwZSIsIm5hbWUiLCJzb21lIiwiYSIsIm1hdGNoZXJzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBTUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxXQUFrQixHQUFHLElBQUlDLGNBQUosRUFBM0I7O0lBZWFDLE07OztBQVFYLG9CQUFzQztBQUFBLFFBQTFCQyxJQUEwQix1RUFBSixFQUFJOztBQUFBOztBQUNwQyxTQUFLQSxJQUFMLEdBQVlBLElBQVo7QUFDQSxTQUFLQyxRQUFMLEdBQWdCSixXQUFXLENBQUNLLFVBQTVCO0FBQ0EsU0FBS0Msa0JBQUwsR0FBMEJOLFdBQVcsQ0FBQ08sb0JBQXRDO0FBQ0EsU0FBS0Msb0JBQUw7QUFDQSxTQUFLQyxNQUFMLEdBQWMsS0FBS0MsU0FBTCxFQUFkO0FBQ0EsU0FBS0MsU0FBTCxHQUFpQixLQUFLQyxPQUFMLEVBQWpCO0FBQ0EsU0FBS0MsTUFBTCxHQUFjLEtB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RDs7QUFFRCxhQUFPOUIsTUFBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGF0aHMgfSBmcm9tICcuLy4uL2dsb2JhbHMnXHJcbmltcG9ydCB7XHJcbiAgVG9vbE9iamVjdCxcclxuICBGbGFnT2JqZWN0LFxyXG4gIENvbmZpZ09iamVjdCxcclxuICBDb25maWd1cmF0b3JcclxufSBmcm9tICcuLy4uL0NvbmZpZ3VyYXRvcidcclxuaW1wb3J0IHBhdGggZnJvbSAncGF0aCdcclxuXHJcbmNvbnN0IGdsb2JhbFBhdGhzOiBQYXRocyA9IG5ldyBQYXRocygpXHJcblxyXG5pbnRlcmZhY2UgSVBhcnNlciB7XHJcbiAgYXJnczogQXJyYXk8c3RyaW5nPlxyXG4gIHJvb3RQYXRoOiBzdHJpbmdcclxuICBjb25maWdNb2RpZmllclBhdGg6IHN0cmluZ1xyXG4gIGNvbmZpZzogQ29uZmlnT2JqZWN0XHJcbiAgdG9vbFRvVXNlOiBUb29sT2JqZWN0XHJcbiAgb3V0cHV0OiBJUGFyc2VyT3V0cHV0XHJcbn1cclxuXHJcbmludGVyZmFjZSBJUGFyc2VyT3V0cHV0IHtcclxuICBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBib29sZWFuIHwgQXJyYXk8c3RyaW5nPiB8IG51bGxcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFBhcnNlciBpbXBsZW1lbnRzIElQYXJzZXIge1xyXG4gIGFyZ3M6IEFycmF5PHN0cmluZz5cclxuICByb290UGF0aDogc3RyaW5nXHJcbiAgY29uZmlnTW9kaWZpZXJQYXRoOiBzdHJpbmdcclxuICBjb25maWc6IENvbmZpZ09iamVjdFxyXG4gIHRvb2xUb1VzZTogVG9vbE9iamVjdFxyXG4gIG91dHB1dDogSVBhcnNlck91dHB1dFxyXG5cclxuICBjb25zdHJ1Y3RvcihhcmdzOiBBcnJheTxzdHJpbmc+ID0gW10pIHtcclxuICAgIHRoaXMuYXJncyA9IGFyZ3NcclxuICAgIHRoaXMucm9vdFBhdGggPSBnbG9iYWxQYXRocy5jYWxsaW5nRGlyXHJcbiAgICB0aGlzLmNvbmZpZ01vZGlmaWVyUGF0aCA9IGdsb2JhbFBhdGhzLnByb2plY3RDb25maWdTdWJQYXRoXHJcbiAgICB0aGlzLnNldENvbmZpZ3VyYXRpb25QYXRoKClcclxuICAgIHRoaXMuY29uZmlnID0gdGhpcy5zZXRDb25maWcoKVxyXG4gICAgdGhpcy50b29sVG9Vc2UgPSB0aGlzLnNldFRvb2woKVxyXG4gICAgdGhpcy5vdXRwdXQgPSB0aGlzLnNldE91dHB1dCgpXHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldENvbmZpZ3VyYXRpb25QYXRoKCkge1xyXG4gICAgdGhpcy5zZXRJZlByZXNlbnQoJy0tY29uZmlnJywgJ2NvbmZpZ01vZGlmaWVyUGF0aCcpXHJcbiAgICB0aGlzLnNldElmUHJlc2VudCgnLS1yb290UGF0aCcsICdyb290UGF0aCcsIHJwID0+IHtcclxuICAgICAgcmV0dXJuIHBhdGgucmVzb2x2ZShycClcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldElmUHJlc2VudChcclxuICAgIGZsYWc6IHN0cmluZyxcclxuICAgIHNldFZhbDogJ3Jvb3RQYXRoJyB8ICdjb25maWdNb2RpZmllclBhdGgnLFxyXG4gICAgY2FsbGJhY2s6IChpOiBzdHJpbmcpID0+IHN0cmluZyA9IGkgPT4ge1xyXG4gICAgICByZXR1cm4gaVxyXG4gICAgfVxyXG4gICkge1xyXG4gICAgaWYgKHRoaXMuYXJncy5pbmNsdWRlcyhmbGFnKSkge1xyXG4gICAgICBjb25zdCB2YWw6IHN0cmluZyA9IHRoaXMuYXJnc1t0aGlzLmFyZ3MuaW5kZXhPZihmbGFnKSArIDFdXHJcblxyXG4gICAgICBpZiAodmFsICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICB0aGlzW3NldFZhbF0gPSBjYWxsYmFjayh2YWwpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhyb3cgRXJyb3IoXHJcbiAgICAgICAgICBgWW91IHN1cHBsaWVkIHRoZSAke2ZsYWd9IGZsYWcgYnV0IGRpZCBub3QgcHJvdmlkZSBhIHZhbHVlLmBcclxuICAgICAgICApXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0Q29uZmlnKCk6IENvbmZpZ09iamVjdCB7XHJcbiAgICByZXR1cm4gbmV3IENvbmZpZ3VyYXRvcih7XHJcbiAgICAgIHJvb3RQYXRoOiB0aGlzLnJvb3RQYXRoLFxyXG4gICAgICBwcm9qZWN0Q29uZmlnU3ViUGF0aDogdGhpcy5jb25maWdNb2RpZmllclBhdGhcclxuICAgIH0pLnJlc3VsdFxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRUb29sKCk6IFRvb2xPYmplY3Qge1xyXG4gICAgY29uc3QgdG9vbHM6IEFycmF5PFRvb2xPYmplY3Q+ID0gdGhpcy5jb25maWcudG9vbHNcclxuICAgIGNvbnN0IHRvb2xNYXRjaGVyczogQXJyYXk8c3RyaW5nPiA9IHRvb2xzLm1hcCh0ID0+IHtcclxuICAgICAgcmV0dXJuIHQubWF0Y2hlclxyXG4gICAgfSlcclxuICAgIGNvbnN0IGZpcnN0QXJnOiBzdHJpbmcgPSB0aGlzLmFyZ3NbMF1cclxuXHJcbiAgICBpZiAoXHJcbiAgICAgICgvXlthLXpBLVowLTldJC8udGVzdChmaXJzdEFyZykgJiYgIXRvb2xNYXRjaGVycy5pbmNsdWRlcyhmaXJzdEFyZykpIHx8XHJcbiAgICAgICh0b29scy5sZW5ndGggPiAxICYmIGZpcnN0QXJnID09PSB1bmRlZmluZWQpXHJcbiAgICApIHtcclxuICAgICAgdGhyb3cgRXJyb3IoXHJcbiAgICAgICAgYFlvdSBuZWVkIHRvIHByb3ZpZGUgYSB2YWxpZCB0b29sIG1hdGNoZXIuIFZhbGlkIHRvb2wgbWF0Y2hlcnMgaW5jbHVkZTogJHt0b29sTWF0Y2hlcnMuam9pbihcclxuICAgICAgICAgICdcXG4nXHJcbiAgICAgICAgKX1gXHJcbiAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdG9vbHNbdG9vbE1hdGNoZXJzLmluZGV4T2YoZmlyc3RBcmcpXSB8fCB0b29sc1swXVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRPdXRwdXQoKSB7XHJcbiAgICBsZXQgb3V0cHV0OiBJUGFyc2VyT3V0cHV0ID0ge31cclxuXHJcbiAgICBpZiAodGhpcy50b29sVG9Vc2UgIT09IHVuZGVmaW5lZCAmJiB0aGlzLnRvb2xUb1VzZS5mbGFncyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIGNvbnN0IGZsYWdzOiBBcnJheTxGbGFnT2JqZWN0PiA9IHRoaXMudG9vbFRvVXNlLmZsYWdzXHJcbiAgICAgIGNvbnN0IGFyZ3M6IEFycmF5PHN0cmluZz4gPSB0aGlzLmFyZ3NcclxuXHJcbiAgICAgIGZsYWdzLmZvckVhY2goZiA9PiB7XHJcbiAgICAgICAgc3dpdGNoIChmLnR5cGUpIHtcclxuICAgICAgICAgIGNhc2UgJ2Jvb2xlYW4nOlxyXG4gICAgICAgICAgICBvdXRwdXRbZi5uYW1lXSA9IGFyZ3Muc29tZShhID0+IHtcclxuICAgICAgICAgICAgICByZXR1cm4gKGYubWF0Y2hlcnMgfHwgW10pLmluY2x1ZGVzKGEpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICBvdXRwdXRbZi5uYW1lXSA9IG51bGxcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG91dHB1dFxyXG4gIH1cclxufVxyXG4iXX0=