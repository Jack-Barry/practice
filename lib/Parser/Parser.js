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
          }
        });
      }

      return output;
    }
  }]);

  return Parser;
}();

exports.Parser = Parser;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9QYXJzZXIvUGFyc2VyLnRzIl0sIm5hbWVzIjpbImdsb2JhbFBhdGhzIiwiUGF0aHMiLCJQYXJzZXIiLCJhcmdzIiwicm9vdFBhdGgiLCJjYWxsaW5nRGlyIiwiY29uZmlnTW9kaWZpZXJQYXRoIiwicHJvamVjdENvbmZpZ1N1YlBhdGgiLCJzZXRDb25maWd1cmF0aW9uUGF0aCIsImNvbmZpZyIsInNldENvbmZpZyIsInRvb2xUb1VzZSIsInNldFRvb2wiLCJvdXRwdXQiLCJzZXRPdXRwdXQiLCJzZXRJZlByZXNlbnQiLCJycCIsInBhdGgiLCJyZXNvbHZlIiwiZmxhZyIsInNldFZhbCIsImNhbGxiYWNrIiwiaSIsImluY2x1ZGVzIiwidmFsIiwiaW5kZXhPZiIsInVuZGVmaW5lZCIsIkVycm9yIiwiQ29uZmlndXJhdG9yIiwicmVzdWx0IiwidG9vbHMiLCJ0b29sTWF0Y2hlcnMiLCJtYXAiLCJ0IiwibWF0Y2hlciIsImZpcnN0QXJnIiwidGVzdCIsImxlbmd0aCIsImpvaW4iLCJzZXREZWZhdWx0T3V0cHV0IiwiT2JqZWN0Iiwia2V5cyIsImZsYWdzIiwiZm9yRWFjaCIsImEiLCJmaW5kIiwiZiIsIm1hdGNoZXJzIiwidHlwZSIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFNQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFdBQWtCLEdBQUcsSUFBSUMsY0FBSixFQUEzQjs7SUFlYUMsTTs7O0FBUVgsb0JBQXNDO0FBQUEsUUFBMUJDLElBQTBCLHVFQUFKLEVBQUk7O0FBQUE7O0FBQ3BDLFNBQUtBLElBQUwsR0FBWUEsSUFBWjtBQUNBLFNBQUtDLFFBQUwsR0FBZ0JKLFdBQVcsQ0FBQ0ssVUFBNUI7QUFDQSxTQUFLQyxrQkFBTCxHQUEwQk4sV0FBVyxDQUFDTyxvQkFBdEM7QUFDQSxTQUFLQyxvQkFBTDtBQUNBLFNBQUtDLE1BQUwsR0FBYyxLQUFLQyxTQUFMLEVBQWQ7QUFDQSxTQUFLQyxTQUFMLEdBQWlCLEtBQUtD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QUFDQTs7QUFDRixtQkFBSyxRQUFMO0FBQ0Usb0JBQU16QixHQUFHLEdBQUdyQixLQUFJLENBQUNtQixDQUFDLEdBQUcsQ0FBTCxDQUFoQjs7QUFDQSxvQkFBSUUsR0FBRyxLQUFLRSxTQUFaLEVBQXVCO0FBQ3JCYixrQkFBQUEsTUFBTSxDQUFDTSxJQUFJLENBQUM4QixJQUFOLENBQU4sR0FBb0J6QixHQUFwQjtBQUNBO0FBQ0QsaUJBSEQsTUFHTztBQUNMLHdCQUFNRyxLQUFLLCtDQUM4QlIsSUFBSSxDQUFDOEIsSUFEbkMsWUFBWDtBQUdEOztBQWJMO0FBZUQ7QUFDRixTQXBCRDtBQXFCRDs7QUFFRCxhQUFPcEMsTUFBUDtBQUNEOzs7dUNBRXlDO0FBQ3hDLFVBQUlBLE1BQXFCLEdBQUcsRUFBNUI7O0FBRUEsVUFBSSxLQUFLRixTQUFMLEtBQW1CZSxTQUFuQixJQUFnQyxLQUFLZixTQUFMLENBQWUrQixLQUFmLEtBQXlCaEIsU0FBN0QsRUFBd0U7QUFDdEUsYUFBS2YsU0FBTCxDQUFlK0IsS0FBZixDQUFxQkMsT0FBckIsQ0FBNkIsVUFBQUcsQ0FBQyxFQUFJO0FBQ2hDLGtCQUFRQSxDQUFDLENBQUNFLElBQVY7QUFDRSxpQkFBSyxTQUFMO0FBQ0VuQyxjQUFBQSxNQUFNLENBQUNpQyxDQUFDLENBQUNHLElBQUgsQ0FBTixHQUFpQixLQUFqQjtBQUNBOztBQUNGLGlCQUFLLFFBQUw7QUFDRXBDLGNBQUFBLE1BQU0sQ0FBQ2lDLENBQUMsQ0FBQ0csSUFBSCxDQUFOLEdBQWlCLEVBQWpCO0FBQ0E7QUFOSjtBQVFELFNBVEQ7QUFVRDs7QUFFRCxhQUFPcEMsTUFBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGF0aHMgfSBmcm9tICcuLy4uL2dsb2JhbHMnXG5pbXBvcnQge1xuICBUb29sT2JqZWN0LFxuICBGbGFnT2JqZWN0LFxuICBDb25maWdPYmplY3QsXG4gIENvbmZpZ3VyYXRvclxufSBmcm9tICcuLy4uL0NvbmZpZ3VyYXRvcidcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnXG5cbmNvbnN0IGdsb2JhbFBhdGhzOiBQYXRocyA9IG5ldyBQYXRocygpXG5cbmludGVyZmFjZSBJUGFyc2VyIHtcbiAgYXJnczogQXJyYXk8c3RyaW5nPlxuICByb290UGF0aDogc3RyaW5nXG4gIGNvbmZpZ01vZGlmaWVyUGF0aDogc3RyaW5nXG4gIGNvbmZpZzogQ29uZmlnT2JqZWN0XG4gIHRvb2xUb1VzZTogVG9vbE9iamVjdFxuICBvdXRwdXQ6IElQYXJzZXJPdXRwdXRcbn1cblxuaW50ZXJmYWNlIElQYXJzZXJPdXRwdXQge1xuICBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBib29sZWFuIHwgQXJyYXk8c3RyaW5nPlxufVxuXG5leHBvcnQgY2xhc3MgUGFyc2VyIGltcGxlbWVudHMgSVBhcnNlciB7XG4gIGFyZ3M6IEFycmF5PHN0cmluZz5cbiAgcm9vdFBhdGg6IHN0cmluZ1xuICBjb25maWdNb2RpZmllclBhdGg6IHN0cmluZ1xuICBjb25maWc6IENvbmZpZ09iamVjdFxuICB0b29sVG9Vc2U6IFRvb2xPYmplY3RcbiAgb3V0cHV0OiBJUGFyc2VyT3V0cHV0XG5cbiAgY29uc3RydWN0b3IoYXJnczogQXJyYXk8c3RyaW5nPiA9IFtdKSB7XG4gICAgdGhpcy5hcmdzID0gYXJnc1xuICAgIHRoaXMucm9vdFBhdGggPSBnbG9iYWxQYXRocy5jYWxsaW5nRGlyXG4gICAgdGhpcy5jb25maWdNb2RpZmllclBhdGggPSBnbG9iYWxQYXRocy5wcm9qZWN0Q29uZmlnU3ViUGF0aFxuICAgIHRoaXMuc2V0Q29uZmlndXJhdGlvblBhdGgoKVxuICAgIHRoaXMuY29uZmlnID0gdGhpcy5zZXRDb25maWcoKVxuICAgIHRoaXMudG9vbFRvVXNlID0gdGhpcy5zZXRUb29sKClcbiAgICB0aGlzLm91dHB1dCA9IHRoaXMuc2V0T3V0cHV0KClcbiAgfVxuXG4gIHByaXZhdGUgc2V0Q29uZmlndXJhdGlvblBhdGgoKSB7XG4gICAgdGhpcy5zZXRJZlByZXNlbnQoJy0tY29uZmlnJywgJ2NvbmZpZ01vZGlmaWVyUGF0aCcpXG4gICAgdGhpcy5zZXRJZlByZXNlbnQoJy0tcm9vdFBhdGgnLCAncm9vdFBhdGgnLCBycCA9PiB7XG4gICAgICByZXR1cm4gcGF0aC5yZXNvbHZlKHJwKVxuICAgIH0pXG4gIH1cblxuICBwcml2YXRlIHNldElmUHJlc2VudChcbiAgICBmbGFnOiBzdHJpbmcsXG4gICAgc2V0VmFsOiAncm9vdFBhdGgnIHwgJ2NvbmZpZ01vZGlmaWVyUGF0aCcsXG4gICAgY2FsbGJhY2s6IChpOiBzdHJpbmcpID0+IHN0cmluZyA9IGkgPT4ge1xuICAgICAgcmV0dXJuIGlcbiAgICB9XG4gICkge1xuICAgIGlmICh0aGlzLmFyZ3MuaW5jbHVkZXMoZmxhZykpIHtcbiAgICAgIGNvbnN0IHZhbDogc3RyaW5nID0gdGhpcy5hcmdzW3RoaXMuYXJncy5pbmRleE9mKGZsYWcpICsgMV1cblxuICAgICAgaWYgKHZhbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXNbc2V0VmFsXSA9IGNhbGxiYWNrKHZhbClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IEVycm9yKFxuICAgICAgICAgIGBZb3Ugc3VwcGxpZWQgdGhlICR7ZmxhZ30gZmxhZyBidXQgZGlkIG5vdCBwcm92aWRlIGEgdmFsdWUuYFxuICAgICAgICApXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzZXRDb25maWcoKTogQ29uZmlnT2JqZWN0IHtcbiAgICByZXR1cm4gbmV3IENvbmZpZ3VyYXRvcih7XG4gICAgICByb290UGF0aDogdGhpcy5yb290UGF0aCxcbiAgICAgIHByb2plY3RDb25maWdTdWJQYXRoOiB0aGlzLmNvbmZpZ01vZGlmaWVyUGF0aFxuICAgIH0pLnJlc3VsdFxuICB9XG5cbiAgcHJpdmF0ZSBzZXRUb29sKCk6IFRvb2xPYmplY3Qge1xuICAgIGNvbnN0IHRvb2xzOiBBcnJheTxUb29sT2JqZWN0PiA9IHRoaXMuY29uZmlnLnRvb2xzXG4gICAgY29uc3QgdG9vbE1hdGNoZXJzOiBBcnJheTxzdHJpbmc+ID0gdG9vbHMubWFwKHQgPT4ge1xuICAgICAgcmV0dXJuIHQubWF0Y2hlclxuICAgIH0pXG4gICAgY29uc3QgZmlyc3RBcmc6IHN0cmluZyA9IHRoaXMuYXJnc1swXVxuXG4gICAgaWYgKFxuICAgICAgKC9eW2EtekEtWjAtOV0kLy50ZXN0KGZpcnN0QXJnKSAmJiAhdG9vbE1hdGNoZXJzLmluY2x1ZGVzKGZpcnN0QXJnKSkgfHxcbiAgICAgICh0b29scy5sZW5ndGggPiAxICYmIGZpcnN0QXJnID09PSB1bmRlZmluZWQpXG4gICAgKSB7XG4gICAgICB0aHJvdyBFcnJvcihcbiAgICAgICAgYFlvdSBuZWVkIHRvIHByb3ZpZGUgYSB2YWxpZCB0b29sIG1hdGNoZXIuIFZhbGlkIHRvb2wgbWF0Y2hlcnMgaW5jbHVkZTogJHt0b29sTWF0Y2hlcnMuam9pbihcbiAgICAgICAgICAnXFxuJ1xuICAgICAgICApfWBcbiAgICAgIClcbiAgICB9XG5cbiAgICByZXR1cm4gdG9vbHNbdG9vbE1hdGNoZXJzLmluZGV4T2YoZmlyc3RBcmcpXSB8fCB0b29sc1swXVxuICB9XG5cbiAgcHJpdmF0ZSBzZXRPdXRwdXQoKSB7XG4gICAgbGV0IG91dHB1dDogSVBhcnNlck91dHB1dCA9IHRoaXMuc2V0RGVmYXVsdE91dHB1dCgpXG5cbiAgICBpZiAoT2JqZWN0LmtleXMob3V0cHV0KS5sZW5ndGggIT09IDApIHtcbiAgICAgIGNvbnN0IGZsYWdzID0gdGhpcy50b29sVG9Vc2UuZmxhZ3NcbiAgICAgIGNvbnN0IGFyZ3MgPSB0aGlzLmFyZ3NcblxuICAgICAgYXJncy5mb3JFYWNoKChhLCBpKSA9PiB7XG4gICAgICAgIGNvbnN0IGZsYWcgPSBmbGFncy5maW5kKGYgPT4gZi5tYXRjaGVycy5pbmNsdWRlcyhhKSlcblxuICAgICAgICBpZiAoZmxhZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgc3dpdGNoIChmbGFnLnR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAgICAgICAgICBvdXRwdXRbZmxhZy5uYW1lXSA9IHRydWVcbiAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICAgICAgICAgIGNvbnN0IHZhbCA9IGFyZ3NbaSArIDFdXG4gICAgICAgICAgICAgIGlmICh2YWwgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIG91dHB1dFtmbGFnLm5hbWVdID0gdmFsXG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcihcbiAgICAgICAgICAgICAgICAgIGBZb3UgbmVlZCB0byBwcm92aWRlIGEgdmFsdWUgZm9yIHRoZSAke2ZsYWcubmFtZX0gZmxhZy5gXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybiBvdXRwdXRcbiAgfVxuXG4gIHByaXZhdGUgc2V0RGVmYXVsdE91dHB1dCgpOiBJUGFyc2VyT3V0cHV0IHtcbiAgICBsZXQgb3V0cHV0OiBJUGFyc2VyT3V0cHV0ID0ge31cblxuICAgIGlmICh0aGlzLnRvb2xUb1VzZSAhPT0gdW5kZWZpbmVkICYmIHRoaXMudG9vbFRvVXNlLmZsYWdzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMudG9vbFRvVXNlLmZsYWdzLmZvckVhY2goZiA9PiB7XG4gICAgICAgIHN3aXRjaCAoZi50eXBlKSB7XG4gICAgICAgICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICAgICAgICBvdXRwdXRbZi5uYW1lXSA9IGZhbHNlXG4gICAgICAgICAgICBicmVha1xuICAgICAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICAgICAgICBvdXRwdXRbZi5uYW1lXSA9ICcnXG4gICAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybiBvdXRwdXRcbiAgfVxufVxuIl19