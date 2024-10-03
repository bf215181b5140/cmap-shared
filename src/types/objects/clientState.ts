import { z } from 'zod';
import { parameterPathSchema, parameterValueObjectOrAvatarSchema } from '../shared';

export const ClientStateParameterSchema = z.tuple([
    parameterPathSchema,
    parameterValueObjectOrAvatarSchema,
]);

export type ClientStateParameterDTO = z.infer<typeof ClientStateParameterSchema>;

export const ClientStateParametersSchema = z.array(ClientStateParameterSchema);

export type ClientStateParametersDTO = z.infer<typeof ClientStateParametersSchema>;

export const ClientStateSchema = z.object({
    isConnected: z.boolean(),
    isOnVrchat: z.boolean().nullable(),
    parameters: ClientStateParametersSchema,
});

export type ClientStateDTO = z.infer<typeof ClientStateSchema>;
