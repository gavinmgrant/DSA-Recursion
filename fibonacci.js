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

console.log('recursive: ', fibonacci(10) + '\nticks: ' + ticks);

// iterative solution

let ticksIt = 1;

const fib = num => {
    let arr = [0, 1];
    ticksIt++;
    for (let i = 2; i < num + 1; i++) {
        arr.push(arr[i - 2] + arr[i - 1]);
        ticksIt++;
    }
    return arr;
}

console.log('iterative: ', fib(10) + '\nticks: ' + ticksIt);