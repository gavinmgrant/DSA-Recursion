// recursive function that reverses a string.
// takes a string as input, reverses the string, and returns a new string.

const reverse = (input) => {
    let array = input.split('');
    if (array.length === 1) {
        return input;
    } else {
        let removeLast = array.slice(0, (array.length-1));
        let newInput = removeLast.join('');
        return array.pop() + reverse(newInput);
    }
};

console.log(reverse('testing'));