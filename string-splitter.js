// recursive function that splits a string based on a separator (similar to String.prototype.split).

let ticks = 0;

const splitter = (input) => {
    if (!input.includes('/')) {
        ticks++;
        return input;
    } else {
        let firstString = Array.of(input.substring(0, input.indexOf('/')));
        ticks++;
        let remaining = input.substring((input.indexOf('/') + 1), input.length);
        ticks++;
        return firstString.concat(splitter(remaining));
    }
};

console.log(splitter('02/20/2020') + '\nticks: ' + ticks);