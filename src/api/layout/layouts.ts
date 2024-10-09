import { z } from 'zod';
import { ClientSchema } from '../../objects/client';
import { LayoutSchema } from '../../objects/layout';
import { GroupSchema } from '../../objects/group';
import { ControlParameterSchema } from '../../objects/controlParameter';
import { ParameterBadgeSchema } from '../../objects/parameterBadge';
import { ButtonSchema } from '../../objects/button';
import { UploadedFileSchema } from '../../objects/uploadedFile';

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
