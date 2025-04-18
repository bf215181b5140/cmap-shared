"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomPresetsFormSchema = void 0;
const zod_1 = require("zod");
const shared_1 = require("../../../primitives/shared");
const parameter_1 = require("../../../primitives/parameter");
exports.CustomPresetsFormSchema = zod_1.z.object({
    id: shared_1.idSchema,
    customPresetsEnabled: zod_1.z.boolean(),
    customPresetsWhitelist: zod_1.z.array(parameter_1.parameterPathSchema),
    customPresetsBlacklist: zod_1.z.array(parameter_1.parameterPathSchema),
});
