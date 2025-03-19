"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VrcParameterSchema = void 0;
const zod_1 = require("zod");
const parameter_1 = require("../primitives/parameter");
exports.VrcParameterSchema = zod_1.z.object({
    path: zod_1.z.string(),
    value: parameter_1.parameterValueOrAvatarSimpleSchema,
});
