"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PresetParameterSchema = void 0;
const zod_1 = require("zod");
const shared_1 = require("../shared");
exports.PresetParameterSchema = zod_1.z.object({
    path: shared_1.parameterPathSchema,
    value: shared_1.parameterValueObjectSchema,
});
