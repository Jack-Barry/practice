var StaticExample = /** @class */ (function () {
    function StaticExample() {
    }
    StaticExample.disp = function () {
        console.log("Num is " + StaticExample.num);
    };
    return StaticExample;
}());
StaticExample.num = 22;
StaticExample.disp();
