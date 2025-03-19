import { z } from 'zod';
export declare const VisibilityParameterFormSchema: z.ZodObject<{
    path: z.ZodString;
    value: z.ZodUnion<[z.ZodEffects<z.ZodString, number | boolean, string>, z.ZodEffects<z.ZodNumber, number, number>, z.ZodBoolean]>;
    condition: z.ZodEnum<["Equal", "Not_equal", "Less_than", "More_than"]>;
}, "strip", z.ZodTypeAny, {
    value: number | boolean;
    path: string;
    condition: "Equal" | "Not_equal" | "Less_than" | "More_than";
}, {
    value: string | number | boolean;
    path: string;
    condition: "Equal" | "Not_equal" | "Less_than" | "More_than";
}>;
export type VisibilityParameterFormDTO = z.infer<typeof VisibilityParameterFormSchema>;
export declare const VisibilityParameterSchema: z.ZodObject<{
    path: z.ZodString;
    value: z.ZodUnion<[z.ZodNumber, z.ZodBoolean]>;
    condition: z.ZodEnum<["Equal", "Not_equal", "Less_than", "More_than"]>;
}, "strip", z.ZodTypeAny, {
    value: number | boolean;
    path: string;
    condition: "Equal" | "Not_equal" | "Less_than" | "More_than";
}, {
    value: number | boolean;
    path: string;
    condition: "Equal" | "Not_equal" | "Less_than" | "More_than";
}>;
export type VisibilityParameterDTO = z.infer<typeof VisibilityParameterSchema>;
