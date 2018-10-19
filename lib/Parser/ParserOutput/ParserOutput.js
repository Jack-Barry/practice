"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ParserOutput = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ParserOutput = function ParserOutput(tool) {
  var _this = this;

  var inputs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  _classCallCheck(this, ParserOutput);

  tool.flags.forEach(function (f) {
    switch (f.type) {
      case 'boolean':
        _this[f.name] = false;
    }
  });
  var flagMatchers = tool.flags.map(function (f) {
    return f.matchers;
  });
  inputs.forEach(function (i) {
    flagMatchers.forEach(function (fm) {
      if (fm.includes(i)) {
        var flagIndex = flagMatchers.indexOf(fm);
        var flag = tool.flags[flagIndex];

        switch (flag.type) {
          case 'boolean':
            _this[flag.name] = true;
        }
      } else if (/^(-)+.*$/.test(i)) {
        throw Error("You provided an unrecognized flag: ".concat(i));
      }
    });
  });
};

exports.ParserOutput = ParserOutput;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9QYXJzZXIvUGFyc2VyT3V0cHV0L1BhcnNlck91dHB1dC50cyJdLCJuYW1lcyI6WyJQYXJzZXJPdXRwdXQiLCJ0b29sIiwiaW5wdXRzIiwiZmxhZ3MiLCJmb3JFYWNoIiwiZiIsInR5cGUiLCJuYW1lIiwiZmxhZ01hdGNoZXJzIiwibWFwIiwibWF0Y2hlcnMiLCJpIiwiZm0iLCJpbmNsdWRlcyIsImZsYWdJbmRleCIsImluZGV4T2YiLCJmbGFnIiwidGVzdCIsIkVycm9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7SUFNYUEsWSxHQUdYLHNCQUFZQyxJQUFaLEVBQTBEO0FBQUE7O0FBQUEsTUFBNUJDLE1BQTRCLHVFQUFKLEVBQUk7O0FBQUE7O0FBQ3hERCxFQUFBQSxJQUFJLENBQUNFLEtBQUwsQ0FBV0MsT0FBWCxDQUFtQixVQUFBQyxDQUFDLEVBQUk7QUFDdEIsWUFBUUEsQ0FBQyxDQUFDQyxJQUFWO0FBQ0UsV0FBSyxTQUFMO0FBQ0UsUUFBQSxLQUFJLENBQUNELENBQUMsQ0FBQ0UsSUFBSCxDQUFKLEdBQWUsS0FBZjtBQUZKO0FBSUQsR0FMRDtBQU9BLE1BQU1DLFlBQWtDLEdBQUdQLElBQUksQ0FBQ0UsS0FBTCxDQUFXTSxHQUFYLENBQWUsVUFBQUosQ0FBQyxFQUFJO0FBQzdELFdBQU9BLENBQUMsQ0FBQ0ssUUFBVDtBQUNELEdBRjBDLENBQTNDO0FBSUFSLEVBQUFBLE1BQU0sQ0FBQ0UsT0FBUCxDQUFlLFVBQUFPLENBQUMsRUFBSTtBQUNsQkgsSUFBQUEsWUFBWSxDQUFDSixPQUFiLENBQXFCLFVBQUFRLEVBQUUsRUFBSTtBQUN6QixVQUFJQSxFQUFFLENBQUNDLFFBQUgsQ0FBWUYsQ0FBWixDQUFKLEVBQW9CO0FBQ2xCLFlBQU1HLFNBQWlCLEdBQUdOLFlBQVksQ0FBQ08sT0FBYixDQUFxQkgsRUFBckIsQ0FBMUI7QUFDQSxZQUFNSSxJQUFnQixHQUFHZixJQUFJLENBQUNFLEtBQUwsQ0FBV1csU0FBWCxDQUF6Qjs7QUFFQSxnQkFBUUUsSUFBSSxDQUFDVixJQUFiO0FBQ0UsZUFBSyxTQUFMO0FBQ0UsWUFBQSxLQUFJLENBQUNVLElBQUksQ0FBQ1QsSUFBTixDQUFKLEdBQWtCLElBQWxCO0FBRko7QUFJRCxPQVJELE1BUU8sSUFBSSxXQUFXVSxJQUFYLENBQWdCTixDQUFoQixDQUFKLEVBQXdCO0FBQzdCLGNBQU1PLEtBQUssOENBQXVDUCxDQUF2QyxFQUFYO0FBQ0Q7QUFDRixLQVpEO0FBYUQsR0FkRDtBQWVELEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUb29sT2JqZWN0LCBGbGFnT2JqZWN0IH0gZnJvbSAnLi4vLi4vQ29uZmlndXJhdG9yJ1xyXG5cclxuaW50ZXJmYWNlIElQYXJzZXJPdXRwdXQge1xyXG4gIFtrZXk6IHN0cmluZ106IGJvb2xlYW4gfCBzdHJpbmcgfCBBcnJheTxzdHJpbmc+XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBQYXJzZXJPdXRwdXQgaW1wbGVtZW50cyBJUGFyc2VyT3V0cHV0IHtcclxuICBba2V5OiBzdHJpbmddOiBib29sZWFuIHwgc3RyaW5nIHwgQXJyYXk8c3RyaW5nPlxyXG5cclxuICBjb25zdHJ1Y3Rvcih0b29sOiBUb29sT2JqZWN0LCBpbnB1dHM6IEFycmF5PHN0cmluZz4gPSBbXSkge1xyXG4gICAgdG9vbC5mbGFncy5mb3JFYWNoKGYgPT4ge1xyXG4gICAgICBzd2l0Y2ggKGYudHlwZSkge1xyXG4gICAgICAgIGNhc2UgJ2Jvb2xlYW4nOlxyXG4gICAgICAgICAgdGhpc1tmLm5hbWVdID0gZmFsc2VcclxuICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICBjb25zdCBmbGFnTWF0Y2hlcnM6IEFycmF5PEFycmF5PHN0cmluZz4+ID0gdG9vbC5mbGFncy5tYXAoZiA9PiB7XHJcbiAgICAgIHJldHVybiBmLm1hdGNoZXJzXHJcbiAgICB9KVxyXG5cclxuICAgIGlucHV0cy5mb3JFYWNoKGkgPT4ge1xyXG4gICAgICBmbGFnTWF0Y2hlcnMuZm9yRWFjaChmbSA9PiB7XHJcbiAgICAgICAgaWYgKGZtLmluY2x1ZGVzKGkpKSB7XHJcbiAgICAgICAgICBjb25zdCBmbGFnSW5kZXg6IG51bWJlciA9IGZsYWdNYXRjaGVycy5pbmRleE9mKGZtKVxyXG4gICAgICAgICAgY29uc3QgZmxhZzogRmxhZ09iamVjdCA9IHRvb2wuZmxhZ3NbZmxhZ0luZGV4XVxyXG5cclxuICAgICAgICAgIHN3aXRjaCAoZmxhZy50eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ2Jvb2xlYW4nOlxyXG4gICAgICAgICAgICAgIHRoaXNbZmxhZy5uYW1lXSA9IHRydWVcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKC9eKC0pKy4qJC8udGVzdChpKSkge1xyXG4gICAgICAgICAgdGhyb3cgRXJyb3IoYFlvdSBwcm92aWRlZCBhbiB1bnJlY29nbml6ZWQgZmxhZzogJHtpfWApXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfSlcclxuICB9XHJcbn1cclxuIl19