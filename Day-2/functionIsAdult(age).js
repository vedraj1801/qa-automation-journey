// function to check person is adult or minor
function isAdult(age) {
    if (age >= 18) {
         return "Adult";
    } else {
    return "Minor";
    }
}

const result = isAdult(19);
console.log(result);