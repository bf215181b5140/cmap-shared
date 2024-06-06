import { z } from 'zod';
import { parameterSchema, parameterValueOrAvtrFormSchema, parameterValueOrAvtrSchema } from '../shared';

export const ClientStateParamsSchema = z.array(z.tuple([
    parameterSchema,
    parameterValueOrAvtrSchema,
]));

export const ClientStateParamFormSchema = z.object({
    parameter: parameterSchema,
    value: parameterValueOrAvtrFormSchema,
});

export const ClientStateParamSchema = z.object({
    parameter: parameterSchema,
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
