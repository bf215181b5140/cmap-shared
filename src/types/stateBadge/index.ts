import { BaseIdSchema } from '../shared';
import { z } from 'zod';

export enum StateBadgeKey {
    Mute = 'Mute',
    VrMode = 'VrMode',
    TrackingType = 'TrackingType',
    Afk = 'Afk',
    Custom = 'Custom',
}

export const StateBadgeSchema = BaseIdSchema.extend({
    key: z.nativeEnum(StateBadgeKey),
    parameter: z.string().min(1, 'Parameter required').max(100),
    value: z.string().max(5),
    label: z.string().max(12),
    icon: z.string().max(30),
}).transform((val, ctx) => {
    if (val.key === StateBadgeKey.Custom) {
        // Check value if custom badge
        if (!val.value || val.value === '') {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: 'Value required for custom badge',
                path: ['value']
            });
        } else {
            // Check that value is valid (boolean or number)
            if (val.value !== 'true' && val.value !== 'false' && Number.isNaN(Number(val.value))) {
                ctx.addIssue({
                    code: z.ZodIssueCode.custom,
                    message: 'Invalid value',
                    path: ['value']
                });
            }
        }
    } else {
        // clear unneeded values if it's not custom badge
        val.value = '';
        val.label = '';
        val.icon = '';
    }
    return val;
});

export const StateBadgesSchema = z.object({
    avatarId: z.string().min(1).max(20),
    badges: z.array(StateBadgeSchema).max(10),
}).superRefine((val, ctx) => {
    val.badges.forEach(badge => {
        if (badge.key !== StateBadgeKey.Custom) {
            const count = val.badges.filter(b => b.key === badge.key).length;
            if (count > 1) {
                ctx.addIssue({
                    code: z.ZodIssueCode.custom,
                    message: `Duplicate badges are not allowed: ${badge.key}`,
                    path: ['badges'],
                });
            }
        }
    })
});

export type StateBadgeDTO = z.infer<typeof StateBadgeSchema>;

export type StateBadgesDTO = z.infer<typeof StateBadgesSchema>;
