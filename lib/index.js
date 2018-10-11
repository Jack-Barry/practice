"use strict";

var globals = _interopRequireWildcard(require("./globals"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var globalPaths = new globals.Paths();
console.log(globalPaths.workingDir);
console.log(globalPaths.configPath);
console.log(globalPaths.moduleRoot);
console.log(globalPaths.callingDir);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6WyJnbG9iYWxQYXRocyIsImdsb2JhbHMiLCJQYXRocyIsImNvbnNvbGUiLCJsb2ciLCJ3b3JraW5nRGlyIiwiY29uZmlnUGF0aCIsIm1vZHVsZVJvb3QiLCJjYWxsaW5nRGlyIl0sIm1hcHBpbmdzIjoiOztBQUFBOzs7O0FBRUEsSUFBTUEsV0FBVyxHQUFHLElBQUlDLE9BQU8sQ0FBQ0MsS0FBWixFQUFwQjtBQUVBQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUosV0FBVyxDQUFDSyxVQUF4QjtBQUNBRixPQUFPLENBQUNDLEdBQVIsQ0FBWUosV0FBVyxDQUFDTSxVQUF4QjtBQUNBSCxPQUFPLENBQUNDLEdBQVIsQ0FBWUosV0FBVyxDQUFDTyxVQUF4QjtBQUNBSixPQUFPLENBQUNDLEdBQVIsQ0FBWUosV0FBVyxDQUFDUSxVQUF4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGdsb2JhbHMgZnJvbSBcIi4vZ2xvYmFsc1wiO1xyXG5cclxuY29uc3QgZ2xvYmFsUGF0aHMgPSBuZXcgZ2xvYmFscy5QYXRocygpO1xyXG5cclxuY29uc29sZS5sb2coZ2xvYmFsUGF0aHMud29ya2luZ0Rpcik7XHJcbmNvbnNvbGUubG9nKGdsb2JhbFBhdGhzLmNvbmZpZ1BhdGgpO1xyXG5jb25zb2xlLmxvZyhnbG9iYWxQYXRocy5tb2R1bGVSb290KTtcclxuY29uc29sZS5sb2coZ2xvYmFsUGF0aHMuY2FsbGluZ0Rpcik7XHJcbiJdfQ==