const array = [1, 2, 3, 4, 5]

// const myTotal = array.reduce( function (acc, currentval) {
//     console.log(`acc: ${acc} and currentval: ${currentval}`);
//     return acc+currentval
// }, 0)


const myTotal = array.reduce( (acc,currentval) =>acc+currentval,0)

console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js",
        price: 999
    },
    {
        itemName: "web development",
        price: 1999
    },
    {
        itemName: "java",
        price: 599
    },
    {
        itemName: "python",
        price: 699
    }
]

const totalPayment = shoppingCart.reduce( (acc, item) => acc + item.price, 0)
console.log(totalPayment);