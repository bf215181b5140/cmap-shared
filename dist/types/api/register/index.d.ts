import { z } from 'zod';
export declare const RegisterFormSchema: z.ZodEffects<z.ZodObject<{
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
export declare const RegisterSchema: z.ZodObject<Omit<{
    username: z.ZodString;
    passwordOne: z.ZodString;
    passwordTwo: z.ZodString;
    fingerprint: z.ZodString;
    password: z.ZodString;
}, "passwordOne" | "passwordTwo">, "strip", z.ZodTypeAny, {
    password: string;
    username: string;
    fingerprint: string;
}, {
    password: string;
    username: string;
    fingerprint: string;
}>;
export declare const RegisterKeySchema: z.ZodObject<{
    registrationKey: z.ZodString;
}, "strip", z.ZodTypeAny, {
    registrationKey: string;
}, {
    registrationKey: string;
}>;
export type RegisterFormDTO = z.infer<typeof RegisterFormSchema> & {
    registrationKey?: string;
};
export type RegisterDTO = z.infer<typeof RegisterSchema> & {
    registrationKey?: string;
};
