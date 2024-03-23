"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ControlParametersFormSchema = void 0;
var zod_1 = require("zod");
var shared_1 = require("../../dto/shared");
var controlParameter_1 = require("../../dto/controlParameter");
var shared_2 = require("../shared");
exports.ControlParametersFormSchema = zod_1.z.object({
    avatarId: zod_1.z.string().min(1).max(20),
    controlParameters: zod_1.z.array(shared_2.BaseIdSchema.extend({
        label: zod_1.z.string().min(3).max(16),
        role: zod_1.z.nativeEnum(controlParameter_1.ControlParameterRole),
        path: zod_1.z.string().min(1, 'Path required').max(50),
        valuePrimary: zod_1.z.string().min(1, 'Value required').max(5),
        valueSecondary: zod_1.z.string().min(1, 'Value required').max(5).nullable(),
        valueType: zod_1.z.nativeEnum(shared_1.ParameterValueType),
    })).max(8).optional()
}).superRefine(function (val, ctx) {
    var _a, _b, _c;
    if ((_a = val.controlParameters) === null || _a === void 0 ? void 0 : _a.length) {
        if ((((_b = val.controlParameters.filter(function (cp) { return cp.role === controlParameter_1.ControlParameterRole.HP; })) === null || _b === void 0 ? void 0 : _b.length) || 0) > 1) {
            ctx.addIssue({
                code: zod_1.z.ZodIssueCode.custom,
                message: 'Only one parameter with HP role is allowed',
                path: ["controlParameters"]
            });
        }
        if ((((_c = val.controlParameters.filter(function (cp) { return cp.role === controlParameter_1.ControlParameterRole.UseCost; })) === null || _c === void 0 ? void 0 : _c.length) || 0) > 1) {
            ctx.addIssue({
                code: zod_1.z.ZodIssueCode.custom,
                message: 'Only one parameter with Use cost role is allowed',
                path: ["controlParameters"]
            });
        }
        for (var i = 0; i < val.controlParameters.length; i++) {
            if (val.controlParameters[i].role === controlParameter_1.ControlParameterRole.Callback) {
                if (!Number.isInteger(Number(val.controlParameters[i].valueSecondary))) {
                    ctx.addIssue({
                        code: zod_1.z.ZodIssueCode.custom,
                        message: 'Invalid number',
                        path: ["controlParameters.".concat(i, ".valueSecondary")]
                    });
                }
                else if (Number(val.controlParameters[i].valueSecondary) > 15) {
                    ctx.addIssue({
                        code: zod_1.z.ZodIssueCode.custom,
                        message: 'Max 15 seconds',
                        path: ["controlParameters.".concat(i, ".valueSecondary")]
                    });
                }
                switch (val.controlParameters[i].valueType) {
                    case shared_1.ParameterValueType.Bool:
                        if (val.controlParameters[i].valuePrimary !== 'true' && val.controlParameters[i].valuePrimary !== 'false') {
                            ctx.addIssue({
                                code: zod_1.z.ZodIssueCode.custom,
                                message: 'Invalid Bool (true or false)',
                                path: ["controlParameters.".concat(i, ".valuePrimary")]
                            });
                        }
                        break;
                    case shared_1.ParameterValueType.Int:
                        if (!Number.isInteger(Number(val.controlParameters[i].valuePrimary))) {
                            ctx.addIssue({
                                code: zod_1.z.ZodIssueCode.custom,
                                message: 'Invalid Int number',
                                path: ["controlParameters.".concat(i, ".valuePrimary")]
                            });
                        }
                        break;
                    case shared_1.ParameterValueType.Float:
                        var valuePrimaryNumber = Number(val.controlParameters[i].valuePrimary);
                        if (Number.isNaN(valuePrimaryNumber) || valuePrimaryNumber < 0 || valuePrimaryNumber > 1) {
                            ctx.addIssue({
                                code: zod_1.z.ZodIssueCode.custom,
                                message: 'Invalid Float number',
                                path: ["controlParameters.".concat(i, ".valuePrimary")]
                            });
                        }
                        break;
                }
            }
            else {
                if (val.controlParameters[i].valueType !== shared_1.ParameterValueType.Int) {
                    ctx.addIssue({
                        code: zod_1.z.ZodIssueCode.custom,
                        message: 'Use cost and HP only support Int',
                        path: ["controlParameters.".concat(i, ".valueType")]
                    });
                }
                if (!Number.isInteger(Number(val.controlParameters[i].valuePrimary))) {
                    ctx.addIssue({
                        code: zod_1.z.ZodIssueCode.custom,
                        message: 'Invalid Int number',
                        path: ["controlParameters.".concat(i, ".valuePrimary")]
                    });
                }
                if (!Number.isInteger(Number(val.controlParameters[i].valueSecondary))) {
                    ctx.addIssue({
                        code: zod_1.z.ZodIssueCode.custom,
                        message: 'Invalid Int number',
                        path: ["controlParameters.".concat(i, ".valueSecondary")]
                    });
                }
            }
        }
    }
});
