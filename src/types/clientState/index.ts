import { z } from 'zod';
import { parameterSchema, parameterValueOrAvtrSchema } from '../shared';

export const ClientStateParamsSchema = z.array(z.tuple([
    parameterSchema,
    z.union([z.string(), z.number(), z.boolean()]),
]));

export const ClientStateParamSchema = z.object({
    parameter: parameterSchema,
    value: parameterValueOrAvtrSchema,
});

export type ClientStateParamsDTO = z.infer<typeof ClientStateParamsSchema>;

export interface ClientStateDTO {
    isConnected: boolean;
    isOnVrchat: boolean | null;
    parameters: ClientStateParamsDTO;
}
