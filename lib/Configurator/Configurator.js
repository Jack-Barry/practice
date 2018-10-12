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

var Configurator = function Configurator(_ref) {
  var rootPath = _ref.rootPath,
      projectConfigSubPath = _ref.projectConfigSubPath;

  _classCallCheck(this, Configurator);

  var paths = new _globals.Paths();

  if (typeof rootPath == 'undefined') {
    this.project_root = paths.callingDir;
  } else {
    this.project_root = _path.default.resolve(paths.callingDir, rootPath);
  }

  if (typeof projectConfigSubPath == 'undefined') projectConfigSubPath = paths.projectConfigSubPath;
  this.project_config = projectConfigSubPath;
  this.default_config = _defaultConfig.config;
  this.configs = [this.default_config];
  this.result = _objectSpread({}, this.default_config);
};

exports.Configurator = Configurator;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Db25maWd1cmF0b3IvQ29uZmlndXJhdG9yLnRzIl0sIm5hbWVzIjpbIkNvbmZpZ3VyYXRvciIsInJvb3RQYXRoIiwicHJvamVjdENvbmZpZ1N1YlBhdGgiLCJwYXRocyIsIlBhdGhzIiwicHJvamVjdF9yb290IiwiY2FsbGluZ0RpciIsInBhdGgiLCJyZXNvbHZlIiwicHJvamVjdF9jb25maWciLCJkZWZhdWx0X2NvbmZpZyIsImRlZmF1bHRDb25maWciLCJjb25maWdzIiwicmVzdWx0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUE7O0FBQ0E7Ozs7Ozs7Ozs7SUFVYUEsWSxHQU9YLDRCQU1HO0FBQUEsTUFMREMsUUFLQyxRQUxEQSxRQUtDO0FBQUEsTUFKREMsb0JBSUMsUUFKREEsb0JBSUM7O0FBQUE7O0FBQ0QsTUFBTUMsS0FBWSxHQUFHLElBQUlDLGNBQUosRUFBckI7O0FBQ0EsTUFBSSxPQUFPSCxRQUFQLElBQW1CLFdBQXZCLEVBQW9DO0FBQ2xDLFNBQUtJLFlBQUwsR0FBb0JGLEtBQUssQ0FBQ0csVUFBMUI7QUFDRCxHQUZELE1BRU87QUFDTCxTQUFLRCxZQUFMLEdBQW9CRSxjQUFLQyxPQUFMLENBQWFMLEtBQUssQ0FBQ0csVUFBbkIsRUFBK0JMLFFBQS9CLENBQXBCO0FBQ0Q7O0FBRUQsTUFBSSxPQUFPQyxvQkFBUCxJQUErQixXQUFuQyxFQUNFQSxvQkFBb0IsR0FBR0MsS0FBSyxDQUFDRCxvQkFBN0I7QUFFRixPQUFLTyxjQUFMLEdBQXNCUCxvQkFBdEI7QUFDQSxPQUFLUSxjQUFMLEdBQXNCQyxxQkFBdEI7QUFDQSxPQUFLQyxPQUFMLEdBQWUsQ0FBQyxLQUFLRixjQUFOLENBQWY7QUFDQSxPQUFLRyxNQUFMLHFCQUFtQixLQUFLSCxjQUF4QjtBQUNELEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQYXRocyB9IGZyb20gJy4vLi4vZ2xvYmFscydcclxuaW1wb3J0IHsgQ29uZmlnT2JqZWN0IH0gZnJvbSAnLi9Db25maWdPYmplY3QnXHJcbmltcG9ydCB7IGNvbmZpZyBhcyBkZWZhdWx0Q29uZmlnIH0gZnJvbSAnLi8uLi9kZWZhdWx0Q29uZmlnJ1xyXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xyXG5cclxuaW50ZXJmYWNlIElDb25maWd1cmF0b3Ige1xyXG4gIHJlYWRvbmx5IHByb2plY3Rfcm9vdDogc3RyaW5nXHJcbiAgcmVhZG9ubHkgcHJvamVjdF9jb25maWc6IHN0cmluZ1xyXG4gIHJlYWRvbmx5IGRlZmF1bHRfY29uZmlnOiBDb25maWdPYmplY3RcclxuICByZWFkb25seSBjb25maWdzOiBBcnJheTxDb25maWdPYmplY3Q+XHJcbiAgcmVhZG9ubHkgcmVzdWx0OiBDb25maWdPYmplY3RcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENvbmZpZ3VyYXRvciBpbXBsZW1lbnRzIElDb25maWd1cmF0b3Ige1xyXG4gIHJlYWRvbmx5IHByb2plY3Rfcm9vdDogc3RyaW5nXHJcbiAgcmVhZG9ubHkgcHJvamVjdF9jb25maWc6IHN0cmluZ1xyXG4gIHJlYWRvbmx5IGRlZmF1bHRfY29uZmlnOiBDb25maWdPYmplY3RcclxuICByZWFkb25seSBjb25maWdzOiBBcnJheTxDb25maWdPYmplY3Q+XHJcbiAgcmVhZG9ubHkgcmVzdWx0OiBDb25maWdPYmplY3RcclxuXHJcbiAgY29uc3RydWN0b3Ioe1xyXG4gICAgcm9vdFBhdGgsXHJcbiAgICBwcm9qZWN0Q29uZmlnU3ViUGF0aFxyXG4gIH06IHtcclxuICAgIHJvb3RQYXRoPzogc3RyaW5nXHJcbiAgICBwcm9qZWN0Q29uZmlnU3ViUGF0aD86IHN0cmluZ1xyXG4gIH0pIHtcclxuICAgIGNvbnN0IHBhdGhzOiBQYXRocyA9IG5ldyBQYXRocygpXHJcbiAgICBpZiAodHlwZW9mIHJvb3RQYXRoID09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgIHRoaXMucHJvamVjdF9yb290ID0gcGF0aHMuY2FsbGluZ0RpclxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5wcm9qZWN0X3Jvb3QgPSBwYXRoLnJlc29sdmUocGF0aHMuY2FsbGluZ0Rpciwgcm9vdFBhdGgpXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHR5cGVvZiBwcm9qZWN0Q29uZmlnU3ViUGF0aCA9PSAndW5kZWZpbmVkJylcclxuICAgICAgcHJvamVjdENvbmZpZ1N1YlBhdGggPSBwYXRocy5wcm9qZWN0Q29uZmlnU3ViUGF0aFxyXG5cclxuICAgIHRoaXMucHJvamVjdF9jb25maWcgPSBwcm9qZWN0Q29uZmlnU3ViUGF0aFxyXG4gICAgdGhpcy5kZWZhdWx0X2NvbmZpZyA9IGRlZmF1bHRDb25maWdcclxuICAgIHRoaXMuY29uZmlncyA9IFt0aGlzLmRlZmF1bHRfY29uZmlnXVxyXG4gICAgdGhpcy5yZXN1bHQgPSB7IC4uLnRoaXMuZGVmYXVsdF9jb25maWcgfVxyXG4gIH1cclxufVxyXG4iXX0=