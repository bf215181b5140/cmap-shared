import { z } from 'zod';
import { IdSchema, parameterPathSchema, parameterValueSchema } from '../../../../shared';
import { ParameterBadgeTypeSchema } from '../../../../enums/parameterBadgeType';

export const ParameterBadgeFormSchema = z.object({
  layoutId: IdSchema,
  statebadges: z.array(z.object({
    id: IdSchema.nullable(),
    type: ParameterBadgeTypeSchema,
    path: parameterPathSchema,
    value: z.union([z.literal(''), parameterValueSchema]),
    label: z.string().min(3).max(20),
    icon: z.string().max(30),
    order: z.number(),
  }).transform((val, ctx) => {
    if (val.type === 'Custom') {
      // Check value if custom badge
      if (!val.value || val.value === '') {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: 'Value required for custom badge',
          path: ['value']
        });
      }
    } else {
      // clear unneeded values if it's not custom badge
      val.value = '';
      val.label = '';
      val.icon = '';
    }
    return val;
  })),
}).superRefine((val, ctx) => {
  val.statebadges.forEach(badge => {
    if (badge.type !== 'Custom') {
      const count = val.statebadges.filter(b => b.type === badge.type).length;
      if (count > 1) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: `Duplicate badges are not allowed: ${badge.type}`,
          path: ['statebadges'],
        });
      }
    }
  })
});

export type ParameterBadgeFormDTO = z.infer<typeof ParameterBadgeFormSchema>;
