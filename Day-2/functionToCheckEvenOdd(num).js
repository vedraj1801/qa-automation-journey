// Function to check if number is even or odd
function checkEvenOdd(num) {
    if (num % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}
const result = checkEvenOdd(6);
console.log(result);