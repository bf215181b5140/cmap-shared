import { z } from 'zod';
import { CallbackParameterFormSchema } from '../../../objects/callbackParameter';
import { ImageOrientationSchema } from '../../../enums/imageOrientation';
import { VisibilityParameterFormSchema } from '../../../objects/visibilityParameter';
import { idSchema, interactionKeyIdSchema, labelOptionalSchema } from '../../../primitives/shared';
import { PresetParameterFormSchema } from '../../../objects/presetParameter';
import { parameterPathSchema, parameterValueAvatarIdSchema } from '../../../primitives/parameter';

export const CustomPresetsFormSchema = z.object({
  id: idSchema,
  customPresetsEnabled: z.boolean(),
  customPresetsWhitelist: z.array(parameterPathSchema),
  customPresetsBlacklist: z.array(parameterPathSchema),
});

export type CustomPresetsFormDTO = z.infer<typeof CustomPresetsFormSchema>;
