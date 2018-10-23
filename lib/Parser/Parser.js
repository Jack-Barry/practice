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
      var output = this.setDefaultOutput();

      if (Object.keys(output).length !== 0) {
        var flags = this.toolToUse.flags;
        var _args = this.args;

        _args.forEach(function (a, i) {
          var flag = flags.find(function (f) {
            return f.matchers.includes(a);
          });

          if (flag !== undefined) {
            switch (flag.type) {
              case 'boolean':
                var nextArg = _args[i + 1];

                if (nextArg !== undefined && !/^-.+/.test(nextArg)) {
                  throw Error("You provided a value for the ".concat(flag.name, " flag, but it is a boolean flag."));
                }

                output[flag.name] = true;
                break;

              case 'string':
                var val = _args[i + 1];

                if (val !== undefined && !/^-.+/.test(val)) {
                  output[flag.name] = val;
                  break;
                } else {
                  throw Error("You need to provide a value for the ".concat(flag.name, " flag."));
                }

              case 'array':
                var possibleArgs = _args.slice(i + 1);

                var nextFlag = possibleArgs.find(function (a) {
                  return /^-.+/.test(a);
                }) || '';
                var nextFlagIndex = nextFlag === '' ? possibleArgs.length : possibleArgs.indexOf(nextFlag);
                var vals = possibleArgs.slice(0, nextFlagIndex);

                if (vals.length > 0) {
                  output[flag.name] = vals;
                  break;
                } else {
                  throw Error("You need to provide a value for the ".concat(flag.name, " flag."));
                }

            }
          }
        });
      }

      return output;
    }
  }, {
    key: "setDefaultOutput",
    value: function setDefaultOutput() {
      var output = {};

      if (this.toolToUse !== undefined && this.toolToUse.flags !== undefined) {
        this.toolToUse.flags.forEach(function (f) {
          switch (f.type) {
            case 'boolean':
              output[f.name] = false;
              break;

            case 'string':
              output[f.name] = '';
              break;

            case 'array':
              output[f.name] = [];
              break;
          }
        });
      }

      return output;
    }
  }]);

  return Parser;
}();

