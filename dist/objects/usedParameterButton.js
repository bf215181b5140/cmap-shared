"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsedParameterButtonSchema = void 0;
const zod_1 = require("zod");
const callbackParameter_1 = require("./callbackParameter");
const parameter_1 = require("../primitives/parameter");
exports.UsedParameterButtonSchema = zod_1.z.object({
    path: zod_1.z.string(),
    value: parameter_1.parameterValueSimpleSchema,
    callbackParameters: zod_1.z.array(callbackParameter_1.CallbackParameterSchema),
    exp: zod_1.z.object({
        path: zod_1.z.string(),
        value: zod_1.z.number(),
    }).optional()
});
