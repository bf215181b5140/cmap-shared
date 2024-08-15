import { z } from 'zod';
export declare const InteractionKeyFormSchema: z.ZodObject<{
    parentId: z.ZodString;
    interactionKeys: z.ZodArray<z.ZodObject<z.objectUtil.extendShape<{
        id: z.ZodNullable<z.ZodString>;
    }, {
        label: z.ZodString;
        key: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        key: string;
        id: string | null;
        label: string;
    }, {
        key: string;
        id: string | null;
        label: string;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    parentId: string;
    interactionKeys: {
        key: string;
        id: string | null;
        label: string;
    }[];
}, {
    parentId: string;
    interactionKeys: {
        key: string;
        id: string | null;
        label: string;
    }[];
}>;
export type InteractionKeyFormDTO = z.infer<typeof InteractionKeyFormSchema>;
