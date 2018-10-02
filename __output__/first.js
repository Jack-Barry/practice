/*
A rest parameter allows us to use ... notation to pass in an array of
parameters. The number[] type declaration specifies our type to be an array
of numbers
*/
var addNums = function () {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    var i;
    var sum = 0;
    for (i = 0; i < nums.length; i++) {
        sum = sum + nums[i];
    }
    console.log("Sum: " + sum);
};
addNums(1, 2, 3, 4);
addNums(10, 20, 30, 40);
/*
This would throw an error because we're trying to assign a string in the array
addNums('stuff', 3, 7)
*/
