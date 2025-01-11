"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UseButtonSchema = void 0;
const zod_1 = require("zod");
const shared_1 = require("../primitives/shared");
const parameter_1 = require("../primitives/parameter");
exports.UseButtonSchema = zod_1.z.object({
    id: shared_1.idSchema,
    value: parameter_1.parameterValueSchema,
});
