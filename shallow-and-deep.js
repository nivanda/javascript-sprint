const shallowCopy = {}
Object.assign(shallowCopy, original)

const deepCopy = JSON.parse(JSON.stringify(original))