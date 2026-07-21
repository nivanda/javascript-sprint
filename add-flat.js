function sumNestedArray(nestedArr) {
    let out = 0
    const flatArr = nestedArr.flat(Infinity)
    for (let i = 0; i < flatArr.length; i++) {
        let num = flatArr[i]
        if (typeof(num) == "number") {
            out += num
        }
    }
    return out
}