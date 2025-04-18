"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsedCustomPresetSchema = void 0;
const zod_1 = require("zod");
const parameter_1 = require("../primitives/parameter");
exports.UsedCustomPresetSchema = zod_1.z.object({
    avatarId: parameter_1.parameterValueAvatarIdSchema,
    parameters: zod_1.z.array(parameter_1.parameterValueSimpleSchema).max(50),
});
