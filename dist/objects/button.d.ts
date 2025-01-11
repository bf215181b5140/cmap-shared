import { z } from 'zod';
export declare const ButtonSchema: z.ZodObject<{
    id: z.ZodString;
    label: z.ZodString;
    showLabel: z.ZodBoolean;
    path: z.ZodString;
    value: z.ZodUnion<[z.ZodNumber, z.ZodBoolean]>;
    valueAlt: z.ZodNullable<z.ZodUnion<[z.ZodNumber, z.ZodBoolean]>>;
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
        value: z.ZodUnion<[z.ZodEffects<z.ZodString, number | boolean, string>, z.ZodEffects<z.ZodNumber, number, number>, z.ZodBoolean]>;
        seconds: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        value: number | boolean;
        path: string;
        seconds: number;
    }, {
        value: string | number | boolean;
        path: string;
        seconds: number;
    }>, "many">;
    visibilityParameters: z.ZodArray<z.ZodObject<{
        path: z.ZodString;
        value: z.ZodUnion<[z.ZodEffects<z.ZodString, number | boolean, string>, z.ZodEffects<z.ZodNumber, number, number>, z.ZodBoolean]>;
        condition: z.ZodEnum<["Equal", "Not_equal", "Less_than", "More_than"]>;
    }, "strip", z.ZodTypeAny, {
        value: number | boolean;
        path: string;
        condition: "Equal" | "Not_equal" | "Less_than" | "More_than";
    }, {
        value: string | number | boolean;
        path: string;
        condition: "Equal" | "Not_equal" | "Less_than" | "More_than";
    }>, "many">;
    interactionKeyId: z.ZodNullable<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    id: string;
    imageOrientation: "Horizontal" | "Square" | "Vertical";
    order: number;
    value: number | boolean;
    label: string;
    path: string;
    useCost: number | null;
    visibilityParameters: {
        value: number | boolean;
        path: string;
        condition: "Equal" | "Not_equal" | "Less_than" | "More_than";
    }[];
    callbackParameters: {
        value: number | boolean;
        path: string;
        seconds: number;
    }[];
    showLabel: boolean;
    valueAlt: number | boolean | null;
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
    value: number | boolean;
    label: string;
    path: string;
    useCost: number | null;
    visibilityParameters: {
        value: string | number | boolean;
        path: string;
        condition: "Equal" | "Not_equal" | "Less_than" | "More_than";
    }[];
    callbackParameters: {
        value: string | number | boolean;
        path: string;
        seconds: number;
    }[];
    showLabel: boolean;
    valueAlt: number | boolean | null;
    buttonType: "Button" | "Slider" | "Toggle";
    interactionKeyId: string | null;
    image?: {
        id: string;
        fileName: string;
        urlPath: string;
    } | null | undefined;
}>;
export type ButtonDTO = z.infer<typeof ButtonSchema>;
