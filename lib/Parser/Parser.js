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
      var _this = this;

      var output = {};

      if (this.toolToUse !== undefined && this.toolToUse.flags !== undefined) {
        var flags = this.toolToUse.flags;
        var _args = this.args;
        flags.forEach(function (f) {
          switch (f.type) {
            case 'boolean':
              output[f.name] = _this.flagInArgs(f, _args);
              break;

            case 'string':
              var argValue = '';

              if (_this.flagInArgs(f, _args)) {
                var argIndex = _this.getMatchingIndex(f, _args);

                if (argIndex !== undefined) {
                  argValue = _args[argIndex + 1];
                  if (argValue === undefined) throw Error("You need to provide a value for the ".concat(f.name, " flag."));
                }
              }

              output[f.name] = argValue;
              break;
          }
        });
      }

      return output;
    }
  }, {
    key: "flagInArgs",
    value: function flagInArgs(flag, args) {
      return args.some(function (a) {
        return flag.matchers.includes(a);
      });
    }
  }, {
    key: "getMatchingIndex",
    value: function getMatchingIndex(flag, args) {
      var argIndex;
      var matchingArg = args.find(function (a) {
        return flag.matchers.includes(a);
      });

      if (matchingArg !== undefined) {
        argIndex = args.indexOf(matchingArg);
      }

      return argIndex;
    }
  }]);

  return Parser;
}();

