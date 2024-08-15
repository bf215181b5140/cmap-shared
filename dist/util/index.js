"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertParameterValueFromString = convertParameterValueFromString;
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
