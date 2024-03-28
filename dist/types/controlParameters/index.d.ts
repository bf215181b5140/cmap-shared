import { z } from 'zod';
import { BaseParentDTO, ParameterValueType } from '../shared';
export declare enum ControlParameterRole {
    UseCost = "Use cost",
    HP = "HP",
    Callback = "Callback"
}
export declare const ControlParameterSchema: z.ZodObject<{
    id: z.ZodNullable<z.ZodString>;
    label: z.ZodString;
    role: z.ZodNativeEnum<typeof ControlParameterRole>;
    path: z.ZodString;
    valuePrimary: z.ZodString;
    valueSecondary: z.ZodNullable<z.ZodString>;
    valueType: z.ZodNativeEnum<typeof ParameterValueType>;
}, "strip", z.ZodTypeAny, {
    id?: string;
    label?: string;
    role?: ControlParameterRole;
    path?: string;
    valuePrimary?: string;
    valueSecondary?: string;
    valueType?: ParameterValueType;
}, {
    id?: string;
    label?: string;
    role?: ControlParameterRole;
    path?: string;
    valuePrimary?: string;
    valueSecondary?: string;
    valueType?: ParameterValueType;
}>;
export declare const ControlParametersFormSchema: z.ZodEffects<z.ZodObject<{
    avatarId: z.ZodString;
    controlParameters: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodNullable<z.ZodString>;
        label: z.ZodString;
        role: z.ZodNativeEnum<typeof ControlParameterRole>;
        path: z.ZodString;
        valuePrimary: z.ZodString;
        valueSecondary: z.ZodNullable<z.ZodString>;
        valueType: z.ZodNativeEnum<typeof ParameterValueType>;
    }, "strip", z.ZodTypeAny, {
        id?: string;
        label?: string;
        role?: ControlParameterRole;
        path?: string;
        valuePrimary?: string;
        valueSecondary?: string;
        valueType?: ParameterValueType;
    }, {
        id?: string;
        label?: string;
        role?: ControlParameterRole;
        path?: string;
        valuePrimary?: string;
        valueSecondary?: string;
        valueType?: ParameterValueType;
    }>, "many">>;
}, "strip", z.ZodTypeAny, {
    avatarId?: string;
    controlParameters?: {
        id?: string;
        label?: string;
        role?: ControlParameterRole;
        path?: string;
        valuePrimary?: string;
        valueSecondary?: string;
        valueType?: ParameterValueType;
    }[];
}, {
    avatarId?: string;
    controlParameters?: {
        id?: string;
        label?: string;
        role?: ControlParameterRole;
        path?: string;
        valuePrimary?: string;
        valueSecondary?: string;
        valueType?: ParameterValueType;
    }[];
}>, {
    avatarId?: string;
    controlParameters?: {
        id?: string;
        label?: string;
        role?: ControlParameterRole;
        path?: string;
        valuePrimary?: string;
        valueSecondary?: string;
        valueType?: ParameterValueType;
    }[];
}, {
    avatarId?: string;
    controlParameters?: {
        id?: string;
        label?: string;
        role?: ControlParameterRole;
        path?: string;
        valuePrimary?: string;
        valueSecondary?: string;
        valueType?: ParameterValueType;
    }[];
}>;
export type ControlParametersFormDTO = z.infer<typeof ControlParametersFormSchema>;
export interface ControlParameterDTO extends BaseParentDTO<ControlParameterDTO> {
    label: string;
    role: ControlParameterRole;
    path: string;
    valuePrimary: string;
    valueSecondary: string | null;
    valueType: ParameterValueType;
}
