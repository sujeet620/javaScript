/*for declaring obj.
 
    1.singleton(its making with the help of constructor.)
    object.creates

    2.object literals
*/

//Declaring symbol.

const mySym = Symbol("key1")

const student = {
    name : "sujeet",
    age : 22,
    [mySym] : "key1",
    address : "Madhubani,Bihar",
    email : "sujeetullu@gmail.com",
    isLoggedIn : false
}

//to access the object.
//console.log(student.address);
//2nd method is square notation.
//console.log(student["address"]);
//console.log(student[mySym]);
// console.log(typeof student[mySym]);

//for changing the the value of an object.

student.address = "Bihar";
//console.log(student["address"]);

//Object.freeze(student);
student.address = "Rajnagar";
//console.log(student);

student.greeting = function(){
    console.log("Hello student");
}
student.greetingOne = function(){
    console.log(`Hello student, ${this.name}`);
}

console.log(student.greeting());
console.log(student.greetingOne());
