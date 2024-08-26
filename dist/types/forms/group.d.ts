import { z } from 'zod';
import { SegmentWidth } from '../../react/types';
export declare const GroupFormSchema: z.ZodObject<z.objectUtil.extendShape<{
    id: z.ZodNullable<z.ZodString>;
    parentId: z.ZodString;
}, {
    label: z.ZodString;
    order: z.ZodNumber;
    width: z.ZodNativeEnum<typeof SegmentWidth>;
    interactionKeyId: z.ZodNullable<z.ZodString>;
}>, "strip", z.ZodTypeAny, {
    id: string | null;
    width: SegmentWidth;
    order: number;
    label: string;
    parentId: string;
    interactionKeyId: string | null;
}, {
    id: string | null;
    width: SegmentWidth;
    order: number;
    label: string;
    parentId: string;
    interactionKeyId: string | null;
}>;
export type GroupFormDTO = z.infer<typeof GroupFormSchema>;
