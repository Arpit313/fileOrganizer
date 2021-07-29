//yha pr functions hote h
// variable vgrh hote h

var a=10;
function fn()
{
    console.log("hello i am Fn");
    return "hello";
}

function notExported()
{
    console.log("I am not being exported");
}

//code export
//ye code export hoga wha pr
module.exports=
{
    varName : a,
    fxn : fn
}

// ye code humne client.js me export kia h