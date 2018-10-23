"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FlagObject = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var FlagObject =
/*#__PURE__*/
function () {
  function FlagObject(flag) {
    _classCallCheck(this, FlagObject);

    this.name = flag.name;
    this.description = flag.description || this.name;
    this.type = flag.type || 'string';
    this.matchers = this.setMatchers(flag.matchers);
  }

  _createClass(FlagObject, [{
    key: "setMatchers",
    value: function setMatchers(matchers) {
      return matchers.length === 0 ? [this.name.toLowerCase().replace(new RegExp(/\s/, 'g'), '-')] : matchers;
    }
  }]);

  return FlagObject;
}();

exports.FlagObject = FlagObject;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9Db25maWd1cmF0b3IvRmxhZ09iamVjdC9GbGFnT2JqZWN0LnRzIl0sIm5hbWVzIjpbIkZsYWdPYmplY3QiLCJmbGFnIiwibmFtZSIsImRlc2NyaXB0aW9uIiwidHlwZSIsIm1hdGNoZXJzIiwic2V0TWF0Y2hlcnMiLCJsZW5ndGgiLCJ0b0xvd2VyQ2FzZSIsInJlcGxhY2UiLCJSZWdFeHAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7SUFTYUEsVTs7O0FBTVgsc0JBQVlDLElBQVosRUFBK0I7QUFBQTs7QUFDN0IsU0FBS0MsSUFBTCxHQUFZRCxJQUFJLENBQUNDLElBQWpCO0FBQ0EsU0FBS0MsV0FBTCxHQUFtQkYsSUFBSSxDQUFDRSxXQUFMLElBQW9CLEtBQUtELElBQTVDO0FBQ0EsU0FBS0UsSUFBTCxHQUFZSCxJQUFJLENBQUNHLElBQUwsSUFBYSxRQUF6QjtBQUNBLFNBQUtDLFFBQUwsR0FBZ0IsS0FBS0MsV0FBTCxDQUFpQkwsSUFBSSxDQUFDSSxRQUF0QixDQUFoQjtBQUNEOzs7O2dDQUVtQkEsUSxFQUE4QjtBQUNoRCxhQUFPQSxRQUFRLENBQUNFLE1BQVQsS0FBb0IsQ0FBcEIsR0FDSCxDQUFDLEtBQUtMLElBQUwsQ0FBVU0sV0FBVixHQUF3QkMsT0FBeEIsQ0FBZ0MsSUFBSUMsTUFBSixDQUFXLElBQVgsRUFBaUIsR0FBakIsQ0FBaEMsRUFBdUQsR0FBdkQsQ0FBRCxDQURHLEdBRUhMLFFBRko7QUFHRCIsInNvdXJjZXNDb250ZW50IjpbInR5cGUgRmxhZ1R5cGUgPSAnc3RyaW5nJyB8ICdib29sZWFuJyB8ICdhcnJheSdcclxuXHJcbmludGVyZmFjZSBJRmxhZ09iamVjdCB7XHJcbiAgbmFtZTogc3RyaW5nXHJcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmdcclxuICB0eXBlPzogRmxhZ1R5cGVcclxuICBtYXRjaGVyczogQXJyYXk8c3RyaW5nPlxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRmxhZ09iamVjdCBpbXBsZW1lbnRzIElGbGFnT2JqZWN0IHtcclxuICBuYW1lOiBzdHJpbmdcclxuICBkZXNjcmlwdGlvbj86IHN0cmluZ1xyXG4gIHR5cGU/OiBGbGFnVHlwZVxyXG4gIG1hdGNoZXJzOiBBcnJheTxzdHJpbmc+XHJcblxyXG4gIGNvbnN0cnVjdG9yKGZsYWc6IElGbGFnT2JqZWN0KSB7XHJcbiAgICB0aGlzLm5hbWUgPSBmbGFnLm5hbWVcclxuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBmbGFnLmRlc2NyaXB0aW9uIHx8IHRoaXMubmFtZVxyXG4gICAgdGhpcy50eXBlID0gZmxhZy50eXBlIHx8ICdzdHJpbmcnXHJcbiAgICB0aGlzLm1hdGNoZXJzID0gdGhpcy5zZXRNYXRjaGVycyhmbGFnLm1hdGNoZXJzKVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRNYXRjaGVycyhtYXRjaGVyczogc3RyaW5nW10pOiBzdHJpbmdbXSB7XHJcbiAgICByZXR1cm4gbWF0Y2hlcnMubGVuZ3RoID09PSAwXHJcbiAgICAgID8gW3RoaXMubmFtZS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UobmV3IFJlZ0V4cCgvXFxzLywgJ2cnKSwgJy0nKV1cclxuICAgICAgOiBtYXRjaGVyc1xyXG4gIH1cclxufVxyXG4iXX0=