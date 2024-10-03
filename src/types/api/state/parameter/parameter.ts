import { z } from 'zod';
import { parameterPathSchema, parameterValueSchema, vrcAvatarIdSchema } from '../../../shared';
import { convertParameterValueFromString } from '../../../../util';

export const StateParameterFormSchema = z.object({
    path: parameterPathSchema,
    value: z.union([parameterValueSchema, vrcAvatarIdSchema]),
}).transform(val => {
    const convertedValue = convertParameterValueFromString(val.value);
    const transformedValue = convertedValue !== undefined ? convertedValue : val.value;
    return { ...val, value: transformedValue };
});

export type StateParameterFormDTO = z.infer<typeof StateParameterFormSchema>;
