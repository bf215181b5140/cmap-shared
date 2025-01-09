import { z } from 'zod';
export declare const PresetSchema: z.ZodObject<{
    id: z.ZodString;
    label: z.ZodString;
    showLabel: z.ZodBoolean;
    parameters: z.ZodObject<{
        path: z.ZodString;
        value: z.ZodUnion<[z.ZodNumber, z.ZodBoolean]>;
    }, "strip", z.ZodTypeAny, {
        value: number | boolean;
        path: string;
    }, {
        value: number | boolean;
        path: string;
    }>;
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
        condition: z.ZodEnum<["Equal", "Not_equal", "Less_than", "More_than"]>;
    }, "strip", z.ZodTypeAny, {
        value: string;
        path: string;
        condition: "Equal" | "Not_equal" | "Less_than" | "More_than";
    }, {
        value: string;
        path: string;
        condition: "Equal" | "Not_equal" | "Less_than" | "More_than";
    }>, "many">;
    interactionKeyId: z.ZodNullable<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    id: string;
    imageOrientation: "Horizontal" | "Square" | "Vertical";
    order: number;
    label: string;
    useCost: number | null;
    visibilityParameters: {
        value: string;
        path: string;
        condition: "Equal" | "Not_equal" | "Less_than" | "More_than";
    }[];
    callbackParameters: {
        value: string;
        path: string;
        seconds: number;
    }[];
    showLabel: boolean;
    interactionKeyId: string | null;
    parameters: {
        value: number | boolean;
        path: string;
    };
    image?: {
        id: string;
        fileName: string;
        urlPath: string;
    } | null | undefined;
}, {
    id: string;
    imageOrientation: "Horizontal" | "Square" | "Vertical";
    order: number;
    label: string;
    useCost: number | null;
    visibilityParameters: {
        value: string;
        path: string;
        condition: "Equal" | "Not_equal" | "Less_than" | "More_than";
    }[];
    callbackParameters: {
        value: string;
        path: string;
        seconds: number;
    }[];
    showLabel: boolean;
    interactionKeyId: string | null;
    parameters: {
        value: number | boolean;
        path: string;
    };
    image?: {
        id: string;
        fileName: string;
        urlPath: string;
    } | null | undefined;
}>;
export type PresetDTO = z.infer<typeof PresetSchema>;
