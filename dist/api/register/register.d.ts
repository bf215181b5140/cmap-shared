import { z } from 'zod';
export declare const RegisterInfoSchema: z.ZodObject<{
    available: z.ZodBoolean;
    keyRequired: z.ZodBoolean;
    message: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    available: boolean;
    keyRequired: boolean;
    message?: string | undefined;
}, {
    available: boolean;
    keyRequired: boolean;
    message?: string | undefined;
}>;
export type RegisterInfoDTO = z.infer<typeof RegisterInfoSchema>;
export declare const RegisterFormSchema: z.ZodEffects<z.ZodObject<{
    username: z.ZodString;
    password: z.ZodString;
    passwordRepeat: z.ZodString;
    fingerprint: z.ZodString;
}, "strip", z.ZodTypeAny, {
    username: string;
    password: string;
    passwordRepeat: string;
    fingerprint: string;
}, {
    username: string;
    password: string;
    passwordRepeat: string;
    fingerprint: string;
}>, {
    username: string;
    password: string;
    passwordRepeat: string;
    fingerprint: string;
}, {
    username: string;
    password: string;
    passwordRepeat: string;
    fingerprint: string;
}>;
export type RegisterFormDTO = z.infer<typeof RegisterFormSchema>;
export declare const RegisterWithKeyFormSchema: z.ZodIntersection<z.ZodEffects<z.ZodObject<{
    username: z.ZodString;
    password: z.ZodString;
    passwordRepeat: z.ZodString;
    fingerprint: z.ZodString;
}, "strip", z.ZodTypeAny, {
    username: string;
    password: string;
    passwordRepeat: string;
    fingerprint: string;
}, {
    username: string;
    password: string;
    passwordRepeat: string;
    fingerprint: string;
}>, {
    username: string;
    password: string;
    passwordRepeat: string;
    fingerprint: string;
}, {
    username: string;
    password: string;
    passwordRepeat: string;
    fingerprint: string;
}>, z.ZodObject<{
    inviteKey: z.ZodString;
}, "strip", z.ZodTypeAny, {
    inviteKey: string;
}, {
    inviteKey: string;
}>>;
export type RegisterWithKeyFormDTO = z.infer<typeof RegisterWithKeyFormSchema>;
