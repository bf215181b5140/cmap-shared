import { z } from 'zod';
export declare const InteractionKeysFormSchema: z.ZodObject<{
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
    interactionKeys: {
        key: string;
        id: string | null;
        label: string;
    }[];
}, {
    interactionKeys: {
        key: string;
        id: string | null;
        label: string;
    }[];
}>;
export type InteractionKeysFormDTO = z.infer<typeof InteractionKeysFormSchema>;
