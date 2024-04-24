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
})(StateBadgeKey = exports.StateBadgeKey || (exports.StateBadgeKey = {}));
exports.StateBadgeSchema = shared_1.BaseIdSchema.extend({
    key: zod_1.z.nativeEnum(StateBadgeKey),
    parameter: zod_1.z.string().min(1).max(100),
    value: zod_1.z.string().max(5),
    icon: zod_1.z.string().max(30),
}).superRefine((val, ctx) => {
    // Check value if custom badge
    if (val.key === StateBadgeKey.Custom && (!val.value || val.value === '')) {
        ctx.addIssue({
            code: zod_1.z.ZodIssueCode.custom,
            message: 'Value required for custom badge',
            path: ['value']
        });
    }
});
exports.StateBadgesSchema = zod_1.z.object({
    avatarId: zod_1.z.string().min(1).max(20),
    badges: zod_1.z.array(exports.StateBadgeSchema).max(10),
});
