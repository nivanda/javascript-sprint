function getFirstElement(par) {
    const checkedParms = checkParms(par)
    if (checkedParms.par == 1) {
        return par.charAt(0)
    }
    if (checkedParms.par = 2) {
        return par[0]
    }
    return undefined
}

function getLastElement(par) {
    const checkedParms = checkParms(par)
    if (checkedParms.par == 1) {
        return par.charAt(par.length() - 1)
    }
    if (checkedParms.par = 2) {
        return par[par.length - 1]
    }
    return undefined
}

function getElementByIndex(par, index) {
    const checkedParms = checkParms(par)
    if (checkedParms.par == 1 && checkedParms.index) {
        return par.charAt(index)
    }
    if (checkedParms.par = 2 && checkedParms.index) {
        return par[index]
    }
    return undefined
}

function checkParms(par, index) {
    const out = {
        par: 0,
        index: false
    }
    if (typeof(par) == "string") {
        if (par != "") {
            out.par = 1
        }
    }
    if (typeof(par) == "object") {
        if (Array.isArray(par)) {
            if (par.length != 0) {
                out.par = 2
            }
        }
    }
    if(typeof(index) == "number") {
        if (index >= 0) {
            out.index = true
        }
    }
    return out
}