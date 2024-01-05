const user = {
    username: "sujeet",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username} , welcome to our website.`)
        //console.log(this);
    }
}
// user.welcomeMessage()
// user.username = "shyam"
// user.welcomeMessage()

//console.log(this);

//note:whenever js engine run on the browser there are mostly used object which is called "window object". it is the global object on windows.

/*
function chai(){
    const username = "sujeet"
    // console.log(this);
    console.log(this.username);//this can not work inside the function.
}*/
/*
const chai = function(){
    const username = "sujeet"
    // console.log(this);
    console.log(this.username)
}*/

// Arrow functions
const chai = () => {
    const username = "sujeet"
    // console.log(this);
    console.log(this.username)
}

//chai()
/*
const add = (num1, num2) => {
    return num1 + num2;
}*/
/*
const add = (num1, num2) => (num1 + num2);//this is called implict return here we are removing "return" keyword and "{}".*/

const add = (num1, num2) => ({username: "sujeet"});
console.log(add(5, 8))

