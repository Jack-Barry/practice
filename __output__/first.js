var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Root = /** @class */ (function () {
    function Root(str) {
        this.str = str;
    }
    Root.prototype.print = function () {
        console.log("Root says: " + this.str);
    };
    return Root;
}());
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Child.prototype.print = function () {
        console.log("My str is: " + this.str);
    };
    return Child;
}(Root));
var Leaf = /** @class */ (function (_super) {
    __extends(Leaf, _super);
    function Leaf() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Leaf.prototype.print = function () {
        _super.prototype.print.call(this);
        console.log('I am a leaf');
    };
    return Leaf;
}(Child));
var r = new Root('Hey');
var c = new Child('Hello');
var l = new Leaf('Hola');
r.print();
console.log('-----');
c.print();
console.log('-----');
l.print();
