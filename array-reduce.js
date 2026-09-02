function getTotalFromShoppingBasket(arr) {
    return arr.reduce((acc, obj) => acc + obj.price)
}

function getAverageAge(arr) {
    const arrLength = arr.length
    let out = arr.reduce((acc, obj) => acc + obj.age)
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