import { z } from 'zod';
import { BaseParentDTO } from '../shared';
import { ButtonDTO } from '../button';
import { InteractionKeyDTO } from '../InteractionKey';
export declare enum LayoutWidth {
    None = "none",
    Third = "third",
    Half = "half",
    Full = "full"
}
export declare const LayoutFormSchema: z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
    id: z.ZodNullable<z.ZodString>;
}, {
    parentId: z.ZodString;
}>, {
    label: z.ZodString;
    order: z.ZodNumber;
    width: z.ZodNativeEnum<typeof LayoutWidth>;
    interactionKeyId: z.ZodNullable<z.ZodString>;
}>, "strip", z.ZodTypeAny, {
    id: string | null;
    width: LayoutWidth;
    order: number;
    label: string;
    parentId: string;
    interactionKeyId: string | null;
}, {
    id: string | null;
    width: LayoutWidth;
    order: number;
    label: string;
    parentId: string;
    interactionKeyId: string | null;
}>;
export type LayoutFormDTO = z.infer<typeof LayoutFormSchema>;
export interface LayoutDTO extends BaseParentDTO {
    label: string;
    order: number;
    width: LayoutWidth;
    buttons?: ButtonDTO[] | null;
    interactionKey?: InteractionKeyDTO | null;
}
