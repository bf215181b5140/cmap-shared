import { z } from 'zod';

export const ClientStateParamsSchema = z.array(z.tuple([
    z.string().min(1).max(150),
    z.union([z.string(), z.number(), z.boolean()]),
]));

export type ClientStateParamsDTO = z.infer<typeof ClientStateParamsSchema>;

export interface ClientStateDTO {
    isConnected: boolean;
    isOnVrchat: boolean | null;
    parameters: ClientStateParamsDTO;
}
