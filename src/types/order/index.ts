import { RequiredIdSchema } from '../shared';
import { z } from 'zod';

export const OrderSchema = RequiredIdSchema.extend({
    order: z.number(),
});

export const OrderListSchema = z.array(OrderSchema);

export type OrderDTO = z.infer<typeof OrderSchema>;

export type OrderListDTO = z.infer<typeof OrderListSchema>;

