"use strict";

var _cli = require("./cli");

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mock = require("mock-fs");

describe(".parseForConfig()", function () {
  var cli;
  beforeAll(function () {
    cli = new _cli.CLI();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jbGkuc3BlYy50cyJdLCJuYW1lcyI6WyJtb2NrIiwicmVxdWlyZSIsImRlc2NyaWJlIiwiY2xpIiwiYmVmb3JlQWxsIiwiQ0xJIiwiYWZ0ZXJFYWNoIiwicmVzdG9yZSIsIml0IiwiZXhwZWN0IiwicGFyc2VGb3JDb25maWciLCJ0b0VxdWFsIiwidG9UaHJvdyIsInBhdGgiLCJyZXNvbHZlIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUNBOzs7O0FBQ0EsSUFBTUEsSUFBSSxHQUFHQyxPQUFPLENBQUMsU0FBRCxDQUFwQjs7QUFFQUMsUUFBUSxDQUFDLG1CQUFELEVBQXNCLFlBQU07QUFDbEMsTUFBSUMsR0FBSjtBQUVBQyxFQUFBQSxTQUFTLENBQUMsWUFBTTtBQUNkRCxJQUFBQSxHQUFHLEdBQUcsSUFBSUUsUUFBSixFQUFOO0FBQ0QsR0FGUSxDQUFUO0FBSUFDLEVBQUFBLFNBQVMsQ0FBQyxZQUFNO0FBQ2ROLElBQUFBLElBQUksQ0FBQ08sT0FBTDtBQUNELEdBRlEsQ0FBVDtBQUlBTCxFQUFBQSxRQUFRLENBQUMsbUNBQUQsRUFBc0MsWUFBTTtBQUNsRE0sSUFBQUEsRUFBRSxDQUFDLGNBQUQsRUFBaUIsWUFBTTtBQUN2QkMsTUFBQUEsTUFBTSxDQUFDTixHQUFHLENBQUNPLGNBQUosQ0FBbUIsRUFBbkIsQ0FBRCxDQUFOLENBQStCQyxPQUEvQixDQUF1QyxJQUF2QztBQUNELEtBRkMsQ0FBRjtBQUdELEdBSk8sQ0FBUjtBQU1BVCxFQUFBQSxRQUFRLENBQUMsK0JBQUQsRUFBa0MsWUFBTTtBQUM5Q00sSUFBQUEsRUFBRSxDQUFDLG1EQUFELEVBQXNELFlBQU07QUFDNURDLE1BQUFBLE1BQU0sQ0FBQyxZQUFNO0FBQ1hOLFFBQUFBLEdBQUcsQ0FBQ08sY0FBSixDQUFtQixDQUFDLFVBQUQsRUFBYSxtQkFBYixDQUFuQjtBQUNELE9BRkssQ0FBTixDQUVHRSxPQUZIO0FBR0QsS0FKQyxDQUFGO0FBTUFKLElBQUFBLEVBQUUsQ0FBQyxpREFBRCxFQUFvRCxZQUFNO0FBQzFEUixNQUFBQSxJQUFJLENBQUM7QUFDSCwyQkFBbUI7QUFDakIsdUJBQWE7QUFESTtBQURoQixPQUFELENBQUo7QUFNQVMsTUFBQUEsTUFBTSxDQUNKTixHQUFHLENBQUNPLGNBQUosQ0FBbUIsQ0FBQyxVQUFELEVBQWEsMkJBQWIsQ0FBbkIsQ0FESSxDQUFOLENBRUVDLE9BRkYsQ0FFVUUsY0FBS0MsT0FBTCxDQUFhLDZCQUFiLENBRlY7QUFHRCxLQVZDLENBQUY7QUFXRCxHQWxCTyxDQUFSO0FBbUJELENBcENPLENBQVIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDTEkgfSBmcm9tIFwiLi9jbGlcIjtcclxuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcclxuY29uc3QgbW9jayA9IHJlcXVpcmUoXCJtb2NrLWZzXCIpO1xyXG5cclxuZGVzY3JpYmUoXCIucGFyc2VGb3JDb25maWcoKVwiLCAoKSA9PiB7XHJcbiAgbGV0IGNsaTogQ0xJO1xyXG5cclxuICBiZWZvcmVBbGwoKCkgPT4ge1xyXG4gICAgY2xpID0gbmV3IENMSSgpO1xyXG4gIH0pO1xyXG5cclxuICBhZnRlckVhY2goKCkgPT4ge1xyXG4gICAgbW9jay5yZXN0b3JlKCk7XHJcbiAgfSk7XHJcblxyXG4gIGRlc2NyaWJlKFwid2hlbiAtLWNvbmZpZyBmbGFnIGlzIG5vdCBwcmVzZW50XCIsICgpID0+IHtcclxuICAgIGl0KFwicmV0dXJucyBudWxsXCIsICgpID0+IHtcclxuICAgICAgZXhwZWN0KGNsaS5wYXJzZUZvckNvbmZpZyhbXSkpLnRvRXF1YWwobnVsbCk7XHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgZGVzY3JpYmUoXCJ3aGVuIC0tY29uZmlnIGZsYWcgaXMgcHJlc2VudFwiLCAoKSA9PiB7XHJcbiAgICBpdChcInRocm93cyBhbiBlcnJvciBpZiB0aGUgcHJvdmlkZWQgY29uZmlnIHBhdGggZmFpbHNcIiwgKCkgPT4ge1xyXG4gICAgICBleHBlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNsaS5wYXJzZUZvckNvbmZpZyhbXCItLWNvbmZpZ1wiLCBcInNvbWUvaW52YWxpZC9wYXRoXCJdKTtcclxuICAgICAgfSkudG9UaHJvdygpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaXQoXCJyZXR1cm5zIHRoZSBwcm92aWRlZCBjb25maWcgcGF0aCBpZiBpdCBpcyB2YWxpZFwiLCAoKSA9PiB7XHJcbiAgICAgIG1vY2soe1xyXG4gICAgICAgIFwic29tZS92YWxpZC9wYXRoXCI6IHtcclxuICAgICAgICAgIFwiY29uZmlnLnRzXCI6IFwiXCJcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgZXhwZWN0KFxyXG4gICAgICAgIGNsaS5wYXJzZUZvckNvbmZpZyhbXCItLWNvbmZpZ1wiLCBcInNvbWUvdmFsaWQvcGF0aC9jb25maWcudHNcIl0pXHJcbiAgICAgICkudG9FcXVhbChwYXRoLnJlc29sdmUoXCIuL3NvbWUvdmFsaWQvcGF0aC9jb25maWcudHNcIikpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn0pO1xyXG4iXX0=