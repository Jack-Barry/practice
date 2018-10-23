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
                output[flag.name] = true;
                break;

              case 'string':
                var val = _args[i + 1];

                if (val !== undefined) {
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
                var nextFlagIndex = possibleArgs.indexOf(nextFlag);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9QYXJzZXIvUGFyc2VyLnRzIl0sIm5hbWVzIjpbImdsb2JhbFBhdGhzIiwiUGF0aHMiLCJQYXJzZXIiLCJhcmdzIiwicm9vdFBhdGgiLCJjYWxsaW5nRGlyIiwiY29uZmlnTW9kaWZpZXJQYXRoIiwicHJvamVjdENvbmZpZ1N1YlBhdGgiLCJzZXRDb25maWd1cmF0aW9uUGF0aCIsImNvbmZpZyIsInNldENvbmZpZyIsInRvb2xUb1VzZSIsInNldFRvb2wiLCJvdXRwdXQiLCJzZXRPdXRwdXQiLCJzZXRJZlByZXNlbnQiLCJycCIsInBhdGgiLCJyZXNvbHZlIiwiZmxhZyIsInNldFZhbCIsImNhbGxiYWNrIiwiaSIsImluY2x1ZGVzIiwidmFsIiwiaW5kZXhPZiIsInVuZGVmaW5lZCIsIkVycm9yIiwiQ29uZmlndXJhdG9yIiwicmVzdWx0IiwidG9vbHMiLCJ0b29sTWF0Y2hlcnMiLCJtYXAiLCJ0IiwibWF0Y2hlciIsImZpcnN0QXJnIiwidGVzdCIsImxlbmd0aCIsImpvaW4iLCJzZXREZWZhdWx0T3V0cHV0IiwiT2JqZWN0Iiwia2V5cyIsImZsYWdzIiwiZm9yRWFjaCIsImEiLCJmaW5kIiwiZiIsIm1hdGNoZXJzIiwidHlwZSIsIm5hbWUiLCJwb3NzaWJsZUFyZ3MiLCJzbGljZSIsIm5leHRGbGFnIiwibmV4dEZsYWdJbmRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQU1BOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsV0FBa0IsR0FBRyxJQUFJQyxjQUFKLEVBQTNCOztJQWVhQyxNOzs7QUFRWCxvQkFBc0M7QUFBQSxRQUExQkMsSUFBMEIsdUVBQUosRUFBSTs7QUFBQTs7QUFDcEMsU0FBS0EsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsU0FBS0MsUUFBTCxHQUFnQkosV0FBVyxDQUFDSyxVQUE1QjtBQUNBLFNBQUtDLGtCQUFMLEdBQTBCTixXQUFXLENBQUNPLG9CQUF0QztBQUNBLFNBQUtDLG9CQUFMO0FBQ0EsU0FBS0MsTUFB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QWlCLEtBQWpCO0FBQ0E7O0FBQ0YsaUJBQUssUUFBTDtBQUNFcEMsY0FBQUEsTUFBTSxDQUFDaUMsQ0FBQyxDQUFDRyxJQUFILENBQU4sR0FBaUIsRUFBakI7QUFDQTs7QUFDRixpQkFBSyxPQUFMO0FBQ0VwQyxjQUFBQSxNQUFNLENBQUNpQyxDQUFDLENBQUNHLElBQUgsQ0FBTixHQUFpQixFQUFqQjtBQUNBO0FBVEo7QUFXRCxTQVpEO0FBYUQ7O0FBRUQsYUFBT3BDLE1BQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBhdGhzIH0gZnJvbSAnLi8uLi9nbG9iYWxzJ1xuaW1wb3J0IHtcbiAgVG9vbE9iamVjdCxcbiAgRmxhZ09iamVjdCxcbiAgQ29uZmlnT2JqZWN0LFxuICBDb25maWd1cmF0b3Jcbn0gZnJvbSAnLi8uLi9Db25maWd1cmF0b3InXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xuXG5jb25zdCBnbG9iYWxQYXRoczogUGF0aHMgPSBuZXcgUGF0aHMoKVxuXG5pbnRlcmZhY2UgSVBhcnNlciB7XG4gIGFyZ3M6IEFycmF5PHN0cmluZz5cbiAgcm9vdFBhdGg6IHN0cmluZ1xuICBjb25maWdNb2RpZmllclBhdGg6IHN0cmluZ1xuICBjb25maWc6IENvbmZpZ09iamVjdFxuICB0b29sVG9Vc2U6IFRvb2xPYmplY3RcbiAgb3V0cHV0OiBJUGFyc2VyT3V0cHV0XG59XG5cbmludGVyZmFjZSBJUGFyc2VyT3V0cHV0IHtcbiAgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgYm9vbGVhbiB8IEFycmF5PHN0cmluZz5cbn1cblxuZXhwb3J0IGNsYXNzIFBhcnNlciBpbXBsZW1lbnRzIElQYXJzZXIge1xuICBhcmdzOiBBcnJheTxzdHJpbmc+XG4gIHJvb3RQYXRoOiBzdHJpbmdcbiAgY29uZmlnTW9kaWZpZXJQYXRoOiBzdHJpbmdcbiAgY29uZmlnOiBDb25maWdPYmplY3RcbiAgdG9vbFRvVXNlOiBUb29sT2JqZWN0XG4gIG91dHB1dDogSVBhcnNlck91dHB1dFxuXG4gIGNvbnN0cnVjdG9yKGFyZ3M6IEFycmF5PHN0cmluZz4gPSBbXSkge1xuICAgIHRoaXMuYXJncyA9IGFyZ3NcbiAgICB0aGlzLnJvb3RQYXRoID0gZ2xvYmFsUGF0aHMuY2FsbGluZ0RpclxuICAgIHRoaXMuY29uZmlnTW9kaWZpZXJQYXRoID0gZ2xvYmFsUGF0aHMucHJvamVjdENvbmZpZ1N1YlBhdGhcbiAgICB0aGlzLnNldENvbmZpZ3VyYXRpb25QYXRoKClcbiAgICB0aGlzLmNvbmZpZyA9IHRoaXMuc2V0Q29uZmlnKClcbiAgICB0aGlzLnRvb2xUb1VzZSA9IHRoaXMuc2V0VG9vbCgpXG4gICAgdGhpcy5vdXRwdXQgPSB0aGlzLnNldE91dHB1dCgpXG4gIH1cblxuICBwcml2YXRlIHNldENvbmZpZ3VyYXRpb25QYXRoKCkge1xuICAgIHRoaXMuc2V0SWZQcmVzZW50KCctLWNvbmZpZycsICdjb25maWdNb2RpZmllclBhdGgnKVxuICAgIHRoaXMuc2V0SWZQcmVzZW50KCctLXJvb3RQYXRoJywgJ3Jvb3RQYXRoJywgcnAgPT4ge1xuICAgICAgcmV0dXJuIHBhdGgucmVzb2x2ZShycClcbiAgICB9KVxuICB9XG5cbiAgcHJpdmF0ZSBzZXRJZlByZXNlbnQoXG4gICAgZmxhZzogc3RyaW5nLFxuICAgIHNldFZhbDogJ3Jvb3RQYXRoJyB8ICdjb25maWdNb2RpZmllclBhdGgnLFxuICAgIGNhbGxiYWNrOiAoaTogc3RyaW5nKSA9PiBzdHJpbmcgPSBpID0+IHtcbiAgICAgIHJldHVybiBpXG4gICAgfVxuICApIHtcbiAgICBpZiAodGhpcy5hcmdzLmluY2x1ZGVzKGZsYWcpKSB7XG4gICAgICBjb25zdCB2YWw6IHN0cmluZyA9IHRoaXMuYXJnc1t0aGlzLmFyZ3MuaW5kZXhPZihmbGFnKSArIDFdXG5cbiAgICAgIGlmICh2YWwgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzW3NldFZhbF0gPSBjYWxsYmFjayh2YWwpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBFcnJvcihcbiAgICAgICAgICBgWW91IHN1cHBsaWVkIHRoZSAke2ZsYWd9IGZsYWcgYnV0IGRpZCBub3QgcHJvdmlkZSBhIHZhbHVlLmBcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2V0Q29uZmlnKCk6IENvbmZpZ09iamVjdCB7XG4gICAgcmV0dXJuIG5ldyBDb25maWd1cmF0b3Ioe1xuICAgICAgcm9vdFBhdGg6IHRoaXMucm9vdFBhdGgsXG4gICAgICBwcm9qZWN0Q29uZmlnU3ViUGF0aDogdGhpcy5jb25maWdNb2RpZmllclBhdGhcbiAgICB9KS5yZXN1bHRcbiAgfVxuXG4gIHByaXZhdGUgc2V0VG9vbCgpOiBUb29sT2JqZWN0IHtcbiAgICBjb25zdCB0b29sczogQXJyYXk8VG9vbE9iamVjdD4gPSB0aGlzLmNvbmZpZy50b29sc1xuICAgIGNvbnN0IHRvb2xNYXRjaGVyczogQXJyYXk8c3RyaW5nPiA9IHRvb2xzLm1hcCh0ID0+IHtcbiAgICAgIHJldHVybiB0Lm1hdGNoZXJcbiAgICB9KVxuICAgIGNvbnN0IGZpcnN0QXJnOiBzdHJpbmcgPSB0aGlzLmFyZ3NbMF1cblxuICAgIGlmIChcbiAgICAgICgvXlthLXpBLVowLTldJC8udGVzdChmaXJzdEFyZykgJiYgIXRvb2xNYXRjaGVycy5pbmNsdWRlcyhmaXJzdEFyZykpIHx8XG4gICAgICAodG9vbHMubGVuZ3RoID4gMSAmJiBmaXJzdEFyZyA9PT0gdW5kZWZpbmVkKVxuICAgICkge1xuICAgICAgdGhyb3cgRXJyb3IoXG4gICAgICAgIGBZb3UgbmVlZCB0byBwcm92aWRlIGEgdmFsaWQgdG9vbCBtYXRjaGVyLiBWYWxpZCB0b29sIG1hdGNoZXJzIGluY2x1ZGU6ICR7dG9vbE1hdGNoZXJzLmpvaW4oXG4gICAgICAgICAgJ1xcbidcbiAgICAgICAgKX1gXG4gICAgICApXG4gICAgfVxuXG4gICAgcmV0dXJuIHRvb2xzW3Rvb2xNYXRjaGVycy5pbmRleE9mKGZpcnN0QXJnKV0gfHwgdG9vbHNbMF1cbiAgfVxuXG4gIHByaXZhdGUgc2V0T3V0cHV0KCkge1xuICAgIGxldCBvdXRwdXQ6IElQYXJzZXJPdXRwdXQgPSB0aGlzLnNldERlZmF1bHRPdXRwdXQoKVxuXG4gICAgaWYgKE9iamVjdC5rZXlzKG91dHB1dCkubGVuZ3RoICE9PSAwKSB7XG4gICAgICBjb25zdCBmbGFncyA9IHRoaXMudG9vbFRvVXNlLmZsYWdzXG4gICAgICBjb25zdCBhcmdzID0gdGhpcy5hcmdzXG5cbiAgICAgIGFyZ3MuZm9yRWFjaCgoYSwgaSkgPT4ge1xuICAgICAgICBjb25zdCBmbGFnID0gZmxhZ3MuZmluZChmID0+IGYubWF0Y2hlcnMuaW5jbHVkZXMoYSkpXG5cbiAgICAgICAgaWYgKGZsYWcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHN3aXRjaCAoZmxhZy50eXBlKSB7XG4gICAgICAgICAgICBjYXNlICdib29sZWFuJzpcbiAgICAgICAgICAgICAgb3V0cHV0W2ZsYWcubmFtZV0gPSB0cnVlXG4gICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgICAgICAgICBjb25zdCB2YWwgPSBhcmdzW2kgKyAxXVxuICAgICAgICAgICAgICBpZiAodmFsICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBvdXRwdXRbZmxhZy5uYW1lXSA9IHZhbFxuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoXG4gICAgICAgICAgICAgICAgICBgWW91IG5lZWQgdG8gcHJvdmlkZSBhIHZhbHVlIGZvciB0aGUgJHtmbGFnLm5hbWV9IGZsYWcuYFxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSAnYXJyYXknOlxuICAgICAgICAgICAgICBjb25zdCBwb3NzaWJsZUFyZ3M6IHN0cmluZ1tdID0gYXJncy5zbGljZShpICsgMSlcbiAgICAgICAgICAgICAgY29uc3QgbmV4dEZsYWc6IHN0cmluZyA9XG4gICAgICAgICAgICAgICAgcG9zc2libGVBcmdzLmZpbmQoYSA9PiAvXi0uKy8udGVzdChhKSkgfHwgJydcbiAgICAgICAgICAgICAgY29uc3QgbmV4dEZsYWdJbmRleCA9IHBvc3NpYmxlQXJncy5pbmRleE9mKG5leHRGbGFnKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4gb3V0cHV0XG4gIH1cblxuICBwcml2YXRlIHNldERlZmF1bHRPdXRwdXQoKTogSVBhcnNlck91dHB1dCB7XG4gICAgbGV0IG91dHB1dDogSVBhcnNlck91dHB1dCA9IHt9XG5cbiAgICBpZiAodGhpcy50b29sVG9Vc2UgIT09IHVuZGVmaW5lZCAmJiB0aGlzLnRvb2xUb1VzZS5mbGFncyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLnRvb2xUb1VzZS5mbGFncy5mb3JFYWNoKGYgPT4ge1xuICAgICAgICBzd2l0Y2ggKGYudHlwZSkge1xuICAgICAgICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAgICAgICAgb3V0cHV0W2YubmFtZV0gPSBmYWxzZVxuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgICAgICAgb3V0cHV0W2YubmFtZV0gPSAnJ1xuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICBjYXNlICdhcnJheSc6XG4gICAgICAgICAgICBvdXRwdXRbZi5uYW1lXSA9IFtdXG4gICAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybiBvdXRwdXRcbiAgfVxufVxuIl19