import { z } from 'zod';
export declare const ButtonFormSchema: z.ZodEffects<z.ZodObject<{
    groupId: z.ZodString;
    id: z.ZodNullable<z.ZodString>;
    label: z.ZodString;
    path: z.ZodString;
    value: z.ZodEffects<z.ZodString, string, string>;
    valueAlt: z.ZodUnion<[z.ZodLiteral<"">, z.ZodEffects<z.ZodString, string, string>]>;
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
    id: string | null;
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
    groupId: string;
}, {
    id: string | null;
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
    groupId: string;
}>, {
    id: string | null;
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
    groupId: string;
}, {
    id: string | null;
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
    groupId: string;
}>;
export type ButtonFormDTO = z.infer<typeof ButtonFormSchema>;
