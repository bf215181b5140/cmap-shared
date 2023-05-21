import { z } from 'zod';
import { ButtonImageOrientation, ButtonType, ContentBoxWidth, ParameterRole, ValueType } from '../index';

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
    width: z.nativeEnum(ContentBoxWidth),
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
    imageOrientation: z.nativeEnum(ButtonImageOrientation),
    order: z.number(),
    controlParameterId: z.string().max(32).nullable(),
    parentId: z.string().max(32)
}).superRefine((val, ctx) => {
    // Check valueType
    if (val.buttonType === ButtonType.Slider && val.valueType === ValueType.Bool) {
        ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: 'Slider can\'t be of type Bool',
            path: ['valueType']
        });
    }
    // Check value requirement
    if ((val.buttonType === ButtonType.Slider || val.buttonType === ButtonType.Toggle) && (!val.valueAlt || val.valueAlt === '')) {
        ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: 'Secondary value required for slider or toggle button',
            path: ['valueAlt']
        });
    }
    // Check value type
    switch (val.valueType) {
        case ValueType.Bool:
            if ((val.value !== 'true' && val.value !== 'false')) {
                ctx.addIssue({
                    code: z.ZodIssueCode.custom,
                    message: 'Invalid Bool (true or false)',
                    path: [`value`]
                });
            }
            if ((val.valueAlt !== 'true' && val.valueAlt !== 'false')) {
                ctx.addIssue({
                    code: z.ZodIssueCode.custom,
                    message: 'Invalid Bool (true or false)',
                    path: [`valueAlt`]
                });
            }
            break;
        case ValueType.Float:
            const valueNumber = Number(val.value);
            if (Number.isNaN(valueNumber) || valueNumber < 0 || valueNumber > 1) {
                ctx.addIssue({
                    code: z.ZodIssueCode.custom,
                    message: 'Invalid Float number',
                    path: [`value`]
                });
            }
            const valueAltNumber = Number(val.valueAlt);
            if (Number.isNaN(valueAltNumber) || valueAltNumber < 0 || valueAltNumber > 1) {
                ctx.addIssue({
                    code: z.ZodIssueCode.custom,
                    message: 'Invalid Float number',
                    path: [`valueAlt`]
                });
            }
            break;
        case ValueType.Int:
            if (!Number.isInteger(Number(val.value))) {
                ctx.addIssue({
                    code: z.ZodIssueCode.custom,
                    message: 'Invalid Int number',
                    path: [`value`]
                });
            }
            if (!Number.isInteger(Number(val.valueAlt))) {
                ctx.addIssue({
                    code: z.ZodIssueCode.custom,
                    message: 'Invalid Int number',
                    path: [`valueAlt`]
                });
            }
            break;
    }
});

export const parametersSchema = z.object({
    avatarId: z.string().min(1).max(32),
    parameters: z.array(z.object({
        id: z.string().max(32).nullable(),
        label: z.string().min(3).max(16),
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
        if (val.controlParameters.filter(cp => cp.role === ParameterRole.HP)?.length || 0 > 1) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: 'Only one parameter with HP role is allowed',
                path: [`controlParameters`]
            });
        }
        if (val.controlParameters.filter(cp => cp.role === ParameterRole.Exp)?.length || 0 > 1) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: 'Only one parameter with Exp role is allowed',
                path: [`controlParameters`]
            });
        }
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
                switch (val.controlParameters[i].valueType) {
                    case ValueType.Bool:
                        if (val.controlParameters[i].valuePrimary !== 'true' && val.controlParameters[i].valuePrimary !== 'false') {
                            ctx.addIssue({
                                code: z.ZodIssueCode.custom,
                                message: 'Invalid Bool (true or false)',
                                path: [`controlParameters.${i}.valuePrimary`]
                            });
                        }
                        break;
                    case ValueType.Int:
                        if (!Number.isInteger(Number(val.controlParameters[i].valuePrimary))) {
                            ctx.addIssue({
                                code: z.ZodIssueCode.custom,
                                message: 'Invalid Int number',
                                path: [`controlParameters.${i}.valuePrimary`]
                            });
                        }
                        break;
                    case ValueType.Float:
                        const valuePrimaryNumber = Number(val.controlParameters[i].valuePrimary);
                        if (Number.isNaN(valuePrimaryNumber) || valuePrimaryNumber < 0 || valuePrimaryNumber > 1) {
                            ctx.addIssue({
                                code: z.ZodIssueCode.custom,
                                message: 'Invalid Float number',
                                path: [`controlParameters.${i}.valuePrimary`]
                            });
                        }
                        break;
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
                        message: 'Invalid Int number',
                        path: [`controlParameters.${i}.valuePrimary`]
                    });
                }
                if (!Number.isInteger(Number(val.controlParameters[i].valueSecondary))) {
                    ctx.addIssue({
                        code: z.ZodIssueCode.custom,
                        message: 'Invalid Int number',
                        path: [`controlParameters.${i}.valueSecondary`]
                    });
                }
            }
        }
    }
});
