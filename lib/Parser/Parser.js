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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9QYXJzZXIvUGFyc2VyLnRzIl0sIm5hbWVzIjpbImdsb2JhbFBhdGhzIiwiUGF0aHMiLCJQYXJzZXIiLCJhcmdzIiwicm9vdFBhdGgiLCJjYWxsaW5nRGlyIiwiY29uZmlnTW9kaWZpZXJQYXRoIiwicHJvamVjdENvbmZpZ1N1YlBhdGgiLCJzZXRDb25maWd1cmF0aW9uUGF0aCIsImNvbmZpZyIsInNldENvbmZpZyIsInRvb2xUb1VzZSIsInNldFRvb2wiLCJvdXRwdXQiLCJzZXRPdXRwdXQiLCJzZXRJZlByZXNlbnQiLCJycCIsInBhdGgiLCJyZXNvbHZlIiwiZmxhZyIsInNldFZhbCIsImNhbGxiYWNrIiwiaSIsImluY2x1ZGVzIiwidmFsIiwiaW5kZXhPZiIsInVuZGVmaW5lZCIsIkVycm9yIiwiQ29uZmlndXJhdG9yIiwicmVzdWx0IiwidG9vbHMiLCJ0b29sTWF0Y2hlcnMiLCJtYXAiLCJ0IiwibWF0Y2hlciIsImZpcnN0QXJnIiwidGVzdCIsImxlbmd0aCIsImpvaW4iLCJzZXREZWZhdWx0T3V0cHV0IiwiT2JqZWN0Iiwia2V5cyIsImZsYWdzIiwiZm9yRWFjaCIsImEiLCJmaW5kIiwiZiIsIm1hdGNoZXJzIiwidHlwZSIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFNQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFdBQWtCLEdBQUcsSUFBSUMsY0FBSixFQUEzQjs7SUFlYUMsTTs7O0FBUVgsb0JBQXNDO0FBQUEsUUFBMUJDLElBQTBCLHVFQUFKLEVBQUk7O0FBQUE7O0FBQ3BDLFNBQUtBLElBQUwsR0FBWUEsSUFBWjtBQUNBLFNBQUtDLFFBQUwsR0FBZ0JKLFdBQVcsQ0FBQ0ssVUFBNUI7QUFDQSxTQUFLQyxrQkFBTCxHQUEwQk4sV0FBVyxDQUFDTyxvQkFBdEM7QUFDQSxTQUFLQyxvQkFBTDtBQUNBLFNBQUtDLE1BQUwsR0FBYyxLQUFLQyxTQUFMLEVBQWQ7QUFDQSxTQUFLQyxTQUFMLEdBQWlCLEtBQUtD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QUFDQTs7QUFDRixtQkFBSyxRQUFMO0FBQ0Usb0JBQU16QixHQUFHLEdBQUdyQixLQUFJLENBQUNtQixDQUFDLEdBQUcsQ0FBTCxDQUFoQjs7QUFDQSxvQkFBSUUsR0FBRyxLQUFLRSxTQUFaLEVBQXVCO0FBQ3JCYixrQkFBQUEsTUFBTSxDQUFDTSxJQUFJLENBQUM4QixJQUFOLENBQU4sR0FBb0J6QixHQUFwQjtBQUNBO0FBQ0QsaUJBSEQsTUFHTztBQUNMLHdCQUFNRyxLQUFLLCtDQUM4QlIsSUFBSSxDQUFDOEIsSUFEbkMsWUFBWDtBQUdEOztBQWJMO0FBZUQ7QUFDRixTQXBCRDtBQXFCRDs7QUFFRCxhQUFPcEMsTUFBUDtBQUNEOzs7dUNBRXlDO0FBQ3hDLFVBQUlBLE1BQXFCLEdBQUcsRUFBNUI7O0FBRUEsVUFBSSxLQUFLRixTQUFMLEtBQW1CZSxTQUFuQixJQUFnQyxLQUFLZixTQUFMLENBQWUrQixLQUFmLEtBQXlCaEIsU0FBN0QsRUFBd0U7QUFDdEUsYUFBS2YsU0FBTCxDQUFlK0IsS0FBZixDQUFxQkMsT0FBckIsQ0FBNkIsVUFBQUcsQ0FBQyxFQUFJO0FBQ2hDLGtCQUFRQSxDQUFDLENBQUNFLElBQVY7QUFDRSxpQkFBSyxTQUFMO0FBQ0VuQyxjQUFBQSxNQUFNLENBQUNpQyxDQUFDLENBQUNHLElBQUgsQ0FBTixHQUFpQixLQUFqQjtBQUNBOztBQUNGLGlCQUFLLFFBQUw7QUFDRXBDLGNBQUFBLE1BQU0sQ0FBQ2lDLENBQUMsQ0FBQ0csSUFBSCxDQUFOLEdBQWlCLEVBQWpCO0FBQ0E7O0FBQ0YsaUJBQUssT0FBTDtBQUNFcEMsY0FBQUEsTUFBTSxDQUFDaUMsQ0FBQyxDQUFDRyxJQUFILENBQU4sR0FBaUIsRUFBakI7QUFDQTtBQVRKO0FBV0QsU0FaRDtBQWFEOztBQUVELGFBQU9wQyxNQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQYXRocyB9IGZyb20gJy4vLi4vZ2xvYmFscydcbmltcG9ydCB7XG4gIFRvb2xPYmplY3QsXG4gIEZsYWdPYmplY3QsXG4gIENvbmZpZ09iamVjdCxcbiAgQ29uZmlndXJhdG9yXG59IGZyb20gJy4vLi4vQ29uZmlndXJhdG9yJ1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCdcblxuY29uc3QgZ2xvYmFsUGF0aHM6IFBhdGhzID0gbmV3IFBhdGhzKClcblxuaW50ZXJmYWNlIElQYXJzZXIge1xuICBhcmdzOiBBcnJheTxzdHJpbmc+XG4gIHJvb3RQYXRoOiBzdHJpbmdcbiAgY29uZmlnTW9kaWZpZXJQYXRoOiBzdHJpbmdcbiAgY29uZmlnOiBDb25maWdPYmplY3RcbiAgdG9vbFRvVXNlOiBUb29sT2JqZWN0XG4gIG91dHB1dDogSVBhcnNlck91dHB1dFxufVxuXG5pbnRlcmZhY2UgSVBhcnNlck91dHB1dCB7XG4gIFtrZXk6IHN0cmluZ106IHN0cmluZyB8IGJvb2xlYW4gfCBBcnJheTxzdHJpbmc+XG59XG5cbmV4cG9ydCBjbGFzcyBQYXJzZXIgaW1wbGVtZW50cyBJUGFyc2VyIHtcbiAgYXJnczogQXJyYXk8c3RyaW5nPlxuICByb290UGF0aDogc3RyaW5nXG4gIGNvbmZpZ01vZGlmaWVyUGF0aDogc3RyaW5nXG4gIGNvbmZpZzogQ29uZmlnT2JqZWN0XG4gIHRvb2xUb1VzZTogVG9vbE9iamVjdFxuICBvdXRwdXQ6IElQYXJzZXJPdXRwdXRcblxuICBjb25zdHJ1Y3RvcihhcmdzOiBBcnJheTxzdHJpbmc+ID0gW10pIHtcbiAgICB0aGlzLmFyZ3MgPSBhcmdzXG4gICAgdGhpcy5yb290UGF0aCA9IGdsb2JhbFBhdGhzLmNhbGxpbmdEaXJcbiAgICB0aGlzLmNvbmZpZ01vZGlmaWVyUGF0aCA9IGdsb2JhbFBhdGhzLnByb2plY3RDb25maWdTdWJQYXRoXG4gICAgdGhpcy5zZXRDb25maWd1cmF0aW9uUGF0aCgpXG4gICAgdGhpcy5jb25maWcgPSB0aGlzLnNldENvbmZpZygpXG4gICAgdGhpcy50b29sVG9Vc2UgPSB0aGlzLnNldFRvb2woKVxuICAgIHRoaXMub3V0cHV0ID0gdGhpcy5zZXRPdXRwdXQoKVxuICB9XG5cbiAgcHJpdmF0ZSBzZXRDb25maWd1cmF0aW9uUGF0aCgpIHtcbiAgICB0aGlzLnNldElmUHJlc2VudCgnLS1jb25maWcnLCAnY29uZmlnTW9kaWZpZXJQYXRoJylcbiAgICB0aGlzLnNldElmUHJlc2VudCgnLS1yb290UGF0aCcsICdyb290UGF0aCcsIHJwID0+IHtcbiAgICAgIHJldHVybiBwYXRoLnJlc29sdmUocnApXG4gICAgfSlcbiAgfVxuXG4gIHByaXZhdGUgc2V0SWZQcmVzZW50KFxuICAgIGZsYWc6IHN0cmluZyxcbiAgICBzZXRWYWw6ICdyb290UGF0aCcgfCAnY29uZmlnTW9kaWZpZXJQYXRoJyxcbiAgICBjYWxsYmFjazogKGk6IHN0cmluZykgPT4gc3RyaW5nID0gaSA9PiB7XG4gICAgICByZXR1cm4gaVxuICAgIH1cbiAgKSB7XG4gICAgaWYgKHRoaXMuYXJncy5pbmNsdWRlcyhmbGFnKSkge1xuICAgICAgY29uc3QgdmFsOiBzdHJpbmcgPSB0aGlzLmFyZ3NbdGhpcy5hcmdzLmluZGV4T2YoZmxhZykgKyAxXVxuXG4gICAgICBpZiAodmFsICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpc1tzZXRWYWxdID0gY2FsbGJhY2sodmFsKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgRXJyb3IoXG4gICAgICAgICAgYFlvdSBzdXBwbGllZCB0aGUgJHtmbGFnfSBmbGFnIGJ1dCBkaWQgbm90IHByb3ZpZGUgYSB2YWx1ZS5gXG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHNldENvbmZpZygpOiBDb25maWdPYmplY3Qge1xuICAgIHJldHVybiBuZXcgQ29uZmlndXJhdG9yKHtcbiAgICAgIHJvb3RQYXRoOiB0aGlzLnJvb3RQYXRoLFxuICAgICAgcHJvamVjdENvbmZpZ1N1YlBhdGg6IHRoaXMuY29uZmlnTW9kaWZpZXJQYXRoXG4gICAgfSkucmVzdWx0XG4gIH1cblxuICBwcml2YXRlIHNldFRvb2woKTogVG9vbE9iamVjdCB7XG4gICAgY29uc3QgdG9vbHM6IEFycmF5PFRvb2xPYmplY3Q+ID0gdGhpcy5jb25maWcudG9vbHNcbiAgICBjb25zdCB0b29sTWF0Y2hlcnM6IEFycmF5PHN0cmluZz4gPSB0b29scy5tYXAodCA9PiB7XG4gICAgICByZXR1cm4gdC5tYXRjaGVyXG4gICAgfSlcbiAgICBjb25zdCBmaXJzdEFyZzogc3RyaW5nID0gdGhpcy5hcmdzWzBdXG5cbiAgICBpZiAoXG4gICAgICAoL15bYS16QS1aMC05XSQvLnRlc3QoZmlyc3RBcmcpICYmICF0b29sTWF0Y2hlcnMuaW5jbHVkZXMoZmlyc3RBcmcpKSB8fFxuICAgICAgKHRvb2xzLmxlbmd0aCA+IDEgJiYgZmlyc3RBcmcgPT09IHVuZGVmaW5lZClcbiAgICApIHtcbiAgICAgIHRocm93IEVycm9yKFxuICAgICAgICBgWW91IG5lZWQgdG8gcHJvdmlkZSBhIHZhbGlkIHRvb2wgbWF0Y2hlci4gVmFsaWQgdG9vbCBtYXRjaGVycyBpbmNsdWRlOiAke3Rvb2xNYXRjaGVycy5qb2luKFxuICAgICAgICAgICdcXG4nXG4gICAgICAgICl9YFxuICAgICAgKVxuICAgIH1cblxuICAgIHJldHVybiB0b29sc1t0b29sTWF0Y2hlcnMuaW5kZXhPZihmaXJzdEFyZyldIHx8IHRvb2xzWzBdXG4gIH1cblxuICBwcml2YXRlIHNldE91dHB1dCgpIHtcbiAgICBsZXQgb3V0cHV0OiBJUGFyc2VyT3V0cHV0ID0gdGhpcy5zZXREZWZhdWx0T3V0cHV0KClcblxuICAgIGlmIChPYmplY3Qua2V5cyhvdXRwdXQpLmxlbmd0aCAhPT0gMCkge1xuICAgICAgY29uc3QgZmxhZ3MgPSB0aGlzLnRvb2xUb1VzZS5mbGFnc1xuICAgICAgY29uc3QgYXJncyA9IHRoaXMuYXJnc1xuXG4gICAgICBhcmdzLmZvckVhY2goKGEsIGkpID0+IHtcbiAgICAgICAgY29uc3QgZmxhZyA9IGZsYWdzLmZpbmQoZiA9PiBmLm1hdGNoZXJzLmluY2x1ZGVzKGEpKVxuXG4gICAgICAgIGlmIChmbGFnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBzd2l0Y2ggKGZsYWcudHlwZSkge1xuICAgICAgICAgICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICAgICAgICAgIG91dHB1dFtmbGFnLm5hbWVdID0gdHJ1ZVxuICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgICAgICAgY29uc3QgdmFsID0gYXJnc1tpICsgMV1cbiAgICAgICAgICAgICAgaWYgKHZhbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgb3V0cHV0W2ZsYWcubmFtZV0gPSB2YWxcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRocm93IEVycm9yKFxuICAgICAgICAgICAgICAgICAgYFlvdSBuZWVkIHRvIHByb3ZpZGUgYSB2YWx1ZSBmb3IgdGhlICR7ZmxhZy5uYW1lfSBmbGFnLmBcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuIG91dHB1dFxuICB9XG5cbiAgcHJpdmF0ZSBzZXREZWZhdWx0T3V0cHV0KCk6IElQYXJzZXJPdXRwdXQge1xuICAgIGxldCBvdXRwdXQ6IElQYXJzZXJPdXRwdXQgPSB7fVxuXG4gICAgaWYgKHRoaXMudG9vbFRvVXNlICE9PSB1bmRlZmluZWQgJiYgdGhpcy50b29sVG9Vc2UuZmxhZ3MgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy50b29sVG9Vc2UuZmxhZ3MuZm9yRWFjaChmID0+IHtcbiAgICAgICAgc3dpdGNoIChmLnR5cGUpIHtcbiAgICAgICAgICBjYXNlICdib29sZWFuJzpcbiAgICAgICAgICAgIG91dHB1dFtmLm5hbWVdID0gZmFsc2VcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgICAgIG91dHB1dFtmLm5hbWVdID0gJydcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgY2FzZSAnYXJyYXknOlxuICAgICAgICAgICAgb3V0cHV0W2YubmFtZV0gPSBbXVxuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4gb3V0cHV0XG4gIH1cbn1cbiJdfQ==