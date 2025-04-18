"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UseCustomPresetSchema = void 0;
const zod_1 = require("zod");
const parameter_1 = require("../primitives/parameter");
const shared_1 = require("../primitives/shared");
exports.UseCustomPresetSchema = zod_1.z.object({
    layoutId: shared_1.idSchema,
    parameters: zod_1.z.array(parameter_1.parameterValueSimpleSchema).max(50),
});
