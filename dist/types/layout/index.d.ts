import { z } from 'zod';
import { ContentBoxWidth } from '../../index';
import { BaseParentDTO } from '../shared';
import { ButtonDTO } from '../button';
export declare const LayoutFormSchema: z.ZodObject<{
    id: z.ZodNullable<z.ZodString>;
    parentId: z.ZodString;
    label: z.ZodString;
    order: z.ZodNumber;
    width: z.ZodNativeEnum<typeof ContentBoxWidth>;
}, "strip", z.ZodTypeAny, {
    id: string | null;
    width: ContentBoxWidth;
    order: number;
    label: string;
    parentId: string;
}, {
    id: string | null;
    width: ContentBoxWidth;
    order: number;
    label: string;
    parentId: string;
}>;
export type LayoutFormDTO = z.infer<typeof LayoutFormSchema>;
export interface LayoutDTO extends BaseParentDTO<LayoutDTO> {
    label?: string;
    order?: number;
    width?: ContentBoxWidth;
    buttons?: ButtonDTO[];
}
