import { z } from 'zod';
import { ButtonImageOrientation, ButtonType } from '../enums/button';
export declare const ButtonFormSchema: z.ZodEffects<z.ZodObject<z.objectUtil.extendShape<{
    id: z.ZodNullable<z.ZodString>;
    parentId: z.ZodString;
}, {
    label: z.ZodString;
    path: z.ZodString;
    value: z.ZodEffects<z.ZodString, string, string>;
    valueAlt: z.ZodUnion<[z.ZodLiteral<"">, z.ZodEffects<z.ZodString, string, string>]>;
    buttonType: z.ZodNativeEnum<typeof ButtonType>;
    imageOrientation: z.ZodNativeEnum<typeof ButtonImageOrientation>;
    order: z.ZodNumber;
    useCost: z.ZodNullable<z.ZodNumber>;
    callbackId: z.ZodNullable<z.ZodString>;
    interactionKeyId: z.ZodNullable<z.ZodString>;
}>, "strip", z.ZodTypeAny, {
    id: string | null;
    imageOrientation: ButtonImageOrientation;
    order: number;
    value: string;
    label: string;
    path: string;
    parentId: string;
    useCost: number | null;
    valueAlt: string;
    buttonType: ButtonType;
    callbackId: string | null;
    interactionKeyId: string | null;
}, {
    id: string | null;
    imageOrientation: ButtonImageOrientation;
    order: number;
    value: string;
    label: string;
    path: string;
    parentId: string;
    useCost: number | null;
    valueAlt: string;
    buttonType: ButtonType;
    callbackId: string | null;
    interactionKeyId: string | null;
}>, {
    id: string | null;
    imageOrientation: ButtonImageOrientation;
    order: number;
    value: string;
    label: string;
    path: string;
    parentId: string;
    useCost: number | null;
    valueAlt: string;
    buttonType: ButtonType;
    callbackId: string | null;
    interactionKeyId: string | null;
}, {
    id: string | null;
    imageOrientation: ButtonImageOrientation;
    order: number;
    value: string;
    label: string;
    path: string;
    parentId: string;
    useCost: number | null;
    valueAlt: string;
    buttonType: ButtonType;
    callbackId: string | null;
    interactionKeyId: string | null;
}>;
export type ButtonFormDTO = z.infer<typeof ButtonFormSchema>;