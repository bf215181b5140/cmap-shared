import { z } from 'zod';
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
export declare const RegisterWithKeyFormSchema: z.ZodObject<z.objectUtil.extendShape<{
    username: z.ZodString;
    password: z.ZodString;
    passwordRepeat: z.ZodString;
    fingerprint: z.ZodString;
}, {
    registrationKey: z.ZodString;
}>, "strip", z.ZodTypeAny, {
    username: string;
    password: string;
    passwordRepeat: string;
    fingerprint: string;
    registrationKey: string;
}, {
    username: string;
    password: string;
    passwordRepeat: string;
    fingerprint: string;
    registrationKey: string;
}>;
export type RegisterWithKeyFormDTO = z.infer<typeof RegisterWithKeyFormSchema>;
