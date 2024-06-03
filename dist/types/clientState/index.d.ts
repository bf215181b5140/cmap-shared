import { z } from 'zod';
export declare const ClientStateParamsSchema: z.ZodArray<z.ZodTuple<[z.ZodString, z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>], null>, "many">;
export type ClientStateParamsDTO = z.infer<typeof ClientStateParamsSchema>;
export interface ClientStateDTO {
    isConnected: boolean;
    isOnVrchat: boolean | null;
    parameters: ClientStateParamsDTO;
}
