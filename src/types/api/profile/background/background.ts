import { z } from 'zod';
import { BackgroundSchema } from '../../../objects/background';
import { BaseIdSchema } from '../../../shared';

export const GetBackgroundSchema = z.array(BackgroundSchema.required({
    tier: true,
}));

export type GetBackgroundDTO = z.infer<typeof GetBackgroundSchema>;

export const PostBackgroundSchema = BaseIdSchema;

export type PostBackgroundDTO = z.infer<typeof PostBackgroundSchema>;
