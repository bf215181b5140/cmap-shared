import { BaseIdSchema } from '../shared';
import { z } from 'zod';
import { ButtonImageOrientation, ButtonType } from '../enums/button';
import { UploadedFileSchema } from './uploadedFile';
import { ControlParameterSchema } from './controlParameter';
import { InteractionKeySchema } from './interactionKey';

export const ButtonSchema = BaseIdSchema.extend({
    label: z.string(),
    path: z.string(),
    value: z.string(),
    valueAlt: z.string(),
    buttonType: z.nativeEnum(ButtonType),
    imageOrientation: z.nativeEnum(ButtonImageOrientation),
    order: z.number(),
    useCost: z.number().nullable(),
    image: UploadedFileSchema.nullable().optional(),
    callbackParameters: z.array(ControlParameterSchema).optional(),
    visibilityParameters: z.array(ControlParameterSchema).optional(),
    interactionKeyId: z.string().nullable(),
});

export type ButtonDTO = z.infer<typeof ButtonSchema>;
