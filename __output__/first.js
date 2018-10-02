var Car = /** @class */ (function () {
    // constructor
    function Car(engine) {
        this.engine = engine;
    }
    // function
    Car.prototype.disp = function () {
        console.log("Engine is: " + this.engine);
    };
    return Car;
}());
var vw = new Car('350cc');
console.log(vw.engine);
vw.disp();
