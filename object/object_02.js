//declaring of an object with the help of constructor or singleton.

const insta = new Object()
insta.id = "sk124"
insta.name = "sujeet"
insta.isLoggedIn = false

//console.log(insta);

const regularUser = {
    email : "sujeet@gmail.com",
    fullname: {
        userfullname: {
            firstname: "sujeet",
            lastname: "sahu"
        }
    }
}

//console.log(regularUser.fullname);
//console.log(regularUser.fullname.userfullname);

const obj1 = {1: "a", 2: "b", 3: "c"}
const obj2 = {4: "a", 5: "b", 6: "c"}

//const obj3 = {obj1,obj2};//here combining the obj but there is the problematic situtation which is obj inside obj.
//const obj3 = Object.assign({},obj1,obj2)
const obj3 = {...obj1, ...obj2}
//console.log(obj3);


const user = [
    {
        id: 1,
        email: "s@gmail.com"
    },
    {
        id: 1,
        email: "s@gmail.com"
    },
    {
        id: 1,
        email: "s@gmail.com"
    },
    {
        id: 1,
        email: "s@gmail.com"
    },
    {
        id: 1,
        email: "s@gmail.com"
    },
    {
        id: 1,
        email: "s@gmail.com"
    }
]

user[1].email;
console.log(insta);

console.log(Object.keys(insta));
console.log(Object.values(insta));
console.log(Object.entries(insta));

console.log(insta.hasOwnProperty("isLoggedIn"));