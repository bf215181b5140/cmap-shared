import { z } from 'zod';
import { BaseParentDTO } from '../shared';
import { ButtonStyleDTO } from '../buttonStyle';
import { TierDTO } from '../tier';
import { LayoutDTO } from '../layout';
import { ControlParameterDTO } from '../controlParameters';
export declare const AvatarFormSchema: z.ZodObject<{
    id: z.ZodNullable<z.ZodString>;
    vrcId: z.ZodString;
    label: z.ZodString;
    default: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    id?: string;
    vrcId?: string;
    label?: string;
    default?: boolean;
}, {
    id?: string;
    vrcId?: string;
    label?: string;
    default?: boolean;
}>;
export type AvatarFormDTO = z.infer<typeof AvatarFormSchema>;
export interface AvatarPageDTO {
    avatars: AvatarDTO[];
    tier: TierDTO;
    buttonStyle: ButtonStyleDTO;
}
export interface AvatarDTO extends BaseParentDTO<AvatarDTO> {
    vrcId: string;
    label: string;
    default: boolean;
    layouts?: LayoutDTO[] | null;
    controlParameters?: ControlParameterDTO[] | null;
}
