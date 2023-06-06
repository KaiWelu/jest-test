export function doubleCharacters(word) {
  let outputString = "";
  for (let i = 0; i < word.length; i++) {
    outputString = outputString + word[i] + word[i];
  }

  return outputString;
}
