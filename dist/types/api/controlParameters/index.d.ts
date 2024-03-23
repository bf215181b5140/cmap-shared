import { z } from 'zod';
import { ParameterValueType } from '../../dto/shared';
import { ControlParameterRole } from '../../dto/controlParameter';
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
        id: string | null;
        label: string;
        path: string;
        role: ControlParameterRole;
        valueType: ParameterValueType;
        valuePrimary: string;
        valueSecondary: string | null;
    }, {
        id: string | null;
        label: string;
        path: string;
        role: ControlParameterRole;
        valueType: ParameterValueType;
        valuePrimary: string;
        valueSecondary: string | null;
    }>, "many">>;
}, "strip", z.ZodTypeAny, {
    avatarId: string;
    controlParameters?: {
        id: string | null;
        label: string;
        path: string;
        role: ControlParameterRole;
        valueType: ParameterValueType;
        valuePrimary: string;
        valueSecondary: string | null;
    }[] | undefined;
}, {
    avatarId: string;
    controlParameters?: {
        id: string | null;
        label: string;
        path: string;
        role: ControlParameterRole;
        valueType: ParameterValueType;
        valuePrimary: string;
        valueSecondary: string | null;
    }[] | undefined;
}>, {
    avatarId: string;
    controlParameters?: {
        id: string | null;
        label: string;
        path: string;
        role: ControlParameterRole;
        valueType: ParameterValueType;
        valuePrimary: string;
        valueSecondary: string | null;
    }[] | undefined;
}, {
    avatarId: string;
    controlParameters?: {
        id: string | null;
        label: string;
        path: string;
        role: ControlParameterRole;
        valueType: ParameterValueType;
        valuePrimary: string;
        valueSecondary: string | null;
    }[] | undefined;
}>;
export type ControlParametersFormDTO = z.infer<typeof ControlParametersFormSchema>;
