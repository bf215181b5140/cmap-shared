import { z } from 'zod';
export declare const PresetButtonFormSchema: z.ZodObject<{
    layoutId: z.ZodString;
    id: z.ZodNullable<z.ZodString>;
    label: z.ZodString;
    parameters: z.ZodArray<z.ZodObject<{
        path: z.ZodString;
        value: z.ZodUnion<[z.ZodEffects<z.ZodString, number | boolean, string>, z.ZodEffects<z.ZodNumber, number, number>, z.ZodBoolean]>;
    }, "strip", z.ZodTypeAny, {
        value: number | boolean;
        path: string;
    }, {
        value: string | number | boolean;
        path: string;
    }>, "many">;
    imageOrientation: z.ZodEnum<["Horizontal", "Square", "Vertical"]>;
    order: z.ZodNumber;
    useCost: z.ZodNullable<z.ZodNumber>;
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
    id: string | null;
    imageOrientation: "Horizontal" | "Square" | "Vertical";
    order: number;
    label: string;
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
    interactionKeyId: string | null;
    parameters: {
        value: number | boolean;
        path: string;
    }[];
    layoutId: string;
}, {
    id: string | null;
    imageOrientation: "Horizontal" | "Square" | "Vertical";
    order: number;
    label: string;
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
    interactionKeyId: string | null;
    parameters: {
        value: string | number | boolean;
        path: string;
    }[];
    layoutId: string;
}>;
export type PresetButtonFormDTO = z.infer<typeof PresetButtonFormSchema>;
export declare const PresetButtonCopySchema: z.ZodObject<{
    id: z.ZodString;
    layoutId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
    layoutId: string;
}, {
    id: string;
    layoutId: string;
}>;
export type PresetButtonCopyDTO = z.infer<typeof PresetButtonCopySchema>;
