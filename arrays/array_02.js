const heros = ["spiderman", "ironman", "thor"]
const dc_heros = ["antman", "batman", "superman"]

// Appends/add new elements to the end of an array, and returns the new length of the array.
//const allHeros = heros.push(dc_heros);
// console.log(heros);

//Combines two or more arrays. This method returns a new array without modifying any existing arrays.
//here is the limitations, we can only concat two array.
const newHeros = heros.concat(dc_heros);
//console.log(newHeros);

//this is spread method which is used to concat the string.
const all_new_heros = [...heros, ...dc_heros]
//console.log(all_new_heros);


const another_array = [1, 2, 4, [5, 6, 7], 8, 3,[2, 2, [1,2,3]] ]
const real_array = another_array.flat(Infinity) ;
//console.log(real_array);

console.log(Array.isArray('sujeet'));
console.log(Array.from("sujeet"));
console.log(Array.from({name: "sujeet"}));

let score1=100;
let score2=200;
let score3=300;

console.log(Array.of(score1, score2, score3));