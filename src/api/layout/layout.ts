import { z } from 'zod';
import { ClientSchema } from '../../objects/client';
import { LayoutSchema } from '../../objects/layout';
import { GroupSchema } from '../../objects/group';
import { ControlParameterSchema } from '../../objects/controlParameter';
import { ParameterBadgeSchema } from '../../objects/parameterBadge';
import { ButtonSchema } from '../../objects/button';
import { UploadedFileSchema } from '../../objects/uploadedFile';
import { IdSchema, parameterPathSchema, vrcAvatarIdSchema } from '../../shared';

// ugly extends to make nested object properties required
export const LayoutPageSchema = ClientSchema.required({
    tier: true,
    background: true,
    style: true,
    interactionKeys: true,
}).and(z.object({
    layouts: z.array(LayoutSchema.extend({
        controlParameters: z.array(ControlParameterSchema),
        parameterBadges: z.array(ParameterBadgeSchema),
        groups: z.array(GroupSchema.extend({
            visibilityParameters: z.array(ControlParameterSchema),
            buttons: z.array(ButtonSchema.extend({
                image: UploadedFileSchema.nullable(),
                callbackParameters: z.array(ControlParameterSchema),
                visibilityParameters: z.array(ControlParameterSchema),
            })),
        })),
    }))
}));

export type LayoutPageDTO = z.infer<typeof LayoutPageSchema>;

export const LayoutFormSchema = z.object({
    id: IdSchema.nullable(),
    label: z.string().min(3).max(32),
    avatars: z.array(vrcAvatarIdSchema),
    healthEnabled: z.boolean(),
    healthPath: parameterPathSchema.nullable(),
    healthMax: z.number().nullable(),
    useCostEnabled: z.boolean(),
    useCostPath: parameterPathSchema.nullable(),
    useCostMax: z.number().nullable(),
});

export type LayoutFormDTO = z.infer<typeof LayoutFormSchema>;
