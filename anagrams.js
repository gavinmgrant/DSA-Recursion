// a recursive function that creates an anagram list, listing all the rearrangements of a given word.

const makeAnagrams = (word, anagram = '', anagrams = []) => {
    // base case
    if (!word) {
        anagrams.push(anagram);
        return;
    }

    for (let i = 0; i < word.length; i++) {
        // concat current letter to anagram
        anagram += word[i];
        // recurse over function
        makeAnagrams(word.slice(0, i) + word.slice(i + 1), anagram, anagrams);
        anagram = anagram.slice(0, anagram.length - 1);
    }

    // create a new Set to detect duplicates
    return [...new Set(anagrams)];
};

console.log(makeAnagrams('east'));