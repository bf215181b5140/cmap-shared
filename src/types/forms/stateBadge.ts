import { z } from 'zod';
import { BaseNullableIdSchema, IdSchema, parameterPathSchema, parameterValueSchema } from '../shared';
import { StateBadgeTypeSchema } from '../enums/stateBadgeType';

export const StateBadgeFormSchema = z.object({
    parentId: IdSchema,
    statebadges: z.array(BaseNullableIdSchema.extend({
        type: StateBadgeTypeSchema,
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
            // else {
            //     // Check that value is valid (boolean or number)
            //     if (convertParameterValueFromString(val.value) === undefined) {
            //         ctx.addIssue({
            //             code: z.ZodIssueCode.custom,
            //             message: 'Invalid value, must be either number or bool',
            //             path: ['value']
            //         });
            //     }
            // }
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
                    path: ['badges'],
                });
            }
        }
    })
});

export type StateBadgeFormDTO = z.infer<typeof StateBadgeFormSchema>;
