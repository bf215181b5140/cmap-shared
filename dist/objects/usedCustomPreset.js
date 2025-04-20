"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsedCustomPresetSchema = void 0;
const zod_1 = require("zod");
const parameter_1 = require("./parameter");
exports.UsedCustomPresetSchema = zod_1.z.object({
    avatarIds: zod_1.z.array(zod_1.z.string()),
    parameters: zod_1.z.array(parameter_1.ParameterSchema).max(100),
});
