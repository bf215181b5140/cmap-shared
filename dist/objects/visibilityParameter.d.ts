import { z } from 'zod';
export declare const VisibilityParameterSchema: z.ZodObject<{
    path: z.ZodString;
    value: z.ZodEffects<z.ZodString, string, string>;
    condition: z.ZodEnum<["Equal", "Not_equal", "Less_than", "More_than"]>;
}, "strip", z.ZodTypeAny, {
    value: string;
    path: string;
    condition: "Equal" | "Not_equal" | "Less_than" | "More_than";
}, {
    value: string;
    path: string;
    condition: "Equal" | "Not_equal" | "Less_than" | "More_than";
}>;
export type VisibilityParameterDTO = z.infer<typeof VisibilityParameterSchema>;
