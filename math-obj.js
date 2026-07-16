const mathObj = {
    abs(x) {
        return Math.abs(x)
    },
    isEven(x) {
        if (x % 2 == 0) {
            return true
        }
        return false
    },
    isOdd(x) {
        if (x % 2 != 0) {
            return true
        }
        return false
    },
    isStrictlyPositive(x) {
        if (x >= 1) {
            return true
        }
        return false
    },
    min(x, y) {
        if (x > y) {
            return y
        }
        return x
    },
    max(x, y) {
        if (x > y) {
            return y
        }
        return x
    }
}