"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CLI = void 0;

var globals = _interopRequireWildcard(require("./globals"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var CLI =
/*#__PURE__*/
function () {
  function CLI() {
    _classCallCheck(this, CLI);

    this.globalPaths = new globals.Paths();

    this.run = function run() {
      console.log("Running!");
      this.printGlobals();
    };
  }

  _createClass(CLI, [{
    key: "printGlobals",
    value: function printGlobals() {
      console.log("Here are the global paths:");
      console.log(JSON.stringify(this.globalPaths, null, 2));
    }
  }]);

  return CLI;
}();

exports.CLI = CLI;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jbGkudHMiXSwibmFtZXMiOlsiQ0xJIiwiZ2xvYmFsUGF0aHMiLCJnbG9iYWxzIiwiUGF0aHMiLCJydW4iLCJjb25zb2xlIiwibG9nIiwicHJpbnRHbG9iYWxzIiwiSlNPTiIsInN0cmluZ2lmeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7Ozs7Ozs7O0lBRWFBLEc7OztBQUlYLGlCQUFjO0FBQUE7O0FBQ1osU0FBS0MsV0FBTCxHQUFtQixJQUFJQyxPQUFPLENBQUNDLEtBQVosRUFBbkI7O0FBQ0EsU0FBS0MsR0FBTCxHQUFXLFNBQVNBLEdBQVQsR0FBcUI7QUFDOUJDLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFVBQVo7QUFDQSxXQUFLQyxZQUFMO0FBQ0QsS0FIRDtBQUlEOzs7O21DQUU0QjtBQUMzQkYsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksNEJBQVo7QUFDQUQsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlFLElBQUksQ0FBQ0MsU0FBTCxDQUFlLEtBQUtSLFdBQXBCLEVBQWlDLElBQWpDLEVBQXVDLENBQXZDLENBQVo7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGdsb2JhbHMgZnJvbSBcIi4vZ2xvYmFsc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIENMSSB7XHJcbiAgZ2xvYmFsUGF0aHM6IGdsb2JhbHMuUGF0aHM7XHJcbiAgcnVuOiAoKSA9PiB2b2lkO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuZ2xvYmFsUGF0aHMgPSBuZXcgZ2xvYmFscy5QYXRocygpO1xyXG4gICAgdGhpcy5ydW4gPSBmdW5jdGlvbiBydW4oKTogdm9pZCB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiUnVubmluZyFcIik7XHJcbiAgICAgIHRoaXMucHJpbnRHbG9iYWxzKCk7XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBwcmludEdsb2JhbHMoKTogdm9pZCB7XHJcbiAgICBjb25zb2xlLmxvZyhcIkhlcmUgYXJlIHRoZSBnbG9iYWwgcGF0aHM6XCIpO1xyXG4gICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkodGhpcy5nbG9iYWxQYXRocywgbnVsbCwgMikpO1xyXG4gIH1cclxufVxyXG4iXX0=