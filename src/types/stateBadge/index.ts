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
    parameter: z.string().min(1).max(100),
    value: z.string().max(5),
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
        }
    } else {
        // clear values if it's not custom badge
        val.value = '';
        val.icon = '';
    }
    return val;
});

export const StateBadgesSchema = z.object({
    avatarId: z.string().min(1).max(20),
    badges: z.array(StateBadgeSchema).max(10),
});

export type StateBadgeDTO = z.infer<typeof StateBadgeSchema>;

export type StateBadgesDTO = z.infer<typeof StateBadgesSchema>;
