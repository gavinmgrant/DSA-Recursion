// recursive function that splits a string based on a separator (similar to String.prototype.split).

const splitter = (input) => {
    if (!input.includes('/')) {
        return input;
    } else {
        let firstString = Array.of(input.substring(0, input.indexOf('/')));
        let remaining = input.substring((input.indexOf('/') + 1), input.length);
        return firstString.concat(splitter(remaining));
    }
};

console.log(splitter('02/20/2020'));