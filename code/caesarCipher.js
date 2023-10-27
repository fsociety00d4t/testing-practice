function cipher(str, shift) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  let ciphered = "";
  let shifted;

  for (let i = 0; i < str.length; i++) {
    let index = findIndexOfLetter(str.toLowerCase()[i], alphabet);
    if (index + shift >= 26) {
      shifted = alphabet[(index + shift) % 26];
    } else {
      shifted = alphabet[index + shift];
    }
    if (index !== -1) {
      if (str[i].toUpperCase() === str[i]) ciphered += shifted.toUpperCase();
      else {
        ciphered += shifted;
      }
    } else ciphered += str[i];
  }

  return ciphered;
}

function findIndexOfLetter(letter, alphabet) {
  return alphabet.indexOf(letter);
}

module.exports = cipher;
