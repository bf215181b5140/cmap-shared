import { BaseNullableIdSchema, IdSchema, parameterPathSchema, parameterValueSchema } from '../shared';
import { z } from 'zod';

export const CallbackFormSchema = z.object({
    parentId: IdSchema,
    callbacks: z.array(BaseNullableIdSchema.extend({
        label: z.string().max(32),
        path: parameterPathSchema,
        value: parameterValueSchema,
        seconds: z.number().min(1, { message: 'Seconds must be between 1 and 15' }).max(15, { message: 'Seconds must be between 1 and 15' })
    })),
});

export type CallbackFormDTO = z.infer<typeof CallbackFormSchema>;
