// basic object
let user = {
    name:"vedraj",
    age:22,
    role:"QA Engineer"
}
// Access Object Values

    console.log(user.name);
    console.log(user.age);

// in  real projects: validate data

let response = {
    status:200,
    message: "Success",
    user: {
        name: "Vedraj",
        age: 22
    }
};

// loop through object

for(let key in user) {
    console.log(key +": " + user[key]);
}

