import { z } from 'zod';
import { BaseIdSchema } from '../shared';

export const OrderFormSchema = z.array(BaseIdSchema.extend({
    order: z.number(),
}));

export type OrderFormDTO = z.infer<typeof OrderFormSchema>;
