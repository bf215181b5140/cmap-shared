import { z } from 'zod';
export declare const GroupFormSchema: z.ZodObject<{
    layoutId: z.ZodString;
    id: z.ZodNullable<z.ZodString>;
    label: z.ZodString;
    order: z.ZodNumber;
    width: z.ZodEnum<["None", "Third", "Half", "Full"]>;
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
    width: "None" | "Third" | "Half" | "Full";
    order: number;
    label: string;
    visibilityParameters: {
        value: number | boolean;
        path: string;
        condition: "Equal" | "Not_equal" | "Less_than" | "More_than";
    }[];
    interactionKeyId: string | null;
    layoutId: string;
}, {
    id: string | null;
    width: "None" | "Third" | "Half" | "Full";
    order: number;
    label: string;
    visibilityParameters: {
        value: string | number | boolean;
        path: string;
        condition: "Equal" | "Not_equal" | "Less_than" | "More_than";
    }[];
    interactionKeyId: string | null;
    layoutId: string;
}>;
export type GroupFormDTO = z.infer<typeof GroupFormSchema>;
export declare const GroupCopySchema: z.ZodObject<{
    layoutId: z.ZodString;
    id: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
    layoutId: string;
}, {
    id: string;
    layoutId: string;
}>;
export type GroupCopyDTO = z.infer<typeof GroupCopySchema>;
