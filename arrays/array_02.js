const heros = ["spiderman", "ironman", "thor"]
const dc_heros = ["antman", "batman", "superman"]

//here push method add array inside array.and push method return existing array.
const allHeros = heros.push(dc_heros);
// console.log(heros);

//concat method is used for adding arrays and it will return new array.
const newHeros=heros.concat(dc_heros);
console.log(newHeros)
