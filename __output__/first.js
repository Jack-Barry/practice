/*
  We can declare function variables as optional using a ?
*/
var myFunction = function (id, name, mail_id) {
    console.log("ID:      " + id);
    console.log("Name:    " + name);
    if (mail_id != undefined)
        console.log("Mail ID: " + mail_id);
};
myFunction(23, 'Michael Jordan');
myFunction(22, 'Michael Gordon', 'blah@thing.net');
