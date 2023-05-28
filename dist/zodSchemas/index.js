"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.controlParametersSchema = exports.parametersSchema = exports.buttonSchema = exports.layoutSchema = exports.avatarSchema = exports.profileSchema = exports.registrationSchema = void 0;
var zod_1 = require("zod");
var index_1 = require("../index");
exports.registrationSchema = zod_1.z.object({
    username: zod_1.z.string().min(3).max(16),
    passwordOne: zod_1.z.string().min(6).max(32),
    passwordTwo: zod_1.z.string().min(6).max(32),
    registrationKey: zod_1.z.string().max(32)
}).superRefine(function (val, ctx) {
    if (val.passwordOne !== val.passwordTwo) {
        ctx.addIssue({
            code: zod_1.z.ZodIssueCode.custom,
            message: 'Passwords don\'t match',
            path: ['passwordOne', 'passwordTwo']
        });
    }
});
exports.profileSchema = zod_1.z.object({
    displayName: zod_1.z.string().min(3).max(32),
    bio: zod_1.z.string().max(1000),
    hidden: zod_1.z.boolean()
});
exports.avatarSchema = zod_1.z.object({
    id: zod_1.z.string().max(32).nullable(),
    vrcId: zod_1.z.string().min(1, 'Avatar ID required').max(100),
    label: zod_1.z.string().min(3).max(32),
    default: zod_1.z.boolean()
});
exports.layoutSchema = zod_1.z.object({
    id: zod_1.z.string().max(32).nullable(),
    label: zod_1.z.string().max(32),
    order: zod_1.z.number(),
    width: zod_1.z.nativeEnum(index_1.ContentBoxWidth),
    parentId: zod_1.z.string().max(32)
});
exports.buttonSchema = zod_1.z.object({
    id: zod_1.z.string().max(32).nullable(),
    label: zod_1.z.string().max(32).nullable(),
    path: zod_1.z.string().min(1, 'Path required').max(50),
    value: zod_1.z.string().min(1, 'Value required').max(5),
    valueAlt: zod_1.z.string().max(5).nullable(),
    valueType: zod_1.z.nativeEnum(index_1.ValueType),
    buttonType: zod_1.z.nativeEnum(index_1.ButtonType),
    imageOrientation: zod_1.z.nativeEnum(index_1.ButtonImageOrientation),
    order: zod_1.z.number(),
    controlParameterId: zod_1.z.string().max(32).nullable(),
    useCost: zod_1.z.number().optional(),
    parentId: zod_1.z.string().max(32)
}).superRefine(function (val, ctx) {
    // Check valueType
    if (val.buttonType === index_1.ButtonType.Slider && val.valueType === index_1.ValueType.Bool) {
        ctx.addIssue({
            code: zod_1.z.ZodIssueCode.custom,
            message: 'Slider can\'t be of type Bool',
            path: ['valueType']
        });
    }
    // Check value requirement
    if ((val.buttonType === index_1.ButtonType.Slider || val.buttonType === index_1.ButtonType.Toggle) && (!val.valueAlt || val.valueAlt === '')) {
        ctx.addIssue({
            code: zod_1.z.ZodIssueCode.custom,
            message: 'Secondary value required for slider or toggle button',
            path: ['valueAlt']
        });
    }
    // Check value type
    switch (val.valueType) {
        case index_1.ValueType.Bool:
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
        case index_1.ValueType.Float:
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
        case index_1.ValueType.Int:
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
exports.parametersSchema = zod_1.z.object({
    avatarId: zod_1.z.string().min(1).max(32),
    parameters: zod_1.z.array(zod_1.z.object({
        id: zod_1.z.string().max(32).nullable(),
        label: zod_1.z.string().min(3).max(16),
        path: zod_1.z.string().min(1, 'Path required').max(50),
        valueType: zod_1.z.nativeEnum(index_1.ValueType),
    })).max(16).optional()
});
exports.controlParametersSchema = zod_1.z.object({
    avatarId: zod_1.z.string().min(1).max(32),
    controlParameters: zod_1.z.array(zod_1.z.object({
        id: zod_1.z.string().max(32).nullable(),
        label: zod_1.z.string().min(3).max(16),
        role: zod_1.z.nativeEnum(index_1.ParameterRole),
        path: zod_1.z.string().min(1, 'Path required').max(50),
        valuePrimary: zod_1.z.string().min(1, 'Value required').max(5),
        valueSecondary: zod_1.z.string().min(1, 'Value required').max(5).nullable(),
        valueType: zod_1.z.nativeEnum(index_1.ValueType),
    })).max(8).optional()
}).superRefine(function (val, ctx) {
    var _a, _b, _c;
    if ((_a = val.controlParameters) === null || _a === void 0 ? void 0 : _a.length) {
        if ((((_b = val.controlParameters.filter(function (cp) { return cp.role === index_1.ParameterRole.HP; })) === null || _b === void 0 ? void 0 : _b.length) || 0) > 1) {
            ctx.addIssue({
                code: zod_1.z.ZodIssueCode.custom,
                message: 'Only one parameter with HP role is allowed',
                path: ["controlParameters"]
            });
        }
        if ((((_c = val.controlParameters.filter(function (cp) { return cp.role === index_1.ParameterRole.UseCost; })) === null || _c === void 0 ? void 0 : _c.length) || 0) > 1) {
            ctx.addIssue({
                code: zod_1.z.ZodIssueCode.custom,
                message: 'Only one parameter with Use cost role is allowed',
                path: ["controlParameters"]
            });
        }
        for (var i = 0; i < val.controlParameters.length; i++) {
            if (val.controlParameters[i].role === index_1.ParameterRole.Callback) {
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
                    case index_1.ValueType.Bool:
                        if (val.controlParameters[i].valuePrimary !== 'true' && val.controlParameters[i].valuePrimary !== 'false') {
                            ctx.addIssue({
                                code: zod_1.z.ZodIssueCode.custom,
                                message: 'Invalid Bool (true or false)',
                                path: ["controlParameters.".concat(i, ".valuePrimary")]
                            });
                        }
                        break;
                    case index_1.ValueType.Int:
                        if (!Number.isInteger(Number(val.controlParameters[i].valuePrimary))) {
                            ctx.addIssue({
                                code: zod_1.z.ZodIssueCode.custom,
                                message: 'Invalid Int number',
                                path: ["controlParameters.".concat(i, ".valuePrimary")]
                            });
                        }
                        break;
                    case index_1.ValueType.Float:
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
                if (val.controlParameters[i].valueType !== index_1.ValueType.Int) {
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
