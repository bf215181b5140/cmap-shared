"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonFormSchema = void 0;
var zod_1 = require("zod");
var shared_1 = require("../../dto/shared");
var button_1 = require("../../dto/button");
var shared_2 = require("../shared");
exports.ButtonFormSchema = shared_2.BaseParentIdSchema.extend({
    label: zod_1.z.string().max(32),
    path: zod_1.z.string().min(1, 'Path required').max(50),
    value: zod_1.z.string().min(1, 'Value required').max(5),
    valueAlt: zod_1.z.string().max(5).nullable(),
    valueType: zod_1.z.nativeEnum(shared_1.ParameterValueType),
    buttonType: zod_1.z.nativeEnum(button_1.ButtonType),
    imageOrientation: zod_1.z.nativeEnum(button_1.ButtonImageOrientation),
    order: zod_1.z.number(),
    controlParameterId: zod_1.z.string().min(1).max(20).nullable(),
    useCost: zod_1.z.number().nullable(),
}).superRefine(function (val, ctx) {
    // Check valueType
    if (val.buttonType === button_1.ButtonType.Slider && val.valueType === shared_1.ParameterValueType.Bool) {
        ctx.addIssue({
            code: zod_1.z.ZodIssueCode.custom,
            message: 'Slider can\'t be of type Bool',
            path: ['valueType']
        });
    }
    // Check value requirement
    if ((val.buttonType === button_1.ButtonType.Slider || val.buttonType === button_1.ButtonType.Toggle) && (!val.valueAlt || val.valueAlt === '')) {
        ctx.addIssue({
            code: zod_1.z.ZodIssueCode.custom,
            message: 'Secondary value required for slider or toggle button',
            path: ['valueAlt']
        });
    }
    // Check value type
    switch (val.valueType) {
        case shared_1.ParameterValueType.Bool:
            if ((val.value !== 'true' && val.value !== 'false')) {
                ctx.addIssue({
                    code: zod_1.z.ZodIssueCode.custom,
                    message: 'Invalid Bool (true or false)',
                    path: ["value"]
                });
            }
            if ((val.valueAlt !== 'true' && val.valueAlt !== 'false')) {
                ctx.addIssue({
                    code: zod_1.z.ZodIssueCode.custom,
                    message: 'Invalid Bool (true or false)',
                    path: ["valueAlt"]
                });
            }
            break;
        case shared_1.ParameterValueType.Float:
            var valueNumber = Number(val.value);
            if (Number.isNaN(valueNumber) || valueNumber < 0 || valueNumber > 1) {
                ctx.addIssue({
                    code: zod_1.z.ZodIssueCode.custom,
                    message: 'Invalid Float number',
                    path: ["value"]
                });
            }
            var valueAltNumber = Number(val.valueAlt);
            if (Number.isNaN(valueAltNumber) || valueAltNumber < 0 || valueAltNumber > 1) {
                ctx.addIssue({
                    code: zod_1.z.ZodIssueCode.custom,
                    message: 'Invalid Float number',
                    path: ["valueAlt"]
                });
            }
            break;
        case shared_1.ParameterValueType.Int:
            if (!Number.isInteger(Number(val.value))) {
                ctx.addIssue({
                    code: zod_1.z.ZodIssueCode.custom,
                    message: 'Invalid Int number',
                    path: ["value"]
                });
            }
            if (!Number.isInteger(Number(val.valueAlt))) {
                ctx.addIssue({
                    code: zod_1.z.ZodIssueCode.custom,
                    message: 'Invalid Int number',
                    path: ["valueAlt"]
                });
            }
            break;
    }
});
