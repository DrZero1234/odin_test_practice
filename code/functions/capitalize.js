function capitalize(str) {
  if (typeof str !== "string") {
    throw new Error("The parameter must be a string");
  } else if (str.length <= 0) {
    return "";
  } else {
    return (
      str[0].toUpperCase() + str.slice(1, str.length).toLowerCase()
    );
  }
}

module.exports = capitalize;
