"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertParameterValueFromString = convertParameterValueFromString;
exports.imageUrlPathToUrl = imageUrlPathToUrl;
exports.imageOrientationToAspectRatio = imageOrientationToAspectRatio;
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
function imageOrientationToAspectRatio(imageOrientation) {
    switch (imageOrientation) {
        case index_1.ImageOrientationSchema.Values.Square:
            return '4/3';
        case index_1.ImageOrientationSchema.Values.Vertical:
            return '3/4';
        case index_1.ImageOrientationSchema.Values.Horizontal:
        default:
            return '16/9';
    }
}
