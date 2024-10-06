import { z } from 'zod';
import { parameterPathSchema, parameterValueObjectOrAvatarSchema } from '../shared';

export const TrackedParameterSchema = z.tuple([
    parameterPathSchema,
    parameterValueObjectOrAvatarSchema,
]);

export type TrackedParameterDTO = z.infer<typeof TrackedParameterSchema>;

export const TrackedParametersSchema = z.array(TrackedParameterSchema);

export type TrackedParametersDTO = z.infer<typeof TrackedParametersSchema>;
