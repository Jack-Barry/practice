"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Configurator = void 0;

var _globals = require("./../globals");

var _ConfigObject = require("./ConfigObject");

var _defaultConfig = require("./../defaultConfig");

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var paths = new _globals.Paths();

var Configurator =
/*#__PURE__*/
function () {
  function Configurator(_ref) {
    var rootPath = _ref.rootPath,
        projectConfigSubPath = _ref.projectConfigSubPath;

    _classCallCheck(this, Configurator);

    this.project_root = this.assignRoot(rootPath);
    this.project_config = this.assignProjectConfig(projectConfigSubPath);
    this.default_config = (0, _defaultConfig.config)();
    this.configs = this.buildConfigArray();
    this.result = this.buildResult();
  }

  _createClass(Configurator, [{
    key: "assignRoot",
    value: function assignRoot(rootPath) {
      return typeof rootPath == 'undefined' ? paths.callingDir : _path.default.resolve(paths.callingDir, rootPath);
    }
  }, {
    key: "assignProjectConfig",
    value: function assignProjectConfig(projectConfigSubPath) {
      return typeof projectConfigSubPath == 'undefined' ? paths.projectConfigSubPath : projectConfigSubPath;
    }
  }, {
    key: "buildConfigArray",
    value: function buildConfigArray() {
      var output = [this.default_config];

      var configModifierPath = _path.default.resolve(this.project_root, this.project_config);

      try {
        output.push(require(configModifierPath));
      } catch (err) {// Nothing was found, nothing to do here folks
      }

      return output;
    }
  }, {
    key: "buildResult",
    value: function buildResult() {
      var output = new _ConfigObject.ConfigObject();
      this.configs.forEach(function (c) {
        output.tools = _toConsumableArray(output.tools).concat(_toConsumableArray(c.tools));
      });
      return output;
    }
  }]);

  return Configurator;
}();

