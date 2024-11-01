"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParameterBadgeFormSchema = void 0;
const zod_1 = require("zod");
const shared_1 = require("../../../../shared");
const parameterBadgeType_1 = require("../../../../enums/parameterBadgeType");
exports.ParameterBadgeFormSchema = zod_1.z.object({
    layoutId: shared_1.IdSchema,
    parameterBadges: zod_1.z.array(zod_1.z.object({
        id: shared_1.IdSchema.nullable(),
        type: parameterBadgeType_1.ParameterBadgeTypeSchema,
        path: shared_1.parameterPathSchema,
        value: zod_1.z.union([zod_1.z.literal(''), shared_1.parameterValueSchema]),
        label: zod_1.z.union([zod_1.z.literal(''), zod_1.z.string().min(2).max(20)]),
        icon: zod_1.z.string().max(30),
        order: zod_1.z.number(),
    }).transform((val, ctx) => {
        if (val.type === 'Custom') {
            // If it's custom badge, value is required
            if (!val.value || val.value === '') {
                ctx.addIssue({
                    code: zod_1.z.ZodIssueCode.custom,
                    message: 'Value is required for custom badge',
                    path: ['value']
                });
            }
            // If it's custom badge, label is required
            if (!val.label || val.label === '') {
                ctx.addIssue({
                    code: zod_1.z.ZodIssueCode.custom,
                    message: 'Label is required for custom badge',
                    path: ['label']
                });
            }
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
    val.parameterBadges.forEach(badge => {
        if (badge.type !== 'Custom') {
            const count = val.parameterBadges.filter(b => b.type === badge.type).length;
            if (count > 1) {
                ctx.addIssue({
                    code: zod_1.z.ZodIssueCode.custom,
                    message: `Duplicate badges are not allowed: ${badge.type}`,
                    path: ['parameterBadges'],
                });
            }
        }
    });
});
