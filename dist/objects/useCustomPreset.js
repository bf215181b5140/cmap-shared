"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UseCustomPresetSchema = void 0;
const zod_1 = require("zod");
const shared_1 = require("../primitives/shared");
const parameter_1 = require("./parameter");
exports.UseCustomPresetSchema = zod_1.z.object({
    layoutId: shared_1.idSchema,
    parameters: zod_1.z.array(parameter_1.ParameterSchema).max(100),
});
