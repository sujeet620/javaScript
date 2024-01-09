const userEmail = [];

if (userEmail) {
    console.log("got user email");
}
else{
    console.log("don't have user email");
}

//falsy value:-
// false, 0, -0, Bigint 0n, null, undefined, NaN

//truthy value:-
// "0", 'false', " ", [], {}, function(){}
/*
if (userEmail.length === 0) {
    console.log("array is empty");
    
}*/

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("obj is empty");
}