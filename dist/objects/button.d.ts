import { z } from 'zod';
export declare const ButtonSchema: z.ZodObject<{
    id: z.ZodString;
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
    callbackParameters: z.ZodArray<z.ZodObject<{
        path: z.ZodString;
        value: z.ZodEffects<z.ZodString, string, string>;
        seconds: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        value: string;
        path: string;
        seconds: number;
    }, {
        value: string;
        path: string;
        seconds: number;
    }>, "many">;
    visibilityParameters: z.ZodArray<z.ZodObject<{
        path: z.ZodString;
        value: z.ZodEffects<z.ZodString, string, string>;
        condition: z.ZodEnum<["equal", "not_equal", "less_than", "more_than"]>;
    }, "strip", z.ZodTypeAny, {
        value: string;
        path: string;
        condition: "equal" | "not_equal" | "less_than" | "more_than";
    }, {
        value: string;
        path: string;
        condition: "equal" | "not_equal" | "less_than" | "more_than";
    }>, "many">;
    interactionKeyId: z.ZodNullable<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    id: string;
    imageOrientation: "Horizontal" | "Square" | "Vertical";
    order: number;
    value: string;
    label: string;
    path: string;
    useCost: number | null;
    visibilityParameters: {
        value: string;
        path: string;
        condition: "equal" | "not_equal" | "less_than" | "more_than";
    }[];
    callbackParameters: {
        value: string;
        path: string;
        seconds: number;
    }[];
    valueAlt: string;
    buttonType: "Button" | "Slider" | "Toggle";
    interactionKeyId: string | null;
    image?: {
        id: string;
        fileName: string;
        urlPath: string;
    } | null | undefined;
}, {
    id: string;
    imageOrientation: "Horizontal" | "Square" | "Vertical";
    order: number;
    value: string;
    label: string;
    path: string;
    useCost: number | null;
    visibilityParameters: {
        value: string;
        path: string;
        condition: "equal" | "not_equal" | "less_than" | "more_than";
    }[];
    callbackParameters: {
        value: string;
        path: string;
        seconds: number;
    }[];
    valueAlt: string;
    buttonType: "Button" | "Slider" | "Toggle";
    interactionKeyId: string | null;
    image?: {
        id: string;
        fileName: string;
        urlPath: string;
    } | null | undefined;
}>;
export type ButtonDTO = z.infer<typeof ButtonSchema>;
