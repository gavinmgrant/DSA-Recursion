// recursive function that prints the Fibonacci sequence of a given number.

const fibonacci = (num) => {
    if (num <= 1) {
        return [0, 1];
    } else {
        let series = fibonacci(num - 1);
        series.push(series[series.length - 1] + series[series.length -2]);
        return series;
    }
};

console.log(fibonacci(7));