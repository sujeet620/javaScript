//de-structure of an object.

const course = {
    coursename: "javaScript",
    price: 299,
    trainer: "hitesh"
}

//course.trainer

const {trainer: t} = course;

console.log(t);

/* const navbar = ({company}) => {
 note: this is the part of react which shows the de-structure of an obj. 
 }
 navbar(comapny = "sujeet")
 */

//API concept: - JSON
/*
{
    "name": "sujeet",
    "trainer": "hitesh",
    "price": "free of cost"
}
*/
[
    {},
    {},
    {}
]