exports.Parser = Parser;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9QYXJzZXIvUGFyc2VyLnRzIl0sIm5hbWVzIjpbImdsb2JhbFBhdGhzIiwiUGF0aHMiLCJQYXJzZXIiLCJhcmdzIiwicm9vdFBhdGgiLCJjYWxsaW5nRGlyIiwiY29uZmlnTW9kaWZpZXJQYXRoIiwicHJvamVjdENvbmZpZ1N1YlBhdGgiLCJzZXRDb25maWd1cmF0aW9uUGF0aCIsImNvbmZpZyIsInNldENvbmZpZyIsInRvb2xUb1VzZSIsInNldFRvb2wiLCJvdXRwdXQiLCJzZXRPdXRwdXQiLCJzZXRJZlByZXNlbnQiLCJycCIsInBhdGgiLCJyZXNvbHZlIiwiZmxhZyIsInNldFZhbCIsImNhbGxiYWNrIiwiaSIsImluY2x1ZGVzIiwidmFsIiwiaW5kZXhPZiIsInVuZGVmaW5lZCIsIkVycm9yIiwiQ29uZmlndXJhdG9yIiwicmVzdWx0IiwidG9vbHMiLCJ0b29sTWF0Y2hlcnMiLCJtYXAiLCJ0IiwibWF0Y2hlciIsImZpcnN0QXJnIiwidGVzdCIsImxlbmd0aCIsImpvaW4iLCJzZXREZWZhdWx0T3V0cHV0IiwiT2JqZWN0Iiwia2V5cyIsImZsYWdzIiwiZm9yRWFjaCIsImEiLCJmaW5kIiwiZiIsIm1hdGNoZXJzIiwidHlwZSIsIm5leHRBcmciLCJuYW1lIiwicG9zc2libGVBcmdzIiwic2xpY2UiLCJuZXh0RmxhZyIsIm5leHRGbGFnSW5kZXgiLCJ2YWxzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBTUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxXQUFrQixHQUFHLElBQUlDLGNBQUosRUFBM0I7O0lBZWFDLE07OztBQVFYLG9CQUFzQztBQUFBLFFBQTFCQyxJQUEwQix1RUFBSixFQUFJOztBQUFBOztBQUNwQyxTQUFLQSxJQUFMLEdBQVlBLElBQVo7QUFDQSxTQUFLQyxRQUFMLEdBQWdCSixXQUFXLENBQUNLLFVBQTVCO0FBQ0EsU0FBS0Msa0JBQUwsR0FBMEJOLFdBQVcsQ0FBQ08sb0JBQXRDO0FBQ0EsU0FBS0Msb0JB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QixDQUFuQixFQUFzQkUsYUFBdEIsQ0FBdkI7O0FBQ0Esb0JBQUlDLElBQUksQ0FBQ2xCLE1BQUwsR0FBYyxDQUFsQixFQUFxQjtBQUNuQnhCLGtCQUFBQSxNQUFNLENBQUNNLElBQUksQ0FBQytCLElBQU4sQ0FBTixHQUFvQkssSUFBcEI7QUFDQTtBQUNELGlCQUhELE1BR087QUFDTCx3QkFBTTVCLEtBQUssK0NBQzhCUixJQUFJLENBQUMrQixJQURuQyxZQUFYO0FBR0Q7O0FBdENMO0FBd0NEO0FBQ0YsU0E3Q0Q7QUE4Q0Q7O0FBRUQsYUFBT3JDLE1BQVA7QUFDRDs7O3VDQUV5QztBQUN4QyxVQUFJQSxNQUFxQixHQUFHLEVBQTVCOztBQUVBLFVBQUksS0FBS0YsU0FBTCxLQUFtQmUsU0FBbkIsSUFBZ0MsS0FBS2YsU0FBTCxDQUFlK0IsS0FBZixLQUF5QmhCLFNBQTdELEVBQXdFO0FBQ3RFLGFBQUtmLFNBQUwsQ0FBZStCLEtBQWYsQ0FBcUJDLE9BQXJCLENBQTZCLFVBQUFHLENBQUMsRUFBSTtBQUNoQyxrQkFBUUEsQ0FBQyxDQUFDRSxJQUFWO0FBQ0UsaUJBQUssU0FBTDtBQUNFbkMsY0FBQUEsTUFBTSxDQUFDaUMsQ0FBQyxDQUFDSSxJQUFILENBQU4sR0FBaUIsS0FBakI7QUFDQTs7QUFDRixpQkFBSyxRQUFMO0FBQ0VyQyxjQUFBQSxNQUFNLENBQUNpQyxDQUFDLENBQUNJLElBQUgsQ0FBTixHQUFpQixFQUFqQjtBQUNBOztBQUNGLGlCQUFLLE9BQUw7QUFDRXJDLGNBQUFBLE1BQU0sQ0FBQ2lDLENBQUMsQ0FBQ0ksSUFBSCxDQUFOLEdBQWlCLEVBQWpCO0FBQ0E7QUFUSjtBQVdELFNBWkQ7QUFhRDs7QUFFRCxhQUFPckMsTUFBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGF0aHMgfSBmcm9tICcuLy4uL2dsb2JhbHMnXHJcbmltcG9ydCB7XHJcbiAgVG9vbE9iamVjdCxcclxuICBGbGFnT2JqZWN0LFxyXG4gIENvbmZpZ09iamVjdCxcclxuICBDb25maWd1cmF0b3JcclxufSBmcm9tICcuLy4uL0NvbmZpZ3VyYXRvcidcclxuaW1wb3J0IHBhdGggZnJvbSAncGF0aCdcclxuXHJcbmNvbnN0IGdsb2JhbFBhdGhzOiBQYXRocyA9IG5ldyBQYXRocygpXHJcblxyXG5pbnRlcmZhY2UgSVBhcnNlciB7XHJcbiAgYXJnczogQXJyYXk8c3RyaW5nPlxyXG4gIHJvb3RQYXRoOiBzdHJpbmdcclxuICBjb25maWdNb2RpZmllclBhdGg6IHN0cmluZ1xyXG4gIGNvbmZpZzogQ29uZmlnT2JqZWN0XHJcbiAgdG9vbFRvVXNlOiBUb29sT2JqZWN0XHJcbiAgb3V0cHV0OiBJUGFyc2VyT3V0cHV0XHJcbn1cclxuXHJcbmludGVyZmFjZSBJUGFyc2VyT3V0cHV0IHtcclxuICBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBib29sZWFuIHwgQXJyYXk8c3RyaW5nPlxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUGFyc2VyIGltcGxlbWVudHMgSVBhcnNlciB7XHJcbiAgYXJnczogQXJyYXk8c3RyaW5nPlxyXG4gIHJvb3RQYXRoOiBzdHJpbmdcclxuICBjb25maWdNb2RpZmllclBhdGg6IHN0cmluZ1xyXG4gIGNvbmZpZzogQ29uZmlnT2JqZWN0XHJcbiAgdG9vbFRvVXNlOiBUb29sT2JqZWN0XHJcbiAgb3V0cHV0OiBJUGFyc2VyT3V0cHV0XHJcblxyXG4gIGNvbnN0cnVjdG9yKGFyZ3M6IEFycmF5PHN0cmluZz4gPSBbXSkge1xyXG4gICAgdGhpcy5hcmdzID0gYXJnc1xyXG4gICAgdGhpcy5yb290UGF0aCA9IGdsb2JhbFBhdGhzLmNhbGxpbmdEaXJcclxuICAgIHRoaXMuY29uZmlnTW9kaWZpZXJQYXRoID0gZ2xvYmFsUGF0aHMucHJvamVjdENvbmZpZ1N1YlBhdGhcclxuICAgIHRoaXMuc2V0Q29uZmlndXJhdGlvblBhdGgoKVxyXG4gICAgdGhpcy5jb25maWcgPSB0aGlzLnNldENvbmZpZygpXHJcbiAgICB0aGlzLnRvb2xUb1VzZSA9IHRoaXMuc2V0VG9vbCgpXHJcbiAgICB0aGlzLm91dHB1dCA9IHRoaXMuc2V0T3V0cHV0KClcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0Q29uZmlndXJhdGlvblBhdGgoKSB7XHJcbiAgICB0aGlzLnNldElmUHJlc2VudCgnLS1jb25maWcnLCAnY29uZmlnTW9kaWZpZXJQYXRoJylcclxuICAgIHRoaXMuc2V0SWZQcmVzZW50KCctLXJvb3RQYXRoJywgJ3Jvb3RQYXRoJywgcnAgPT4ge1xyXG4gICAgICByZXR1cm4gcGF0aC5yZXNvbHZlKHJwKVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0SWZQcmVzZW50KFxyXG4gICAgZmxhZzogc3RyaW5nLFxyXG4gICAgc2V0VmFsOiAncm9vdFBhdGgnIHwgJ2NvbmZpZ01vZGlmaWVyUGF0aCcsXHJcbiAgICBjYWxsYmFjazogKGk6IHN0cmluZykgPT4gc3RyaW5nID0gaSA9PiB7XHJcbiAgICAgIHJldHVybiBpXHJcbiAgICB9XHJcbiAgKSB7XHJcbiAgICBpZiAodGhpcy5hcmdzLmluY2x1ZGVzKGZsYWcpKSB7XHJcbiAgICAgIGNvbnN0IHZhbDogc3RyaW5nID0gdGhpcy5hcmdzW3RoaXMuYXJncy5pbmRleE9mKGZsYWcpICsgMV1cclxuXHJcbiAgICAgIGlmICh2YWwgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHRoaXNbc2V0VmFsXSA9IGNhbGxiYWNrKHZhbClcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aHJvdyBFcnJvcihcclxuICAgICAgICAgIGBZb3Ugc3VwcGxpZWQgdGhlICR7ZmxhZ30gZmxhZyBidXQgZGlkIG5vdCBwcm92aWRlIGEgdmFsdWUuYFxyXG4gICAgICAgIClcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRDb25maWcoKTogQ29uZmlnT2JqZWN0IHtcclxuICAgIHJldHVybiBuZXcgQ29uZmlndXJhdG9yKHtcclxuICAgICAgcm9vdFBhdGg6IHRoaXMucm9vdFBhdGgsXHJcbiAgICAgIHByb2plY3RDb25maWdTdWJQYXRoOiB0aGlzLmNvbmZpZ01vZGlmaWVyUGF0aFxyXG4gICAgfSkucmVzdWx0XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldFRvb2woKTogVG9vbE9iamVjdCB7XHJcbiAgICBjb25zdCB0b29sczogQXJyYXk8VG9vbE9iamVjdD4gPSB0aGlzLmNvbmZpZy50b29sc1xyXG4gICAgY29uc3QgdG9vbE1hdGNoZXJzOiBBcnJheTxzdHJpbmc+ID0gdG9vbHMubWFwKHQgPT4ge1xyXG4gICAgICByZXR1cm4gdC5tYXRjaGVyXHJcbiAgICB9KVxyXG4gICAgY29uc3QgZmlyc3RBcmc6IHN0cmluZyA9IHRoaXMuYXJnc1swXVxyXG5cclxuICAgIGlmIChcclxuICAgICAgKC9eW2EtekEtWjAtOV0kLy50ZXN0KGZpcnN0QXJnKSAmJiAhdG9vbE1hdGNoZXJzLmluY2x1ZGVzKGZpcnN0QXJnKSkgfHxcclxuICAgICAgKHRvb2xzLmxlbmd0aCA+IDEgJiYgZmlyc3RBcmcgPT09IHVuZGVmaW5lZClcclxuICAgICkge1xyXG4gICAgICB0aHJvdyBFcnJvcihcclxuICAgICAgICBgWW91IG5lZWQgdG8gcHJvdmlkZSBhIHZhbGlkIHRvb2wgbWF0Y2hlci4gVmFsaWQgdG9vbCBtYXRjaGVycyBpbmNsdWRlOiAke3Rvb2xNYXRjaGVycy5qb2luKFxyXG4gICAgICAgICAgJ1xcbidcclxuICAgICAgICApfWBcclxuICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0b29sc1t0b29sTWF0Y2hlcnMuaW5kZXhPZihmaXJzdEFyZyldIHx8IHRvb2xzWzBdXHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldE91dHB1dCgpIHtcclxuICAgIGxldCBvdXRwdXQ6IElQYXJzZXJPdXRwdXQgPSB0aGlzLnNldERlZmF1bHRPdXRwdXQoKVxyXG5cclxuICAgIGlmIChPYmplY3Qua2V5cyhvdXRwdXQpLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICBjb25zdCBmbGFncyA9IHRoaXMudG9vbFRvVXNlLmZsYWdzXHJcbiAgICAgIGNvbnN0IGFyZ3MgPSB0aGlzLmFyZ3NcclxuXHJcbiAgICAgIGFyZ3MuZm9yRWFjaCgoYSwgaSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGZsYWcgPSBmbGFncy5maW5kKGYgPT4gZi5tYXRjaGVycy5pbmNsdWRlcyhhKSlcclxuXHJcbiAgICAgICAgaWYgKGZsYWcgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgc3dpdGNoIChmbGFnLnR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSAnYm9vbGVhbic6XHJcbiAgICAgICAgICAgICAgY29uc3QgbmV4dEFyZyA9IGFyZ3NbaSArIDFdXHJcbiAgICAgICAgICAgICAgaWYgKG5leHRBcmcgIT09IHVuZGVmaW5lZCAmJiAhL14tLisvLnRlc3QobmV4dEFyZykpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IEVycm9yKFxyXG4gICAgICAgICAgICAgICAgICBgWW91IHByb3ZpZGVkIGEgdmFsdWUgZm9yIHRoZSAke1xyXG4gICAgICAgICAgICAgICAgICAgIGZsYWcubmFtZVxyXG4gICAgICAgICAgICAgICAgICB9IGZsYWcsIGJ1dCBpdCBpcyBhIGJvb2xlYW4gZmxhZy5gXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIG91dHB1dFtmbGFnLm5hbWVdID0gdHJ1ZVxyXG4gICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgIGNhc2UgJ3N0cmluZyc6XHJcbiAgICAgICAgICAgICAgY29uc3QgdmFsID0gYXJnc1tpICsgMV1cclxuICAgICAgICAgICAgICBpZiAodmFsICE9PSB1bmRlZmluZWQgJiYgIS9eLS4rLy50ZXN0KHZhbCkpIHtcclxuICAgICAgICAgICAgICAgIG91dHB1dFtmbGFnLm5hbWVdID0gdmFsXHJcbiAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcihcclxuICAgICAgICAgICAgICAgICAgYFlvdSBuZWVkIHRvIHByb3ZpZGUgYSB2YWx1ZSBmb3IgdGhlICR7ZmxhZy5uYW1lfSBmbGFnLmBcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgJ2FycmF5JzpcclxuICAgICAgICAgICAgICBjb25zdCBwb3NzaWJsZUFyZ3M6IHN0cmluZ1tdID0gYXJncy5zbGljZShpICsgMSlcclxuICAgICAgICAgICAgICBjb25zdCBuZXh0RmxhZzogc3RyaW5nID1cclxuICAgICAgICAgICAgICAgIHBvc3NpYmxlQXJncy5maW5kKGEgPT4gL14tLisvLnRlc3QoYSkpIHx8ICcnXHJcbiAgICAgICAgICAgICAgY29uc3QgbmV4dEZsYWdJbmRleCA9XHJcbiAgICAgICAgICAgICAgICBuZXh0RmxhZyA9PT0gJydcclxuICAgICAgICAgICAgICAgICAgPyBwb3NzaWJsZUFyZ3MubGVuZ3RoXHJcbiAgICAgICAgICAgICAgICAgIDogcG9zc2libGVBcmdzLmluZGV4T2YobmV4dEZsYWcpXHJcbiAgICAgICAgICAgICAgY29uc3QgdmFsczogc3RyaW5nW10gPSBwb3NzaWJsZUFyZ3Muc2xpY2UoMCwgbmV4dEZsYWdJbmRleClcclxuICAgICAgICAgICAgICBpZiAodmFscy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBvdXRwdXRbZmxhZy5uYW1lXSA9IHZhbHNcclxuICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRocm93IEVycm9yKFxyXG4gICAgICAgICAgICAgICAgICBgWW91IG5lZWQgdG8gcHJvdmlkZSBhIHZhbHVlIGZvciB0aGUgJHtmbGFnLm5hbWV9IGZsYWcuYFxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG91dHB1dFxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXREZWZhdWx0T3V0cHV0KCk6IElQYXJzZXJPdXRwdXQge1xyXG4gICAgbGV0IG91dHB1dDogSVBhcnNlck91dHB1dCA9IHt9XHJcblxyXG4gICAgaWYgKHRoaXMudG9vbFRvVXNlICE9PSB1bmRlZmluZWQgJiYgdGhpcy50b29sVG9Vc2UuZmxhZ3MgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aGlzLnRvb2xUb1VzZS5mbGFncy5mb3JFYWNoKGYgPT4ge1xyXG4gICAgICAgIHN3aXRjaCAoZi50eXBlKSB7XHJcbiAgICAgICAgICBjYXNlICdib29sZWFuJzpcclxuICAgICAgICAgICAgb3V0cHV0W2YubmFtZV0gPSBmYWxzZVxyXG4gICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgY2FzZSAnc3RyaW5nJzpcclxuICAgICAgICAgICAgb3V0cHV0W2YubmFtZV0gPSAnJ1xyXG4gICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgY2FzZSAnYXJyYXknOlxyXG4gICAgICAgICAgICBvdXRwdXRbZi5uYW1lXSA9IFtdXHJcbiAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBvdXRwdXRcclxuICB9XHJcbn1cclxuIl19