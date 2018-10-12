"use strict";

var a = [1, 2, 3, 4];
var ro = a;
/**
 * Error, ReadonlyArray does not allow updating of values
 * ro[0] = 12
 * ro.push(5)
 * ro.length = 100
 * a = ro
 */

/**
 * The following is allowed by overriding with a type assertion
 */

a = ro;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6WyJhIiwicm8iXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSUEsQ0FBVyxHQUFHLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsQ0FBVixDQUFsQjtBQUNBLElBQUlDLEVBQXlCLEdBQUdELENBQWhDO0FBRUE7Ozs7Ozs7O0FBUUE7Ozs7QUFHQUEsQ0FBQyxHQUFHQyxFQUFKIiwic291cmNlc0NvbnRlbnQiOlsibGV0IGE6IG51bWJlcltdID0gWzEsIDIsIDMsIDRdXHJcbmxldCBybzogUmVhZG9ubHlBcnJheTxudW1iZXI+ID0gYVxyXG5cclxuLyoqXHJcbiAqIEVycm9yLCBSZWFkb25seUFycmF5IGRvZXMgbm90IGFsbG93IHVwZGF0aW5nIG9mIHZhbHVlc1xyXG4gKiByb1swXSA9IDEyXHJcbiAqIHJvLnB1c2goNSlcclxuICogcm8ubGVuZ3RoID0gMTAwXHJcbiAqIGEgPSByb1xyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBUaGUgZm9sbG93aW5nIGlzIGFsbG93ZWQgYnkgb3ZlcnJpZGluZyB3aXRoIGEgdHlwZSBhc3NlcnRpb25cclxuICovXHJcbmEgPSBybyBhcyBudW1iZXJbXVxyXG4iXX0=