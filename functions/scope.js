//scope

let a = 300;//global level scope.

if(true){
    let a = 20;
    const b =30;
    //local or block level scope.
    //console.log("inner:",a); 
}


// console.log(a);

//Nested scope
function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
    
        console.log(username + website);
    }
    //console.log(website);

    //two()

}
//one()

if (true){
    const username = "sujeet"
    if(username === "sujeet"){
        const website = "google"
        //console.log(`username is ${username} and website is ${website}`);
    }
    //console.log(website);
}
//console.log(username);
console.log(addOne(5))

function addOne(value){
    return value+1
}

console.log(addTwo(6));
const addTwo = function(value){
    return value+2
}

