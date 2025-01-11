"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsePresetSchema = void 0;
const zod_1 = require("zod");
const shared_1 = require("../primitives/shared");
exports.UsePresetSchema = zod_1.z.object({
    id: shared_1.idSchema,
});
