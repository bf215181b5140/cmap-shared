import { z } from 'zod';
import { passwordSchema, usernameSchema } from '../../shared';

export const RegisterInfoSchema = z.object({
    available: z.boolean(),
    keyRequired: z.boolean(),
    message: z.string().optional(),
});

export type RegisterInfoDTO = z.infer<typeof RegisterInfoSchema>;

export const RegisterFormSchema = z.object({
    username: usernameSchema,
    password: passwordSchema,
    passwordRepeat: passwordSchema,
    fingerprint: z.string().length(64),
}).superRefine((val, ctx) => {
    if (val.password !== val.passwordRepeat) {
        ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: 'Passwords don\'t match',
            path: ['password']
        });
        ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: 'Passwords don\'t match',
            path: ['passwordRepeat']
        });
    }
});

export type RegisterFormDTO = z.infer<typeof RegisterFormSchema>;

export const RegisterWithKeyFormSchema = RegisterFormSchema.and(z.object({
    inviteKey: z.string().max(32),
}));

export type RegisterWithKeyFormDTO = z.infer<typeof RegisterWithKeyFormSchema>;
