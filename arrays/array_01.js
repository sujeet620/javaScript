// array

//for declaring array
const myArray = [1,2,3,5,9,7];
const heros = ["shaktiman", "viajythalapathy"];
const myArray1 = new Array(1,2,3,4);
//to access array element.
//console.log(myArray[5]);

// Array methods:-

//for adding element in array.
myArray.push("sujeet");
//console.log(myArray);

//for removing element in array
//note:-pop method is used to removing last element of an array without passing any parameter.
myArray.pop();
//console.log(myArray);

//for adding element in the first we should us unshift method and shift is used for removing element without passing any parameter.

myArray.unshift(0)
myArray.shift()
//console.log(myArray);

//console.log(myArray.includes(9));
//console.log(myArray.indexOf(7));


//join method is used to change the type of an array.
const newArray = myArray.join()
// console.log(myArray);
// console.log(newArray);
// console.log(typeof newArray);

//slice,splice
//slice is used to access the element within the range.
console.log("a", myArray);

const myn1 = myArray.slice(1,3)
console.log(myn1);
console.log("b", myArray);

//splice is access the element and its includes last element but in the splice are removed array element in between the range.
const myn2 = myArray.splice(1,3)
console.log(myn2);
console.log("c", myArray);
