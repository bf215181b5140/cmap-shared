import { z } from 'zod';
import { parameterPathSchema, parameterValueObjectOrAvatarSchema } from '../shared';

export const VrcParameterSchema = z.object({
    path: parameterPathSchema,
    value: parameterValueObjectOrAvatarSchema,
});

export type VrcParameter = z.infer<typeof VrcParameterSchema>;