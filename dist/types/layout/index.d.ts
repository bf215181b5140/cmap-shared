import { z } from 'zod';
import { BaseParentDTO } from '../shared';
import { ButtonDTO } from '../button';
export declare enum LayoutWidth {
    None = "none",
    Third = "third",
    Half = "half",
    Full = "full"
}
export declare const LayoutFormSchema: z.ZodObject<{
    id: z.ZodNullable<z.ZodString>;
    parentId: z.ZodString;
    label: z.ZodString;
    order: z.ZodNumber;
    width: z.ZodNativeEnum<typeof LayoutWidth>;
}, "strip", z.ZodTypeAny, {
    id?: string;
    parentId?: string;
    label?: string;
    order?: number;
    width?: LayoutWidth;
}, {
    id?: string;
    parentId?: string;
    label?: string;
    order?: number;
    width?: LayoutWidth;
}>;
export type LayoutFormDTO = z.infer<typeof LayoutFormSchema>;
export interface LayoutDTO extends BaseParentDTO<LayoutDTO> {
    label: string;
    order: number;
    width: LayoutWidth;
    buttons?: ButtonDTO[] | null;
}
