import { z } from 'zod';
export declare const ApiResponseSchema: z.ZodObject<{
    type: z.ZodEnum<["info", "success", "warning", "error"]>;
    message: z.ZodString;
}, "strip", z.ZodTypeAny, {
    type: "error" | "success" | "info" | "warning";
    message: string;
}, {
    type: "error" | "success" | "info" | "warning";
    message: string;
}>;
export type ApiResponseDTO = z.infer<typeof ApiResponseSchema>;
