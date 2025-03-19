import { z } from 'zod';
import { ParameterBadgeTypeSchema } from '../../../../enums/parameterBadgeType';
import { parameterPathSchema, parameterValueFormSchema } from '../../../../primitives/parameter';
import { idSchema } from '../../../../primitives/shared';

export const ParameterBadgeFormSchema = z.object({
  layoutId: idSchema,
  parameterBadges: z.array(z.object({
    id: idSchema.nullable(),
    type: ParameterBadgeTypeSchema,
    path: parameterPathSchema,
    value: z.union([z.literal('').transform(() => null), parameterValueFormSchema]).nullable(),
    label: z.union([z.literal(''), z.string().min(2, 'Label too short').max(20, 'Label too long')]),
    icon: z.string().max(30, 'Icon too long'),
    order: z.number(),
  }).transform((val, ctx) => {
    if (val.type === 'Custom') {
      // If it's custom badge, value is required
      if (val.value === null) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: 'Value is required for custom badge',
          path: ['value']
        });
      }
      // If it's custom badge, label is required
      if (!val.label || val.label === '') {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: 'Label is required for custom badge',
          path: ['label']
        });
      }
    } else {
      // clear unneeded values if it's not custom badge
      val.value = null;
      val.label = '';
      val.icon = '';
    }
    return val;
  })),
}).superRefine((val, ctx) => {
  val.parameterBadges.forEach(badge => {
    if (badge.type !== 'Custom') {
      const count = val.parameterBadges.filter(b => b.type === badge.type).length;
      if (count > 1) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: `Duplicate badges are not allowed: ${badge.type}`,
          path: ['parameterBadges'],
        });
      }
    }
  });
});

export type ParameterBadgeFormDTO = z.infer<typeof ParameterBadgeFormSchema>;
