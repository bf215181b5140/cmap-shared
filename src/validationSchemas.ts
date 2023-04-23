import { z } from 'zod';
import { ButtonType, ValueType } from './index';

const activateSchema = z.object({
    username: z.string().max(50),
    passwordOne: z.string().max(50),
    passwordTwo: z.string().max(50),
    activationKey: z.string().max(50)
});

const profileSchema = z.object({
    displayName: z.string().min(3).max(50),
    bio: z.string().max(500),
    hidden: z.boolean()
});

const avatarSchema = z.object({
    id: z.string().nullable(),
    vrcId: z.string(),
    label: z.string().min(3).max(50),
    default: z.boolean()
});

const layoutSchema = z.object({
    id: z.string().nullable(),
    label: z.string().min(3).max(50),
    order: z.number(),
    parentId: z.string()
});

const buttonSchema = z.object({
    id: z.string().nullable(),
    label: z.string().max(20).nullable(),
    path: z.string().max(100),
    value: z.string().max(5),
    valueAlt: z.string().max(5).nullable(),
    valueType: z.nativeEnum(ValueType),
    buttonType: z.nativeEnum(ButtonType),
    order: z.number(),
    parentId: z.string()
}).refine((val) => {
        if (val.buttonType === ButtonType.Slider && val.valueType !== ValueType.Float) return false;
    },
    {message: 'Slider can only be float type', path: ['valueType']}
).refine((val) => {
        if (val.valueType === ValueType.Boolean && (val.value !== 'true' && val.value !== 'false')) return false;
    },
    {message: 'Bad input for boolean (true or false)', path: ['value']}
).refine((val) => {
        if ((val.buttonType === ButtonType.Slider || val.buttonType === ButtonType.Toggle) && (!val.valueAlt || val.valueAlt === '')) return false;
    },
    {message: 'Secondary value required for slider or toggle button', path: ['valueAlt']}
);

export { profileSchema, avatarSchema, layoutSchema, buttonSchema };
