"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParameterButtonSchema = void 0;
const zod_1 = require("zod");
const parameterButtonType_1 = require("../enums/parameterButtonType");
const visibilityParameter_1 = require("./visibilityParameter");
const callbackParameter_1 = require("./callbackParameter");
const parameter_1 = require("../primitives/parameter");
const baseButton_1 = require("./baseButton");
exports.ParameterButtonSchema = baseButton_1.BaseButtonSchema.extend({
    path: zod_1.z.string(),
    value: parameter_1.parameterValueSimpleSchema,
    valueAlt: parameter_1.parameterValueSimpleSchema.nullable(),
    buttonType: parameterButtonType_1.ParameterButtonTypeSchema,
    useCost: zod_1.z.number().nullable(),
    callbackParameters: zod_1.z.array(callbackParameter_1.CallbackParameterSchema),
    visibilityParameters: zod_1.z.array(visibilityParameter_1.VisibilityParameterSchema),
});
