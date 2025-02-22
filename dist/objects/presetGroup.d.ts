import { z } from 'zod';
export declare const PresetGroupSchema: z.ZodObject<z.objectUtil.extendShape<{
    id: z.ZodString;
    label: z.ZodString;
    order: z.ZodNumber;
    width: z.ZodEnum<["None", "Third", "Half", "Full"]>;
    interactionKeyId: z.ZodNullable<z.ZodString>;
}, {
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
    presetButtons: z.ZodOptional<z.ZodArray<z.ZodObject<z.objectUtil.extendShape<{
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
        parameters: z.ZodArray<z.ZodObject<{
            path: z.ZodString;
            value: z.ZodUnion<[z.ZodNumber, z.ZodBoolean]>;
        }, "strip", z.ZodTypeAny, {
            value: number | boolean;
            path: string;
        }, {
            value: number | boolean;
            path: string;
        }>, "many">;
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
        image?: {
            id: string;
            fileName: string;
            urlPath: string;
        } | null | undefined;
    }>, "many">>;
}>, "strip", z.ZodTypeAny, {
    id: string;
    width: "None" | "Third" | "Half" | "Full";
    order: number;
    label: string;
    visibilityParameters: {
        value: number | boolean;
        path: string;
        condition: "Equal" | "Not_equal" | "Less_than" | "More_than";
    }[];
    interactionKeyId: string | null;
    presetButtons?: {
        id: string;
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
        image?: {
            id: string;
            fileName: string;
            urlPath: string;
        } | null | undefined;
    }[] | undefined;
}, {
    id: string;
    width: "None" | "Third" | "Half" | "Full";
    order: number;
    label: string;
    visibilityParameters: {
        value: number | boolean;
        path: string;
        condition: "Equal" | "Not_equal" | "Less_than" | "More_than";
    }[];
    interactionKeyId: string | null;
    presetButtons?: {
        id: string;
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
        image?: {
            id: string;
            fileName: string;
            urlPath: string;
        } | null | undefined;
    }[] | undefined;
}>;
export type PresetGroupDTO = z.infer<typeof PresetGroupSchema>;
