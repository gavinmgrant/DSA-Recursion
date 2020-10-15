// recursive function that reverses a string.
// takes a string as input, reverses the string, and returns a new string.

let ticks = 0;

const reverse = (input) => {
    let array = input.split('');
    if (array.length === 1) {
        ticks++;
        return input;
    } else {
        let removeLast = array.slice(0, (array.length-1));
        let newInput = removeLast.join('');
        ticks++;
        return array.pop() + reverse(newInput);
    }
};

console.log(reverse('goodwill') + '\nticks: ' + ticks);