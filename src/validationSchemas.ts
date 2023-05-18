import { z } from 'zod';
import { ButtonType, ValueType } from './index';

export const registrationSchema = z.object({
    username: z.string().max(50),
    passwordOne: z.string().max(50),
    passwordTwo: z.string().max(50),
    registrationKey: z.string().max(50)
}).superRefine((val, ctx) => {
    if (val.passwordOne !== val.passwordTwo) {
        ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: 'Passwords don\'t match',
            path: ['passwordOne', 'passwordTwo']
        });
    }
});

export const profileSchema = z.object({
    displayName: z.string().min(3).max(50),
    bio: z.string().max(500),
    hidden: z.boolean()
});

export const avatarSchema = z.object({
    id: z.string().nullable(),
    vrcId: z.string(),
    label: z.string().min(3).max(50),
    default: z.boolean()
});

export const layoutSchema = z.object({
    id: z.string().nullable(),
    label: z.string().min(3).max(50),
    order: z.number(),
    parentId: z.string()
});

export const buttonSchema = z.object({
    id: z.string().nullable(),
    label: z.string().max(20).nullable(),
    path: z.string().max(100),
    value: z.string().max(5),
    valueAlt: z.string().max(5).nullable(),
    valueType: z.nativeEnum(ValueType),
    buttonType: z.nativeEnum(ButtonType),
    order: z.number(),
    parentId: z.string()
}).superRefine((val, ctx) => {
    if (val.buttonType === ButtonType.Slider && val.valueType !== ValueType.Float) {
        ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: 'Slider can only be float type',
            path: ['valueType']
        });
    }
    if (val.valueType === ValueType.Bool && (val.value !== 'true' && val.value !== 'false')) {
        ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: 'Bad input for boolean (true or false)',
            path: ['value']
        });
    }
    if ((val.buttonType === ButtonType.Slider || val.buttonType === ButtonType.Toggle) && (!val.valueAlt || val.valueAlt === '')) {
        ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: 'Secondary value required for slider or toggle button',
            path: ['valueAlt']
        });
    }
});
