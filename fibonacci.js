// recursive function that prints the Fibonacci sequence of a given number.

let ticks = 1;

const fibonacci = (num) => {
    if (num <= 1) {
        ticks++;
        return [0, 1];
    } else {
        ticks++;
        let series = fibonacci(num - 1);
        ticks++
        series.push(series[series.length - 1] + series[series.length -2]);
        return series;
    }
};

console.log(fibonacci(20) + '\nticks: ' + ticks);