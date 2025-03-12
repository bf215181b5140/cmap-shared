import { z } from 'zod';
export declare const ParameterButtonFormSchema: z.ZodEffects<z.ZodObject<{
    groupId: z.ZodString;
    id: z.ZodNullable<z.ZodString>;
    label: z.ZodString;
    path: z.ZodString;
    value: z.ZodUnion<[z.ZodEffects<z.ZodString, number | boolean, string>, z.ZodEffects<z.ZodNumber, number, number>, z.ZodBoolean]>;
    valueAlt: z.ZodNullable<z.ZodUnion<[z.ZodEffects<z.ZodLiteral<"">, null, "">, z.ZodUnion<[z.ZodEffects<z.ZodString, number | boolean, string>, z.ZodEffects<z.ZodNumber, number, number>, z.ZodBoolean]>]>>;
    buttonType: z.ZodEnum<["Button", "Slider", "Toggle"]>;
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
    interactionKeyId: z.ZodNullable<z.ZodUnion<[z.ZodEffects<z.ZodLiteral<"">, null, "">, z.ZodString]>>;
}, "strip", z.ZodTypeAny, {
    id: string | null;
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
    valueAlt: string | number | boolean | null;
    buttonType: "Button" | "Slider" | "Toggle";
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
    valueAlt: string | number | boolean | null;
    buttonType: "Button" | "Slider" | "Toggle";
    groupId: string;
}>;
export type ParameterButtonFormDTO = z.infer<typeof ParameterButtonFormSchema>;
export declare const ParameterButtonCopySchema: z.ZodObject<{
    groupId: z.ZodString;
    id: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
    groupId: string;
}, {
    id: string;
    groupId: string;
}>;
export type ParameterButtonCopyDTO = z.infer<typeof ParameterButtonCopySchema>;
