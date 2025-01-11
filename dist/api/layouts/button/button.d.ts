import { z } from 'zod';
export declare const ButtonFormSchema: z.ZodEffects<z.ZodObject<{
    groupId: z.ZodString;
    id: z.ZodNullable<z.ZodString>;
    label: z.ZodString;
    showLabel: z.ZodBoolean;
    path: z.ZodString;
    value: z.ZodUnion<[z.ZodEffects<z.ZodString, number | boolean, string>, z.ZodEffects<z.ZodNumber, number, number>, z.ZodBoolean]>;
    valueAlt: z.ZodNullable<z.ZodUnion<[z.ZodEffects<z.ZodLiteral<"">, null, "">, z.ZodUnion<[z.ZodEffects<z.ZodString, number | boolean, string>, z.ZodEffects<z.ZodNumber, number, number>, z.ZodBoolean]>]>>;
    buttonType: z.ZodEnum<["Button", "Slider", "Toggle"]>;
    imageOrientation: z.ZodEnum<["Horizontal", "Square", "Vertical"]>;
    order: z.ZodNumber;
    useCost: z.ZodNullable<z.ZodNumber>;
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
    id: string | null;
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
    groupId: string;
}, {
    id: string | null;
    imageOrientation: "Horizontal" | "Square" | "Vertical";
    order: number;
    value: string | number | boolean;
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
    valueAlt: string | number | boolean | null;
    buttonType: "Button" | "Slider" | "Toggle";
    interactionKeyId: string | null;
    groupId: string;
}>, {
    id: string | null;
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
    groupId: string;
}, {
    id: string | null;
    imageOrientation: "Horizontal" | "Square" | "Vertical";
    order: number;
    value: string | number | boolean;
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
    valueAlt: string | number | boolean | null;
    buttonType: "Button" | "Slider" | "Toggle";
    interactionKeyId: string | null;
    groupId: string;
}>;
export type ButtonFormDTO = z.infer<typeof ButtonFormSchema>;
export declare const ButtonCopySchema: z.ZodObject<{
    id: z.ZodString;
    groupId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
    groupId: string;
}, {
    id: string;
    groupId: string;
}>;
export type ButtonCopyDTO = z.infer<typeof ButtonCopySchema>;
