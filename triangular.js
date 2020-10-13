// recursive function that calculates the nth triangular number that forms an equilateral triangle.
// this is the Triangular Number Sequence: 1, 3, 6, 10, 15, 21, 28, 36, 45...

const triangular = (num) => {
    if (num == 1) {
        return 1;
    } else {
        return num + triangular(num-1)
    }
};

console.log(triangular(7));