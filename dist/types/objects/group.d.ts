import { z } from 'zod';
import { SegmentWidth } from '../../react/types';
export declare const GroupSchema: z.ZodObject<z.objectUtil.extendShape<{
    id: z.ZodString;
}, {
    label: z.ZodString;
    order: z.ZodNumber;
    width: z.ZodNativeEnum<typeof SegmentWidth>;
    interactionKeyId: z.ZodNullable<z.ZodString>;
    buttons: z.ZodOptional<z.ZodArray<z.ZodObject<z.objectUtil.extendShape<{
        id: z.ZodString;
    }, {
        label: z.ZodString;
        path: z.ZodString;
        value: z.ZodString;
        valueAlt: z.ZodString;
        buttonType: z.ZodNativeEnum<typeof import("../..").ButtonType>;
        imageOrientation: z.ZodNativeEnum<typeof import("../..").ButtonImageOrientation>;
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
        imageOrientation: import("../..").ButtonImageOrientation;
        order: number;
        value: string;
        label: string;
        path: string;
        useCost: number | null;
        valueAlt: string;
        buttonType: import("../..").ButtonType;
        callbackId: string | null;
        interactionKeyId: string | null;
        image?: {
            id: string;
            fileName: string;
            urlPath: string;
        } | null | undefined;
    }, {
        id: string;
        imageOrientation: import("../..").ButtonImageOrientation;
        order: number;
        value: string;
        label: string;
        path: string;
        useCost: number | null;
        valueAlt: string;
        buttonType: import("../..").ButtonType;
        callbackId: string | null;
        interactionKeyId: string | null;
        image?: {
            id: string;
            fileName: string;
            urlPath: string;
        } | null | undefined;
    }>, "many">>;
}>, "strip", z.ZodTypeAny, {
    id: string;
    width: SegmentWidth;
    order: number;
    label: string;
    interactionKeyId: string | null;
    buttons?: {
        id: string;
        imageOrientation: import("../..").ButtonImageOrientation;
        order: number;
        value: string;
        label: string;
        path: string;
        useCost: number | null;
        valueAlt: string;
        buttonType: import("../..").ButtonType;
        callbackId: string | null;
        interactionKeyId: string | null;
        image?: {
            id: string;
            fileName: string;
            urlPath: string;
        } | null | undefined;
    }[] | undefined;
}, {
    id: string;
    width: SegmentWidth;
    order: number;
    label: string;
    interactionKeyId: string | null;
    buttons?: {
        id: string;
        imageOrientation: import("../..").ButtonImageOrientation;
        order: number;
        value: string;
        label: string;
        path: string;
        useCost: number | null;
        valueAlt: string;
        buttonType: import("../..").ButtonType;
        callbackId: string | null;
        interactionKeyId: string | null;
        image?: {
            id: string;
            fileName: string;
            urlPath: string;
        } | null | undefined;
    }[] | undefined;
}>;
export type GroupDTO = z.infer<typeof GroupSchema>;
