"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StateBadgeFormSchema = void 0;
const zod_1 = require("zod");
const shared_1 = require("../shared");
const stateBadge_1 = require("../enums/stateBadge");
exports.StateBadgeFormSchema = zod_1.z.object({
    parentId: shared_1.IdSchema,
    statebadges: zod_1.z.array(shared_1.BaseNullableIdSchema.extend({
        type: zod_1.z.nativeEnum(stateBadge_1.StateBadgeType),
        path: shared_1.parameterPathSchema,
        value: zod_1.z.union([zod_1.z.literal(''), shared_1.parameterValueSchema]),
        label: zod_1.z.string().min(3).max(20),
        icon: zod_1.z.string().max(30),
        order: zod_1.z.number(),
    }).transform((val, ctx) => {
        if (val.type === stateBadge_1.StateBadgeType.Custom) {
            // Check value if custom badge
            if (!val.value || val.value === '') {
                ctx.addIssue({
                    code: zod_1.z.ZodIssueCode.custom,
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
        }
        else {
            // clear unneeded values if it's not custom badge
            val.value = '';
            val.label = '';
            val.icon = '';
        }
        return val;
    })),
}).superRefine((val, ctx) => {
    val.statebadges.forEach(badge => {
        if (badge.type !== stateBadge_1.StateBadgeType.Custom) {
            const count = val.statebadges.filter(b => b.type === badge.type).length;
            if (count > 1) {
                ctx.addIssue({
                    code: zod_1.z.ZodIssueCode.custom,
                    message: `Duplicate badges are not allowed: ${badge.type}`,
                    path: ['badges'],
                });
            }
        }
    });
});
