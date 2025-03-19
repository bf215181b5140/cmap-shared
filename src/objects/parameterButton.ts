import { z } from 'zod';
import { ParameterButtonTypeSchema } from '../enums/parameterButtonType';
import { VisibilityParameterSchema } from './visibilityParameter';
import { CallbackParameterSchema } from './callbackParameter';
import { parameterValueSimpleSchema } from '../primitives/parameter';
import { BaseButtonSchema } from './baseButton';

export const ParameterButtonSchema = BaseButtonSchema.extend({
  path: z.string(),
  value: parameterValueSimpleSchema,
  valueAlt: parameterValueSimpleSchema.nullable(),
  buttonType: ParameterButtonTypeSchema,
  useCost: z.number().nullable(),
  callbackParameters: z.array(CallbackParameterSchema),
  visibilityParameters: z.array(VisibilityParameterSchema),
});

export type ParameterButtonDTO = z.infer<typeof ParameterButtonSchema>;
