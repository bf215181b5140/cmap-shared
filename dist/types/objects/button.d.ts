import { z } from 'zod';
import { ButtonImageOrientation, ButtonType } from '../enums/button';
export declare const ButtonSchema: z.ZodObject<z.objectUtil.extendShape<{
    id: z.ZodString;
}, {
    label: z.ZodString;
    path: z.ZodString;
    value: z.ZodString;
    valueAlt: z.ZodString;
    buttonType: z.ZodNativeEnum<typeof ButtonType>;
    imageOrientation: z.ZodNativeEnum<typeof ButtonImageOrientation>;
    order: z.ZodNumber;
    useCost: z.ZodNullable<z.ZodNumber>;
    image: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        id: z.ZodString;
        fileName: z.ZodString;
        urlPath: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        fileName: string;
        urlPath: string;
    }, {
        id: string;
        fileName: string;
        urlPath: string;
    }>>>;
    callbackId: z.ZodNullable<z.ZodString>;
    interactionKeyId: z.ZodNullable<z.ZodString>;
}>, "strip", z.ZodTypeAny, {
    id: string;
    imageOrientation: ButtonImageOrientation;
    order: number;
    value: string;
    label: string;
    path: string;
    useCost: number | null;
    valueAlt: string;
    buttonType: ButtonType;
    callbackId: string | null;
    interactionKeyId: string | null;
    image?: {
        id: string;
        fileName: string;
        urlPath: string;
    } | null | undefined;
}, {
    id: string;
    imageOrientation: ButtonImageOrientation;
    order: number;
    value: string;
    label: string;
    path: string;
    useCost: number | null;
    valueAlt: string;
    buttonType: ButtonType;
    callbackId: string | null;
    interactionKeyId: string | null;
    image?: {
        id: string;
        fileName: string;
        urlPath: string;
    } | null | undefined;
}>;
export type ButtonDTO = z.infer<typeof ButtonSchema>;
