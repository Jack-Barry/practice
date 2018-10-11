"use strict";

var _cli = require("./cli");

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mock = require("mock-fs");

describe(".parseForConfig()", function () {
  var cli;
  beforeEach(function () {
    cli = new _cli.CLI([]);
  });
  afterEach(function () {
    mock.restore();
  });
  describe("when --config flag is not present", function () {
    it("returns null", function () {
      expect(cli.parseForConfig([])).toEqual(null);
    });
  });
  describe("when --config flag is present", function () {
    it("throws an error if the provided config path fails", function () {
      expect(function () {
        cli.parseForConfig(["--config", "some/invalid/path"]);
      }).toThrow();
    });
    it("returns the provided config path if it is valid", function () {
      mock({
        "some/valid/path": {
          "config.ts": ""
        }
      });
      expect(cli.parseForConfig(["--config", "some/valid/path/config.ts"])).toEqual(_path.default.resolve("./some/valid/path/config.ts"));
    });
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jbGkuc3BlYy50cyJdLCJuYW1lcyI6WyJtb2NrIiwicmVxdWlyZSIsImRlc2NyaWJlIiwiY2xpIiwiYmVmb3JlRWFjaCIsIkNMSSIsImFmdGVyRWFjaCIsInJlc3RvcmUiLCJpdCIsImV4cGVjdCIsInBhcnNlRm9yQ29uZmlnIiwidG9FcXVhbCIsInRvVGhyb3ciLCJwYXRoIiwicmVzb2x2ZSJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQTs7OztBQUNBLElBQU1BLElBQUksR0FBR0MsT0FBTyxDQUFDLFNBQUQsQ0FBcEI7O0FBRUFDLFFBQVEsQ0FBQyxtQkFBRCxFQUFzQixZQUFNO0FBQ2xDLE1BQUlDLEdBQUo7QUFFQUMsRUFBQUEsVUFBVSxDQUFDLFlBQU07QUFDZkQsSUFBQUEsR0FBRyxHQUFHLElBQUlFLFFBQUosQ0FBUSxFQUFSLENBQU47QUFDRCxHQUZTLENBQVY7QUFJQUMsRUFBQUEsU0FBUyxDQUFDLFlBQU07QUFDZE4sSUFBQUEsSUFBSSxDQUFDTyxPQUFMO0FBQ0QsR0FGUSxDQUFUO0FBSUFMLEVBQUFBLFFBQVEsQ0FBQyxtQ0FBRCxFQUFzQyxZQUFNO0FBQ2xETSxJQUFBQSxFQUFFLENBQUMsY0FBRCxFQUFpQixZQUFNO0FBQ3ZCQyxNQUFBQSxNQUFNLENBQUNOLEdBQUcsQ0FBQ08sY0FBSixDQUFtQixFQUFuQixDQUFELENBQU4sQ0FBK0JDLE9BQS9CLENBQXVDLElBQXZDO0FBQ0QsS0FGQyxDQUFGO0FBR0QsR0FKTyxDQUFSO0FBTUFULEVBQUFBLFFBQVEsQ0FBQywrQkFBRCxFQUFrQyxZQUFNO0FBQzlDTSxJQUFBQSxFQUFFLENBQUMsbURBQUQsRUFBc0QsWUFBTTtBQUM1REMsTUFBQUEsTUFBTSxDQUFDLFlBQU07QUFDWE4sUUFBQUEsR0FBRyxDQUFDTyxjQUFKLENBQW1CLENBQUMsVUFBRCxFQUFhLG1CQUFiLENBQW5CO0FBQ0QsT0FGSyxDQUFOLENBRUdFLE9BRkg7QUFHRCxLQUpDLENBQUY7QUFNQUosSUFBQUEsRUFBRSxDQUFDLGlEQUFELEVBQW9ELFlBQU07QUFDMURSLE1BQUFBLElBQUksQ0FBQztBQUNILDJCQUFtQjtBQUNqQix1QkFBYTtBQURJO0FBRGhCLE9BQUQsQ0FBSjtBQU1BUyxNQUFBQSxNQUFNLENBQ0pOLEdBQUcsQ0FBQ08sY0FBSixDQUFtQixDQUFDLFVBQUQsRUFBYSwyQkFBYixDQUFuQixDQURJLENBQU4sQ0FFRUMsT0FGRixDQUVVRSxjQUFLQyxPQUFMLENBQWEsNkJBQWIsQ0FGVjtBQUdELEtBVkMsQ0FBRjtBQVdELEdBbEJPLENBQVI7QUFtQkQsQ0FwQ08sQ0FBUiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENMSSB9IGZyb20gXCIuL2NsaVwiO1xyXG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xyXG5jb25zdCBtb2NrID0gcmVxdWlyZShcIm1vY2stZnNcIik7XHJcblxyXG5kZXNjcmliZShcIi5wYXJzZUZvckNvbmZpZygpXCIsICgpID0+IHtcclxuICBsZXQgY2xpOiBDTEk7XHJcblxyXG4gIGJlZm9yZUVhY2goKCkgPT4ge1xyXG4gICAgY2xpID0gbmV3IENMSShbXSk7XHJcbiAgfSk7XHJcblxyXG4gIGFmdGVyRWFjaCgoKSA9PiB7XHJcbiAgICBtb2NrLnJlc3RvcmUoKTtcclxuICB9KTtcclxuXHJcbiAgZGVzY3JpYmUoXCJ3aGVuIC0tY29uZmlnIGZsYWcgaXMgbm90IHByZXNlbnRcIiwgKCkgPT4ge1xyXG4gICAgaXQoXCJyZXR1cm5zIG51bGxcIiwgKCkgPT4ge1xyXG4gICAgICBleHBlY3QoY2xpLnBhcnNlRm9yQ29uZmlnKFtdKSkudG9FcXVhbChudWxsKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICBkZXNjcmliZShcIndoZW4gLS1jb25maWcgZmxhZyBpcyBwcmVzZW50XCIsICgpID0+IHtcclxuICAgIGl0KFwidGhyb3dzIGFuIGVycm9yIGlmIHRoZSBwcm92aWRlZCBjb25maWcgcGF0aCBmYWlsc1wiLCAoKSA9PiB7XHJcbiAgICAgIGV4cGVjdCgoKSA9PiB7XHJcbiAgICAgICAgY2xpLnBhcnNlRm9yQ29uZmlnKFtcIi0tY29uZmlnXCIsIFwic29tZS9pbnZhbGlkL3BhdGhcIl0pO1xyXG4gICAgICB9KS50b1Rocm93KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpdChcInJldHVybnMgdGhlIHByb3ZpZGVkIGNvbmZpZyBwYXRoIGlmIGl0IGlzIHZhbGlkXCIsICgpID0+IHtcclxuICAgICAgbW9jayh7XHJcbiAgICAgICAgXCJzb21lL3ZhbGlkL3BhdGhcIjoge1xyXG4gICAgICAgICAgXCJjb25maWcudHNcIjogXCJcIlxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICBleHBlY3QoXHJcbiAgICAgICAgY2xpLnBhcnNlRm9yQ29uZmlnKFtcIi0tY29uZmlnXCIsIFwic29tZS92YWxpZC9wYXRoL2NvbmZpZy50c1wiXSlcclxuICAgICAgKS50b0VxdWFsKHBhdGgucmVzb2x2ZShcIi4vc29tZS92YWxpZC9wYXRoL2NvbmZpZy50c1wiKSk7XHJcbiAgICB9KTtcclxuICB9KTtcclxufSk7XHJcbiJdfQ==