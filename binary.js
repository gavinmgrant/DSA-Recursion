// a recursive function that prints out the binary representation of a given number.

const binaryRep = (num) => {
    // base case
    if (num === 0) {
        return 0;
    }
    if (num === 1) {
        return 1;
    }
    //  
    return binaryRep(Math.floor(num / 2)) + (num % 2 + '');
};

console.log(binaryRep(25));