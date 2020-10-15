// recursive function that counts how many sheep jump over the fence.

let ticks = 0;

const countingSheep = function(sheep) {
    // base case
    if (sheep === 0) {
        ticks++;
        return 'All sheep jumped over the fence';
    }

    // general case
    ticks++
    return sheep + ': Another sheep jumps over the fence\n' + (countingSheep(sheep - 1));
};

console.log(countingSheep(6) + '\nticks: ' + ticks);