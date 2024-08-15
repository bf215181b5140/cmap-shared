import { z } from 'zod';
import { parameterPathSchema, parameterValueObjectOrAvatarSchema } from '../shared';

export const ClientStateParameterSchema = z.tuple([
    parameterPathSchema,
    parameterValueObjectOrAvatarSchema,
]);

export type ClientStateParameterDTO = z.infer<typeof ClientStateParameterSchema>;

export const ClientStateSchema = z.object({
    isConnected: z.boolean(),
    isOnVrchat: z.boolean().nullable(),
    parameters: z.array(ClientStateParameterSchema),
});

export type ClientStateDTO = z.infer<typeof ClientStateSchema>;
