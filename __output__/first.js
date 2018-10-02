var global_num = 20; //global, accessible anywhere
var Numbers = /** @class */ (function () {
    function Numbers() {
        this.num = 10; //class, accessible on instances of the class
    }
    Numbers.prototype.storeNum = function () {
        var local_num = 30; //local, only available within the method
        return local_num;
    };
    Numbers.sval = 5; //static, available on class
    return Numbers;
}());
var obj = new Numbers();
console.log("global_num:   " + global_num);
console.log("Numbers.sval: " + Numbers.sval);
console.log("obj.num:      " + obj.num);
console.log("local_num:    " + obj.storeNum());
