import { z } from 'zod';
import { BaseIdSchema } from '../../../shared';
import { StyleSchema } from '../../../objects/style';

export const GetStyleSchema = z.array(StyleSchema.required({
    tier: true,
}));

export type GetStyleDTO = z.infer<typeof GetStyleSchema>;

export const PostStyleSchema = BaseIdSchema;

export type PostStyleDTO = z.infer<typeof PostStyleSchema>;
