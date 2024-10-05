import { BaseNullableIdSchema, IdSchema, parameterPathSchema, parameterValueSchema } from '../../shared';
import { z } from 'zod';

export const ControlParameterFormSchema = z.object({
    parentId: IdSchema,
    controlParameters: z.array(BaseNullableIdSchema.extend({
        label: z.string().max(32),
        path: parameterPathSchema,
        value: parameterValueSchema,
        seconds: z.number().min(0, { message: 'Seconds must be between 0 and 15' }).max(15, { message: 'Seconds must be between 0 and 15' })
    })),
});

export type ControlParameterFormDTO = z.infer<typeof ControlParameterFormSchema>;
