function getTotalFromShoppingBasket(arr) {
    if (arr.length != 0) {
        return arr.reduce((acc, obj) => acc + obj.price, 0)
    }
    return 0
}

function getAverageAge(arr) {
    const arrLength = arr.length
    let out = arr.reduce((acc, obj) => acc + obj.age, 0)
    out = out / arrLength
    return out
}

function concatenateObjects(arr) {
    return arr.reduce((acc, { key, value }) => {
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(value);
    return acc;
  }, {});
}