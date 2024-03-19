import { z } from 'zod';
import { ButtonImageOrientation, ButtonType, ClientTier, ContentBoxWidth, ParameterRole, ValueType } from '../index';
export declare const profileSchema: z.ZodObject<{
    displayName: z.ZodString;
    bio: z.ZodString;
    hidden: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    hidden: boolean;
    displayName: string;
    bio: string;
}, {
    hidden: boolean;
    displayName: string;
    bio: string;
}>;
export declare const avatarSchema: z.ZodObject<{
    id: z.ZodNullable<z.ZodString>;
    vrcId: z.ZodString;
    label: z.ZodString;
    default: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    default: boolean;
    id: string | null;
    label: string;
    vrcId: string;
}, {
    default: boolean;
    id: string | null;
    label: string;
    vrcId: string;
}>;
export declare const layoutSchema: z.ZodObject<{
    id: z.ZodNullable<z.ZodString>;
    label: z.ZodString;
    order: z.ZodNumber;
    width: z.ZodNativeEnum<typeof ContentBoxWidth>;
    parentId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string | null;
    width: ContentBoxWidth;
    order: number;
    label: string;
    parentId: string;
}, {
    id: string | null;
    width: ContentBoxWidth;
    order: number;
    label: string;
    parentId: string;
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
    id: string | null;
    imageOrientation: ButtonImageOrientation;
    order: number;
    value: string;
    label: string | null;
    path: string;
    valueType: ValueType;
    parentId: string;
    valueAlt: string | null;
    buttonType: ButtonType;
    controlParameterId: string | null;
    useCost?: number | undefined;
}, {
    id: string | null;
    imageOrientation: ButtonImageOrientation;
    order: number;
    value: string;
    label: string | null;
    path: string;
    valueType: ValueType;
    parentId: string;
    valueAlt: string | null;
    buttonType: ButtonType;
    controlParameterId: string | null;
    useCost?: number | undefined;
}>, {
    id: string | null;
    imageOrientation: ButtonImageOrientation;
    order: number;
    value: string;
    label: string | null;
    path: string;
    valueType: ValueType;
    parentId: string;
    valueAlt: string | null;
    buttonType: ButtonType;
    controlParameterId: string | null;
    useCost?: number | undefined;
}, {
    id: string | null;
    imageOrientation: ButtonImageOrientation;
    order: number;
    value: string;
    label: string | null;
    path: string;
    valueType: ValueType;
    parentId: string;
    valueAlt: string | null;
    buttonType: ButtonType;
    controlParameterId: string | null;
    useCost?: number | undefined;
}>;
export declare const parametersSchema: z.ZodObject<{
    avatarId: z.ZodString;
    parameters: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodNullable<z.ZodString>;
        label: z.ZodString;
        path: z.ZodString;
        valueType: z.ZodNativeEnum<typeof ValueType>;
    }, "strip", z.ZodTypeAny, {
        id: string | null;
        label: string;
        path: string;
        valueType: ValueType;
    }, {
        id: string | null;
        label: string;
        path: string;
        valueType: ValueType;
    }>, "many">>;
}, "strip", z.ZodTypeAny, {
    avatarId: string;
    parameters?: {
        id: string | null;
        label: string;
        path: string;
        valueType: ValueType;
    }[] | undefined;
}, {
    avatarId: string;
    parameters?: {
        id: string | null;
        label: string;
        path: string;
        valueType: ValueType;
    }[] | undefined;
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
        id: string | null;
        label: string;
        path: string;
        role: ParameterRole;
        valueType: ValueType;
        valuePrimary: string;
        valueSecondary: string | null;
    }, {
        id: string | null;
        label: string;
        path: string;
        role: ParameterRole;
        valueType: ValueType;
        valuePrimary: string;
        valueSecondary: string | null;
    }>, "many">>;
}, "strip", z.ZodTypeAny, {
    avatarId: string;
    controlParameters?: {
        id: string | null;
        label: string;
        path: string;
        role: ParameterRole;
        valueType: ValueType;
        valuePrimary: string;
        valueSecondary: string | null;
    }[] | undefined;
}, {
    avatarId: string;
    controlParameters?: {
        id: string | null;
        label: string;
        path: string;
        role: ParameterRole;
        valueType: ValueType;
        valuePrimary: string;
        valueSecondary: string | null;
    }[] | undefined;
}>, {
    avatarId: string;
    controlParameters?: {
        id: string | null;
        label: string;
        path: string;
        role: ParameterRole;
        valueType: ValueType;
        valuePrimary: string;
        valueSecondary: string | null;
    }[] | undefined;
}, {
    avatarId: string;
    controlParameters?: {
        id: string | null;
        label: string;
        path: string;
        role: ParameterRole;
        valueType: ValueType;
        valuePrimary: string;
        valueSecondary: string | null;
    }[] | undefined;
}>;
export declare const generateTierKeySchema: z.ZodObject<{
    tier: z.ZodNativeEnum<typeof ClientTier>;
}, "strip", z.ZodTypeAny, {
    tier: ClientTier;
}, {
    tier: ClientTier;
}>;
export declare const activateTierKeySchema: z.ZodObject<{
    key: z.ZodString;
}, "strip", z.ZodTypeAny, {
    key: string;
}, {
    key: string;
}>;
