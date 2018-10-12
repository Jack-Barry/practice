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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Db25maWd1cmF0b3IvQ29uZmlndXJhdG9yLnRzIl0sIm5hbWVzIjpbInBhdGhzIiwiUGF0aHMiLCJDb25maWd1cmF0b3IiLCJyb290UGF0aCIsInByb2plY3RDb25maWdTdWJQYXRoIiwicHJvamVjdF9yb290IiwiYXNzaWduUm9vdCIsInByb2plY3RfY29uZmlnIiwiYXNzaWduUHJvamVjdENvbmZpZyIsImRlZmF1bHRfY29uZmlnIiwiZGVmYXVsdENvbmZpZyIsImNvbmZpZ3MiLCJyZXN1bHQiLCJjYWxsaW5nRGlyIiwicGF0aCIsInJlc29sdmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxLQUFZLEdBQUcsSUFBSUMsY0FBSixFQUFyQjs7SUFlYUMsWTs7O0FBT1gsOEJBQXFFO0FBQUEsUUFBdkRDLFFBQXVELFFBQXZEQSxRQUF1RDtBQUFBLFFBQTdDQyxvQkFBNkMsUUFBN0NBLG9CQUE2Qzs7QUFBQTs7QUFDbkUsU0FBS0MsWUFBTCxHQUFvQixLQUFLQyxVQUFMLENBQWdCSCxRQUFoQixDQUFwQjtBQUNBLFNBQUtJLGNBQUwsR0FBc0IsS0FBS0MsbUJBQUwsQ0FBeUJKLG9CQUF6QixDQUF0QjtBQUNBLFNBQUtLLGNBQUwsR0FBc0JDLHFCQUF0QjtBQUNBLFNBQUtDLE9BQUwsR0FBZSxDQUFDLEtBQUtGLGNBQU4sQ0FBZjtBQUNBLFNBQUtHLE1BQUwscUJBQW1CLEtBQUtILGNBQXhCO0FBQ0Q7Ozs7K0JBRWtCTixRLEVBQTJCO0FBQzVDLGFBQU8sT0FBT0EsUUFBUCxJQUFtQixXQUFuQixHQUNISCxLQUFLLENBQUNhLFVBREgsR0FFSEMsY0FBS0MsT0FBTCxDQUFhZixLQUFLLENBQUNhLFVBQW5CLEVBQStCVixRQUEvQixDQUZKO0FBR0Q7Ozt3Q0FFMkJDLG9CLEVBQXVDO0FBQ2pFLGFBQU8sT0FBT0Esb0JBQVAsSUFBK0IsV0FBL0IsR0FDSEosS0FBSyxDQUFDSSxvQkFESCxHQUVIQSxvQkFGSjtBQUdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGF0aHMgfSBmcm9tICcuLy4uL2dsb2JhbHMnXHJcbmltcG9ydCB7IENvbmZpZ09iamVjdCB9IGZyb20gJy4vQ29uZmlnT2JqZWN0J1xyXG5pbXBvcnQgeyBjb25maWcgYXMgZGVmYXVsdENvbmZpZyB9IGZyb20gJy4vLi4vZGVmYXVsdENvbmZpZydcclxuaW1wb3J0IHBhdGggZnJvbSAncGF0aCdcclxuXHJcbmNvbnN0IHBhdGhzOiBQYXRocyA9IG5ldyBQYXRocygpXHJcblxyXG5pbnRlcmZhY2UgSUNvbmZpZ3VyYXRvcklucHV0cyB7XHJcbiAgcm9vdFBhdGg/OiBzdHJpbmdcclxuICBwcm9qZWN0Q29uZmlnU3ViUGF0aD86IHN0cmluZ1xyXG59XHJcblxyXG5pbnRlcmZhY2UgSUNvbmZpZ3VyYXRvciB7XHJcbiAgcmVhZG9ubHkgcHJvamVjdF9yb290OiBzdHJpbmdcclxuICByZWFkb25seSBwcm9qZWN0X2NvbmZpZzogc3RyaW5nXHJcbiAgcmVhZG9ubHkgZGVmYXVsdF9jb25maWc6IENvbmZpZ09iamVjdFxyXG4gIHJlYWRvbmx5IGNvbmZpZ3M6IEFycmF5PENvbmZpZ09iamVjdD5cclxuICByZWFkb25seSByZXN1bHQ6IENvbmZpZ09iamVjdFxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ29uZmlndXJhdG9yIGltcGxlbWVudHMgSUNvbmZpZ3VyYXRvciB7XHJcbiAgcmVhZG9ubHkgcHJvamVjdF9yb290OiBzdHJpbmdcclxuICByZWFkb25seSBwcm9qZWN0X2NvbmZpZzogc3RyaW5nXHJcbiAgcmVhZG9ubHkgZGVmYXVsdF9jb25maWc6IENvbmZpZ09iamVjdFxyXG4gIHJlYWRvbmx5IGNvbmZpZ3M6IEFycmF5PENvbmZpZ09iamVjdD5cclxuICByZWFkb25seSByZXN1bHQ6IENvbmZpZ09iamVjdFxyXG5cclxuICBjb25zdHJ1Y3Rvcih7IHJvb3RQYXRoLCBwcm9qZWN0Q29uZmlnU3ViUGF0aCB9OiBJQ29uZmlndXJhdG9ySW5wdXRzKSB7XHJcbiAgICB0aGlzLnByb2plY3Rfcm9vdCA9IHRoaXMuYXNzaWduUm9vdChyb290UGF0aClcclxuICAgIHRoaXMucHJvamVjdF9jb25maWcgPSB0aGlzLmFzc2lnblByb2plY3RDb25maWcocHJvamVjdENvbmZpZ1N1YlBhdGgpXHJcbiAgICB0aGlzLmRlZmF1bHRfY29uZmlnID0gZGVmYXVsdENvbmZpZ1xyXG4gICAgdGhpcy5jb25maWdzID0gW3RoaXMuZGVmYXVsdF9jb25maWddXHJcbiAgICB0aGlzLnJlc3VsdCA9IHsgLi4udGhpcy5kZWZhdWx0X2NvbmZpZyB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGFzc2lnblJvb3Qocm9vdFBhdGg/OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHR5cGVvZiByb290UGF0aCA9PSAndW5kZWZpbmVkJ1xyXG4gICAgICA/IHBhdGhzLmNhbGxpbmdEaXJcclxuICAgICAgOiBwYXRoLnJlc29sdmUocGF0aHMuY2FsbGluZ0Rpciwgcm9vdFBhdGgpXHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGFzc2lnblByb2plY3RDb25maWcocHJvamVjdENvbmZpZ1N1YlBhdGg/OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHR5cGVvZiBwcm9qZWN0Q29uZmlnU3ViUGF0aCA9PSAndW5kZWZpbmVkJ1xyXG4gICAgICA/IHBhdGhzLnByb2plY3RDb25maWdTdWJQYXRoXHJcbiAgICAgIDogcHJvamVjdENvbmZpZ1N1YlBhdGhcclxuICB9XHJcbn1cclxuIl19