const lower_alphabet = "abcdefghijklmnopqrstuvwxyz";
const upper_alphabet = lower_alphabet.toUpperCase();

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
}

module.exports = caesarCipher;
