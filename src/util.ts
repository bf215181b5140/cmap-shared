import { ParameterValueType } from './index';

export function convertParameterValue(valueType: ParameterValueType, value: string): string | number | boolean | null {
    try {
        let tempValue;
        switch (valueType) {
            case ParameterValueType.Int:
                tempValue = parseInt(value, 10);
                if (isNaN(tempValue)) tempValue = null;
                break;
            case ParameterValueType.Float:
                tempValue = parseFloat(value);
                if (isNaN(tempValue)) tempValue = null;
                break;
            case ParameterValueType.Bool:
                if (value === 'true') {
                    tempValue = true;
                } else if (value === 'false') {
                    tempValue = false;
                } else {
                    tempValue = null;
                }
                break;
            default:
                tempValue = null;
                break;
        }
        return tempValue;
    } catch (e) {
        return null;
    }
}

export function convertParameterValueFromString(value: string): number | boolean | undefined {
    // boolean
    if (value === 'true') return true;
    if (value === 'false') return false;

    // number
    const numValue = Number(value);
    if (!isNaN(numValue)) return numValue;

    // failed to convert
    return undefined;
}
