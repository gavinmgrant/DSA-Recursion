// recursive function that finds the factorial of a given number.
// the factorial of a number can be found by multiplying that number by each number between itself and 1.

const factorial = (num) => {
    if (num <= 1) {
        return 1; 
    } else {
        let next = factorial(num - 1);
        return num * next;
    }
};

console.log(factorial(5));