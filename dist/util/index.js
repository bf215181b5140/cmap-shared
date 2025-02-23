"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertParameterValueFromString = convertParameterValueFromString;
exports.trimNumberDecimals = trimNumberDecimals;
exports.imageUrlPathToUrl = imageUrlPathToUrl;
exports.imageOrientationToAspectRatio = imageOrientationToAspectRatio;
exports.getForcedObjectLabel = getForcedObjectLabel;
const index_1 = require("../index");
/**
 * Converts a string to valid parameter number or boolean, else return undefined
 *
 */
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
/**
 * Trims decimals of a float number to specific number
 *
 * By default, trim to 3 deciamals because that's the precision we use comparing VRChat parameter float values
 *
 */
function trimNumberDecimals(number, decimals = 3) {
    const calc = Math.pow(10, decimals);
    return Math.floor(number * calc) / calc;
}
/**
 * Return proper full URL to images from UploadedFile urlPath, with exception for blob files.
 *
 */
function imageUrlPathToUrl(urlPath) {
    if (urlPath.startsWith('blob:'))
        return urlPath;
    return index_1.URL + '/' + urlPath;
}
/**
 * Return aspect ratio for css property based on ImageOrientation enum value
 *
 */
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
/**
 * Return object label or construct a label from object order.
 *
 * For example a ParameterButton might have no (empty) label, but to display it sometimes we need a placeholder text based on order that refers to it (Parameter button #3)
 *
 */
function getForcedObjectLabel(object, type) {
    if (object.label)
        return object.label;
    return type + ' #' + object.order;
}
