import { ParameterValueType } from './index';
export function convertParameterValue(valueType, value) {
    try {
        let tempValue;
        switch (valueType) {
            case ParameterValueType.Int:
                tempValue = parseInt(value, 10);
                if (isNaN(tempValue))
                    tempValue = null;
                break;
            case ParameterValueType.Float:
                tempValue = parseFloat(value);
                if (isNaN(tempValue))
                    tempValue = null;
                break;
            case ParameterValueType.Bool:
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
