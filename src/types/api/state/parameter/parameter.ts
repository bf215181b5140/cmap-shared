import { z } from 'zod';
import { parameterPathSchema, parameterValueOrAvatarSchema } from '../../../shared';
import { convertParameterValueFromString } from '../../../../util';

export const ClientStateParameterFormSchema = z.object({
    path: parameterPathSchema,
    value: parameterValueOrAvatarSchema,
}).transform((val, ctx) => {
    // vrc avatar id
    if (val.value.startsWith('avtr_')) return val;
    // convert to number or boolean
    const convertedVal = convertParameterValueFromString(val.value);
    if (convertedVal === undefined) {
        ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: 'Invalid value, must be either VRChat avatar ID, number or bool',
            fatal: true,
        });
        return z.NEVER;
    }

    return { ...val, value: convertedVal };
});

export type ClientStateParameterFormDTO = z.infer<typeof ClientStateParameterFormSchema>;
