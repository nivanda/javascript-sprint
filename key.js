function getValueFromKey(obj, key) {
    for (const [keyObj, value] of Object.entries(obj)) {
        if (keyObj == key) {
            return value
        }
    }
    return undefined
}

function addKeyValuePairs(obj, KVPairs) {
    return {...obj, ...KVPairs}
}