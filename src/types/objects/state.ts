import { z } from 'zod';
import { parameterPathSchema, parameterValueObjectOrAvatarSchema } from '../shared';

export const StateParameterSchema = z.tuple([
    parameterPathSchema,
    parameterValueObjectOrAvatarSchema,
]);

export type StateParameterDTO = z.infer<typeof StateParameterSchema>;

export const StateParametersSchema = z.array(StateParameterSchema);

export type StateParametersDTO = z.infer<typeof StateParametersSchema>;

export const StateSchema = z.object({
    isConnected: z.boolean(),
    isOnVrchat: z.boolean().nullable(),
    parameters: StateParametersSchema,
});

export type StateDTO = z.infer<typeof StateSchema>;


