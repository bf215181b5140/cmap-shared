"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientStateParamSchema = exports.ClientStateParamsSchema = void 0;
const zod_1 = require("zod");
const shared_1 = require("../shared");
exports.ClientStateParamsSchema = zod_1.z.array(zod_1.z.tuple([
    shared_1.parameterSchema,
    zod_1.z.union([zod_1.z.string(), zod_1.z.number(), zod_1.z.boolean()]),
]));
exports.ClientStateParamSchema = zod_1.z.object({
    parameter: shared_1.parameterSchema,
    value: shared_1.parameterValueOrAvtrSchema,
});
