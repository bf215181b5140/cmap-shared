import { BaseIdSchema } from '../shared';
import { z } from 'zod';
import { UploadedFileSchema } from './uploadedFile';
import { ControlParameterSchema } from './controlParameter';
import { ButtonTypeSchema } from '../enums/buttonType';
import { ImageOrientationSchema } from '../enums/imageOrientation';

export const ButtonSchema = BaseIdSchema.extend({
    label: z.string(),
    path: z.string(),
    value: z.string(),
    valueAlt: z.string(),
    buttonType: ButtonTypeSchema,
    imageOrientation: ImageOrientationSchema,
    order: z.number(),
    useCost: z.number().nullable(),
    image: UploadedFileSchema.nullable().optional(),
    callbackParameters: z.array(ControlParameterSchema).optional(),
    visibilityParameters: z.array(ControlParameterSchema).optional(),
    interactionKeyId: z.string().nullable(),
});

export type ButtonDTO = z.infer<typeof ButtonSchema>;
