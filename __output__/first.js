var num = 20;
console.log("Original: " + num);
/* This would throw an error */
// num = "I'm a string now!"
/*
But we can reassign the type so that it won't.
This would throw an error, because the reassignment must be  subtype of the
current type.

num = <string> "I'm a string now!"

The following works, because <string> is a subtype of <any>
*/
num = "I'm a string now!";
console.log("New Type: " + num);
