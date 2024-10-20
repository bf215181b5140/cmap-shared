import { z } from 'zod';
export declare const VisibilityParameterSchema: z.ZodObject<{
    path: z.ZodString;
    value: z.ZodEffects<z.ZodString, string, string>;
    condition: z.ZodEnum<["equal", "not_equal", "less_than", "more_than"]>;
}, "strip", z.ZodTypeAny, {
    value: string;
    path: string;
    condition: "equal" | "not_equal" | "less_than" | "more_than";
}, {
    value: string;
    path: string;
    condition: "equal" | "not_equal" | "less_than" | "more_than";
}>;
export type VisibilityParameterDTO = z.infer<typeof VisibilityParameterSchema>;
