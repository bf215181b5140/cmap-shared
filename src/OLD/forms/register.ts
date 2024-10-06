import { z } from 'zod';
import { passwordSchema, usernameSchema } from '../../shared';

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
