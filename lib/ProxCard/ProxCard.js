"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProxCard = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ProxCard =
/*#__PURE__*/
function () {
  function ProxCard(inputs) {
    _classCallCheck(this, ProxCard);

    this.rawHex = inputs.hex;
    this.hexBits = this.hexToBin(this.rawHex);
    this.rawID = inputs.idOnCard;
    this.idBits = this.decToBin(this.rawID);
    this.rawFacID = inputs.facID || 0;
    this.facIDBits = this.decToBin(this.rawFacID);
  }

  _createClass(ProxCard, [{
    key: "decToBin",
    value: function decToBin(dec) {
      return dec === 0 ? '' : dec.toString(2);
    }
  }, {
    key: "hexToBin",
    value: function hexToBin(hex) {
      return this.decToBin(parseInt(hex, 16));
    }
  }]);

  return ProxCard;
}();

exports.ProxCard = ProxCard;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Qcm94Q2FyZC9Qcm94Q2FyZC50cyJdLCJuYW1lcyI6WyJQcm94Q2FyZCIsImlucHV0cyIsInJhd0hleCIsImhleCIsImhleEJpdHMiLCJoZXhUb0JpbiIsInJhd0lEIiwiaWRPbkNhcmQiLCJpZEJpdHMiLCJkZWNUb0JpbiIsInJhd0ZhY0lEIiwiZmFjSUQiLCJmYWNJREJpdHMiLCJkZWMiLCJ0b1N0cmluZyIsInBhcnNlSW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0lBZWFBLFE7OztBQVFYLG9CQUFZQyxNQUFaLEVBQXFDO0FBQUE7O0FBQ25DLFNBQUtDLE1BQUwsR0FBY0QsTUFBTSxDQUFDRSxHQUFyQjtBQUNBLFNBQUtDLE9BQUwsR0FBZSxLQUFLQyxRQUFMLENBQWMsS0FBS0gsTUFBbkIsQ0FBZjtBQUNBLFNBQUtJLEtBQUwsR0FBYUwsTUFBTSxDQUFDTSxRQUFwQjtBQUNBLFNBQUtDLE1BQUwsR0FBYyxLQUFLQyxRQUFMLENBQWMsS0FBS0gsS0FBbkIsQ0FBZDtBQUNBLFNBQUtJLFFBQUwsR0FBZ0JULE1BQU0sQ0FBQ1UsS0FBUCxJQUFnQixDQUFoQztBQUNBLFNBQUtDLFNBQUwsR0FBaUIsS0FBS0gsUUFBTCxDQUFjLEtBQUtDLFFBQW5CLENBQWpCO0FBQ0Q7Ozs7NkJBRWdCRyxHLEVBQXFCO0FBQ3BDLGFBQU9BLEdBQUcsS0FBSyxDQUFSLEdBQVksRUFBWixHQUFpQkEsR0FBRyxDQUFDQyxRQUFKLENBQWEsQ0FBYixDQUF4QjtBQUNEOzs7NkJBRWdCWCxHLEVBQXFCO0FBQ3BDLGFBQU8sS0FBS00sUUFBTCxDQUFjTSxRQUFRLENBQUNaLEdBQUQsRUFBTSxFQUFOLENBQXRCLENBQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBpbnRlcmZhY2UgSVByb3hDYXJkSW5wdXRzIHtcbiAgaGV4OiBzdHJpbmdcbiAgaWRPbkNhcmQ6IG51bWJlclxuICBmYWNJRD86IG51bWJlclxufVxuXG5pbnRlcmZhY2UgSVByb3hDYXJkIHtcbiAgcmF3SGV4OiBzdHJpbmdcbiAgaGV4Qml0czogc3RyaW5nXG4gIHJhd0lEOiBudW1iZXJcbiAgaWRCaXRzOiBzdHJpbmdcbiAgcmF3RmFjSUQ6IG51bWJlclxuICBmYWNJREJpdHM6IHN0cmluZ1xufVxuXG5leHBvcnQgY2xhc3MgUHJveENhcmQgaW1wbGVtZW50cyBJUHJveENhcmQge1xuICByYXdIZXg6IHN0cmluZ1xuICBoZXhCaXRzOiBzdHJpbmdcbiAgcmF3SUQ6IG51bWJlclxuICBpZEJpdHM6IHN0cmluZ1xuICByYXdGYWNJRDogbnVtYmVyXG4gIGZhY0lEQml0czogc3RyaW5nXG5cbiAgY29uc3RydWN0b3IoaW5wdXRzOiBJUHJveENhcmRJbnB1dHMpIHtcbiAgICB0aGlzLnJhd0hleCA9IGlucHV0cy5oZXhcbiAgICB0aGlzLmhleEJpdHMgPSB0aGlzLmhleFRvQmluKHRoaXMucmF3SGV4KVxuICAgIHRoaXMucmF3SUQgPSBpbnB1dHMuaWRPbkNhcmRcbiAgICB0aGlzLmlkQml0cyA9IHRoaXMuZGVjVG9CaW4odGhpcy5yYXdJRClcbiAgICB0aGlzLnJhd0ZhY0lEID0gaW5wdXRzLmZhY0lEIHx8IDBcbiAgICB0aGlzLmZhY0lEQml0cyA9IHRoaXMuZGVjVG9CaW4odGhpcy5yYXdGYWNJRClcbiAgfVxuXG4gIHByaXZhdGUgZGVjVG9CaW4oZGVjOiBudW1iZXIpOiBzdHJpbmcge1xuICAgIHJldHVybiBkZWMgPT09IDAgPyAnJyA6IGRlYy50b1N0cmluZygyKVxuICB9XG5cbiAgcHJpdmF0ZSBoZXhUb0JpbihoZXg6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuZGVjVG9CaW4ocGFyc2VJbnQoaGV4LCAxNikpXG4gIH1cbn1cbiJdfQ==