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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Db25maWd1cmF0b3IvQ29uZmlndXJhdG9yLnRzIl0sIm5hbWVzIjpbInBhdGhzIiwiUGF0aHMiLCJDb25maWd1cmF0b3IiLCJyb290UGF0aCIsInByb2plY3RDb25maWdTdWJQYXRoIiwicHJvamVjdF9yb290IiwiYXNzaWduUm9vdCIsInByb2plY3RfY29uZmlnIiwiYXNzaWduUHJvamVjdENvbmZpZyIsImRlZmF1bHRfY29uZmlnIiwiY29uZmlncyIsImJ1aWxkQ29uZmlnQXJyYXkiLCJyZXN1bHQiLCJidWlsZFJlc3VsdCIsImNhbGxpbmdEaXIiLCJwYXRoIiwicmVzb2x2ZSIsIm91dHB1dCIsImNvbmZpZ01vZGlmaWVyUGF0aCIsInB1c2giLCJyZXF1aXJlIiwiZXJyIiwiQ29uZmlnT2JqZWN0IiwiZm9yRWFjaCIsImMiLCJ0b29scyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxLQUFZLEdBQUcsSUFBSUMsY0FBSixFQUFyQjs7SUFlYUMsWTs7O0FBT1gsOEJBQXFFO0FBQUEsUUFBdkRDLFFBQXVELFFBQXZEQSxRQUF1RDtBQUFBLFFBQTdDQyxvQkFBNkMsUUFBN0NBLG9CQUE2Qzs7QUFBQTs7QUFDbkUsU0FBS0MsWUFBTCxHQUFvQixLQUFLQyxVQUFMLENBQWdCSCxRQUFoQixDQUFwQjtBQUNBLFNBQUtJLGNBQUwsR0FBc0IsS0FBS0MsbUJBQUwsQ0FBeUJKLG9CQUF6QixDQUF0QjtBQUNBLFNBQUtLLGNBQUwsR0FBc0IsNEJBQXRCO0FBQ0EsU0FBS0MsT0FBTCxHQUFlLEtBQUtDLGdCQUFMLEVBQWY7QUFDQSxTQUFLQyxNQUFMLEdBQWMsS0FBS0MsV0FBTCxFQUFkO0FBQ0Q7Ozs7K0JBRWtCVixRLEVBQTJCO0FBQzVDLGFBQU8sT0FBT0EsUUFBUCxJQUFtQixXQUFuQixHQUNISCxLQUFLLENBQUNjLFVBREgsR0FFSEMsY0FBS0MsT0FBTCxDQUFhaEIsS0FBSyxDQUFDYyxVQUFuQixFQUErQlgsUUFBL0IsQ0FGSjtBQUdEOzs7d0NBRTJCQyxvQixFQUF1QztBQUNqRSxhQUFPLE9BQU9BLG9CQUFQLElBQStCLFdBQS9CLEdBQ0hKLEtBQUssQ0FBQ0ksb0JBREgsR0FFSEEsb0JBRko7QUFHRDs7O3VDQUUrQztBQUM5QyxVQUFJYSxNQUEyQixHQUFHLENBQUMsS0FBS1IsY0FBTixDQUFsQzs7QUFFQSxVQUFNUyxrQkFBMEIsR0FBR0gsY0FBS0MsT0FBTCxDQUNqQyxLQUFLWCxZQUQ0QixFQUVqQyxLQUFLRSxjQUY0QixDQUFuQzs7QUFLQSxVQUFJO0FBQ0ZVLFFBQUFBLE1BQU0sQ0FBQ0UsSUFBUCxDQUFZQyxPQUFPLENBQUNGLGtCQUFELENBQW5CO0FBQ0QsT0FGRCxDQUVFLE9BQU9HLEdBQVAsRUFBWSxDQUNaO0FBQ0Q7O0FBRUQsYUFBT0osTUFBUDtBQUNEOzs7a0NBRW1DO0FBQ2xDLFVBQUlBLE1BQW9CLEdBQUcsSUFBSUssMEJBQUosRUFBM0I7QUFFQSxXQUFLWixPQUFMLENBQWFhLE9BQWIsQ0FBcUIsVUFBQUMsQ0FBQyxFQUFJO0FBQ3hCUCxRQUFBQSxNQUFNLENBQUNRLEtBQVAsc0JBQW1CUixNQUFNLENBQUNRLEtBQTFCLDRCQUFvQ0QsQ0FBQyxDQUFDQyxLQUF0QztBQUNELE9BRkQ7QUFJQSxhQUFPUixNQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQYXRocyB9IGZyb20gJy4vLi4vZ2xvYmFscydcbmltcG9ydCB7IENvbmZpZ09iamVjdCB9IGZyb20gJy4vQ29uZmlnT2JqZWN0J1xuaW1wb3J0IHsgY29uZmlnIGFzIGRlZmF1bHRDb25maWcgfSBmcm9tICcuLy4uL2RlZmF1bHRDb25maWcnXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xuXG5jb25zdCBwYXRoczogUGF0aHMgPSBuZXcgUGF0aHMoKVxuXG5pbnRlcmZhY2UgSUNvbmZpZ3VyYXRvcklucHV0cyB7XG4gIHJvb3RQYXRoPzogc3RyaW5nXG4gIHByb2plY3RDb25maWdTdWJQYXRoPzogc3RyaW5nXG59XG5cbmludGVyZmFjZSBJQ29uZmlndXJhdG9yIHtcbiAgcmVhZG9ubHkgcHJvamVjdF9yb290OiBzdHJpbmdcbiAgcmVhZG9ubHkgcHJvamVjdF9jb25maWc6IHN0cmluZ1xuICByZWFkb25seSBkZWZhdWx0X2NvbmZpZzogQ29uZmlnT2JqZWN0XG4gIHJlYWRvbmx5IGNvbmZpZ3M6IEFycmF5PENvbmZpZ09iamVjdD5cbiAgcmVhZG9ubHkgcmVzdWx0OiBDb25maWdPYmplY3Rcbn1cblxuZXhwb3J0IGNsYXNzIENvbmZpZ3VyYXRvciBpbXBsZW1lbnRzIElDb25maWd1cmF0b3Ige1xuICByZWFkb25seSBwcm9qZWN0X3Jvb3Q6IHN0cmluZ1xuICByZWFkb25seSBwcm9qZWN0X2NvbmZpZzogc3RyaW5nXG4gIHJlYWRvbmx5IGRlZmF1bHRfY29uZmlnOiBDb25maWdPYmplY3RcbiAgcmVhZG9ubHkgY29uZmlnczogQXJyYXk8Q29uZmlnT2JqZWN0PlxuICByZWFkb25seSByZXN1bHQ6IENvbmZpZ09iamVjdFxuXG4gIGNvbnN0cnVjdG9yKHsgcm9vdFBhdGgsIHByb2plY3RDb25maWdTdWJQYXRoIH06IElDb25maWd1cmF0b3JJbnB1dHMpIHtcbiAgICB0aGlzLnByb2plY3Rfcm9vdCA9IHRoaXMuYXNzaWduUm9vdChyb290UGF0aClcbiAgICB0aGlzLnByb2plY3RfY29uZmlnID0gdGhpcy5hc3NpZ25Qcm9qZWN0Q29uZmlnKHByb2plY3RDb25maWdTdWJQYXRoKVxuICAgIHRoaXMuZGVmYXVsdF9jb25maWcgPSBkZWZhdWx0Q29uZmlnKClcbiAgICB0aGlzLmNvbmZpZ3MgPSB0aGlzLmJ1aWxkQ29uZmlnQXJyYXkoKVxuICAgIHRoaXMucmVzdWx0ID0gdGhpcy5idWlsZFJlc3VsdCgpXG4gIH1cblxuICBwcml2YXRlIGFzc2lnblJvb3Qocm9vdFBhdGg/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiB0eXBlb2Ygcm9vdFBhdGggPT0gJ3VuZGVmaW5lZCdcbiAgICAgID8gcGF0aHMuY2FsbGluZ0RpclxuICAgICAgOiBwYXRoLnJlc29sdmUocGF0aHMuY2FsbGluZ0Rpciwgcm9vdFBhdGgpXG4gIH1cblxuICBwcml2YXRlIGFzc2lnblByb2plY3RDb25maWcocHJvamVjdENvbmZpZ1N1YlBhdGg/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiB0eXBlb2YgcHJvamVjdENvbmZpZ1N1YlBhdGggPT0gJ3VuZGVmaW5lZCdcbiAgICAgID8gcGF0aHMucHJvamVjdENvbmZpZ1N1YlBhdGhcbiAgICAgIDogcHJvamVjdENvbmZpZ1N1YlBhdGhcbiAgfVxuXG4gIHByaXZhdGUgYnVpbGRDb25maWdBcnJheSgpOiBBcnJheTxDb25maWdPYmplY3Q+IHtcbiAgICBsZXQgb3V0cHV0OiBBcnJheTxDb25maWdPYmplY3Q+ID0gW3RoaXMuZGVmYXVsdF9jb25maWddXG5cbiAgICBjb25zdCBjb25maWdNb2RpZmllclBhdGg6IHN0cmluZyA9IHBhdGgucmVzb2x2ZShcbiAgICAgIHRoaXMucHJvamVjdF9yb290LFxuICAgICAgdGhpcy5wcm9qZWN0X2NvbmZpZ1xuICAgIClcblxuICAgIHRyeSB7XG4gICAgICBvdXRwdXQucHVzaChyZXF1aXJlKGNvbmZpZ01vZGlmaWVyUGF0aCkpXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAvLyBOb3RoaW5nIHdhcyBmb3VuZCwgbm90aGluZyB0byBkbyBoZXJlIGZvbGtzXG4gICAgfVxuXG4gICAgcmV0dXJuIG91dHB1dFxuICB9XG5cbiAgcHJpdmF0ZSBidWlsZFJlc3VsdCgpOiBDb25maWdPYmplY3Qge1xuICAgIGxldCBvdXRwdXQ6IENvbmZpZ09iamVjdCA9IG5ldyBDb25maWdPYmplY3QoKVxuXG4gICAgdGhpcy5jb25maWdzLmZvckVhY2goYyA9PiB7XG4gICAgICBvdXRwdXQudG9vbHMgPSBbLi4ub3V0cHV0LnRvb2xzLCAuLi5jLnRvb2xzXVxuICAgIH0pXG5cbiAgICByZXR1cm4gb3V0cHV0XG4gIH1cbn1cbiJdfQ==