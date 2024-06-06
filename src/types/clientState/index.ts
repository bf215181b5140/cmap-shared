import { z } from 'zod';
import { parameterPathSchema, parameterValueOrAvtrFormSchema, parameterValueOrAvtrSchema } from '../shared';

export const ClientStateParamsSchema = z.array(z.tuple([
    parameterPathSchema,
    parameterValueOrAvtrSchema,
]));

export const ClientStateParamFormSchema = z.object({
    path: parameterPathSchema,
    value: parameterValueOrAvtrFormSchema,
});

export const ClientStateParamSchema = z.object({
    path: parameterPathSchema,
    value: parameterValueOrAvtrSchema,
});

export type ClientStateParamsDTO = z.infer<typeof ClientStateParamsSchema>;

export type ClientStateParamFormDTO = z.infer<typeof ClientStateParamFormSchema>;

export type ClientStateParamDTO = z.infer<typeof ClientStateParamSchema>;

export interface ClientStateDTO {
    isConnected: boolean;
    isOnVrchat: boolean | null;
    parameters: ClientStateParamsDTO;
}
