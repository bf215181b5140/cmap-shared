import { z } from 'zod';
export declare const GroupFormSchema: z.ZodObject<{
    layoutId: z.ZodString;
    id: z.ZodNullable<z.ZodString>;
    label: z.ZodString;
    order: z.ZodNumber;
    width: z.ZodEnum<["None", "Third", "Half", "Full"]>;
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
    width: "None" | "Third" | "Half" | "Full";
    order: number;
    label: string;
    visibilityParameters: {
        value: string;
        path: string;
        condition: "equal" | "not_equal" | "less_than" | "more_than";
    }[];
    interactionKeyId: string | null;
    layoutId: string;
}, {
    id: string | null;
    width: "None" | "Third" | "Half" | "Full";
    order: number;
    label: string;
    visibilityParameters: {
        value: string;
        path: string;
        condition: "equal" | "not_equal" | "less_than" | "more_than";
    }[];
    interactionKeyId: string | null;
    layoutId: string;
}>;
export type GroupFormDTO = z.infer<typeof GroupFormSchema>;
