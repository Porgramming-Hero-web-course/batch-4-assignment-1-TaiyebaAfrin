"use strict";
function countWordOccurrences(sentence, word) {
    const lSentence = sentence.toLowerCase();
    const lWord = word.toLowerCase();
    const words = lSentence.split(' ');
    let count = 0;
    for (let w of words) {
        if (w === lWord) {
            count++;
        }
    }
    return count;
}
console.log(countWordOccurrences("I love typescript", "typescript"));
//# sourceMappingURL=problem_3.js.map