function sumNestedArray(nestedArr) {
    let out = 0
    const flatArr = nestedArr.flat()
    for (let num in flatArr) {
        if (typeof(num) == "number") {
            out += num
        }
    }
    return out
}