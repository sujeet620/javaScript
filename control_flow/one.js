//if statement
/*
let isUserLoggeddin = true;
let temperature = 40;
if (temperature === 45){
    console.log("nice whether");
}
else{
    console.log("cold whether");
}*/
//comparision operator:-
//<, >, <=, >=, ==, !=, === 
/*
let score = 200;

if(score > 100){
    const power = "fly"
    console.log(`'user power: ${power}'`);
}
*/

/*
const balance = 1000

//if(balance > 500) console.log("test");

if (balance < 500) {
    console.log("less than");

}else if (balance < 750) {
    console.log("less than 750");
}
else if (balance < 900) {
    console.log("less than 750");
}
else {
    console.log("less than 1100");
}
*/

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (userLoggedIn && debitCard) {
    console.log("allow to buy");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("user loggedin");
}