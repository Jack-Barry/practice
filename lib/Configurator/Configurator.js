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

    console.log("inputs: ".concat((0, _globals.jsonify)(inputs)));
  }

  _createClass(Configurator, [{
    key: "setup",
    value: function setup() {
      console.log("defaultConfig: ".concat((0, _globals.jsonify)(_defaultConfig.config)));
      return {};
    }
  }]);

  return Configurator;
}();

exports.Configurator = Configurator;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Db25maWd1cmF0b3IvQ29uZmlndXJhdG9yLnRzIl0sIm5hbWVzIjpbIkNvbmZpZ3VyYXRvciIsImlucHV0cyIsImNvbnNvbGUiLCJsb2ciLCJjb25maWciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7Ozs7SUFJYUEsWTs7O0FBQ1gsMEJBQThDO0FBQUEsUUFBbENDLE1BQWtDLHVFQUFKLEVBQUk7O0FBQUE7O0FBQzVDQyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsbUJBQXVCLHNCQUFRRixNQUFSLENBQXZCO0FBQ0Q7Ozs7NEJBRTZCO0FBQzVCQyxNQUFBQSxPQUFPLENBQUNDLEdBQVIsMEJBQThCLHNCQUFRQyxxQkFBUixDQUE5QjtBQUNBLGFBQU8sRUFBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSUNvbmZpZ09iamVjdCwgY29uZmlnIH0gZnJvbSAnLi8uLi9kZWZhdWx0Q29uZmlnJ1xuaW1wb3J0IHsganNvbmlmeSB9IGZyb20gJy4vLi4vZ2xvYmFscydcblxuaW50ZXJmYWNlIElDb25maWd1cmF0b3JJbnB1dHMge31cblxuZXhwb3J0IGNsYXNzIENvbmZpZ3VyYXRvciB7XG4gIGNvbnN0cnVjdG9yKGlucHV0czogSUNvbmZpZ3VyYXRvcklucHV0cyA9IHt9KSB7XG4gICAgY29uc29sZS5sb2coYGlucHV0czogJHtqc29uaWZ5KGlucHV0cyl9YClcbiAgfVxuXG4gIHB1YmxpYyBzZXR1cCgpOiBJQ29uZmlnT2JqZWN0IHtcbiAgICBjb25zb2xlLmxvZyhgZGVmYXVsdENvbmZpZzogJHtqc29uaWZ5KGNvbmZpZyl9YClcbiAgICByZXR1cm4ge31cbiAgfVxufVxuIl19