import { z } from 'zod';
export declare const IdSchema: z.ZodString;
export declare const usernameSchema: z.ZodString;
export declare const passwordSchema: z.ZodString;
export declare const interactionKeySchema: z.ZodString;
export declare const BaseIdSchema: z.ZodObject<{
    id: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
}, {
    id: string;
}>;
export type BaseIdDTO = z.infer<typeof BaseIdSchema>;
export declare const BaseNullableIdSchema: z.ZodObject<{
    id: z.ZodNullable<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    id: string | null;
}, {
    id: string | null;
}>;
export type BaseNullableIdDTO = z.infer<typeof BaseNullableIdSchema>;
export declare const BaseFormSchema: z.ZodObject<{
    id: z.ZodNullable<z.ZodString>;
    parentId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string | null;
    parentId: string;
}, {
    id: string | null;
    parentId: string;
}>;
export type BaseFormDTO = z.infer<typeof BaseFormSchema>;
export declare const OrderSchema: z.ZodArray<z.ZodObject<z.objectUtil.extendShape<{
    id: z.ZodString;
}, {
    order: z.ZodNumber;
}>, "strip", z.ZodTypeAny, {
    id: string;
    order: number;
}, {
    id: string;
    order: number;
}>, "many">;
export type OrderDTO = z.infer<typeof OrderSchema>;
