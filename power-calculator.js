// recursive function that takes two parameters, an integer as a base, and another integer as an exponent.
// the function returns the value of the base raised to the power of the exponent.

const powerCalculator = function(base, exp) {
    if (exp < 0) {
        return 'exponent should be >= 0'
    } else if (exp === 0) {
        return 1;
    } else {
        return base * powerCalculator(base, exp-1)
    }
};

console.log(powerCalculator(10, 3));