import { z } from 'zod';
import { BaseIdSchema, BaseParentDTO } from '../shared';
import { ButtonStyleDTO } from '../buttonStyle';
import { TierDTO } from '../tier';
import { LayoutDTO } from '../layout';
import { ControlParameterDTO } from '../controlParameters';
import { InteractionKeyDTO } from '../InteractionKey';
import { StateBadgeDTO } from '../stateBadge';

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
    interactionKeys: InteractionKeyDTO[];
}

export interface AvatarDTO extends BaseParentDTO {
    vrcId: string;
    label: string;
    default: boolean;
    layouts?: LayoutDTO[] | null;
    controlParameters?: ControlParameterDTO[] | null;
    stateBadges?: StateBadgeDTO[] | null;
}
