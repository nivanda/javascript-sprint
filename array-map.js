function convert2DArrayToObjectArray(arr) {
    return arr.map(([key, value]) => ({[key]:value}))
}

function convertArrayOfObjectsToStrings(arr) {
    return arr.map((obj) =>
    Object.entries(obj)
      .map(
        ([key, val]) =>
          `${key.charAt(0).toUpperCase() + key.slice(1)}: ${val}`
      )
      .join(", ")
  );
}

function concatenateStrings(strings, maxLength) {
    return strings.map((str) => {
    if (str.length > maxLength) {
      return str.slice(0, maxLength) + "...";
    }
    return str;
  });
}