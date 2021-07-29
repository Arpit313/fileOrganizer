//Main Input
// If the input is node main.js tree "path"
// Output will be tree command executed with path ""

// If the input is node main.js organize "path"
// Output will be organize command executed with path ""

// If the input is node main.js help
//Output will be list of all the commands
    //  1. node main.js tree "path"
    // 2. node main .js organize "path"
    // 3. node main.js help


let helpObject = require("./commands/help");
let organizeObject = require("./commands/organize");
let treeObject = require("./commands/tree");

let inputArr = process.argv.slice(2);
let command = inputArr[0];//isme aaega tree dia h ya organize vgrh
switch(command)
{
    case "tree": treeObject.treeFxn(inputArr[1]);
        break;
    case "organize":organizeObject.organizeFxn(inputArr[1])
        break;
    case "help": helpObject.helpFxn();
        break;
    default: 
        console.log("Enter correct command");
        break;
}

