"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StateBadgesSchema = exports.StateBadgeSchema = exports.StateBadgeKey = void 0;
const shared_1 = require("../shared");
const zod_1 = require("zod");
var StateBadgeKey;
(function (StateBadgeKey) {
    StateBadgeKey["Mute"] = "Mute";
    StateBadgeKey["VrMode"] = "VrMode";
    StateBadgeKey["TrackingType"] = "TrackingType";
    StateBadgeKey["Afk"] = "Afk";
    StateBadgeKey["Custom"] = "Custom";
})(StateBadgeKey || (exports.StateBadgeKey = StateBadgeKey = {}));
exports.StateBadgeSchema = shared_1.BaseIdSchema.extend({
    key: zod_1.z.nativeEnum(StateBadgeKey),
    parameter: shared_1.parameterPathSchema,
    value: zod_1.z.string().max(5),
    label: zod_1.z.string().max(12),
    icon: zod_1.z.string().max(30),
    order: zod_1.z.number(),
}).transform((val, ctx) => {
    if (val.key === StateBadgeKey.Custom) {
        // Check value if custom badge
        if (!val.value || val.value === '') {
            ctx.addIssue({
                code: zod_1.z.ZodIssueCode.custom,
                message: 'Value required for custom badge',
                path: ['value']
            });
        }
        else {
            // Check that value is valid (boolean or number)
            if (val.value !== 'true' && val.value !== 'false' && Number.isNaN(Number(val.value))) {
                ctx.addIssue({
                    code: zod_1.z.ZodIssueCode.custom,
                    message: 'Invalid value',
                    path: ['value']
                });
            }
        }
    }
    else {
        // clear unneeded values if it's not custom badge
        val.value = '';
        val.label = '';
        val.icon = '';
    }
    return val;
});
exports.StateBadgesSchema = zod_1.z.object({
    avatarId: zod_1.z.string().min(1).max(20),
    badges: zod_1.z.array(exports.StateBadgeSchema).max(10),
}).superRefine((val, ctx) => {
    val.badges.forEach(badge => {
        if (badge.key !== StateBadgeKey.Custom) {
            const count = val.badges.filter(b => b.key === badge.key).length;
            if (count > 1) {
                ctx.addIssue({
                    code: zod_1.z.ZodIssueCode.custom,
                    message: `Duplicate badges are not allowed: ${badge.key}`,
                    path: ['badges'],
                });
            }
        }
    });
});
