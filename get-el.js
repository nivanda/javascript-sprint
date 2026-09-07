function getElementsByTag(tagName) {
    const element = document.getElementsByTagName(tagName);
    return element;

}

function getElementsByClassName(className) {
    const elements = document.getElementsByClassName(className);
    return elements;
}

function getElementById(id) {
    const elementId = document.getElementById(id);
    if (elementId === null) {
        return undefined;
    } else {
        return elementId;
    }
}

function getElementsByAttribute(attributeName, attributeValue) {
    const allElements = document.getElementsByTagName('*');
    const result = [];

    for (let i = 0; i < allElements.length; i++) {
        const element = allElements[i];

        if (element.hasAttribute(attributeName)) {
            if (attributeValue === undefined || element.getAttribute(attributeName) == attributeValue) {
                result.push(element);
            }
        }
    } return result;
}

    module.exports = {
        getElementsByTag,
        getElementsByClassName,
        getElementById,
        getElementsByAttribute
    };
