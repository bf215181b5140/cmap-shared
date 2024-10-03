import { z } from 'zod';
export declare const ApiResponseSchema: z.ZodObject<{
    type: z.ZodEnum<["info", "success", "warning", "error"]>;
    id: z.ZodString;
    message: z.ZodString;
}, "strip", z.ZodTypeAny, {
    type: "error" | "success" | "info" | "warning";
    message: string;
    id: string;
}, {
    type: "error" | "success" | "info" | "warning";
    message: string;
    id: string;
}>;
export type ApiResponseDTO = z.infer<typeof ApiResponseSchema>;
