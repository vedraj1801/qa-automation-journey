//before we use 
//for loop (basic)

//now:
//(1) map()  - transform data

let numbers = [1,2,3];
let doubled = numbers.map(n => n * 2);
console.log(doubled); // [2,4,6]


//(2)filter() -  get specific data

let number = [1,2,3,4,5];
let even = number.filter(n => n % 2 === 0);

console.log(even); // [2,4]

//(3) find() - find one item 

let users = [
    {name:"A", age:20},
    {name:"B", age:15}
];

let adult = users.find(u => u.age >=18);

console.log(adult);