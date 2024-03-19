import { z } from 'zod';

export const RegisterSchema = z.object({
    username: z.string().regex(/^[a-zA-Z0-9]+$/).min(3).max(16),
    passwordOne: z.string().min(6).max(32),
    passwordTwo: z.string().min(6).max(32),
    fingerprint: z.string().max(256),
}).superRefine((val, ctx) => {
    if (val.passwordOne !== val.passwordTwo) {
        ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: 'Passwords don\'t match',
            path: ['passwordOne', 'passwordTwo']
        });
    }
});

export const RegisterWithKeySchema = RegisterSchema.innerType().extend({
    registrationKey: z.string().max(16),
})

export type RegisterFormDTO = z.infer<typeof RegisterWithKeySchema>;
