import { z } from 'zod';
export declare const StateParameterSchema: z.ZodTuple<[z.ZodString, z.ZodUnion<[z.ZodUnion<[z.ZodNumber, z.ZodBoolean]>, z.ZodString]>], null>;
export type StateParameterDTO = z.infer<typeof StateParameterSchema>;
export declare const StateSchema: z.ZodArray<z.ZodTuple<[z.ZodString, z.ZodUnion<[z.ZodUnion<[z.ZodNumber, z.ZodBoolean]>, z.ZodString]>], null>, "many">;
export type StateDTO = z.infer<typeof StateSchema>;
