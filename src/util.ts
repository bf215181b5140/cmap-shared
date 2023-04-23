import { ButtonDto, ValueType } from './index';

export function convertParameterValue(valueType: ValueType, value: string): string | number | boolean | null {
    try {
        let tempValue;
        switch (valueType) {
            case ValueType.Int:
                tempValue = parseInt(value, 10);
                if (isNaN(tempValue)) tempValue = null;
                break;
            case ValueType.Float:
                tempValue = parseFloat(value);
                if (isNaN(tempValue)) tempValue = null;
                break;
            case ValueType.Boolean:
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
