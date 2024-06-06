import { BaseDTO } from '../shared';
import { z } from 'zod';
import { ClientDTO } from '../profile';
export declare const InteractionKeySchema: z.ZodObject<z.objectUtil.extendShape<{
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
}>;
export declare const InteractionKeyFormSchema: z.ZodObject<{
    clientId: z.ZodString;
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
    clientId: string;
}, {
    interactionKeys: {
        key: string;
        id: string | null;
        label: string;
    }[];
    clientId: string;
}>;
export type InteractionKeyFormDTO = z.infer<typeof InteractionKeyFormSchema>;
export interface InteractionKeyDTO extends BaseDTO {
    label: string;
    key: string;
    client?: ClientDTO | null;
}
