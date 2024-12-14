import { z } from 'zod';
import { ClientStateSchema } from '../../objects/clientState';

export const StatePageSchema = ClientStateSchema;

export type StatePageDTO = z.infer<typeof StatePageSchema>;

