import { z } from 'zod';
import { parameterPathSchema, parameterValueObjectOrAvatarSchema } from '../shared';

export const StateParameterSchema = z.tuple([
    parameterPathSchema,
    parameterValueObjectOrAvatarSchema,
]);

export type StateParameterDTO = z.infer<typeof StateParameterSchema>;

export const StateSchema = z.array(StateParameterSchema);

export type StateDTO = z.infer<typeof StateSchema>;
