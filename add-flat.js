function sumNestedArray(nestedArr) {
    let out = 0
    flatArr = nestedArr.flat()
    for (num in flatArr) {
        if (typeof(num) == "number") {
            out += num
        }
    }
    return out
}