exports.Parser = Parser;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9QYXJzZXIvUGFyc2VyLnRzIl0sIm5hbWVzIjpbImdsb2JhbFBhdGhzIiwiUGF0aHMiLCJQYXJzZXIiLCJhcmdzIiwicm9vdFBhdGgiLCJjYWxsaW5nRGlyIiwiY29uZmlnTW9kaWZpZXJQYXRoIiwicHJvamVjdENvbmZpZ1N1YlBhdGgiLCJzZXRDb25maWd1cmF0aW9uUGF0aCIsImNvbmZpZyIsInNldENvbmZpZyIsInRvb2xUb1VzZSIsInNldFRvb2wiLCJvdXRwdXQiLCJzZXRPdXRwdXQiLCJzZXRJZlByZXNlbnQiLCJycCIsInBhdGgiLCJyZXNvbHZlIiwiZmxhZyIsInNldFZhbCIsImNhbGxiYWNrIiwiaSIsImluY2x1ZGVzIiwidmFsIiwiaW5kZXhPZiIsInVuZGVmaW5lZCIsIkVycm9yIiwiQ29uZmlndXJhdG9yIiwicmVzdWx0IiwidG9vbHMiLCJ0b29sTWF0Y2hlcnMiLCJtYXAiLCJ0IiwibWF0Y2hlciIsImZpcnN0QXJnIiwidGVzdCIsImxlbmd0aCIsImpvaW4iLCJmbGFncyIsImZvckVhY2giLCJmIiwidHlwZSIsIm5hbWUiLCJmbGFnSW5BcmdzIiwiYXJnVmFsdWUiLCJhcmdJbmRleCIsImdldE1hdGNoaW5nSW5kZXgiLCJzb21lIiwiYSIsIm1hdGNoZXJzIiwibWF0Y2hpbmdBcmciLCJmaW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBTUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxXQUFrQixHQUFHLElBQUlDLGNBQUosRUFBM0I7O0lBZWFDLE07OztBQVFYLG9CQUFzQztBQUFBLFFBQTFCQyxJQUEwQix1RUFBSixFQUFJOztBQUFBOztBQUNwQyxTQUFLQSxJQUFMLEdBQVlBLElBQVo7QUFDQSxTQUFLQyxRQUFMLEdBQWdCSixXQUFXLENBQUNLLFVBQTVCO0FBQ0EsU0FBS0Msa0JBQUwsR0FBMEJOLFdBQVcsQ0FBQ08sb0JBQXRDO0FBQ0EsU0FBS0Msb0JBQUw7QUFDQSxTQUFLQyxNQUFMLEdBQWMsS0FB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fSBmcm9tICcuLy4uL2dsb2JhbHMnXHJcbmltcG9ydCB7XHJcbiAgVG9vbE9iamVjdCxcclxuICBGbGFnT2JqZWN0LFxyXG4gIENvbmZpZ09iamVjdCxcclxuICBDb25maWd1cmF0b3JcclxufSBmcm9tICcuLy4uL0NvbmZpZ3VyYXRvcidcclxuaW1wb3J0IHBhdGggZnJvbSAncGF0aCdcclxuXHJcbmNvbnN0IGdsb2JhbFBhdGhzOiBQYXRocyA9IG5ldyBQYXRocygpXHJcblxyXG5pbnRlcmZhY2UgSVBhcnNlciB7XHJcbiAgYXJnczogQXJyYXk8c3RyaW5nPlxyXG4gIHJvb3RQYXRoOiBzdHJpbmdcclxuICBjb25maWdNb2RpZmllclBhdGg6IHN0cmluZ1xyXG4gIGNvbmZpZzogQ29uZmlnT2JqZWN0XHJcbiAgdG9vbFRvVXNlOiBUb29sT2JqZWN0XHJcbiAgb3V0cHV0OiBJUGFyc2VyT3V0cHV0XHJcbn1cclxuXHJcbmludGVyZmFjZSBJUGFyc2VyT3V0cHV0IHtcclxuICBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBib29sZWFuIHwgQXJyYXk8c3RyaW5nPlxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUGFyc2VyIGltcGxlbWVudHMgSVBhcnNlciB7XHJcbiAgYXJnczogQXJyYXk8c3RyaW5nPlxyXG4gIHJvb3RQYXRoOiBzdHJpbmdcclxuICBjb25maWdNb2RpZmllclBhdGg6IHN0cmluZ1xyXG4gIGNvbmZpZzogQ29uZmlnT2JqZWN0XHJcbiAgdG9vbFRvVXNlOiBUb29sT2JqZWN0XHJcbiAgb3V0cHV0OiBJUGFyc2VyT3V0cHV0XHJcblxyXG4gIGNvbnN0cnVjdG9yKGFyZ3M6IEFycmF5PHN0cmluZz4gPSBbXSkge1xyXG4gICAgdGhpcy5hcmdzID0gYXJnc1xyXG4gICAgdGhpcy5yb290UGF0aCA9IGdsb2JhbFBhdGhzLmNhbGxpbmdEaXJcclxuICAgIHRoaXMuY29uZmlnTW9kaWZpZXJQYXRoID0gZ2xvYmFsUGF0aHMucHJvamVjdENvbmZpZ1N1YlBhdGhcclxuICAgIHRoaXMuc2V0Q29uZmlndXJhdGlvblBhdGgoKVxyXG4gICAgdGhpcy5jb25maWcgPSB0aGlzLnNldENvbmZpZygpXHJcbiAgICB0aGlzLnRvb2xUb1VzZSA9IHRoaXMuc2V0VG9vbCgpXHJcbiAgICB0aGlzLm91dHB1dCA9IHRoaXMuc2V0T3V0cHV0KClcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0Q29uZmlndXJhdGlvblBhdGgoKSB7XHJcbiAgICB0aGlzLnNldElmUHJlc2VudCgnLS1jb25maWcnLCAnY29uZmlnTW9kaWZpZXJQYXRoJylcclxuICAgIHRoaXMuc2V0SWZQcmVzZW50KCctLXJvb3RQYXRoJywgJ3Jvb3RQYXRoJywgcnAgPT4ge1xyXG4gICAgICByZXR1cm4gcGF0aC5yZXNvbHZlKHJwKVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0SWZQcmVzZW50KFxyXG4gICAgZmxhZzogc3RyaW5nLFxyXG4gICAgc2V0VmFsOiAncm9vdFBhdGgnIHwgJ2NvbmZpZ01vZGlmaWVyUGF0aCcsXHJcbiAgICBjYWxsYmFjazogKGk6IHN0cmluZykgPT4gc3RyaW5nID0gaSA9PiB7XHJcbiAgICAgIHJldHVybiBpXHJcbiAgICB9XHJcbiAgKSB7XHJcbiAgICBpZiAodGhpcy5hcmdzLmluY2x1ZGVzKGZsYWcpKSB7XHJcbiAgICAgIGNvbnN0IHZhbDogc3RyaW5nID0gdGhpcy5hcmdzW3RoaXMuYXJncy5pbmRleE9mKGZsYWcpICsgMV1cclxuXHJcbiAgICAgIGlmICh2YWwgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHRoaXNbc2V0VmFsXSA9IGNhbGxiYWNrKHZhbClcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aHJvdyBFcnJvcihcclxuICAgICAgICAgIGBZb3Ugc3VwcGxpZWQgdGhlICR7ZmxhZ30gZmxhZyBidXQgZGlkIG5vdCBwcm92aWRlIGEgdmFsdWUuYFxyXG4gICAgICAgIClcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRDb25maWcoKTogQ29uZmlnT2JqZWN0IHtcclxuICAgIHJldHVybiBuZXcgQ29uZmlndXJhdG9yKHtcclxuICAgICAgcm9vdFBhdGg6IHRoaXMucm9vdFBhdGgsXHJcbiAgICAgIHByb2plY3RDb25maWdTdWJQYXRoOiB0aGlzLmNvbmZpZ01vZGlmaWVyUGF0aFxyXG4gICAgfSkucmVzdWx0XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldFRvb2woKTogVG9vbE9iamVjdCB7XHJcbiAgICBjb25zdCB0b29sczogQXJyYXk8VG9vbE9iamVjdD4gPSB0aGlzLmNvbmZpZy50b29sc1xyXG4gICAgY29uc3QgdG9vbE1hdGNoZXJzOiBBcnJheTxzdHJpbmc+ID0gdG9vbHMubWFwKHQgPT4ge1xyXG4gICAgICByZXR1cm4gdC5tYXRjaGVyXHJcbiAgICB9KVxyXG4gICAgY29uc3QgZmlyc3RBcmc6IHN0cmluZyA9IHRoaXMuYXJnc1swXVxyXG5cclxuICAgIGlmIChcclxuICAgICAgKC9eW2EtekEtWjAtOV0kLy50ZXN0KGZpcnN0QXJnKSAmJiAhdG9vbE1hdGNoZXJzLmluY2x1ZGVzKGZpcnN0QXJnKSkgfHxcclxuICAgICAgKHRvb2xzLmxlbmd0aCA+IDEgJiYgZmlyc3RBcmcgPT09IHVuZGVmaW5lZClcclxuICAgICkge1xyXG4gICAgICB0aHJvdyBFcnJvcihcclxuICAgICAgICBgWW91IG5lZWQgdG8gcHJvdmlkZSBhIHZhbGlkIHRvb2wgbWF0Y2hlci4gVmFsaWQgdG9vbCBtYXRjaGVycyBpbmNsdWRlOiAke3Rvb2xNYXRjaGVycy5qb2luKFxyXG4gICAgICAgICAgJ1xcbidcclxuICAgICAgICApfWBcclxuICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0b29sc1t0b29sTWF0Y2hlcnMuaW5kZXhPZihmaXJzdEFyZyldIHx8IHRvb2xzWzBdXHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldE91dHB1dCgpIHtcclxuICAgIGxldCBvdXRwdXQ6IElQYXJzZXJPdXRwdXQgPSB7fVxyXG5cclxuICAgIGlmICh0aGlzLnRvb2xUb1VzZSAhPT0gdW5kZWZpbmVkICYmIHRoaXMudG9vbFRvVXNlLmZsYWdzICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgY29uc3QgZmxhZ3M6IEFycmF5PEZsYWdPYmplY3Q+ID0gdGhpcy50b29sVG9Vc2UuZmxhZ3NcclxuICAgICAgY29uc3QgYXJnczogQXJyYXk8c3RyaW5nPiA9IHRoaXMuYXJnc1xyXG5cclxuICAgICAgZmxhZ3MuZm9yRWFjaChmID0+IHtcclxuICAgICAgICBzd2l0Y2ggKGYudHlwZSkge1xyXG4gICAgICAgICAgY2FzZSAnYm9vbGVhbic6XHJcbiAgICAgICAgICAgIG91dHB1dFtmLm5hbWVdID0gdGhpcy5mbGFnSW5BcmdzKGYsIGFyZ3MpXHJcbiAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICBjYXNlICdzdHJpbmcnOlxyXG4gICAgICAgICAgICBsZXQgYXJnVmFsdWU6IHN0cmluZyA9ICcnXHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5mbGFnSW5BcmdzKGYsIGFyZ3MpKSB7XHJcbiAgICAgICAgICAgICAgY29uc3QgYXJnSW5kZXg6IG51bWJlciB8IHVuZGVmaW5lZCA9IHRoaXMuZ2V0TWF0Y2hpbmdJbmRleChcclxuICAgICAgICAgICAgICAgIGYsXHJcbiAgICAgICAgICAgICAgICBhcmdzXHJcbiAgICAgICAgICAgICAgKVxyXG5cclxuICAgICAgICAgICAgICBpZiAoYXJnSW5kZXggIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgYXJnVmFsdWUgPSBhcmdzW2FyZ0luZGV4ICsgMV1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoYXJnVmFsdWUgPT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoXHJcbiAgICAgICAgICAgICAgICAgICAgYFlvdSBuZWVkIHRvIHByb3ZpZGUgYSB2YWx1ZSBmb3IgdGhlICR7Zi5uYW1lfSBmbGFnLmBcclxuICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgb3V0cHV0W2YubmFtZV0gPSBhcmdWYWx1ZVxyXG4gICAgICAgICAgICBicmVha1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gb3V0cHV0XHJcbiAgfVxyXG4gIHByaXZhdGUgZmxhZ0luQXJncyhmbGFnOiBGbGFnT2JqZWN0LCBhcmdzOiBBcnJheTxzdHJpbmc+KTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gYXJncy5zb21lKGEgPT4ge1xyXG4gICAgICByZXR1cm4gZmxhZy5tYXRjaGVycy5pbmNsdWRlcyhhKVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0TWF0Y2hpbmdJbmRleChmbGFnOiBGbGFnT2JqZWN0LCBhcmdzOiBBcnJheTxzdHJpbmc+KSB7XHJcbiAgICBsZXQgYXJnSW5kZXg6IG51bWJlciB8IHVuZGVmaW5lZFxyXG5cclxuICAgIGNvbnN0IG1hdGNoaW5nQXJnID0gYXJncy5maW5kKGEgPT4ge1xyXG4gICAgICByZXR1cm4gZmxhZy5tYXRjaGVycy5pbmNsdWRlcyhhKVxyXG4gICAgfSlcclxuXHJcbiAgICBpZiAobWF0Y2hpbmdBcmcgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBhcmdJbmRleCA9IGFyZ3MuaW5kZXhPZihtYXRjaGluZ0FyZylcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gYXJnSW5kZXhcclxuICB9XHJcbn1cclxuIl19