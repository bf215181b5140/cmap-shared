"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PresetButtonSchema = void 0;
const zod_1 = require("zod");
const visibilityParameter_1 = require("./visibilityParameter");
const callbackParameter_1 = require("./callbackParameter");
const parameter_1 = require("./parameter");
const baseButton_1 = require("./baseButton");
exports.PresetButtonSchema = baseButton_1.BaseButtonSchema.extend({
    parameters: zod_1.z.array(parameter_1.ParameterSchema),
    useCost: zod_1.z.number().nullable(),
    callbackParameters: zod_1.z.array(callbackParameter_1.CallbackParameterSchema),
    visibilityParameters: zod_1.z.array(visibilityParameter_1.VisibilityParameterSchema),
});