exports.Configurator = Configurator;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Db25maWd1cmF0b3IvQ29uZmlndXJhdG9yLnRzIl0sIm5hbWVzIjpbInBhdGhzIiwiUGF0aHMiLCJDb25maWd1cmF0b3IiLCJyb290UGF0aCIsInByb2plY3RDb25maWdTdWJQYXRoIiwicHJvamVjdF9yb290IiwiYXNzaWduUm9vdCIsInByb2plY3RfY29uZmlnIiwiYXNzaWduUHJvamVjdENvbmZpZyIsImRlZmF1bHRfY29uZmlnIiwiY29uZmlncyIsImJ1aWxkQ29uZmlnQXJyYXkiLCJyZXN1bHQiLCJidWlsZFJlc3VsdCIsImNhbGxpbmdEaXIiLCJwYXRoIiwicmVzb2x2ZSIsIm91dHB1dCIsImNvbmZpZ01vZGlmaWVyUGF0aCIsInB1c2giLCJyZXF1aXJlIiwiZXJyIiwiQ29uZmlnT2JqZWN0IiwiZm9yRWFjaCIsImMiLCJ0b29scyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxLQUFZLEdBQUcsSUFBSUMsY0FBSixFQUFyQjs7SUFlYUMsWTs7O0FBT1gsOEJBQXFFO0FBQUEsUUFBdkRDLFFBQXVELFFBQXZEQSxRQUF1RDtBQUFBLFFBQTdDQyxvQkFBNkMsUUFBN0NBLG9CQUE2Qzs7QUFBQTs7QUFDbkUsU0FBS0MsWUFBTCxHQUFvQixLQUFLQyxVQUFMLENBQWdCSCxRQUFoQixDQUFwQjtBQUNBLFNBQUtJLGNBQUwsR0FBc0IsS0FBS0MsbUJBQUwsQ0FBeUJKLG9CQUF6QixDQUF0QjtBQUNBLFNBQUtLLGNBQUwsR0FBc0IsNEJBQXRCO0FBQ0EsU0FBS0MsT0FBTCxHQUFlLEtBQUtDLGdCQUFMLEVBQWY7QUFDQSxTQUFLQyxNQUFMLEdBQWMsS0FBS0MsV0FBTCxFQUFkO0FBQ0Q7Ozs7K0JBRWtCVixRLEVBQTJCO0FBQzVDLGFBQU8sT0FBT0EsUUFBUCxJQUFtQixXQUFuQixHQUNISCxLQUFLLENBQUNjLFVBREgsR0FFSEMsY0FBS0MsT0FBTCxDQUFhaEIsS0FBSyxDQUFDYyxVQUFuQixFQUErQlgsUUFBL0IsQ0FGSjtBQUdEOzs7d0NBRTJCQyxvQixFQUF1QztBQUNqRSxhQUFPLE9BQU9BLG9CQUFQLElBQStCLFdBQS9CLEdBQ0hKLEtBQUssQ0FBQ0ksb0JBREgsR0FFSEEsb0JBRko7QUFHRDs7O3VDQUUrQztBQUM5QyxVQUFJYSxNQUEyQixHQUFHLENBQUMsS0FBS1IsY0FBTixDQUFsQzs7QUFFQSxVQUFNUyxrQkFBMEIsR0FBR0gsY0FBS0MsT0FBTCxDQUNqQyxLQUFLWCxZQUQ0QixFQUVqQyxLQUFLRSxjQUY0QixDQUFuQzs7QUFLQSxVQUFJO0FBQ0ZVLFFBQUFBLE1BQU0sQ0FBQ0UsSUFBUCxDQUFZQyxPQUFPLENBQUNGLGtCQUFELENBQW5CO0FBQ0QsT0FGRCxDQUVFLE9BQU9HLEdBQVAsRUFBWSxDQUNaO0FBQ0Q7O0FBRUQsYUFBT0osTUFBUDtBQUNEOzs7a0NBRW1DO0FBQ2xDLFVBQUlBLE1BQW9CLEdBQUcsSUFBSUssMEJBQUosRUFBM0I7QUFFQSxXQUFLWixPQUFMLENBQWFhLE9BQWIsQ0FBcUIsVUFBQUMsQ0FBQyxFQUFJO0FBQ3hCUCxRQUFBQSxNQUFNLENBQUNRLEtBQVAsc0JBQW1CUixNQUFNLENBQUNRLEtBQTFCLDRCQUFvQ0QsQ0FBQyxDQUFDQyxLQUF0QztBQUNELE9BRkQ7QUFJQSxhQUFPUixNQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQYXRocyB9IGZyb20gJy4vLi4vZ2xvYmFscydcclxuaW1wb3J0IHsgQ29uZmlnT2JqZWN0IH0gZnJvbSAnLi9Db25maWdPYmplY3QnXHJcbmltcG9ydCB7IGNvbmZpZyBhcyBkZWZhdWx0Q29uZmlnIH0gZnJvbSAnLi8uLi9kZWZhdWx0Q29uZmlnJ1xyXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xyXG5cclxuY29uc3QgcGF0aHM6IFBhdGhzID0gbmV3IFBhdGhzKClcclxuXHJcbmludGVyZmFjZSBJQ29uZmlndXJhdG9ySW5wdXRzIHtcclxuICByb290UGF0aD86IHN0cmluZ1xyXG4gIHByb2plY3RDb25maWdTdWJQYXRoPzogc3RyaW5nXHJcbn1cclxuXHJcbmludGVyZmFjZSBJQ29uZmlndXJhdG9yIHtcclxuICByZWFkb25seSBwcm9qZWN0X3Jvb3Q6IHN0cmluZ1xyXG4gIHJlYWRvbmx5IHByb2plY3RfY29uZmlnOiBzdHJpbmdcclxuICByZWFkb25seSBkZWZhdWx0X2NvbmZpZzogQ29uZmlnT2JqZWN0XHJcbiAgcmVhZG9ubHkgY29uZmlnczogQXJyYXk8Q29uZmlnT2JqZWN0PlxyXG4gIHJlYWRvbmx5IHJlc3VsdDogQ29uZmlnT2JqZWN0XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDb25maWd1cmF0b3IgaW1wbGVtZW50cyBJQ29uZmlndXJhdG9yIHtcclxuICByZWFkb25seSBwcm9qZWN0X3Jvb3Q6IHN0cmluZ1xyXG4gIHJlYWRvbmx5IHByb2plY3RfY29uZmlnOiBzdHJpbmdcclxuICByZWFkb25seSBkZWZhdWx0X2NvbmZpZzogQ29uZmlnT2JqZWN0XHJcbiAgcmVhZG9ubHkgY29uZmlnczogQXJyYXk8Q29uZmlnT2JqZWN0PlxyXG4gIHJlYWRvbmx5IHJlc3VsdDogQ29uZmlnT2JqZWN0XHJcblxyXG4gIGNvbnN0cnVjdG9yKHsgcm9vdFBhdGgsIHByb2plY3RDb25maWdTdWJQYXRoIH06IElDb25maWd1cmF0b3JJbnB1dHMpIHtcclxuICAgIHRoaXMucHJvamVjdF9yb290ID0gdGhpcy5hc3NpZ25Sb290KHJvb3RQYXRoKVxyXG4gICAgdGhpcy5wcm9qZWN0X2NvbmZpZyA9IHRoaXMuYXNzaWduUHJvamVjdENvbmZpZyhwcm9qZWN0Q29uZmlnU3ViUGF0aClcclxuICAgIHRoaXMuZGVmYXVsdF9jb25maWcgPSBkZWZhdWx0Q29uZmlnKClcclxuICAgIHRoaXMuY29uZmlncyA9IHRoaXMuYnVpbGRDb25maWdBcnJheSgpXHJcbiAgICB0aGlzLnJlc3VsdCA9IHRoaXMuYnVpbGRSZXN1bHQoKVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBhc3NpZ25Sb290KHJvb3RQYXRoPzogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0eXBlb2Ygcm9vdFBhdGggPT0gJ3VuZGVmaW5lZCdcclxuICAgICAgPyBwYXRocy5jYWxsaW5nRGlyXHJcbiAgICAgIDogcGF0aC5yZXNvbHZlKHBhdGhzLmNhbGxpbmdEaXIsIHJvb3RQYXRoKVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBhc3NpZ25Qcm9qZWN0Q29uZmlnKHByb2plY3RDb25maWdTdWJQYXRoPzogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0eXBlb2YgcHJvamVjdENvbmZpZ1N1YlBhdGggPT0gJ3VuZGVmaW5lZCdcclxuICAgICAgPyBwYXRocy5wcm9qZWN0Q29uZmlnU3ViUGF0aFxyXG4gICAgICA6IHByb2plY3RDb25maWdTdWJQYXRoXHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGJ1aWxkQ29uZmlnQXJyYXkoKTogQXJyYXk8Q29uZmlnT2JqZWN0PiB7XHJcbiAgICBsZXQgb3V0cHV0OiBBcnJheTxDb25maWdPYmplY3Q+ID0gW3RoaXMuZGVmYXVsdF9jb25maWddXHJcblxyXG4gICAgY29uc3QgY29uZmlnTW9kaWZpZXJQYXRoOiBzdHJpbmcgPSBwYXRoLnJlc29sdmUoXHJcbiAgICAgIHRoaXMucHJvamVjdF9yb290LFxyXG4gICAgICB0aGlzLnByb2plY3RfY29uZmlnXHJcbiAgICApXHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgb3V0cHV0LnB1c2gocmVxdWlyZShjb25maWdNb2RpZmllclBhdGgpKVxyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIC8vIE5vdGhpbmcgd2FzIGZvdW5kLCBub3RoaW5nIHRvIGRvIGhlcmUgZm9sa3NcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gb3V0cHV0XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGJ1aWxkUmVzdWx0KCk6IENvbmZpZ09iamVjdCB7XHJcbiAgICBsZXQgb3V0cHV0OiBDb25maWdPYmplY3QgPSBuZXcgQ29uZmlnT2JqZWN0KClcclxuXHJcbiAgICB0aGlzLmNvbmZpZ3MuZm9yRWFjaChjID0+IHtcclxuICAgICAgb3V0cHV0LnRvb2xzID0gWy4uLm91dHB1dC50b29scywgLi4uYy50b29sc11cclxuICAgIH0pXHJcblxyXG4gICAgcmV0dXJuIG91dHB1dFxyXG4gIH1cclxufVxyXG4iXX0=