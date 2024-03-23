import { z } from 'zod';
import { BaseIdSchema, BaseParentDTO } from '../shared';
import { ButtonStyleDTO } from '../buttonStyle';
import { TierDTO } from '../tier';
import { LayoutDTO } from '../layout';
import { ControlParameterDTO } from '../controlParameters';

export const AvatarFormSchema = BaseIdSchema.extend({
    vrcId: z.string().min(1, 'Avatar ID required').max(100),
    label: z.string().min(3).max(32),
    default: z.boolean()
});

export type AvatarFormDTO = z.infer<typeof AvatarFormSchema>;


export interface AvatarPageDTO {
    avatars: AvatarDTO[];
    tier: TierDTO;
    buttonStyle: ButtonStyleDTO;
}

export interface AvatarDTO extends BaseParentDTO<AvatarDTO> {
    vrcId?: string;
    label?: string;
    default?: boolean;
    layouts?: LayoutDTO[];
    controlParameters?: ControlParameterDTO[];
}
