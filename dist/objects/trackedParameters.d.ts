import { z } from 'zod';
export declare const TrackedParameterSchema: z.ZodTuple<[z.ZodString, z.ZodUnion<[z.ZodUnion<[z.ZodNumber, z.ZodBoolean]>, z.ZodString]>], null>;
export type TrackedParameterDTO = z.infer<typeof TrackedParameterSchema>;
export declare const TrackedParametersSchema: z.ZodArray<z.ZodTuple<[z.ZodString, z.ZodUnion<[z.ZodUnion<[z.ZodNumber, z.ZodBoolean]>, z.ZodString]>], null>, "many">;
export type TrackedParametersDTO = z.infer<typeof TrackedParametersSchema>;
