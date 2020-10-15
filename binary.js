// a recursive function that prints out the binary representation of a given number.

let ticks = 1;

const binaryRep = (num) => {
    ticks++;
    // base case
    if (num === 0) {
        ticks++;
        return 0;
    }
    if (num === 1) {
        ticks++;
        return 1;
    }
    // recurse over function with half value of num then return 0 or 1 depending on remainder operator of num
    return binaryRep(Math.floor(num / 2)) + (num % 2 + '');
};

console.log(binaryRep(15) + '\nticks: ' + ticks);