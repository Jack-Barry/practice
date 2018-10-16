"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Parser = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Parser =
/*#__PURE__*/
function () {
  function Parser() {
    var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    _classCallCheck(this, Parser);

    this.args = args;
    this.configModifierPath = this.setConfigModifierPath();
  }

  _createClass(Parser, [{
    key: "setConfigModifierPath",
    value: function setConfigModifierPath() {
      var _this = this;

      var path = '';
      this.args.forEach(function (a, i) {
        if (a === '--config') {
          path = _this.args[i + 1];
        }
      });
      return path;
    }
  }]);

  return Parser;
}();

exports.Parser = Parser;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9QYXJzZXIvUGFyc2VyLnRzIl0sIm5hbWVzIjpbIlBhcnNlciIsImFyZ3MiLCJjb25maWdNb2RpZmllclBhdGgiLCJzZXRDb25maWdNb2RpZmllclBhdGgiLCJwYXRoIiwiZm9yRWFjaCIsImEiLCJpIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0lBS2FBLE07OztBQUlYLG9CQUFzQztBQUFBLFFBQTFCQyxJQUEwQix1RUFBSixFQUFJOztBQUFBOztBQUNwQyxTQUFLQSxJQUFMLEdBQVlBLElBQVo7QUFDQSxTQUFLQyxrQkFBTCxHQUEwQixLQUFLQyxxQkFBTCxFQUExQjtBQUNEOzs7OzRDQUUrQjtBQUFBOztBQUM5QixVQUFJQyxJQUFZLEdBQUcsRUFBbkI7QUFFQSxXQUFLSCxJQUFMLENBQVVJLE9BQVYsQ0FBa0IsVUFBQ0MsQ0FBRCxFQUFJQyxDQUFKLEVBQVU7QUFDMUIsWUFBSUQsQ0FBQyxLQUFLLFVBQVYsRUFBc0I7QUFDcEJGLFVBQUFBLElBQUksR0FBRyxLQUFJLENBQUNILElBQUwsQ0FBVU0sQ0FBQyxHQUFHLENBQWQsQ0FBUDtBQUNEO0FBQ0YsT0FKRDtBQUtBLGFBQU9ILElBQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbImludGVyZmFjZSBJUGFyc2VyIHtcclxuICBhcmdzOiBBcnJheTxzdHJpbmc+XHJcbiAgY29uZmlnTW9kaWZpZXJQYXRoOiBzdHJpbmdcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFBhcnNlciBpbXBsZW1lbnRzIElQYXJzZXIge1xyXG4gIGFyZ3M6IEFycmF5PHN0cmluZz5cclxuICBjb25maWdNb2RpZmllclBhdGg6IHN0cmluZ1xyXG5cclxuICBjb25zdHJ1Y3RvcihhcmdzOiBBcnJheTxzdHJpbmc+ID0gW10pIHtcclxuICAgIHRoaXMuYXJncyA9IGFyZ3NcclxuICAgIHRoaXMuY29uZmlnTW9kaWZpZXJQYXRoID0gdGhpcy5zZXRDb25maWdNb2RpZmllclBhdGgoKVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRDb25maWdNb2RpZmllclBhdGgoKSB7XHJcbiAgICBsZXQgcGF0aDogc3RyaW5nID0gJydcclxuXHJcbiAgICB0aGlzLmFyZ3MuZm9yRWFjaCgoYSwgaSkgPT4ge1xyXG4gICAgICBpZiAoYSA9PT0gJy0tY29uZmlnJykge1xyXG4gICAgICAgIHBhdGggPSB0aGlzLmFyZ3NbaSArIDFdXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICByZXR1cm4gcGF0aFxyXG4gIH1cclxufVxyXG4iXX0=