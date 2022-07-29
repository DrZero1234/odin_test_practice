function onlyNumsArr(arr) {
  let status = true;
  arr.forEach((elem) => {
    if (typeof elem != "number") {
      status = false;
    }
  });
  return status;
}

function arrAvg(arr) {
  let total = 0;
  arr.forEach((num) => {
    total += num;
  });
  return Math.round(total / arr.length);
}

function analyzeArray(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("The parameter must be an array");
  } else if (arr.length === 0) {
    throw new Error("The array must contain AT LEAST one number");
  } else if (!onlyNumsArr(arr)) {
    throw new Error("The array can only contain numbers");
  } else {
    return {
      average: arrAvg(arr),
      max: Math.max(...arr),
      min: Math.min(...arr),
      length: arr.length,
    };
  }
}

module.exports = analyzeArray;
