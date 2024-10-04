import { z } from 'zod';
export declare const ButtonSchema: z.ZodObject<z.objectUtil.extendShape<{
    id: z.ZodString;
}, {
    label: z.ZodString;
    path: z.ZodString;
    value: z.ZodString;
    valueAlt: z.ZodString;
    buttonType: z.ZodEnum<["Button", "Slider", "Toggle"]>;
    imageOrientation: z.ZodEnum<["Horizontal", "Square", "Vertical"]>;
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
    callbackParameters: z.ZodOptional<z.ZodArray<z.ZodObject<z.objectUtil.extendShape<{
        id: z.ZodString;
    }, {
        label: z.ZodString;
        path: z.ZodString;
        value: z.ZodString;
        seconds: z.ZodNumber;
    }>, "strip", z.ZodTypeAny, {
        id: string;
        value: string;
        label: string;
        path: string;
        seconds: number;
    }, {
        id: string;
        value: string;
        label: string;
        path: string;
        seconds: number;
    }>, "many">>;
    visibilityParameters: z.ZodOptional<z.ZodArray<z.ZodObject<z.objectUtil.extendShape<{
        id: z.ZodString;
    }, {
        label: z.ZodString;
        path: z.ZodString;
        value: z.ZodString;
        seconds: z.ZodNumber;
    }>, "strip", z.ZodTypeAny, {
        id: string;
        value: string;
        label: string;
        path: string;
        seconds: number;
    }, {
        id: string;
        value: string;
        label: string;
        path: string;
        seconds: number;
    }>, "many">>;
    interactionKeyId: z.ZodNullable<z.ZodString>;
}>, "strip", z.ZodTypeAny, {
    id: string;
    imageOrientation: "Horizontal" | "Square" | "Vertical";
    order: number;
    value: string;
    label: string;
    path: string;
    useCost: number | null;
    valueAlt: string;
    buttonType: "Button" | "Slider" | "Toggle";
    interactionKeyId: string | null;
    image?: {
        id: string;
        fileName: string;
        urlPath: string;
    } | null | undefined;
    callbackParameters?: {
        id: string;
        value: string;
        label: string;
        path: string;
        seconds: number;
    }[] | undefined;
    visibilityParameters?: {
        id: string;
        value: string;
        label: string;
        path: string;
        seconds: number;
    }[] | undefined;
}, {
    id: string;
    imageOrientation: "Horizontal" | "Square" | "Vertical";
    order: number;
    value: string;
    label: string;
    path: string;
    useCost: number | null;
    valueAlt: string;
    buttonType: "Button" | "Slider" | "Toggle";
    interactionKeyId: string | null;
    image?: {
        id: string;
        fileName: string;
        urlPath: string;
    } | null | undefined;
    callbackParameters?: {
        id: string;
        value: string;
        label: string;
        path: string;
        seconds: number;
    }[] | undefined;
    visibilityParameters?: {
        id: string;
        value: string;
        label: string;
        path: string;
        seconds: number;
    }[] | undefined;
}>;
export type ButtonDTO = z.infer<typeof ButtonSchema>;
