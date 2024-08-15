"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsedButtonSchema = void 0;
const zod_1 = require("zod");
const shared_1 = require("../shared");
exports.UsedButtonSchema = zod_1.z.object({
    buttonId: shared_1.IdSchema,
    value: zod_1.z.string(),
    // value: parameterValueObjectSchema,
});
