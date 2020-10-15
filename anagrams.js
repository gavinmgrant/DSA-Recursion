// a recursive function that creates an anagram list, listing all the rearrangements of a given word.

let ticks = 1;

const makeAnagrams = (word, anagram = '', anagrams = []) => {
    ticks++;
    // base case
    if (!word) {
        ticks++;
        anagrams.push(anagram);
        return;
    }

    for (let i = 0; i < word.length; i++) {
        ticks++;
        // concat current letter to anagram
        anagram += word[i];
        ticks++;
        // recurse over function
        makeAnagrams(word.slice(0, i) + word.slice(i + 1), anagram, anagrams);
        ticks++;
        anagram = anagram.slice(0, anagram.length - 1);
    }

    // create a new Set to detect duplicates
    return [...new Set(anagrams)];
};

console.log(makeAnagrams('stick') + '\nticks: ' + ticks);