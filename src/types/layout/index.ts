import { z } from 'zod';
import { BaseParentDTO, BaseParentIdSchema } from '../shared';
import { ButtonDTO } from '../button';
import { InteractionKeyDTO } from '../InteractionKey';

export enum LayoutWidth {
    None = 'none',
    Third = 'third',
    Half = 'half',
    Full = 'full'
}

export const LayoutFormSchema = BaseParentIdSchema.extend({
    label: z.string().max(32),
    order: z.number(),
    width: z.nativeEnum(LayoutWidth),
});

export type LayoutFormDTO = z.infer<typeof LayoutFormSchema>;

export interface LayoutDTO extends BaseParentDTO {
    label: string;
    order: number;
    width: LayoutWidth;
    buttons?: ButtonDTO[] | null;
    interactionKey?: InteractionKeyDTO[] | null;
}
