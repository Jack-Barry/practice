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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9QYXJzZXIvUGFyc2VyLnRzIl0sIm5hbWVzIjpbImdsb2JhbFBhdGhzIiwiUGF0aHMiLCJQYXJzZXIiLCJhcmdzIiwicm9vdFBhdGgiLCJjYWxsaW5nRGlyIiwiY29uZmlnTW9kaWZpZXJQYXRoIiwicHJvamVjdENvbmZpZ1N1YlBhdGgiLCJzZXRDb25maWd1cmF0aW9uUGF0aCIsImNvbmZpZyIsInNldENvbmZpZyIsInRvb2xUb1VzZSIsInNldFRvb2wiLCJvdXRwdXQiLCJzZXRPdXRwdXQiLCJzZXRJZlByZXNlbnQiLCJycCIsInBhdGgiLCJyZXNvbHZlIiwiZmxhZyIsInNldFZhbCIsImNhbGxiYWNrIiwiaSIsImluY2x1ZGVzIiwidmFsIiwiaW5kZXhPZiIsInVuZGVmaW5lZCIsIkVycm9yIiwiQ29uZmlndXJhdG9yIiwicmVzdWx0IiwidG9vbHMiLCJ0b29sTWF0Y2hlcnMiLCJtYXAiLCJ0IiwibWF0Y2hlciIsImZpcnN0QXJnIiwidGVzdCIsImxlbmd0aCIsImpvaW4iLCJzZXREZWZhdWx0T3V0cHV0IiwiT2JqZWN0Iiwia2V5cyIsImZsYWdzIiwiZm9yRWFjaCIsImEiLCJmaW5kIiwiZiIsIm1hdGNoZXJzIiwidHlwZSIsIm5leHRBcmciLCJuYW1lIiwicG9zc2libGVBcmdzIiwic2xpY2UiLCJuZXh0RmxhZyIsIm5leHRGbGFnSW5kZXgiLCJ2YWxzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxXQUFrQixHQUFHLElBQUlDLGNBQUosRUFBM0I7O0lBZWFDLE07OztBQVFYLG9CQUFzQztBQUFBLFFBQTFCQyxJQUEwQix1RUFBSixFQUFJOztBQUFBOztBQUNwQyxTQUFLQSxJQUFMLEdBQVlBLElBQVo7QUFDQSxTQUFLQyxRQUFMLEdBQWdCSixXQUFXLENBQUNLLFVBQTVCO0FBQ0EsU0FBS0Msa0JBQUwsR0FBMEJOLFdBQVcsQ0FBQ08sb0JBQXRDO0FBQ0EsU0FBS0Msb0JB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QixDQUFuQixFQUFzQkUsYUFBdEIsQ0FBdkI7O0FBQ0Esb0JBQUlDLElBQUksQ0FBQ2xCLE1BQUwsR0FBYyxDQUFsQixFQUFxQjtBQUNuQnhCLGtCQUFBQSxNQUFNLENBQUNNLElBQUksQ0FBQytCLElBQU4sQ0FBTixHQUFvQkssSUFBcEI7QUFDQTtBQUNELGlCQUhELE1BR087QUFDTCx3QkFBTTVCLEtBQUssK0NBQzhCUixJQUFJLENBQUMrQixJQURuQyxZQUFYO0FBR0Q7O0FBdENMO0FBd0NEO0FBQ0YsU0E3Q0Q7QUE4Q0Q7O0FBRUQsYUFBT3JDLE1BQVA7QUFDRDs7O3VDQUV5QztBQUN4QyxVQUFJQSxNQUFxQixHQUFHLEVBQTVCOztBQUVBLFVBQUksS0FBS0YsU0FBTCxLQUFtQmUsU0FBbkIsSUFBZ0MsS0FBS2YsU0FBTCxDQUFlK0IsS0FBZixLQUF5QmhCLFNBQTdELEVBQXdFO0FBQ3RFLGFBQUtmLFNBQUwsQ0FBZStCLEtBQWYsQ0FBcUJDLE9BQXJCLENBQTZCLFVBQUFHLENBQUMsRUFBSTtBQUNoQyxrQkFBUUEsQ0FBQyxDQUFDRSxJQUFWO0FBQ0UsaUJBQUssU0FBTDtBQUNFbkMsY0FBQUEsTUFBTSxDQUFDaUMsQ0FBQyxDQUFDSSxJQUFILENBQU4sR0FBaUIsS0FBakI7QUFDQTs7QUFDRixpQkFBSyxRQUFMO0FBQ0VyQyxjQUFBQSxNQUFNLENBQUNpQyxDQUFDLENBQUNJLElBQUgsQ0FBTixHQUFpQixFQUFqQjtBQUNBOztBQUNGLGlCQUFLLE9BQUw7QUFDRXJDLGNBQUFBLE1BQU0sQ0FBQ2lDLENBQUMsQ0FBQ0ksSUFBSCxDQUFOLEdBQWlCLEVBQWpCO0FBQ0E7QUFUSjtBQVdELFNBWkQ7QUFhRDs7QUFFRCxhQUFPckMsTUFBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGF0aHMgfSBmcm9tICcuLy4uL2dsb2JhbHMnXHJcbmltcG9ydCB7IFRvb2xPYmplY3QsIENvbmZpZ09iamVjdCwgQ29uZmlndXJhdG9yIH0gZnJvbSAnLi8uLi9Db25maWd1cmF0b3InXHJcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnXHJcblxyXG5jb25zdCBnbG9iYWxQYXRoczogUGF0aHMgPSBuZXcgUGF0aHMoKVxyXG5cclxuaW50ZXJmYWNlIElQYXJzZXIge1xyXG4gIGFyZ3M6IEFycmF5PHN0cmluZz5cclxuICByb290UGF0aDogc3RyaW5nXHJcbiAgY29uZmlnTW9kaWZpZXJQYXRoOiBzdHJpbmdcclxuICBjb25maWc6IENvbmZpZ09iamVjdFxyXG4gIHRvb2xUb1VzZTogVG9vbE9iamVjdFxyXG4gIG91dHB1dDogSVBhcnNlck91dHB1dFxyXG59XHJcblxyXG5pbnRlcmZhY2UgSVBhcnNlck91dHB1dCB7XHJcbiAgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgYm9vbGVhbiB8IEFycmF5PHN0cmluZz5cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFBhcnNlciBpbXBsZW1lbnRzIElQYXJzZXIge1xyXG4gIGFyZ3M6IEFycmF5PHN0cmluZz5cclxuICByb290UGF0aDogc3RyaW5nXHJcbiAgY29uZmlnTW9kaWZpZXJQYXRoOiBzdHJpbmdcclxuICBjb25maWc6IENvbmZpZ09iamVjdFxyXG4gIHRvb2xUb1VzZTogVG9vbE9iamVjdFxyXG4gIG91dHB1dDogSVBhcnNlck91dHB1dFxyXG5cclxuICBjb25zdHJ1Y3RvcihhcmdzOiBBcnJheTxzdHJpbmc+ID0gW10pIHtcclxuICAgIHRoaXMuYXJncyA9IGFyZ3NcclxuICAgIHRoaXMucm9vdFBhdGggPSBnbG9iYWxQYXRocy5jYWxsaW5nRGlyXHJcbiAgICB0aGlzLmNvbmZpZ01vZGlmaWVyUGF0aCA9IGdsb2JhbFBhdGhzLnByb2plY3RDb25maWdTdWJQYXRoXHJcbiAgICB0aGlzLnNldENvbmZpZ3VyYXRpb25QYXRoKClcclxuICAgIHRoaXMuY29uZmlnID0gdGhpcy5zZXRDb25maWcoKVxyXG4gICAgdGhpcy50b29sVG9Vc2UgPSB0aGlzLnNldFRvb2woKVxyXG4gICAgdGhpcy5vdXRwdXQgPSB0aGlzLnNldE91dHB1dCgpXHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldENvbmZpZ3VyYXRpb25QYXRoKCkge1xyXG4gICAgdGhpcy5zZXRJZlByZXNlbnQoJy0tY29uZmlnJywgJ2NvbmZpZ01vZGlmaWVyUGF0aCcpXHJcbiAgICB0aGlzLnNldElmUHJlc2VudCgnLS1yb290UGF0aCcsICdyb290UGF0aCcsIHJwID0+IHtcclxuICAgICAgcmV0dXJuIHBhdGgucmVzb2x2ZShycClcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldElmUHJlc2VudChcclxuICAgIGZsYWc6IHN0cmluZyxcclxuICAgIHNldFZhbDogJ3Jvb3RQYXRoJyB8ICdjb25maWdNb2RpZmllclBhdGgnLFxyXG4gICAgY2FsbGJhY2s6IChpOiBzdHJpbmcpID0+IHN0cmluZyA9IGkgPT4ge1xyXG4gICAgICByZXR1cm4gaVxyXG4gICAgfVxyXG4gICkge1xyXG4gICAgaWYgKHRoaXMuYXJncy5pbmNsdWRlcyhmbGFnKSkge1xyXG4gICAgICBjb25zdCB2YWw6IHN0cmluZyA9IHRoaXMuYXJnc1t0aGlzLmFyZ3MuaW5kZXhPZihmbGFnKSArIDFdXHJcblxyXG4gICAgICBpZiAodmFsICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICB0aGlzW3NldFZhbF0gPSBjYWxsYmFjayh2YWwpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhyb3cgRXJyb3IoXHJcbiAgICAgICAgICBgWW91IHN1cHBsaWVkIHRoZSAke2ZsYWd9IGZsYWcgYnV0IGRpZCBub3QgcHJvdmlkZSBhIHZhbHVlLmBcclxuICAgICAgICApXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0Q29uZmlnKCk6IENvbmZpZ09iamVjdCB7XHJcbiAgICByZXR1cm4gbmV3IENvbmZpZ3VyYXRvcih7XHJcbiAgICAgIHJvb3RQYXRoOiB0aGlzLnJvb3RQYXRoLFxyXG4gICAgICBwcm9qZWN0Q29uZmlnU3ViUGF0aDogdGhpcy5jb25maWdNb2RpZmllclBhdGhcclxuICAgIH0pLnJlc3VsdFxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRUb29sKCk6IFRvb2xPYmplY3Qge1xyXG4gICAgY29uc3QgdG9vbHM6IEFycmF5PFRvb2xPYmplY3Q+ID0gdGhpcy5jb25maWcudG9vbHNcclxuICAgIGNvbnN0IHRvb2xNYXRjaGVyczogQXJyYXk8c3RyaW5nPiA9IHRvb2xzLm1hcCh0ID0+IHtcclxuICAgICAgcmV0dXJuIHQubWF0Y2hlclxyXG4gICAgfSlcclxuICAgIGNvbnN0IGZpcnN0QXJnOiBzdHJpbmcgPSB0aGlzLmFyZ3NbMF1cclxuXHJcbiAgICBpZiAoXHJcbiAgICAgICgvXlthLXpBLVowLTldJC8udGVzdChmaXJzdEFyZykgJiYgIXRvb2xNYXRjaGVycy5pbmNsdWRlcyhmaXJzdEFyZykpIHx8XHJcbiAgICAgICh0b29scy5sZW5ndGggPiAxICYmIGZpcnN0QXJnID09PSB1bmRlZmluZWQpXHJcbiAgICApIHtcclxuICAgICAgdGhyb3cgRXJyb3IoXHJcbiAgICAgICAgYFlvdSBuZWVkIHRvIHByb3ZpZGUgYSB2YWxpZCB0b29sIG1hdGNoZXIuIFZhbGlkIHRvb2wgbWF0Y2hlcnMgaW5jbHVkZTogJHt0b29sTWF0Y2hlcnMuam9pbihcclxuICAgICAgICAgICdcXG4nXHJcbiAgICAgICAgKX1gXHJcbiAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdG9vbHNbdG9vbE1hdGNoZXJzLmluZGV4T2YoZmlyc3RBcmcpXSB8fCB0b29sc1swXVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRPdXRwdXQoKSB7XHJcbiAgICBsZXQgb3V0cHV0OiBJUGFyc2VyT3V0cHV0ID0gdGhpcy5zZXREZWZhdWx0T3V0cHV0KClcclxuXHJcbiAgICBpZiAoT2JqZWN0LmtleXMob3V0cHV0KS5sZW5ndGggIT09IDApIHtcclxuICAgICAgY29uc3QgZmxhZ3MgPSB0aGlzLnRvb2xUb1VzZS5mbGFnc1xyXG4gICAgICBjb25zdCBhcmdzID0gdGhpcy5hcmdzXHJcblxyXG4gICAgICBhcmdzLmZvckVhY2goKGEsIGkpID0+IHtcclxuICAgICAgICBjb25zdCBmbGFnID0gZmxhZ3MuZmluZChmID0+IGYubWF0Y2hlcnMuaW5jbHVkZXMoYSkpXHJcblxyXG4gICAgICAgIGlmIChmbGFnICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgIHN3aXRjaCAoZmxhZy50eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ2Jvb2xlYW4nOlxyXG4gICAgICAgICAgICAgIGNvbnN0IG5leHRBcmcgPSBhcmdzW2kgKyAxXVxyXG4gICAgICAgICAgICAgIGlmIChuZXh0QXJnICE9PSB1bmRlZmluZWQgJiYgIS9eLS4rLy50ZXN0KG5leHRBcmcpKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcihcclxuICAgICAgICAgICAgICAgICAgYFlvdSBwcm92aWRlZCBhIHZhbHVlIGZvciB0aGUgJHtcclxuICAgICAgICAgICAgICAgICAgICBmbGFnLm5hbWVcclxuICAgICAgICAgICAgICAgICAgfSBmbGFnLCBidXQgaXQgaXMgYSBib29sZWFuIGZsYWcuYFxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBvdXRwdXRbZmxhZy5uYW1lXSA9IHRydWVcclxuICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICBjYXNlICdzdHJpbmcnOlxyXG4gICAgICAgICAgICAgIGNvbnN0IHZhbCA9IGFyZ3NbaSArIDFdXHJcbiAgICAgICAgICAgICAgaWYgKHZhbCAhPT0gdW5kZWZpbmVkICYmICEvXi0uKy8udGVzdCh2YWwpKSB7XHJcbiAgICAgICAgICAgICAgICBvdXRwdXRbZmxhZy5uYW1lXSA9IHZhbFxyXG4gICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoXHJcbiAgICAgICAgICAgICAgICAgIGBZb3UgbmVlZCB0byBwcm92aWRlIGEgdmFsdWUgZm9yIHRoZSAke2ZsYWcubmFtZX0gZmxhZy5gXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlICdhcnJheSc6XHJcbiAgICAgICAgICAgICAgY29uc3QgcG9zc2libGVBcmdzOiBzdHJpbmdbXSA9IGFyZ3Muc2xpY2UoaSArIDEpXHJcbiAgICAgICAgICAgICAgY29uc3QgbmV4dEZsYWc6IHN0cmluZyA9XHJcbiAgICAgICAgICAgICAgICBwb3NzaWJsZUFyZ3MuZmluZChhID0+IC9eLS4rLy50ZXN0KGEpKSB8fCAnJ1xyXG4gICAgICAgICAgICAgIGNvbnN0IG5leHRGbGFnSW5kZXggPVxyXG4gICAgICAgICAgICAgICAgbmV4dEZsYWcgPT09ICcnXHJcbiAgICAgICAgICAgICAgICAgID8gcG9zc2libGVBcmdzLmxlbmd0aFxyXG4gICAgICAgICAgICAgICAgICA6IHBvc3NpYmxlQXJncy5pbmRleE9mKG5leHRGbGFnKVxyXG4gICAgICAgICAgICAgIGNvbnN0IHZhbHM6IHN0cmluZ1tdID0gcG9zc2libGVBcmdzLnNsaWNlKDAsIG5leHRGbGFnSW5kZXgpXHJcbiAgICAgICAgICAgICAgaWYgKHZhbHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgb3V0cHV0W2ZsYWcubmFtZV0gPSB2YWxzXHJcbiAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcihcclxuICAgICAgICAgICAgICAgICAgYFlvdSBuZWVkIHRvIHByb3ZpZGUgYSB2YWx1ZSBmb3IgdGhlICR7ZmxhZy5uYW1lfSBmbGFnLmBcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBvdXRwdXRcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0RGVmYXVsdE91dHB1dCgpOiBJUGFyc2VyT3V0cHV0IHtcclxuICAgIGxldCBvdXRwdXQ6IElQYXJzZXJPdXRwdXQgPSB7fVxyXG5cclxuICAgIGlmICh0aGlzLnRvb2xUb1VzZSAhPT0gdW5kZWZpbmVkICYmIHRoaXMudG9vbFRvVXNlLmZsYWdzICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhpcy50b29sVG9Vc2UuZmxhZ3MuZm9yRWFjaChmID0+IHtcclxuICAgICAgICBzd2l0Y2ggKGYudHlwZSkge1xyXG4gICAgICAgICAgY2FzZSAnYm9vbGVhbic6XHJcbiAgICAgICAgICAgIG91dHB1dFtmLm5hbWVdID0gZmFsc2VcclxuICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgIGNhc2UgJ3N0cmluZyc6XHJcbiAgICAgICAgICAgIG91dHB1dFtmLm5hbWVdID0gJydcclxuICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgIGNhc2UgJ2FycmF5JzpcclxuICAgICAgICAgICAgb3V0cHV0W2YubmFtZV0gPSBbXVxyXG4gICAgICAgICAgICBicmVha1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gb3V0cHV0XHJcbiAgfVxyXG59XHJcbiJdfQ==