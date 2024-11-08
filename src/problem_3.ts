function countWordOccurrences(sentence: string, word: string): number {

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
  