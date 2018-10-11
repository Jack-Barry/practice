"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Configurator = void 0;

var _defaultConfig = require("./../defaultConfig");

var _globals = require("./../globals");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Configurator =
/*#__PURE__*/
function () {
  function Configurator() {
    var inputs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Configurator);

    console.log("inputs: ".concat((0, _globals.jsonPrint)(inputs)));
  }

  _createClass(Configurator, [{
    key: "setup",
    value: function setup() {
      console.log("defaultConfig: ".concat((0, _globals.jsonPrint)(_defaultConfig.config)));
      return {};
    }
  }]);

  return Configurator;
}();

exports.Configurator = Configurator;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Db25maWd1cmF0b3IvQ29uZmlndXJhdG9yLnRzIl0sIm5hbWVzIjpbIkNvbmZpZ3VyYXRvciIsImlucHV0cyIsImNvbnNvbGUiLCJsb2ciLCJjb25maWciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7Ozs7SUFNYUEsWTs7O0FBQ1gsMEJBQXdDO0FBQUEsUUFBNUJDLE1BQTRCLHVFQUFKLEVBQUk7O0FBQUE7O0FBQ3RDQyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsbUJBQXVCLHdCQUFVRixNQUFWLENBQXZCO0FBQ0Q7Ozs7NEJBRTZCO0FBQzVCQyxNQUFBQSxPQUFPLENBQUNDLEdBQVIsMEJBQThCLHdCQUFVQyxxQkFBVixDQUE5QjtBQUNBLGFBQU8sRUFBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnLi8uLi9kZWZhdWx0Q29uZmlnJ1xuaW1wb3J0IHsganNvblByaW50IH0gZnJvbSAnLi8uLi9nbG9iYWxzJ1xuXG5leHBvcnQgaW50ZXJmYWNlIElDb25maWdPYmplY3Qge31cblxuaW50ZXJmYWNlIElDb25maWdJbnB1dHMge31cblxuZXhwb3J0IGNsYXNzIENvbmZpZ3VyYXRvciB7XG4gIGNvbnN0cnVjdG9yKGlucHV0czogSUNvbmZpZ0lucHV0cyA9IHt9KSB7XG4gICAgY29uc29sZS5sb2coYGlucHV0czogJHtqc29uUHJpbnQoaW5wdXRzKX1gKVxuICB9XG5cbiAgcHVibGljIHNldHVwKCk6IElDb25maWdPYmplY3Qge1xuICAgIGNvbnNvbGUubG9nKGBkZWZhdWx0Q29uZmlnOiAke2pzb25QcmludChjb25maWcpfWApXG4gICAgcmV0dXJuIHt9XG4gIH1cbn1cbiJdfQ==