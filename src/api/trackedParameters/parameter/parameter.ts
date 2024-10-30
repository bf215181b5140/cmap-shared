import { z } from 'zod';
import { parameterPathSchema, parameterValueOrAvatarSchema } from '../../../shared';
import { convertParameterValueFromString } from '../../../util';
import { VrcParameter } from '../../../objects/vrcParameter';

export const TrackedParameterFormSchema = z.object({
  path: parameterPathSchema,
  value: parameterValueOrAvatarSchema,
}).transform((val) => {
  // convert to number or boolean, otherwise it must be avatarId
  let convertedVal: string | number | boolean | undefined = convertParameterValueFromString(val.value);
  if (convertedVal === undefined) convertedVal = val.value;

  return { path: val.path, value: convertedVal } as VrcParameter;
});

export type TrackedParameterFormDTO = z.infer<typeof TrackedParameterFormSchema>;