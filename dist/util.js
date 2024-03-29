"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertParameterValue = void 0;
const index_1 = require("./index");
function convertParameterValue(valueType, value) {
    try {
        let tempValue;
        switch (valueType) {
            case index_1.ParameterValueType.Int:
                tempValue = parseInt(value, 10);
                if (isNaN(tempValue))
                    tempValue = null;
                break;
            case index_1.ParameterValueType.Float:
                tempValue = parseFloat(value);
                if (isNaN(tempValue))
                    tempValue = null;
                break;
            case index_1.ParameterValueType.Bool:
                if (value === 'true') {
                    tempValue = true;
                }
                else if (value === 'false') {
                    tempValue = false;
                }
                else {
                    tempValue = null;
                }
                break;
            default:
                tempValue = null;
                break;
        }
        return tempValue;
    }
    catch (e) {
        return null;
    }
}
exports.convertParameterValue = convertParameterValue;
