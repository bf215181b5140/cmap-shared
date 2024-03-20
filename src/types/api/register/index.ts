import { z } from 'zod';

export const RegisterFormSchema = z.object({
    username: z.string().regex(/^[a-zA-Z0-9]+$/).min(3).max(16),
    passwordOne: z.string().min(6).max(32),
    passwordTwo: z.string().min(6).max(32),
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
    password: z.string().min(6).max(32),
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
