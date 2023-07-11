import { z } from 'zod';
import { ButtonImageOrientation, ButtonType, ClientTier, ContentBoxWidth, ParameterRole, ValueType } from '../index';
export declare const registrationSchema: z.ZodEffects<z.ZodObject<{
    username: z.ZodString;
    passwordOne: z.ZodString;
    passwordTwo: z.ZodString;
    fingerprint: z.ZodString;
}, "strip", z.ZodTypeAny, {
    username?: string;
    passwordOne?: string;
    passwordTwo?: string;
    fingerprint?: string;
}, {
    username?: string;
    passwordOne?: string;
    passwordTwo?: string;
    fingerprint?: string;
}>, {
    username?: string;
    passwordOne?: string;
    passwordTwo?: string;
    fingerprint?: string;
}, {
    username?: string;
    passwordOne?: string;
    passwordTwo?: string;
    fingerprint?: string;
}>;
export declare const profileSchema: z.ZodObject<{
    displayName: z.ZodString;
    bio: z.ZodString;
    hidden: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    displayName?: string;
    bio?: string;
    hidden?: boolean;
}, {
    displayName?: string;
    bio?: string;
    hidden?: boolean;
}>;
export declare const avatarSchema: z.ZodObject<{
    id: z.ZodNullable<z.ZodString>;
    vrcId: z.ZodString;
    label: z.ZodString;
    default: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    id?: string;
    vrcId?: string;
    label?: string;
    default?: boolean;
}, {
    id?: string;
    vrcId?: string;
    label?: string;
    default?: boolean;
}>;
export declare const layoutSchema: z.ZodObject<{
    id: z.ZodNullable<z.ZodString>;
    label: z.ZodString;
    order: z.ZodNumber;
    width: z.ZodNativeEnum<typeof ContentBoxWidth>;
    parentId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id?: string;
    label?: string;
    order?: number;
    width?: ContentBoxWidth;
    parentId?: string;
}, {
    id?: string;
    label?: string;
    order?: number;
    width?: ContentBoxWidth;
    parentId?: string;
}>;
export declare const buttonSchema: z.ZodEffects<z.ZodObject<{
    id: z.ZodNullable<z.ZodString>;
    label: z.ZodNullable<z.ZodString>;
    path: z.ZodString;
    value: z.ZodString;
    valueAlt: z.ZodNullable<z.ZodString>;
    valueType: z.ZodNativeEnum<typeof ValueType>;
    buttonType: z.ZodNativeEnum<typeof ButtonType>;
    imageOrientation: z.ZodNativeEnum<typeof ButtonImageOrientation>;
    order: z.ZodNumber;
    controlParameterId: z.ZodNullable<z.ZodString>;
    useCost: z.ZodOptional<z.ZodNumber>;
    parentId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id?: string;
    label?: string;
    path?: string;
    value?: string;
    valueAlt?: string;
    valueType?: ValueType;
    buttonType?: ButtonType;
    imageOrientation?: ButtonImageOrientation;
    order?: number;
    controlParameterId?: string;
    useCost?: number;
    parentId?: string;
}, {
    id?: string;
    label?: string;
    path?: string;
    value?: string;
    valueAlt?: string;
    valueType?: ValueType;
    buttonType?: ButtonType;
    imageOrientation?: ButtonImageOrientation;
    order?: number;
    controlParameterId?: string;
    useCost?: number;
    parentId?: string;
}>, {
    id?: string;
    label?: string;
    path?: string;
    value?: string;
    valueAlt?: string;
    valueType?: ValueType;
    buttonType?: ButtonType;
    imageOrientation?: ButtonImageOrientation;
    order?: number;
    controlParameterId?: string;
    useCost?: number;
    parentId?: string;
}, {
    id?: string;
    label?: string;
    path?: string;
    value?: string;
    valueAlt?: string;
    valueType?: ValueType;
    buttonType?: ButtonType;
    imageOrientation?: ButtonImageOrientation;
    order?: number;
    controlParameterId?: string;
    useCost?: number;
    parentId?: string;
}>;
export declare const parametersSchema: z.ZodObject<{
    avatarId: z.ZodString;
    parameters: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodNullable<z.ZodString>;
        label: z.ZodString;
        path: z.ZodString;
        valueType: z.ZodNativeEnum<typeof ValueType>;
    }, "strip", z.ZodTypeAny, {
        id?: string;
        label?: string;
        path?: string;
        valueType?: ValueType;
    }, {
        id?: string;
        label?: string;
        path?: string;
        valueType?: ValueType;
    }>, "many">>;
}, "strip", z.ZodTypeAny, {
    avatarId?: string;
    parameters?: {
        id?: string;
        label?: string;
        path?: string;
        valueType?: ValueType;
    }[];
}, {
    avatarId?: string;
    parameters?: {
        id?: string;
        label?: string;
        path?: string;
        valueType?: ValueType;
    }[];
}>;
export declare const controlParametersSchema: z.ZodEffects<z.ZodObject<{
    avatarId: z.ZodString;
    controlParameters: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodNullable<z.ZodString>;
        label: z.ZodString;
        role: z.ZodNativeEnum<typeof ParameterRole>;
        path: z.ZodString;
        valuePrimary: z.ZodString;
        valueSecondary: z.ZodNullable<z.ZodString>;
        valueType: z.ZodNativeEnum<typeof ValueType>;
    }, "strip", z.ZodTypeAny, {
        id?: string;
        label?: string;
        role?: ParameterRole;
        path?: string;
        valuePrimary?: string;
        valueSecondary?: string;
        valueType?: ValueType;
    }, {
        id?: string;
        label?: string;
        role?: ParameterRole;
        path?: string;
        valuePrimary?: string;
        valueSecondary?: string;
        valueType?: ValueType;
    }>, "many">>;
}, "strip", z.ZodTypeAny, {
    avatarId?: string;
    controlParameters?: {
        id?: string;
        label?: string;
        role?: ParameterRole;
        path?: string;
        valuePrimary?: string;
        valueSecondary?: string;
        valueType?: ValueType;
    }[];
}, {
    avatarId?: string;
    controlParameters?: {
        id?: string;
        label?: string;
        role?: ParameterRole;
        path?: string;
        valuePrimary?: string;
        valueSecondary?: string;
        valueType?: ValueType;
    }[];
}>, {
    avatarId?: string;
    controlParameters?: {
        id?: string;
        label?: string;
        role?: ParameterRole;
        path?: string;
        valuePrimary?: string;
        valueSecondary?: string;
        valueType?: ValueType;
    }[];
}, {
    avatarId?: string;
    controlParameters?: {
        id?: string;
        label?: string;
        role?: ParameterRole;
        path?: string;
        valuePrimary?: string;
        valueSecondary?: string;
        valueType?: ValueType;
    }[];
}>;
export declare const generateTierKeySchema: z.ZodObject<{
    tier: z.ZodNativeEnum<typeof ClientTier>;
}, "strip", z.ZodTypeAny, {
    tier?: ClientTier;
}, {
    tier?: ClientTier;
}>;
export declare const activateTierKeySchema: z.ZodObject<{
    key: z.ZodString;
}, "strip", z.ZodTypeAny, {
    key?: string;
}, {
    key?: string;
}>;
