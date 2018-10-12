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
    this.default_config = (0, _defaultConfig.config)();
    this.configs = this.buildConfigArray();
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
  }]);

  return Configurator;
}();

exports.Configurator = Configurator;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Db25maWd1cmF0b3IvQ29uZmlndXJhdG9yLnRzIl0sIm5hbWVzIjpbInBhdGhzIiwiUGF0aHMiLCJDb25maWd1cmF0b3IiLCJyb290UGF0aCIsInByb2plY3RDb25maWdTdWJQYXRoIiwicHJvamVjdF9yb290IiwiYXNzaWduUm9vdCIsInByb2plY3RfY29uZmlnIiwiYXNzaWduUHJvamVjdENvbmZpZyIsImRlZmF1bHRfY29uZmlnIiwiY29uZmlncyIsImJ1aWxkQ29uZmlnQXJyYXkiLCJyZXN1bHQiLCJjYWxsaW5nRGlyIiwicGF0aCIsInJlc29sdmUiLCJvdXRwdXQiLCJjb25maWdNb2RpZmllclBhdGgiLCJwdXNoIiwicmVxdWlyZSIsImVyciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBOztBQUNBOzs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLEtBQVksR0FBRyxJQUFJQyxjQUFKLEVBQXJCOztJQWVhQyxZOzs7QUFPWCw4QkFBcUU7QUFBQSxRQUF2REMsUUFBdUQsUUFBdkRBLFFBQXVEO0FBQUEsUUFBN0NDLG9CQUE2QyxRQUE3Q0Esb0JBQTZDOztBQUFBOztBQUNuRSxTQUFLQyxZQUFMLEdBQW9CLEtBQUtDLFVBQUwsQ0FBZ0JILFFBQWhCLENBQXBCO0FBQ0EsU0FBS0ksY0FBTCxHQUFzQixLQUFLQyxtQkFBTCxDQUF5Qkosb0JBQXpCLENBQXRCO0FBQ0EsU0FBS0ssY0FBTCxHQUFzQiw0QkFBdEI7QUFDQSxTQUFLQyxPQUFMLEdBQWUsS0FBS0MsZ0JBQUwsRUFBZjtBQUNBLFNBQUtDLE1BQUwscUJBQW1CLEtBQUtILGNBQXhCO0FBQ0Q7Ozs7K0JBRWtCTixRLEVBQTJCO0FBQzVDLGFBQU8sT0FBT0EsUUFBUCxJQUFtQixXQUFuQixHQUNISCxLQUFLLENBQUNhLFVBREgsR0FFSEMsY0FBS0MsT0FBTCxDQUFhZixLQUFLLENBQUNhLFVBQW5CLEVBQStCVixRQUEvQixDQUZKO0FBR0Q7Ozt3Q0FFMkJDLG9CLEVBQXVDO0FBQ2pFLGFBQU8sT0FBT0Esb0JBQVAsSUFBK0IsV0FBL0IsR0FDSEosS0FBSyxDQUFDSSxvQkFESCxHQUVIQSxvQkFGSjtBQUdEOzs7dUNBRTBCO0FBQ3pCLFVBQUlZLE1BQTJCLEdBQUcsQ0FBQyxLQUFLUCxjQUFOLENBQWxDOztBQUVBLFVBQU1RLGtCQUEwQixHQUFHSCxjQUFLQyxPQUFMLENBQ2pDLEtBQUtWLFlBRDRCLEVBRWpDLEtBQUtFLGNBRjRCLENBQW5DOztBQUtBLFVBQUk7QUFDRlMsUUFBQUEsTUFBTSxDQUFDRSxJQUFQLENBQVlDLE9BQU8sQ0FBQ0Ysa0JBQUQsQ0FBbkI7QUFDRCxPQUZELENBRUUsT0FBT0csR0FBUCxFQUFZLENBQ1o7QUFDRDs7QUFFRCxhQUFPSixNQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQYXRocyB9IGZyb20gJy4vLi4vZ2xvYmFscydcbmltcG9ydCB7IENvbmZpZ09iamVjdCB9IGZyb20gJy4vQ29uZmlnT2JqZWN0J1xuaW1wb3J0IHsgY29uZmlnIGFzIGRlZmF1bHRDb25maWcgfSBmcm9tICcuLy4uL2RlZmF1bHRDb25maWcnXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xuXG5jb25zdCBwYXRoczogUGF0aHMgPSBuZXcgUGF0aHMoKVxuXG5pbnRlcmZhY2UgSUNvbmZpZ3VyYXRvcklucHV0cyB7XG4gIHJvb3RQYXRoPzogc3RyaW5nXG4gIHByb2plY3RDb25maWdTdWJQYXRoPzogc3RyaW5nXG59XG5cbmludGVyZmFjZSBJQ29uZmlndXJhdG9yIHtcbiAgcmVhZG9ubHkgcHJvamVjdF9yb290OiBzdHJpbmdcbiAgcmVhZG9ubHkgcHJvamVjdF9jb25maWc6IHN0cmluZ1xuICByZWFkb25seSBkZWZhdWx0X2NvbmZpZzogQ29uZmlnT2JqZWN0XG4gIHJlYWRvbmx5IGNvbmZpZ3M6IEFycmF5PENvbmZpZ09iamVjdD5cbiAgcmVhZG9ubHkgcmVzdWx0OiBDb25maWdPYmplY3Rcbn1cblxuZXhwb3J0IGNsYXNzIENvbmZpZ3VyYXRvciBpbXBsZW1lbnRzIElDb25maWd1cmF0b3Ige1xuICByZWFkb25seSBwcm9qZWN0X3Jvb3Q6IHN0cmluZ1xuICByZWFkb25seSBwcm9qZWN0X2NvbmZpZzogc3RyaW5nXG4gIHJlYWRvbmx5IGRlZmF1bHRfY29uZmlnOiBDb25maWdPYmplY3RcbiAgcmVhZG9ubHkgY29uZmlnczogQXJyYXk8Q29uZmlnT2JqZWN0PlxuICByZWFkb25seSByZXN1bHQ6IENvbmZpZ09iamVjdFxuXG4gIGNvbnN0cnVjdG9yKHsgcm9vdFBhdGgsIHByb2plY3RDb25maWdTdWJQYXRoIH06IElDb25maWd1cmF0b3JJbnB1dHMpIHtcbiAgICB0aGlzLnByb2plY3Rfcm9vdCA9IHRoaXMuYXNzaWduUm9vdChyb290UGF0aClcbiAgICB0aGlzLnByb2plY3RfY29uZmlnID0gdGhpcy5hc3NpZ25Qcm9qZWN0Q29uZmlnKHByb2plY3RDb25maWdTdWJQYXRoKVxuICAgIHRoaXMuZGVmYXVsdF9jb25maWcgPSBkZWZhdWx0Q29uZmlnKClcbiAgICB0aGlzLmNvbmZpZ3MgPSB0aGlzLmJ1aWxkQ29uZmlnQXJyYXkoKVxuICAgIHRoaXMucmVzdWx0ID0geyAuLi50aGlzLmRlZmF1bHRfY29uZmlnIH1cbiAgfVxuXG4gIHByaXZhdGUgYXNzaWduUm9vdChyb290UGF0aD86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHR5cGVvZiByb290UGF0aCA9PSAndW5kZWZpbmVkJ1xuICAgICAgPyBwYXRocy5jYWxsaW5nRGlyXG4gICAgICA6IHBhdGgucmVzb2x2ZShwYXRocy5jYWxsaW5nRGlyLCByb290UGF0aClcbiAgfVxuXG4gIHByaXZhdGUgYXNzaWduUHJvamVjdENvbmZpZyhwcm9qZWN0Q29uZmlnU3ViUGF0aD86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHR5cGVvZiBwcm9qZWN0Q29uZmlnU3ViUGF0aCA9PSAndW5kZWZpbmVkJ1xuICAgICAgPyBwYXRocy5wcm9qZWN0Q29uZmlnU3ViUGF0aFxuICAgICAgOiBwcm9qZWN0Q29uZmlnU3ViUGF0aFxuICB9XG5cbiAgcHJpdmF0ZSBidWlsZENvbmZpZ0FycmF5KCkge1xuICAgIGxldCBvdXRwdXQ6IEFycmF5PENvbmZpZ09iamVjdD4gPSBbdGhpcy5kZWZhdWx0X2NvbmZpZ11cblxuICAgIGNvbnN0IGNvbmZpZ01vZGlmaWVyUGF0aDogc3RyaW5nID0gcGF0aC5yZXNvbHZlKFxuICAgICAgdGhpcy5wcm9qZWN0X3Jvb3QsXG4gICAgICB0aGlzLnByb2plY3RfY29uZmlnXG4gICAgKVxuXG4gICAgdHJ5IHtcbiAgICAgIG91dHB1dC5wdXNoKHJlcXVpcmUoY29uZmlnTW9kaWZpZXJQYXRoKSlcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIC8vIE5vdGhpbmcgd2FzIGZvdW5kLCBub3RoaW5nIHRvIGRvIGhlcmUgZm9sa3NcbiAgICB9XG5cbiAgICByZXR1cm4gb3V0cHV0XG4gIH1cbn1cbiJdfQ==