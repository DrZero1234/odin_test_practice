function reverseString(str) {
  if (typeof str !== "string") {
    throw new Error("The parameter must be a string");
  } else if (str.length <= 0) {
    return "";
  }
  // Splits the string to an array, reverses the array and joins the array´s content together

  return str.split("").reverse().join("");
}

module.exports = reverseString;
