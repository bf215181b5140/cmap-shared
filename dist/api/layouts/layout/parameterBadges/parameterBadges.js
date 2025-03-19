"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParameterBadgeFormSchema = void 0;
const zod_1 = require("zod");
const parameterBadgeType_1 = require("../../../../enums/parameterBadgeType");
const parameter_1 = require("../../../../primitives/parameter");
const shared_1 = require("../../../../primitives/shared");
exports.ParameterBadgeFormSchema = zod_1.z.object({
    layoutId: shared_1.idSchema,
    parameterBadges: zod_1.z.array(zod_1.z.object({
        id: shared_1.idSchema.nullable(),
        type: parameterBadgeType_1.ParameterBadgeTypeSchema,
        path: parameter_1.parameterPathSchema,
        value: zod_1.z.union([zod_1.z.literal('').transform(() => null), parameter_1.parameterValueFormSchema]).nullable(),
        label: zod_1.z.union([zod_1.z.literal(''), zod_1.z.string().min(2, 'Label too short').max(20, 'Label too long')]),
        icon: zod_1.z.string().max(30, 'Icon too long'),
        order: zod_1.z.number(),
    }).transform((val, ctx) => {
        if (val.type === 'Custom') {
            // If it's custom badge, value is required
            if (val.value === null) {
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
                    code: zod_1.z.ZodIssueCode.custom,
                    message: `Duplicate badges are not allowed: ${badge.type}`,
                    path: ['parameterBadges'],
                });
            }
        }
    });
});
