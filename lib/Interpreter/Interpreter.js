"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Interpreter = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Interpreter =
/*#__PURE__*/
function () {
  function Interpreter(prox) {
    _classCallCheck(this, Interpreter);

    this.matches = this.getMatches(prox.hexBits, prox.idBits);
  }

  _createClass(Interpreter, [{
    key: "getMatches",
    value: function getMatches(hexBits, idBits) {
      var matches = [];
      var hexLength = hexBits.length;
      var minIDBits = idBits.length;
      var facIDBits = hexLength - minIDBits;

      while (facIDBits > 1) {
        var begOfHex = hexBits.substring(0, facIDBits);
        var endOfHex = hexBits.substring(begOfHex.length);

        if (endOfHex.replace(/^0+/, '') === idBits) {
          var supportedBitCounts = [16, 19, 20, 24, 27, 29, 32];
          matches.push({
            facID: parseInt(begOfHex, 2),
            idBitCount: endOfHex.length,
            supported: supportedBitCounts.includes(endOfHex.length)
          });
          facIDBits--;
        } else {
          break;
        }
      }

      return matches;
    }
  }]);

  return Interpreter;
}();

exports.Interpreter = Interpreter;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9JbnRlcnByZXRlci9JbnRlcnByZXRlci50cyJdLCJuYW1lcyI6WyJJbnRlcnByZXRlciIsInByb3giLCJtYXRjaGVzIiwiZ2V0TWF0Y2hlcyIsImhleEJpdHMiLCJpZEJpdHMiLCJoZXhMZW5ndGgiLCJsZW5ndGgiLCJtaW5JREJpdHMiLCJmYWNJREJpdHMiLCJiZWdPZkhleCIsInN1YnN0cmluZyIsImVuZE9mSGV4IiwicmVwbGFjZSIsInN1cHBvcnRlZEJpdENvdW50cyIsInB1c2giLCJmYWNJRCIsInBhcnNlSW50IiwiaWRCaXRDb3VudCIsInN1cHBvcnRlZCIsImluY2x1ZGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0lBWWFBLFc7OztBQUdYLHVCQUFZQyxJQUFaLEVBQTRCO0FBQUE7O0FBQzFCLFNBQUtDLE9BQUwsR0FBZSxLQUFLQyxVQUFMLENBQWdCRixJQUFJLENBQUNHLE9BQXJCLEVBQThCSCxJQUFJLENBQUNJLE1BQW5DLENBQWY7QUFDRDs7OzsrQkFFa0JELE8sRUFBaUJDLE0sRUFBZ0M7QUFDbEUsVUFBSUgsT0FBdUIsR0FBRyxFQUE5QjtBQUNBLFVBQU1JLFNBQWlCLEdBQUdGLE9BQU8sQ0FBQ0csTUFBbEM7QUFDQSxVQUFNQyxTQUFpQixHQUFHSCxNQUFNLENBQUNFLE1BQWpDO0FBQ0EsVUFBSUUsU0FBaUIsR0FBR0gsU0FBUyxHQUFHRSxTQUFwQzs7QUFFQSxhQUFPQyxTQUFTLEdBQUcsQ0FBbkIsRUFBc0I7QUFDcEIsWUFBSUMsUUFBZ0IsR0FBR04sT0FBTyxDQUFDTyxTQUFSLENBQWtCLENBQWxCLEVBQXFCRixTQUFyQixDQUF2QjtBQUNBLFlBQUlHLFFBQWdCLEdBQUdSLE9BQU8sQ0FBQ08sU0FBUixDQUFrQkQsUUFBUSxDQUFDSCxNQUEzQixDQUF2Qjs7QUFFQSxZQUFJSyxRQUFRLENBQUNDLE9BQVQsQ0FBaUIsS0FBakIsRUFBd0IsRUFBeEIsTUFBZ0NSLE1BQXBDLEVBQTRDO0FBQzFDLGNBQU1TLGtCQUE0QixHQUFHLENBQUMsRUFBRCxFQUFLLEVBQUwsRUFBUyxFQUFULEVBQWEsRUFBYixFQUFpQixFQUFqQixFQUFxQixFQUFyQixFQUF5QixFQUF6QixDQUFyQztBQUVBWixVQUFBQSxPQUFPLENBQUNhLElBQVIsQ0FBYTtBQUNYQyxZQUFBQSxLQUFLLEVBQUVDLFFBQVEsQ0FBQ1AsUUFBRCxFQUFXLENBQVgsQ0FESjtBQUVYUSxZQUFBQSxVQUFVLEVBQUVOLFFBQVEsQ0FBQ0wsTUFGVjtBQUdYWSxZQUFBQSxTQUFTLEVBQUVMLGtCQUFrQixDQUFDTSxRQUFuQixDQUE0QlIsUUFBUSxDQUFDTCxNQUFyQztBQUhBLFdBQWI7QUFNQUUsVUFBQUEsU0FBUztBQUNWLFNBVkQsTUFVTztBQUNMO0FBQ0Q7QUFDRjs7QUFFRCxhQUFPUCxPQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcm94Q2FyZCB9IGZyb20gJy4vLi4vUHJveENhcmQnXG5cbmV4cG9ydCBpbnRlcmZhY2UgSU1hdGNoT2JqZWN0IHtcbiAgZmFjSUQ6IG51bWJlclxuICBpZEJpdENvdW50OiBudW1iZXJcbiAgc3VwcG9ydGVkOiBib29sZWFuXG59XG5cbmludGVyZmFjZSBJSW50ZXJwcmV0ZXIge1xuICBtYXRjaGVzOiBJTWF0Y2hPYmplY3RbXVxufVxuXG5leHBvcnQgY2xhc3MgSW50ZXJwcmV0ZXIgaW1wbGVtZW50cyBJSW50ZXJwcmV0ZXIge1xuICBtYXRjaGVzOiBJTWF0Y2hPYmplY3RbXVxuXG4gIGNvbnN0cnVjdG9yKHByb3g6IFByb3hDYXJkKSB7XG4gICAgdGhpcy5tYXRjaGVzID0gdGhpcy5nZXRNYXRjaGVzKHByb3guaGV4Qml0cywgcHJveC5pZEJpdHMpXG4gIH1cblxuICBwcml2YXRlIGdldE1hdGNoZXMoaGV4Qml0czogc3RyaW5nLCBpZEJpdHM6IHN0cmluZyk6IElNYXRjaE9iamVjdFtdIHtcbiAgICBsZXQgbWF0Y2hlczogSU1hdGNoT2JqZWN0W10gPSBbXVxuICAgIGNvbnN0IGhleExlbmd0aDogbnVtYmVyID0gaGV4Qml0cy5sZW5ndGhcbiAgICBjb25zdCBtaW5JREJpdHM6IG51bWJlciA9IGlkQml0cy5sZW5ndGhcbiAgICBsZXQgZmFjSURCaXRzOiBudW1iZXIgPSBoZXhMZW5ndGggLSBtaW5JREJpdHNcblxuICAgIHdoaWxlIChmYWNJREJpdHMgPiAxKSB7XG4gICAgICBsZXQgYmVnT2ZIZXg6IHN0cmluZyA9IGhleEJpdHMuc3Vic3RyaW5nKDAsIGZhY0lEQml0cylcbiAgICAgIGxldCBlbmRPZkhleDogc3RyaW5nID0gaGV4Qml0cy5zdWJzdHJpbmcoYmVnT2ZIZXgubGVuZ3RoKVxuXG4gICAgICBpZiAoZW5kT2ZIZXgucmVwbGFjZSgvXjArLywgJycpID09PSBpZEJpdHMpIHtcbiAgICAgICAgY29uc3Qgc3VwcG9ydGVkQml0Q291bnRzOiBudW1iZXJbXSA9IFsxNiwgMTksIDIwLCAyNCwgMjcsIDI5LCAzMl1cblxuICAgICAgICBtYXRjaGVzLnB1c2goe1xuICAgICAgICAgIGZhY0lEOiBwYXJzZUludChiZWdPZkhleCwgMiksXG4gICAgICAgICAgaWRCaXRDb3VudDogZW5kT2ZIZXgubGVuZ3RoLFxuICAgICAgICAgIHN1cHBvcnRlZDogc3VwcG9ydGVkQml0Q291bnRzLmluY2x1ZGVzKGVuZE9mSGV4Lmxlbmd0aClcbiAgICAgICAgfSlcblxuICAgICAgICBmYWNJREJpdHMtLVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbWF0Y2hlc1xuICB9XG59XG4iXX0=