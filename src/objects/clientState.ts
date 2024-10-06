import { z } from 'zod';
import { parameterPathSchema, parameterValueObjectOrAvatarSchema } from '../shared';
import { TrackedParametersSchema } from './trackedParameters';

export const ClientStateSchema = z.object({
    isConnected: z.boolean(),
    isOnVrchat: z.boolean().nullable(),
    parameters: TrackedParametersSchema,
});

export type ClientStateDTO = z.infer<typeof ClientStateSchema>;
