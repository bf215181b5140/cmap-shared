import { z } from 'zod';
export declare const idSchema: z.ZodString;
export declare const interactionKeyIdSchema: z.ZodNullable<z.ZodUnion<[z.ZodEffects<z.ZodLiteral<"">, null, "">, z.ZodString]>>;
export declare const labelOptionalSchema: z.ZodString;
export declare const labelRequiredSchema: z.ZodString;
