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
        var flags = this.toolToUse.flags || [];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9QYXJzZXIvUGFyc2VyLnRzIl0sIm5hbWVzIjpbImdsb2JhbFBhdGhzIiwiUGF0aHMiLCJQYXJzZXIiLCJhcmdzIiwicm9vdFBhdGgiLCJjYWxsaW5nRGlyIiwiY29uZmlnTW9kaWZpZXJQYXRoIiwicHJvamVjdENvbmZpZ1N1YlBhdGgiLCJzZXRDb25maWd1cmF0aW9uUGF0aCIsImNvbmZpZyIsInNldENvbmZpZyIsInRvb2xUb1VzZSIsInNldFRvb2wiLCJvdXRwdXQiLCJzZXRPdXRwdXQiLCJzZXRJZlByZXNlbnQiLCJycCIsInBhdGgiLCJyZXNvbHZlIiwiZmxhZyIsInNldFZhbCIsImNhbGxiYWNrIiwiaSIsImluY2x1ZGVzIiwidmFsIiwiaW5kZXhPZiIsInVuZGVmaW5lZCIsIkVycm9yIiwiQ29uZmlndXJhdG9yIiwicmVzdWx0IiwidG9vbHMiLCJ0b29sTWF0Y2hlcnMiLCJtYXAiLCJ0IiwibWF0Y2hlciIsImZpcnN0QXJnIiwidGVzdCIsImxlbmd0aCIsImpvaW4iLCJzZXREZWZhdWx0T3V0cHV0IiwiT2JqZWN0Iiwia2V5cyIsImZsYWdzIiwiZm9yRWFjaCIsImEiLCJmaW5kIiwiZiIsIm1hdGNoZXJzIiwidHlwZSIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFNQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFdBQWtCLEdBQUcsSUFBSUMsY0FBSixFQUEzQjs7SUFlYUMsTTs7O0FBUVgsb0JBQXNDO0FBQUEsUUFBMUJDLElBQTBCLHVFQUFKLEVBQUk7O0FBQUE7O0FBQ3BDLFNBQUtBLElBQUwsR0FBWUEsSUFBWjtBQUNBLFNBQUtDLFFBQUwsR0FBZ0JKLFdBQVcsQ0FBQ0ssVUFBNUI7QUFDQSxTQUFLQyxrQkFBTCxHQUEwQk4sV0FBVyxDQUFDTyxvQkFBdEM7QUFDQSxTQUFLQyxvQkFBTDtBQUNBLFNBQUtDLE1BQUwsR0FBYyxLQUFLQyxTQUFMLEVBQWQ7QUFDQSxTQUFLQyxTQUFMLEdBQWlCLEtBQUtD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QUFvQixJQUFwQjtBQUNBOztBQUNGLG1CQUFLLFFBQUw7QUFDRSxvQkFBTXpCLEdBQUcsR0FBR3JCLEtBQUksQ0FBQ21CLENBQUMsR0FBRyxDQUFMLENBQWhCOztBQUNBLG9CQUFJRSxHQUFHLEtBQUtFLFNBQVosRUFBdUI7QUFDckJiLGtCQUFBQSxNQUFNLENBQUNNLElBQUksQ0FBQzhCLElBQU4sQ0FBTixHQUFvQnpCLEdBQXBCO0FBQ0E7QUFDRCxpQkFIRCxNQUdPO0FBQ0wsd0JBQU1HLEtBQUssK0NBQzhCUixJQUFJLENBQUM4QixJQURuQyxZQUFYO0FBR0Q7O0FBYkw7QUFlRDtBQUNGLFNBcEJEO0FBcUJEOztBQUVELGFBQU9wQyxNQUFQO0FBQ0Q7Ozt1Q0FFeUM7QUFDeEMsVUFBSUEsTUFBcUIsR0FBRyxFQUE1Qjs7QUFFQSxVQUFJLEtBQUtGLFNBQUwsS0FBbUJlLFNBQW5CLElBQWdDLEtBQUtmLFNBQUwsQ0FBZStCLEtBQWYsS0FBeUJoQixTQUE3RCxFQUF3RTtBQUN0RSxhQUFLZixTQUFMLENBQWUrQixLQUFmLENBQXFCQyxPQUFyQixDQUE2QixVQUFBRyxDQUFDLEVBQUk7QUFDaEMsa0JBQVFBLENBQUMsQ0FBQ0UsSUFBVjtBQUNFLGlCQUFLLFNBQUw7QUFDRW5DLGNBQUFBLE1BQU0sQ0FBQ2lDLENBQUMsQ0FBQ0csSUFBSCxDQUFOLEdBQWlCLEtBQWpCO0FBQ0E7O0FBQ0YsaUJBQUssUUFBTDtBQUNFcEMsY0FBQUEsTUFBTSxDQUFDaUMsQ0FBQyxDQUFDRyxJQUFILENBQU4sR0FBaUIsRUFBakI7QUFDQTtBQU5KO0FBUUQsU0FURDtBQVVEOztBQUVELGFBQU9wQyxNQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQYXRocyB9IGZyb20gJy4vLi4vZ2xvYmFscydcclxuaW1wb3J0IHtcclxuICBUb29sT2JqZWN0LFxyXG4gIEZsYWdPYmplY3QsXHJcbiAgQ29uZmlnT2JqZWN0LFxyXG4gIENvbmZpZ3VyYXRvclxyXG59IGZyb20gJy4vLi4vQ29uZmlndXJhdG9yJ1xyXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xyXG5cclxuY29uc3QgZ2xvYmFsUGF0aHM6IFBhdGhzID0gbmV3IFBhdGhzKClcclxuXHJcbmludGVyZmFjZSBJUGFyc2VyIHtcclxuICBhcmdzOiBBcnJheTxzdHJpbmc+XHJcbiAgcm9vdFBhdGg6IHN0cmluZ1xyXG4gIGNvbmZpZ01vZGlmaWVyUGF0aDogc3RyaW5nXHJcbiAgY29uZmlnOiBDb25maWdPYmplY3RcclxuICB0b29sVG9Vc2U6IFRvb2xPYmplY3RcclxuICBvdXRwdXQ6IElQYXJzZXJPdXRwdXRcclxufVxyXG5cclxuaW50ZXJmYWNlIElQYXJzZXJPdXRwdXQge1xyXG4gIFtrZXk6IHN0cmluZ106IHN0cmluZyB8IGJvb2xlYW4gfCBBcnJheTxzdHJpbmc+XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBQYXJzZXIgaW1wbGVtZW50cyBJUGFyc2VyIHtcclxuICBhcmdzOiBBcnJheTxzdHJpbmc+XHJcbiAgcm9vdFBhdGg6IHN0cmluZ1xyXG4gIGNvbmZpZ01vZGlmaWVyUGF0aDogc3RyaW5nXHJcbiAgY29uZmlnOiBDb25maWdPYmplY3RcclxuICB0b29sVG9Vc2U6IFRvb2xPYmplY3RcclxuICBvdXRwdXQ6IElQYXJzZXJPdXRwdXRcclxuXHJcbiAgY29uc3RydWN0b3IoYXJnczogQXJyYXk8c3RyaW5nPiA9IFtdKSB7XHJcbiAgICB0aGlzLmFyZ3MgPSBhcmdzXHJcbiAgICB0aGlzLnJvb3RQYXRoID0gZ2xvYmFsUGF0aHMuY2FsbGluZ0RpclxyXG4gICAgdGhpcy5jb25maWdNb2RpZmllclBhdGggPSBnbG9iYWxQYXRocy5wcm9qZWN0Q29uZmlnU3ViUGF0aFxyXG4gICAgdGhpcy5zZXRDb25maWd1cmF0aW9uUGF0aCgpXHJcbiAgICB0aGlzLmNvbmZpZyA9IHRoaXMuc2V0Q29uZmlnKClcclxuICAgIHRoaXMudG9vbFRvVXNlID0gdGhpcy5zZXRUb29sKClcclxuICAgIHRoaXMub3V0cHV0ID0gdGhpcy5zZXRPdXRwdXQoKVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRDb25maWd1cmF0aW9uUGF0aCgpIHtcclxuICAgIHRoaXMuc2V0SWZQcmVzZW50KCctLWNvbmZpZycsICdjb25maWdNb2RpZmllclBhdGgnKVxyXG4gICAgdGhpcy5zZXRJZlByZXNlbnQoJy0tcm9vdFBhdGgnLCAncm9vdFBhdGgnLCBycCA9PiB7XHJcbiAgICAgIHJldHVybiBwYXRoLnJlc29sdmUocnApXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRJZlByZXNlbnQoXHJcbiAgICBmbGFnOiBzdHJpbmcsXHJcbiAgICBzZXRWYWw6ICdyb290UGF0aCcgfCAnY29uZmlnTW9kaWZpZXJQYXRoJyxcclxuICAgIGNhbGxiYWNrOiAoaTogc3RyaW5nKSA9PiBzdHJpbmcgPSBpID0+IHtcclxuICAgICAgcmV0dXJuIGlcclxuICAgIH1cclxuICApIHtcclxuICAgIGlmICh0aGlzLmFyZ3MuaW5jbHVkZXMoZmxhZykpIHtcclxuICAgICAgY29uc3QgdmFsOiBzdHJpbmcgPSB0aGlzLmFyZ3NbdGhpcy5hcmdzLmluZGV4T2YoZmxhZykgKyAxXVxyXG5cclxuICAgICAgaWYgKHZhbCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgdGhpc1tzZXRWYWxdID0gY2FsbGJhY2sodmFsKVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRocm93IEVycm9yKFxyXG4gICAgICAgICAgYFlvdSBzdXBwbGllZCB0aGUgJHtmbGFnfSBmbGFnIGJ1dCBkaWQgbm90IHByb3ZpZGUgYSB2YWx1ZS5gXHJcbiAgICAgICAgKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldENvbmZpZygpOiBDb25maWdPYmplY3Qge1xyXG4gICAgcmV0dXJuIG5ldyBDb25maWd1cmF0b3Ioe1xyXG4gICAgICByb290UGF0aDogdGhpcy5yb290UGF0aCxcclxuICAgICAgcHJvamVjdENvbmZpZ1N1YlBhdGg6IHRoaXMuY29uZmlnTW9kaWZpZXJQYXRoXHJcbiAgICB9KS5yZXN1bHRcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0VG9vbCgpOiBUb29sT2JqZWN0IHtcclxuICAgIGNvbnN0IHRvb2xzOiBBcnJheTxUb29sT2JqZWN0PiA9IHRoaXMuY29uZmlnLnRvb2xzXHJcbiAgICBjb25zdCB0b29sTWF0Y2hlcnM6IEFycmF5PHN0cmluZz4gPSB0b29scy5tYXAodCA9PiB7XHJcbiAgICAgIHJldHVybiB0Lm1hdGNoZXJcclxuICAgIH0pXHJcbiAgICBjb25zdCBmaXJzdEFyZzogc3RyaW5nID0gdGhpcy5hcmdzWzBdXHJcblxyXG4gICAgaWYgKFxyXG4gICAgICAoL15bYS16QS1aMC05XSQvLnRlc3QoZmlyc3RBcmcpICYmICF0b29sTWF0Y2hlcnMuaW5jbHVkZXMoZmlyc3RBcmcpKSB8fFxyXG4gICAgICAodG9vbHMubGVuZ3RoID4gMSAmJiBmaXJzdEFyZyA9PT0gdW5kZWZpbmVkKVxyXG4gICAgKSB7XHJcbiAgICAgIHRocm93IEVycm9yKFxyXG4gICAgICAgIGBZb3UgbmVlZCB0byBwcm92aWRlIGEgdmFsaWQgdG9vbCBtYXRjaGVyLiBWYWxpZCB0b29sIG1hdGNoZXJzIGluY2x1ZGU6ICR7dG9vbE1hdGNoZXJzLmpvaW4oXHJcbiAgICAgICAgICAnXFxuJ1xyXG4gICAgICAgICl9YFxyXG4gICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRvb2xzW3Rvb2xNYXRjaGVycy5pbmRleE9mKGZpcnN0QXJnKV0gfHwgdG9vbHNbMF1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0T3V0cHV0KCkge1xyXG4gICAgbGV0IG91dHB1dDogSVBhcnNlck91dHB1dCA9IHRoaXMuc2V0RGVmYXVsdE91dHB1dCgpXHJcblxyXG4gICAgaWYgKE9iamVjdC5rZXlzKG91dHB1dCkubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgIGNvbnN0IGZsYWdzID0gdGhpcy50b29sVG9Vc2UuZmxhZ3MgfHwgW11cclxuICAgICAgY29uc3QgYXJncyA9IHRoaXMuYXJnc1xyXG5cclxuICAgICAgYXJncy5mb3JFYWNoKChhLCBpKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZmxhZyA9IGZsYWdzLmZpbmQoZiA9PiBmLm1hdGNoZXJzLmluY2x1ZGVzKGEpKVxyXG5cclxuICAgICAgICBpZiAoZmxhZyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICBzd2l0Y2ggKGZsYWcudHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlICdib29sZWFuJzpcclxuICAgICAgICAgICAgICBvdXRwdXRbZmxhZy5uYW1lXSA9IHRydWVcclxuICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICBjYXNlICdzdHJpbmcnOlxyXG4gICAgICAgICAgICAgIGNvbnN0IHZhbCA9IGFyZ3NbaSArIDFdXHJcbiAgICAgICAgICAgICAgaWYgKHZhbCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBvdXRwdXRbZmxhZy5uYW1lXSA9IHZhbFxyXG4gICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoXHJcbiAgICAgICAgICAgICAgICAgIGBZb3UgbmVlZCB0byBwcm92aWRlIGEgdmFsdWUgZm9yIHRoZSAke2ZsYWcubmFtZX0gZmxhZy5gXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gb3V0cHV0XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldERlZmF1bHRPdXRwdXQoKTogSVBhcnNlck91dHB1dCB7XHJcbiAgICBsZXQgb3V0cHV0OiBJUGFyc2VyT3V0cHV0ID0ge31cclxuXHJcbiAgICBpZiAodGhpcy50b29sVG9Vc2UgIT09IHVuZGVmaW5lZCAmJiB0aGlzLnRvb2xUb1VzZS5mbGFncyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRoaXMudG9vbFRvVXNlLmZsYWdzLmZvckVhY2goZiA9PiB7XHJcbiAgICAgICAgc3dpdGNoIChmLnR5cGUpIHtcclxuICAgICAgICAgIGNhc2UgJ2Jvb2xlYW4nOlxyXG4gICAgICAgICAgICBvdXRwdXRbZi5uYW1lXSA9IGZhbHNlXHJcbiAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICBjYXNlICdzdHJpbmcnOlxyXG4gICAgICAgICAgICBvdXRwdXRbZi5uYW1lXSA9ICcnXHJcbiAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBvdXRwdXRcclxuICB9XHJcbn1cclxuIl19