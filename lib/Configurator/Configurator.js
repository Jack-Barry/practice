"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Configurator = void 0;

var _globals = require("./../globals");

var _defaultConfig = require("./../defaultConfig");

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
    this.default_config = _defaultConfig.config;
    this.configs = [this.default_config];
    this.result = _objectSpread({}, this.default_config);

    var configModifierPath = _path.default.resolve(this.project_root, this.project_config);

    try {
      var found = require(configModifierPath);

      this.configs.push(found);
    } catch (err) {// No config found in project, nothing to do
    }
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
  }]);

  return Configurator;
}();

exports.Configurator = Configurator;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Db25maWd1cmF0b3IvQ29uZmlndXJhdG9yLnRzIl0sIm5hbWVzIjpbInBhdGhzIiwiUGF0aHMiLCJDb25maWd1cmF0b3IiLCJyb290UGF0aCIsInByb2plY3RDb25maWdTdWJQYXRoIiwicHJvamVjdF9yb290IiwiYXNzaWduUm9vdCIsInByb2plY3RfY29uZmlnIiwiYXNzaWduUHJvamVjdENvbmZpZyIsImRlZmF1bHRfY29uZmlnIiwiZGVmYXVsdENvbmZpZyIsImNvbmZpZ3MiLCJyZXN1bHQiLCJjb25maWdNb2RpZmllclBhdGgiLCJwYXRoIiwicmVzb2x2ZSIsImZvdW5kIiwicmVxdWlyZSIsInB1c2giLCJlcnIiLCJjYWxsaW5nRGlyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsS0FBWSxHQUFHLElBQUlDLGNBQUosRUFBckI7O0lBZWFDLFk7OztBQU9YLDhCQUFxRTtBQUFBLFFBQXZEQyxRQUF1RCxRQUF2REEsUUFBdUQ7QUFBQSxRQUE3Q0Msb0JBQTZDLFFBQTdDQSxvQkFBNkM7O0FBQUE7O0FBQ25FLFNBQUtDLFlBQUwsR0FBb0IsS0FBS0MsVUFBTCxDQUFnQkgsUUFBaEIsQ0FBcEI7QUFDQSxTQUFLSSxjQUFMLEdBQXNCLEtBQUtDLG1CQUFMLENBQXlCSixvQkFBekIsQ0FBdEI7QUFDQSxTQUFLSyxjQUFMLEdBQXNCQyxxQkFBdEI7QUFDQSxTQUFLQyxPQUFMLEdBQWUsQ0FBQyxLQUFLRixjQUFOLENBQWY7QUFDQSxTQUFLRyxNQUFMLHFCQUFtQixLQUFLSCxjQUF4Qjs7QUFFQSxRQUFNSSxrQkFBa0IsR0FBR0MsY0FBS0MsT0FBTCxDQUN6QixLQUFLVixZQURvQixFQUV6QixLQUFLRSxjQUZvQixDQUEzQjs7QUFLQSxRQUFJO0FBQ0YsVUFBTVMsS0FBSyxHQUFHQyxPQUFPLENBQUNKLGtCQUFELENBQXJCOztBQUNBLFdBQUtGLE9BQUwsQ0FBYU8sSUFBYixDQUFrQkYsS0FBbEI7QUFDRCxLQUhELENBR0UsT0FBT0csR0FBUCxFQUFZLENBQ1o7QUFDRDtBQUNGOzs7OytCQUVrQmhCLFEsRUFBMkI7QUFDNUMsYUFBTyxPQUFPQSxRQUFQLElBQW1CLFdBQW5CLEdBQ0hILEtBQUssQ0FBQ29CLFVBREgsR0FFSE4sY0FBS0MsT0FBTCxDQUFhZixLQUFLLENBQUNvQixVQUFuQixFQUErQmpCLFFBQS9CLENBRko7QUFHRDs7O3dDQUUyQkMsb0IsRUFBdUM7QUFDakUsYUFBTyxPQUFPQSxvQkFBUCxJQUErQixXQUEvQixHQUNISixLQUFLLENBQUNJLG9CQURILEdBRUhBLG9CQUZKO0FBR0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQYXRocyB9IGZyb20gJy4vLi4vZ2xvYmFscydcbmltcG9ydCB7IENvbmZpZ09iamVjdCB9IGZyb20gJy4vQ29uZmlnT2JqZWN0J1xuaW1wb3J0IHsgY29uZmlnIGFzIGRlZmF1bHRDb25maWcsIGNvbmZpZyB9IGZyb20gJy4vLi4vZGVmYXVsdENvbmZpZydcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnXG5cbmNvbnN0IHBhdGhzOiBQYXRocyA9IG5ldyBQYXRocygpXG5cbmludGVyZmFjZSBJQ29uZmlndXJhdG9ySW5wdXRzIHtcbiAgcm9vdFBhdGg/OiBzdHJpbmdcbiAgcHJvamVjdENvbmZpZ1N1YlBhdGg/OiBzdHJpbmdcbn1cblxuaW50ZXJmYWNlIElDb25maWd1cmF0b3Ige1xuICByZWFkb25seSBwcm9qZWN0X3Jvb3Q6IHN0cmluZ1xuICByZWFkb25seSBwcm9qZWN0X2NvbmZpZzogc3RyaW5nXG4gIHJlYWRvbmx5IGRlZmF1bHRfY29uZmlnOiBDb25maWdPYmplY3RcbiAgcmVhZG9ubHkgY29uZmlnczogQXJyYXk8Q29uZmlnT2JqZWN0PlxuICByZWFkb25seSByZXN1bHQ6IENvbmZpZ09iamVjdFxufVxuXG5leHBvcnQgY2xhc3MgQ29uZmlndXJhdG9yIGltcGxlbWVudHMgSUNvbmZpZ3VyYXRvciB7XG4gIHJlYWRvbmx5IHByb2plY3Rfcm9vdDogc3RyaW5nXG4gIHJlYWRvbmx5IHByb2plY3RfY29uZmlnOiBzdHJpbmdcbiAgcmVhZG9ubHkgZGVmYXVsdF9jb25maWc6IENvbmZpZ09iamVjdFxuICByZWFkb25seSBjb25maWdzOiBBcnJheTxDb25maWdPYmplY3Q+XG4gIHJlYWRvbmx5IHJlc3VsdDogQ29uZmlnT2JqZWN0XG5cbiAgY29uc3RydWN0b3IoeyByb290UGF0aCwgcHJvamVjdENvbmZpZ1N1YlBhdGggfTogSUNvbmZpZ3VyYXRvcklucHV0cykge1xuICAgIHRoaXMucHJvamVjdF9yb290ID0gdGhpcy5hc3NpZ25Sb290KHJvb3RQYXRoKVxuICAgIHRoaXMucHJvamVjdF9jb25maWcgPSB0aGlzLmFzc2lnblByb2plY3RDb25maWcocHJvamVjdENvbmZpZ1N1YlBhdGgpXG4gICAgdGhpcy5kZWZhdWx0X2NvbmZpZyA9IGRlZmF1bHRDb25maWdcbiAgICB0aGlzLmNvbmZpZ3MgPSBbdGhpcy5kZWZhdWx0X2NvbmZpZ11cbiAgICB0aGlzLnJlc3VsdCA9IHsgLi4udGhpcy5kZWZhdWx0X2NvbmZpZyB9XG5cbiAgICBjb25zdCBjb25maWdNb2RpZmllclBhdGggPSBwYXRoLnJlc29sdmUoXG4gICAgICB0aGlzLnByb2plY3Rfcm9vdCxcbiAgICAgIHRoaXMucHJvamVjdF9jb25maWdcbiAgICApXG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgZm91bmQgPSByZXF1aXJlKGNvbmZpZ01vZGlmaWVyUGF0aClcbiAgICAgIHRoaXMuY29uZmlncy5wdXNoKGZvdW5kKVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgLy8gTm8gY29uZmlnIGZvdW5kIGluIHByb2plY3QsIG5vdGhpbmcgdG8gZG9cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFzc2lnblJvb3Qocm9vdFBhdGg/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiB0eXBlb2Ygcm9vdFBhdGggPT0gJ3VuZGVmaW5lZCdcbiAgICAgID8gcGF0aHMuY2FsbGluZ0RpclxuICAgICAgOiBwYXRoLnJlc29sdmUocGF0aHMuY2FsbGluZ0Rpciwgcm9vdFBhdGgpXG4gIH1cblxuICBwcml2YXRlIGFzc2lnblByb2plY3RDb25maWcocHJvamVjdENvbmZpZ1N1YlBhdGg/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiB0eXBlb2YgcHJvamVjdENvbmZpZ1N1YlBhdGggPT0gJ3VuZGVmaW5lZCdcbiAgICAgID8gcGF0aHMucHJvamVjdENvbmZpZ1N1YlBhdGhcbiAgICAgIDogcHJvamVjdENvbmZpZ1N1YlBhdGhcbiAgfVxufVxuIl19