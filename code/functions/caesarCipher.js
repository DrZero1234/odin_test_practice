const lower_alphabet = "abcdefghijklmnopqrstuvwxyz";
const upper_alphabet = lower_alphabet.toUpperCase();

function isAlpha(char) {
  return lower_alphabet.includes(char.toLowerCase());
}

function caesarCipher(key, str) {
  if (typeof str !== "string") {
    throw new Error("The parameter must be a string");
  } else if (str.length <= 0) {
    return "";
  } else if (typeof key !== "number" || key <= 0) {
    throw new Error(
      "The key must be a whole number which is higher than 0"
    );
  }
  let cipher = "";
  for (let char of str) {
    if (!isAlpha(char)) {
      cipher += char;
    } else if (char == char.toLowerCase()) {
      const char_index = lower_alphabet.indexOf(char);
      const cipher_index = (char_index + key) % lower_alphabet.length;
      cipher += lower_alphabet[cipher_index];
    } else if (char == char.toUpperCase()) {
      const char_index = upper_alphabet.indexOf(char);
      const cipher_index = (char + key) % upper_alphabet.length;
      cipher += upper_alphabet[cipher_index];
    }
  }
  return cipher;
}

module.exports = caesarCipher;
