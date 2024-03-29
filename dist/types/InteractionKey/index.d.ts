import { BaseDTO } from '../shared';
import { z } from 'zod';
import { ClientDTO } from '../profile';
export declare const InteractionKeySchema: z.ZodObject<{
    id: z.ZodNullable<z.ZodString>;
    parentId: z.ZodString;
    label: z.ZodString;
    key: z.ZodString;
}, "strip", z.ZodTypeAny, {
    key: string;
    id: string | null;
    label: string;
    parentId: string;
}, {
    key: string;
    id: string | null;
    label: string;
    parentId: string;
}>;
export type InteractionKeyFormDTO = z.infer<typeof InteractionKeySchema>;
export interface InteractionKeyDTO extends BaseDTO {
    label: string;
    key: string;
    client?: ClientDTO | null;
}
