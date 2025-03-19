import { z } from 'zod';
export declare const ParameterButtonSchema: z.ZodObject<z.objectUtil.extendShape<{
    id: z.ZodString;
    label: z.ZodString;
    order: z.ZodNumber;
    imageOrientation: z.ZodEnum<["Horizontal", "Square", "Vertical"]>;
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
    interactionKeyId: z.ZodNullable<z.ZodString>;
}, {
    path: z.ZodString;
    value: z.ZodUnion<[z.ZodNumber, z.ZodBoolean]>;
    valueAlt: z.ZodNullable<z.ZodUnion<[z.ZodNumber, z.ZodBoolean]>>;
    buttonType: z.ZodEnum<["Button", "Slider", "Toggle"]>;
    useCost: z.ZodNullable<z.ZodNumber>;
    callbackParameters: z.ZodArray<z.ZodObject<{
        path: z.ZodString;
        value: z.ZodUnion<[z.ZodNumber, z.ZodBoolean]>;
        seconds: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        value: number | boolean;
        path: string;
        seconds: number;
    }, {
        value: number | boolean;
        path: string;
        seconds: number;
    }>, "many">;
    visibilityParameters: z.ZodArray<z.ZodObject<{
        path: z.ZodString;
        value: z.ZodUnion<[z.ZodNumber, z.ZodBoolean]>;
        condition: z.ZodEnum<["Equal", "Not_equal", "Less_than", "More_than"]>;
    }, "strip", z.ZodTypeAny, {
        value: number | boolean;
        path: string;
        condition: "Equal" | "Not_equal" | "Less_than" | "More_than";
    }, {
        value: number | boolean;
        path: string;
        condition: "Equal" | "Not_equal" | "Less_than" | "More_than";
    }>, "many">;
}>, "strip", z.ZodTypeAny, {
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
    interactionKeyId: string | null;
    valueAlt: number | boolean | null;
    buttonType: "Button" | "Slider" | "Toggle";
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
    valueAlt: number | boolean | null;
    buttonType: "Button" | "Slider" | "Toggle";
    image?: {
        id: string;
        fileName: string;
        urlPath: string;
    } | null | undefined;
}>;
export type ParameterButtonDTO = z.infer<typeof ParameterButtonSchema>;
