import { z } from 'zod';
import { ButtonType, ParameterRole, ValueType } from '../index';

export const registrationSchema = z.object({
    username: z.string().min(3).max(16),
    passwordOne: z.string().min(6).max(32),
    passwordTwo: z.string().min(6).max(32),
    registrationKey: z.string().max(32)
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
    displayName: z.string().min(3).max(32),
    bio: z.string().max(1000),
    hidden: z.boolean()
});

export const avatarSchema = z.object({
    id: z.string().max(32).nullable(),
    vrcId: z.string().min(1, 'Avatar ID required').max(100),
    label: z.string().min(3).max(32),
    default: z.boolean()
});

export const layoutSchema = z.object({
    id: z.string().max(32).nullable(),
    label: z.string().max(32),
    order: z.number(),
    parentId: z.string().max(32)
});

export const buttonSchema = z.object({
    id: z.string().max(32).nullable(),
    label: z.string().max(32).nullable(),
    path: z.string().min(1, 'Path required').max(50),
    value: z.string().min(1, 'Value required').max(5),
    valueAlt: z.string().max(5).nullable(),
    valueType: z.nativeEnum(ValueType),
    buttonType: z.nativeEnum(ButtonType),
    order: z.number(),
    parentId: z.string().max(32)
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
            message: 'Bad input for Bool (true or false)',
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

export const parametersSchema = z.object({
    avatarId: z.string().min(1).max(32),
    parameters: z.array(z.object({
        id: z.string().max(32).nullable(),
        label: z.string().max(16),
        path: z.string().min(1, 'Path required').max(50),
        valueType: z.nativeEnum(ValueType),
    })).optional()
});

export const controlParametersSchema = z.object({
    avatarId: z.string().min(1).max(32),
    controlParameters: z.array(z.object({
        id: z.string().max(32).nullable(),
        label: z.string().min(3).max(16),
        role: z.nativeEnum(ParameterRole),
        path: z.string().min(1, 'Path required').max(50),
        valuePrimary: z.string().min(1, 'Value required').max(5),
        valueSecondary: z.string().min(1, 'Value required').max(5).nullable(),
        valueType: z.nativeEnum(ValueType),
    })).optional()
}).superRefine((val, ctx) => {
    if (val.controlParameters?.length) {
        for (let i = 0; i < val.controlParameters.length; i++) {
            if (val.controlParameters[i].role === ParameterRole.Callback) {
                if (!Number.isInteger(Number(val.controlParameters[i].valueSecondary))) {
                    ctx.addIssue({
                        code: z.ZodIssueCode.custom,
                        message: 'Invalid number',
                        path: [`controlParameters.${i}.valueSecondary`]
                    });
                } else if (Number(val.controlParameters[i].valueSecondary) > 15) {
                    ctx.addIssue({
                        code: z.ZodIssueCode.custom,
                        message: 'Max 15 seconds',
                        path: [`controlParameters.${i}.valueSecondary`]
                    });
                }
                if (val.controlParameters[i].valueType === ValueType.Bool && (val.controlParameters[i].valuePrimary !== 'true' && val.controlParameters[i].valuePrimary !== 'false')) {
                    ctx.addIssue({
                        code: z.ZodIssueCode.custom,
                        message: 'Bad input for Bool (true or false)',
                        path: [`controlParameters.${i}.valuePrimary`]
                    });
                }
                if (val.controlParameters[i].valueType === ValueType.Int && !Number.isInteger(Number(val.controlParameters[i].valuePrimary))) {
                    ctx.addIssue({
                        code: z.ZodIssueCode.custom,
                        message: 'Invalid number',
                        path: [`controlParameters.${i}.valuePrimary`]
                    });
                }
                if (val.controlParameters[i].valueType === ValueType.Float && Number.isNaN(Number(val.controlParameters[i].valuePrimary))) {
                    ctx.addIssue({
                        code: z.ZodIssueCode.custom,
                        message: 'Invalid number',
                        path: [`controlParameters.${i}.valuePrimary`]
                    });
                }
            } else {
                if (val.controlParameters[i].valueType !== ValueType.Int) {
                    ctx.addIssue({
                        code: z.ZodIssueCode.custom,
                        message: 'Exp and HP only support Int',
                        path: [`controlParameters.${i}.valueType`]
                    });
                }
                if (!Number.isInteger(Number(val.controlParameters[i].valuePrimary))) {
                    ctx.addIssue({
                        code: z.ZodIssueCode.custom,
                        message: 'Invalid number',
                        path: [`controlParameters.${i}.valuePrimary`]
                    });
                }
                if (!Number.isInteger(Number(val.controlParameters[i].valueSecondary))) {
                    ctx.addIssue({
                        code: z.ZodIssueCode.custom,
                        message: 'Invalid number',
                        path: [`controlParameters.${i}.valueSecondary`]
                    });
                }
            }
        }
    }
});
