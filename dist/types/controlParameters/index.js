"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ControlParametersFormSchema = exports.ControlParameterSchema = exports.ControlParameterRole = void 0;
const zod_1 = require("zod");
const shared_1 = require("../shared");
var ControlParameterRole;
(function (ControlParameterRole) {
    ControlParameterRole["UseCost"] = "Use cost";
    ControlParameterRole["HP"] = "HP";
    ControlParameterRole["Callback"] = "Callback";
})(ControlParameterRole = exports.ControlParameterRole || (exports.ControlParameterRole = {}));
exports.ControlParameterSchema = shared_1.BaseIdSchema.extend({
    label: zod_1.z.string().min(3).max(16),
    role: zod_1.z.nativeEnum(ControlParameterRole),
    path: shared_1.parameterPathSchema,
    valuePrimary: zod_1.z.string().min(1, 'Value required').max(5),
    valueSecondary: zod_1.z.string().min(1, 'Value required').max(5).nullable(),
    valueType: zod_1.z.nativeEnum(shared_1.ParameterValueType),
});
exports.ControlParametersFormSchema = zod_1.z.object({
    avatarId: zod_1.z.string().min(1).max(20),
    controlParameters: zod_1.z.array(exports.ControlParameterSchema).max(8).optional()
}).superRefine((val, ctx) => {
    if (val.controlParameters?.length) {
        if ((val.controlParameters.filter(cp => cp.role === ControlParameterRole.HP)?.length || 0) > 1) {
            ctx.addIssue({
                code: zod_1.z.ZodIssueCode.custom,
                message: 'Only one parameter with HP role is allowed',
                path: [`controlParameters`]
            });
        }
        if ((val.controlParameters.filter(cp => cp.role === ControlParameterRole.UseCost)?.length || 0) > 1) {
            ctx.addIssue({
                code: zod_1.z.ZodIssueCode.custom,
                message: 'Only one parameter with Use cost role is allowed',
                path: [`controlParameters`]
            });
        }
        for (let i = 0; i < val.controlParameters.length; i++) {
            if (val.controlParameters[i].role === ControlParameterRole.Callback) {
                if (!Number.isInteger(Number(val.controlParameters[i].valueSecondary))) {
                    ctx.addIssue({
                        code: zod_1.z.ZodIssueCode.custom,
                        message: 'Invalid number',
                        path: [`controlParameters.${i}.valueSecondary`]
                    });
                }
                else if (Number(val.controlParameters[i].valueSecondary) > 15) {
                    ctx.addIssue({
                        code: zod_1.z.ZodIssueCode.custom,
                        message: 'Max 15 seconds',
                        path: [`controlParameters.${i}.valueSecondary`]
                    });
                }
                switch (val.controlParameters[i].valueType) {
                    case shared_1.ParameterValueType.Bool:
                        if (val.controlParameters[i].valuePrimary !== 'true' && val.controlParameters[i].valuePrimary !== 'false') {
                            ctx.addIssue({
                                code: zod_1.z.ZodIssueCode.custom,
                                message: 'Invalid Bool (true or false)',
                                path: [`controlParameters.${i}.valuePrimary`]
                            });
                        }
                        break;
                    case shared_1.ParameterValueType.Int:
                        if (!Number.isInteger(Number(val.controlParameters[i].valuePrimary))) {
                            ctx.addIssue({
                                code: zod_1.z.ZodIssueCode.custom,
                                message: 'Invalid Int number',
                                path: [`controlParameters.${i}.valuePrimary`]
                            });
                        }
                        break;
                    case shared_1.ParameterValueType.Float:
                        const valuePrimaryNumber = Number(val.controlParameters[i].valuePrimary);
                        if (Number.isNaN(valuePrimaryNumber) || valuePrimaryNumber < 0 || valuePrimaryNumber > 1) {
                            ctx.addIssue({
                                code: zod_1.z.ZodIssueCode.custom,
                                message: 'Invalid Float number',
                                path: [`controlParameters.${i}.valuePrimary`]
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
                        path: [`controlParameters.${i}.valueType`]
                    });
                }
                if (!Number.isInteger(Number(val.controlParameters[i].valuePrimary))) {
                    ctx.addIssue({
                        code: zod_1.z.ZodIssueCode.custom,
                        message: 'Invalid Int number',
                        path: [`controlParameters.${i}.valuePrimary`]
                    });
                }
                if (!Number.isInteger(Number(val.controlParameters[i].valueSecondary))) {
                    ctx.addIssue({
                        code: zod_1.z.ZodIssueCode.custom,
                        message: 'Invalid Int number',
                        path: [`controlParameters.${i}.valueSecondary`]
                    });
                }
            }
        }
    }
});
