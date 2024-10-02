import { z } from 'zod';
import { NotificationType } from '../../enums/notification';
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
export declare class ApiError extends Error implements ApiResponseDTO {
    type: NotificationType;
    name: string;
    constructor(type: NotificationType, message: string);
}
