"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsedAvatarButtonSchema = void 0;
const zod_1 = require("zod");
const parameter_1 = require("../primitives/parameter");
exports.UsedAvatarButtonSchema = zod_1.z.object({
    value: parameter_1.parameterValueSimpleSchema,
});
