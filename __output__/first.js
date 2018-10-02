var options = { program: 'test', commandline: 'another test' };
console.log("Program:     " + options.program);
console.log("Commandline: " + options.commandline);
var moreOptions = {
    program: 'test 2',
    commandline: function () {
        return 'stuff';
    }
};
var commandlineFunc = moreOptions.commandline;
console.log("Program:     " + moreOptions.program);
console.log("Commandline: " + commandlineFunc());
