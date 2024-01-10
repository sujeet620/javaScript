const coding = ["js", "java", "ruby", "cpp", "python"]

//call back function ahve no name
// coding.forEach( function (item) {
//     console.log(item);
// })

// coding.forEach( (item) => {
//     console.log(item);
// })

// function printme(item){
//     console.log(item);
// }

// coding.forEach(printme)

// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
// })

const myCoding = [
    {
        langaugeName: "javascript",
        langaugefile: "js"
    },
    {
        langaugeName: "java",
        langaugefile: "java"
    },
    {
        langaugeName: "python",
        langaugefile: "py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.langaugeName);
})