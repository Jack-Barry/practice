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
          matches.push({
            facID: parseInt(begOfHex, 2),
            idBitCount: endOfHex.length
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9JbnRlcnByZXRlci9JbnRlcnByZXRlci50cyJdLCJuYW1lcyI6WyJJbnRlcnByZXRlciIsInByb3giLCJtYXRjaGVzIiwiZ2V0TWF0Y2hlcyIsImhleEJpdHMiLCJpZEJpdHMiLCJoZXhMZW5ndGgiLCJsZW5ndGgiLCJtaW5JREJpdHMiLCJmYWNJREJpdHMiLCJiZWdPZkhleCIsInN1YnN0cmluZyIsImVuZE9mSGV4IiwicmVwbGFjZSIsInB1c2giLCJmYWNJRCIsInBhcnNlSW50IiwiaWRCaXRDb3VudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztJQVdhQSxXOzs7QUFHWCx1QkFBWUMsSUFBWixFQUE0QjtBQUFBOztBQUMxQixTQUFLQyxPQUFMLEdBQWUsS0FBS0MsVUFBTCxDQUFnQkYsSUFBSSxDQUFDRyxPQUFyQixFQUE4QkgsSUFBSSxDQUFDSSxNQUFuQyxDQUFmO0FBQ0Q7Ozs7K0JBRWtCRCxPLEVBQWlCQyxNLEVBQWdDO0FBQ2xFLFVBQUlILE9BQXVCLEdBQUcsRUFBOUI7QUFDQSxVQUFNSSxTQUFpQixHQUFHRixPQUFPLENBQUNHLE1BQWxDO0FBQ0EsVUFBTUMsU0FBaUIsR0FBR0gsTUFBTSxDQUFDRSxNQUFqQztBQUNBLFVBQUlFLFNBQWlCLEdBQUdILFNBQVMsR0FBR0UsU0FBcEM7O0FBRUEsYUFBT0MsU0FBUyxHQUFHLENBQW5CLEVBQXNCO0FBQ3BCLFlBQUlDLFFBQWdCLEdBQUdOLE9BQU8sQ0FBQ08sU0FBUixDQUFrQixDQUFsQixFQUFxQkYsU0FBckIsQ0FBdkI7QUFDQSxZQUFJRyxRQUFnQixHQUFHUixPQUFPLENBQUNPLFNBQVIsQ0FBa0JELFFBQVEsQ0FBQ0gsTUFBM0IsQ0FBdkI7O0FBRUEsWUFBSUssUUFBUSxDQUFDQyxPQUFULENBQWlCLEtBQWpCLEVBQXdCLEVBQXhCLE1BQWdDUixNQUFwQyxFQUE0QztBQUMxQ0gsVUFBQUEsT0FBTyxDQUFDWSxJQUFSLENBQWE7QUFDWEMsWUFBQUEsS0FBSyxFQUFFQyxRQUFRLENBQUNOLFFBQUQsRUFBVyxDQUFYLENBREo7QUFFWE8sWUFBQUEsVUFBVSxFQUFFTCxRQUFRLENBQUNMO0FBRlYsV0FBYjtBQUtBRSxVQUFBQSxTQUFTO0FBQ1YsU0FQRCxNQU9PO0FBQ0w7QUFDRDtBQUNGOztBQUVELGFBQU9QLE9BQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByb3hDYXJkIH0gZnJvbSAnLi8uLi9Qcm94Q2FyZCdcclxuXHJcbmludGVyZmFjZSBJTWF0Y2hPYmplY3Qge1xyXG4gIGZhY0lEOiBudW1iZXJcclxuICBpZEJpdENvdW50OiBudW1iZXJcclxufVxyXG5cclxuaW50ZXJmYWNlIElJbnRlcnByZXRlciB7XHJcbiAgbWF0Y2hlczogSU1hdGNoT2JqZWN0W11cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEludGVycHJldGVyIGltcGxlbWVudHMgSUludGVycHJldGVyIHtcclxuICBtYXRjaGVzOiBJTWF0Y2hPYmplY3RbXVxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcm94OiBQcm94Q2FyZCkge1xyXG4gICAgdGhpcy5tYXRjaGVzID0gdGhpcy5nZXRNYXRjaGVzKHByb3guaGV4Qml0cywgcHJveC5pZEJpdHMpXHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldE1hdGNoZXMoaGV4Qml0czogc3RyaW5nLCBpZEJpdHM6IHN0cmluZyk6IElNYXRjaE9iamVjdFtdIHtcclxuICAgIGxldCBtYXRjaGVzOiBJTWF0Y2hPYmplY3RbXSA9IFtdXHJcbiAgICBjb25zdCBoZXhMZW5ndGg6IG51bWJlciA9IGhleEJpdHMubGVuZ3RoXHJcbiAgICBjb25zdCBtaW5JREJpdHM6IG51bWJlciA9IGlkQml0cy5sZW5ndGhcclxuICAgIGxldCBmYWNJREJpdHM6IG51bWJlciA9IGhleExlbmd0aCAtIG1pbklEQml0c1xyXG5cclxuICAgIHdoaWxlIChmYWNJREJpdHMgPiAxKSB7XHJcbiAgICAgIGxldCBiZWdPZkhleDogc3RyaW5nID0gaGV4Qml0cy5zdWJzdHJpbmcoMCwgZmFjSURCaXRzKVxyXG4gICAgICBsZXQgZW5kT2ZIZXg6IHN0cmluZyA9IGhleEJpdHMuc3Vic3RyaW5nKGJlZ09mSGV4Lmxlbmd0aClcclxuXHJcbiAgICAgIGlmIChlbmRPZkhleC5yZXBsYWNlKC9eMCsvLCAnJykgPT09IGlkQml0cykge1xyXG4gICAgICAgIG1hdGNoZXMucHVzaCh7XHJcbiAgICAgICAgICBmYWNJRDogcGFyc2VJbnQoYmVnT2ZIZXgsIDIpLFxyXG4gICAgICAgICAgaWRCaXRDb3VudDogZW5kT2ZIZXgubGVuZ3RoXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgZmFjSURCaXRzLS1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBicmVha1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG1hdGNoZXNcclxuICB9XHJcbn1cclxuIl19