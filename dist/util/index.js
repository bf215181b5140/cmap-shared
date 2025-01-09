"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertParameterValueFromString = convertParameterValueFromString;
exports.imageUrlPathToUrl = imageUrlPathToUrl;
const index_1 = require("../index");
function convertParameterValueFromString(value) {
    // boolean
    if (value === 'true')
        return true;
    if (value === 'false')
        return false;
    // number
    const numValue = Number(value);
    if (!isNaN(numValue))
        return numValue;
    // failed to convert
    return undefined;
}
function imageUrlPathToUrl(urlPath) {
    if (urlPath.startsWith('blob:'))
        return urlPath;
    return index_1.URL + '/' + urlPath;
}
