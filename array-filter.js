function filterOutOddNumbers(arr) {
    return arr.filter((e) => e % 2 == 0)
}

function filterObjectsByNameLength(arr, maxLen) {
    return arr.filter((e) => e.name.length <= maxLen)
}

function compoundFilter(arr) {
    return arr.filter(checker)
}

function checker(value) {
    let out = false
    if (value.code.length > 5 && 
        !value.category.includes("special") && 
        value.price > 50 && 
        value.location != "Underground") {

        out = true
    }
    return out
}