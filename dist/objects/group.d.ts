import { z } from 'zod';
export declare const GroupSchema: z.ZodObject<{
    id: z.ZodString;
    label: z.ZodString;
    showLabel: z.ZodBoolean;
    order: z.ZodNumber;
    width: z.ZodEnum<["None", "Third", "Half", "Full"]>;
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
    buttons: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
        value: number | boolean;
        label: string;
        path: string;
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
        valueAlt: number | boolean | null;
        buttonType: "Button" | "Slider" | "Toggle";
        interactionKeyId: string | null;
        image?: {
            id: string;
            fileName: string;
            urlPath: string;
        } | null | undefined;
    }>, "many">>;
}, "strip", z.ZodTypeAny, {
    id: string;
    width: "None" | "Third" | "Half" | "Full";
    order: number;
    label: string;
    visibilityParameters: {
        value: string;
        path: string;
        condition: "Equal" | "Not_equal" | "Less_than" | "More_than";
    }[];
    showLabel: boolean;
    interactionKeyId: string | null;
    buttons?: {
        id: string;
        imageOrientation: "Horizontal" | "Square" | "Vertical";
        order: number;
        value: number | boolean;
        label: string;
        path: string;
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
        valueAlt: number | boolean | null;
        buttonType: "Button" | "Slider" | "Toggle";
        interactionKeyId: string | null;
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
        value: string;
        path: string;
        condition: "Equal" | "Not_equal" | "Less_than" | "More_than";
    }[];
    showLabel: boolean;
    interactionKeyId: string | null;
    buttons?: {
        id: string;
        imageOrientation: "Horizontal" | "Square" | "Vertical";
        order: number;
        value: number | boolean;
        label: string;
        path: string;
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
        valueAlt: number | boolean | null;
        buttonType: "Button" | "Slider" | "Toggle";
        interactionKeyId: string | null;
        image?: {
            id: string;
            fileName: string;
            urlPath: string;
        } | null | undefined;
    }[] | undefined;
}>;
export type GroupDTO = z.infer<typeof GroupSchema>;
