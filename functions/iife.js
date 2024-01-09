//Immediately invoked Function Expression (IIFE).

(function chai(){
    console.log(`DB connected`);
})();//if we declare another function we should first close the first function with the semi-colon(;).


//for removing of global scope pollution we are using 'iife'.

( () => {
    console.log(`Db connected two`);
})();

( (name) => {
    console.log(`DB connected ${name}`);
})("sujeet")
