import { z } from 'zod';
export declare const RegisterSchema: z.ZodEffects<z.ZodObject<{
    username: z.ZodString;
    passwordOne: z.ZodString;
    passwordTwo: z.ZodString;
    fingerprint: z.ZodString;
}, "strip", z.ZodTypeAny, {
    username: string;
    passwordOne: string;
    passwordTwo: string;
    fingerprint: string;
}, {
    username: string;
    passwordOne: string;
    passwordTwo: string;
    fingerprint: string;
}>, {
    username: string;
    passwordOne: string;
    passwordTwo: string;
    fingerprint: string;
}, {
    username: string;
    passwordOne: string;
    passwordTwo: string;
    fingerprint: string;
}>;
export declare const RegisterWithKeySchema: z.ZodObject<{
    username: z.ZodString;
    passwordOne: z.ZodString;
    passwordTwo: z.ZodString;
    fingerprint: z.ZodString;
    registrationKey: z.ZodString;
}, "strip", z.ZodTypeAny, {
    username: string;
    passwordOne: string;
    passwordTwo: string;
    fingerprint: string;
    registrationKey: string;
}, {
    username: string;
    passwordOne: string;
    passwordTwo: string;
    fingerprint: string;
    registrationKey: string;
}>;
export type RegisterFormDTO = z.infer<typeof RegisterWithKeySchema>;
