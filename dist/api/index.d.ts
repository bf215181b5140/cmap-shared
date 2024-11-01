import { z } from 'zod';
export declare const ApiResponseSchema: z.ZodObject<{
    type: z.ZodEnum<["Info", "Success", "Warning", "Error"]>;
    id: z.ZodString;
    message: z.ZodString;
}, "strip", z.ZodTypeAny, {
    type: "Info" | "Success" | "Warning" | "Error";
    message: string;
    id: string;
}, {
    type: "Info" | "Success" | "Warning" | "Error";
    message: string;
    id: string;
}>;
export type ApiResponseDTO = z.infer<typeof ApiResponseSchema>;
