/*
We can set default values for parameters
*/
var calculateDiscount = function (price, rate) {
    if (rate === void 0) { rate = 0.5; }
    var discount = price * rate;
    console.log("Discount: " + discount);
};
calculateDiscount(100);
calculateDiscount(100, 0.3);
