import { z } from 'zod';
import { passwordSchema, usernameSchema } from '../shared';

export interface RegisterRequestDTO {
    fingerprint: string;
}

export interface RegisterInfoDTO {
    available: boolean;
    keyRequired: boolean;
}

export const RegisterFormSchema = z.object({
    username: usernameSchema,
    passwordOne: passwordSchema,
    passwordTwo: passwordSchema,
    fingerprint: z.string().length(64),
}).superRefine((val, ctx) => {
    if (val.passwordOne !== val.passwordTwo) {
        ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: 'Passwords don\'t match',
            path: ['passwordOne', 'passwordTwo']
        });
    }
});

export const RegisterSchema = RegisterFormSchema.innerType().extend({
    password: passwordSchema,
}).omit({
    passwordOne: true,
    passwordTwo: true,
});

export const RegisterKeySchema = z.object({
    registrationKey: z.string().max(32),
})

export type RegisterFormDTO = z.infer<typeof RegisterFormSchema> & {
    registrationKey?: string;
};

export type RegisterDTO = z.infer<typeof RegisterSchema> & {
    registrationKey?: string;
};
