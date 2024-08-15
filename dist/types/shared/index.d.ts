import { z } from 'zod';
export declare const IdSchema: z.ZodString;
export declare const usernameSchema: z.ZodString;
export declare const passwordSchema: z.ZodString;
export declare const vrcAvatarIdSchema: z.ZodString;
export declare const parameterPathSchema: z.ZodString;
export declare const parameterValueSchema: z.ZodEffects<z.ZodString, string, string>;
export declare const parameterValueObjectSchema: z.ZodUnion<[z.ZodNumber, z.ZodBoolean]>;
export declare const parameterValueOrAvatarSchema: z.ZodUnion<[z.ZodEffects<z.ZodString, string, string>, z.ZodString]>;
export declare const parameterValueObjectOrAvatarSchema: z.ZodUnion<[z.ZodUnion<[z.ZodNumber, z.ZodBoolean]>, z.ZodString]>;
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
