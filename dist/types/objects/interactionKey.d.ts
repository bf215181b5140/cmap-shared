import { z } from 'zod';
export declare const InteractionKeySchema: z.ZodObject<z.objectUtil.extendShape<{
    id: z.ZodString;
}, {
    label: z.ZodString;
    key: z.ZodString;
}>, "strip", z.ZodTypeAny, {
    key: string;
    id: string;
    label: string;
}, {
    key: string;
    id: string;
    label: string;
}>;
export type InteractionKeyDTO = z.infer<typeof InteractionKeySchema>;
