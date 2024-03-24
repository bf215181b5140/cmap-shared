import { z } from 'zod';
import { BaseParentDTO, BaseParentIdSchema } from '../shared';
import { ButtonDTO } from '../button';

export enum ContentBoxWidth {
    None = 'none',
    Third = 'third',
    Half = 'half',
    Full = 'full'
}

export const LayoutFormSchema = BaseParentIdSchema.extend({
    label: z.string().max(32),
    order: z.number(),
    width: z.nativeEnum(ContentBoxWidth),
});

export type LayoutFormDTO = z.infer<typeof LayoutFormSchema>;

export interface LayoutDTO extends BaseParentDTO<LayoutDTO> {
    label: string;
    order: number;
    width: ContentBoxWidth;
    buttons?: ButtonDTO[] | null;
}
