function myfunction(){
    console.log("s");
    console.log("u");
    console.log("j");
    console.log("e");
    console.log("e");
    console.log("t");
}

//myfunction();

//creating a function which is adding two number.
/*function addTwoNumbers(number1, number2){
    console.log(number1+number2)
}*/
function addTwoNumbers(number1, number2){
    /*let result = number1+number2;
    return result;*/

    return number1+number2;
}

let result = addTwoNumbers(5, 3);
//console.log("Result: ", result);

function loginMessage(username = "trulle"){
    if(!username){
        console.log("please enter your username.");
        return;
    }
    return `${username} just logged in.`
}
//console.log(loginMessage("vikash"));


function  calculateCartPrice(...num1){
    return num1;
}

//console.log(calculateCartPrice(200, 5000, 600, 899));
//passing the object into the function.
let user = {
    username: "sujeet",
    price: 999
}

function handledObject(anyobject){
    console.log( `username is ${anyobject.username} and price is ${anyobject.price}`);
}

//console.log(handledObject(user));
//another method to passing object into the function. 
handledObject({
        username: "ravi",
        price: 199
})


//passing the array into the function.
let myArray = [100, 200, 300, 400];
function returnArrayValue(getArray){
    return getArray[1]
}
// console.log(returnArrayValue(myArray));
console.log(returnArrayValue([100, 200, 300, 400]));