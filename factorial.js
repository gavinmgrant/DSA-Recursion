// recursive function that finds the factorial of a given number.
// the factorial of a number can be found by multiplying that number by each number between itself and 1.

let ticks = 1;

const factorial = (num) => {
    if (num <= 1) {
        ticks++;
        return 1; 
    } else {
        ticks++
        let next = factorial(num - 1);
        return num * next;
    }
};

console.log(factorial(10) + '\nticks: ' + ticks);