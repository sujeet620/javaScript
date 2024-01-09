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

// const emptyObj = {}

// if (Object.keys(emptyObj).length === 0) {
//     console.log("obj is empty");
// }

//nullish coalescing Operator (??): null, undefined

let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10;
//val1 = undefined ?? 15;
val1 = null ?? 10 ?? 15


console.log(val1);

//ternory Operator

// Condition ? true : false;

let iceTea = 150;
iceTea <= 80 ? console.log("less than 80") : console.log("more than 80");